export function getStorage(lang, eng, rus) {
  if (!lang) {
    localStorage.setItem('lang', JSON.stringify(eng));
  } else {
    localStorage.setItem('lang', JSON.stringify(rus));
  }
  const storage = JSON.parse(localStorage.getItem('lang'));
  return storage;
}
