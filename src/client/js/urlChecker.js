function checkURL(urlString) {
  console.log("::: Running checkURL :::", urlString);
  let url = urlString;
  try {
    url = new URL(url);
  } catch (e) {
    return false;
  }

  return url.protocol === "https:" || url.protocol === "http:";
}

export { checkURL };
