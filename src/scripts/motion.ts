// Shared scroll motion for the whole site. Everything is opt-in via data attributes:
//
//   data-reveal              fade/slide in once when scrolled into view (data-reveal="draw" draws a line left→right)
//                            optional style="--delay: 120ms" to stagger
//   data-count="150"         counts up from 0 when revealed (keep the final text in the HTML; data-prefix="~" optional)
//   data-read-along          words light up one by one as the block scrolls past the reading line
//   data-scroll              sets --p on the element: 0 as it enters the bottom of the screen → 1 as it leaves the top
//                            (used by .fx-* classes in global.css)
//   data-widen               sets --k: 1 (inset, rounded) → 0 (edge to edge) as a panel scrolls up to the top
//
// With reduced motion (no `motion` class on <html>), none of this runs and everything shows in its final state.

const root = document.documentElement;
const motionOn = root.classList.contains('motion');
const clamp = (value: number, min = 0, max = 1) => Math.min(Math.max(value, min), max);

// ---------- Count-up ----------
const countUp = (el: HTMLElement) => {
	const target = Number(el.dataset.count);
	const prefix = el.dataset.prefix ?? '';
	const duration = 1400;
	const start = performance.now();
	const tick = (now: number) => {
		const t = clamp((now - start) / duration);
		const eased = 1 - Math.pow(1 - t, 3);
		el.textContent = `${prefix}${Math.round(target * eased)}`;
		if (t < 1) requestAnimationFrame(tick);
	};
	requestAnimationFrame(tick);
};

// ---------- Reveal (+ count) ----------
const revealEls = [...document.querySelectorAll<HTMLElement>('[data-reveal], [data-count]')];

if (!motionOn || !('IntersectionObserver' in window)) {
	revealEls.forEach((el) => el.setAttribute('data-revealed', ''));
} else {
	revealEls.forEach((el) => {
		if (el.dataset.count !== undefined) el.textContent = `${el.dataset.prefix ?? ''}0`;
	});
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				el.setAttribute('data-revealed', '');
				if (el.dataset.count !== undefined) countUp(el);
				observer.unobserve(el);
			}
		},
		{ rootMargin: '0px 0px -12% 0px' },
	);
	revealEls.forEach((el) => observer.observe(el));
}

// ---------- Read-along: wrap each word in a span ----------
type ReadAlong = { el: HTMLElement; words: HTMLElement[]; lit: number };
const readAlongs: ReadAlong[] = [];

if (motionOn) {
	document.querySelectorAll<HTMLElement>('[data-read-along]').forEach((el) => {
		const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
		const textNodes: Text[] = [];
		while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

		const words: HTMLElement[] = [];
		for (const node of textNodes) {
			const fragment = document.createDocumentFragment();
			for (const part of (node.textContent ?? '').split(/(\s+)/)) {
				if (!part) continue;
				if (/^\s+$/.test(part)) {
					fragment.append(part);
				} else {
					const span = document.createElement('span');
					span.className = 'ra-word';
					span.textContent = part;
					fragment.append(span);
					words.push(span);
				}
			}
			node.replaceWith(fragment);
		}
		readAlongs.push({ el, words, lit: 0 });
	});
}

// ---------- Scroll-linked values ----------
const scrollEls = [...document.querySelectorAll<HTMLElement>('[data-scroll]')];
const widenEls = [...document.querySelectorAll<HTMLElement>('[data-widen]')];

const update = () => {
	const vh = window.innerHeight;

	for (const el of scrollEls) {
		const rect = el.getBoundingClientRect();
		el.style.setProperty('--p', clamp((vh - rect.top) / (vh + rect.height)).toFixed(4));
	}

	for (const el of widenEls) {
		const top = el.getBoundingClientRect().top;
		const progress = clamp((vh - top) / vh);
		el.style.setProperty('--k', clamp((1 - progress) / 0.65).toFixed(3));
	}

	for (const item of readAlongs) {
		const rect = item.el.getBoundingClientRect();
		// Starts when the block's top reaches 80% down the screen; finishes as its bottom reaches the middle
		const progress = clamp((vh * 0.8 - rect.top) / (vh * 0.3 + rect.height));
		const lit = Math.round(progress * item.words.length);
		if (lit === item.lit) continue;
		const [from, to] = lit > item.lit ? [item.lit, lit] : [lit, item.lit];
		for (let i = from; i < to; i++) item.words[i].toggleAttribute('data-on', i < lit);
		item.lit = lit;
	}
};

if (motionOn) {
	let queued = false;
	const queue = () => {
		if (queued) return;
		queued = true;
		requestAnimationFrame(() => {
			queued = false;
			update();
		});
	};
	window.addEventListener('scroll', queue, { passive: true });
	window.addEventListener('resize', queue);
	update();
}
