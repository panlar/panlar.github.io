const d = document;
const distance = '50px';

const $homeName = d.querySelector('.home-name'),
  $homeProfile = d.querySelector('.home-profile'),
  $aboutImg = d.querySelector('.about-img'),
  $aboutH3 = d.querySelector('.about-resume h3'),
  $aboutH2 = d.querySelector('.about-resume h2'),
  $aboutArticle = d.querySelector('.about-resume article'),
  $aboutMenu = d.querySelector('.about-resume menu'),
  $portfolioCards = d.querySelectorAll('.portfolio-card'),
  $blogCards = d.querySelectorAll('.blog-card'),
  $scrollTop = d.querySelector('.btn-top'),
  $btnNav = d.querySelector('.btn-menu'),
  $nav = d.querySelector('nav');

const scrollSpy = () => {
  const elementsToSpy = document.querySelectorAll('.scroll-spy');

  const indicator = (entries) => {
    entries.forEach((entry) => {
      const $links = document.querySelectorAll(`.a-scroll-spy`);
      const $link = document.querySelector(
        `a[href="#${entry.target.dataset.id}"]`
      );
      if (entry.isIntersecting) {
        $links.forEach((link) => link.classList.remove('active'));
        if ($link) $link.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(indicator);

  elementsToSpy.forEach((elem) => observer.observe(elem));
};

d.addEventListener('DOMContentLoaded', () => {
  lazyLoading();
  scrollSpy();

  scrollReveal($homeName, { delay: '0.5s', repeat: false, distance });
  scrollReveal($homeProfile, { delay: '1s', repeat: false, distance });
  scrollReveal($aboutImg, { scale: 1, repeat: false, distance });
  scrollReveal($aboutH3, {
    origin: 'right',
    scale: 1,
    repeat: false,
    distance,
  });
  scrollReveal($aboutH2, {
    origin: 'right',
    scale: 1,
    repeat: false,
    distance,
  });
  scrollReveal($aboutArticle, { scale: 1, repeat: false, distance });
  scrollReveal($aboutMenu, { scale: 1, repeat: false, distance });
  $portfolioCards.forEach(($card, i) => {
    const options = {
      origin: (i + 1) % 2 === 0 ? 'right' : 'left',
      scale: 1,
      distance,
    };

    scrollReveal($card, options);
  });
  $blogCards.forEach(($card) => scrollReveal($card, { scale: 1, distance }));
});

$scrollTop.addEventListener('click', () => window.scrollTo({ top: 0 }));

$btnNav.addEventListener('click', () => $nav.classList.toggle('active'));

$nav
  .querySelectorAll('a')
  .forEach((a) =>
    a.addEventListener('click', () => $nav.classList.remove('active'))
  );

window.addEventListener('scroll', () =>
  $scrollTop.classList.toggle('active', window.scrollY > 100)
);
