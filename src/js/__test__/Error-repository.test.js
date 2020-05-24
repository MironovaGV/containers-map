import ErrorRepository from '../Error-repository';

test('Вывод текста ошибки', () => {
  const errorText = new ErrorRepository();
  expect(errorText.translate(400)).toBe('плохой, неверный запрос');
});

test('Ошибка отсутствует в списке', () => {
  const errorText = new ErrorRepository();
  expect(errorText.translate(11)).toBe('Unknown error');
});
