export default class ErrorRepository {
  constructor() {
    this.error = new Map([
      [400, 'плохой, неверный запрос'],
      [404, 'не найдено'],
      [301, 'перемещено навсегда'],
      [200, 'хорошо'],
    ]);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }

    return 'Unknown error';
  }
}
