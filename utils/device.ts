const isMobile = (userAgent: string): boolean =>
  /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);

export { isMobile };
