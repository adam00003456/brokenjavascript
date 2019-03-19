function externalLibrary (date) {
  throw new Error(`externalLibrary method broken: ${date}`);
}

externalLibrary(Date.now());
