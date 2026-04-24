export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const hardRefreshAndEmptyCache = async () => {
  if ("caches" in window) {
    try {
      const keys = await caches.keys();
      keys.forEach((key) => {
        // Delete all the cache files
        caches.delete(key);
      });
    } catch (error) {
      console.log(error);
    }
  }
  window.location.reload();
};
export const getAbbreviation = (inputString) => {
  const words = inputString.trim().split(/\s+/);
  const abbreviation = words.map((word) => word[0].toUpperCase()).join("");
  return abbreviation;
};
export const isJSONString = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const getTitleCaseSentence = (str) => {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};
export const getPageTitle = (path) => {
  if (!path) {
    return "";
  }
  const pathname = path
    .split("/")
    .filter((arr) => !!arr)
    .toString();

  if (!pathname) return "Login";

  return getTitleCaseSentence(pathname);
};
