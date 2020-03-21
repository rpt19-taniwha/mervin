
var productParser = function(pathname) {
  pathname = pathname.slice(9);
  if (pathname[pathname.length-1] === '/') {
    return pathname.slice(-1);
  }
  return Number(pathname);
}

export default productParser;