/**
 * Функция перемешивание массива "Тасованием Фишера-Йетса".
 * Функция не возвращает новый массив, а изменяет исходный.
 * Для сохранения оригинала, нужно предварительно сохранить его копию.
 * @param array - входящий массив
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export { shuffleArray };
