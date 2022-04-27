export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}

export function isCaseInSensetiveEqual(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

export function doesIncludeCaseInsensetiveSubString(parentString, searchString) {
  return parentString.toLowerCase().includes(searchString.toLowerCase());
}
