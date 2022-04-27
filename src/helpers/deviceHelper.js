const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const devicesMediaQueries = {
  isMobile: `(min-width: ${sizes.mobileS})`,
  isTablet: `(min-width: ${sizes.tablet})`,
  isDesktop: `(min-width: ${sizes.desktop})`,
  whenMobile: ` @media (max-width: 425px)`,
  whenTablet: `@media (min-width: 426px) and (max-width: 1023px)`
};
