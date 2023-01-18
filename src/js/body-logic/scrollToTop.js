import { gallery, scrollToTop } from '../refs';

class Scroll {
  constructor() {}

  scrollBy() {
    const { height: baseHeightCard } = gallery.getBoundingClientRect();

    return window.scrollBy({
      top: baseHeightCard * 2,
      behavior: 'smooth',
    });
  }

  useScrollToTop() {
    const start = gallery;

    return window.scrollTo({ top: start, behavior: 'smooth' });
  }

  showScroll() {
    scrollToTop.classList.remove('hidden');
  }

  hideScroll() {
    scrollToTop.classList.add('hidden');
  }

  handleBtnScroll() {
    const RATIO = 0.5;

    document.documentElement.scrollTop > RATIO
      ? this.showScroll()
      : this.hideScroll();
  }
}

const scroll = new Scroll();

scrollToTop.addEventListener('click', () => {
  scroll.useScrollToTop();
});

document.addEventListener('scroll', () => {
  scroll.handleBtnScroll();
});
