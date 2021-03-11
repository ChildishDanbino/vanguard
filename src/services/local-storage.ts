class LocalStorageService {
  static hasItem(key: string) {
    return Boolean(localStorage.getItem(key));
  }

  static getItem(key: string) {
    return localStorage.getItem(key);
  }

  static setItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  static clearStorage() {
    return localStorage.clear();
  }
}

export default LocalStorageService;
