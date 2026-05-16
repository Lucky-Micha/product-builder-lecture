const numbersDiv = document.getElementById('numbers');
const generateBtn = document.getElementById('generate');
const historyList = document.getElementById('history-list');

const colors = [
    '#ff758c', '#ff7eb3', '#ff8a7a', '#ff9e7a', '#ffa27a', '#ffac7a',
    '#ffb77a', '#ffc37a', '#ffd07a', '#ffdd7a', '#ffea7a', '#fff77a',
    '#d4f77a', '#b0f77a', '#8cf77a', '#68f77a', '#44f77a', '#20f77a',
    '#7af7a2', '#7af7c6', '#7af7ea', '#7ad4f7', '#7ab0f7', '#8c7af7',
    '#b07af7', '#d47af7', '#f77af7', '#f77ad4', '#f77ab0', '#f77a8c',
    '#f77a68', '#f77a44', '#f77a20', '#f79e20', '#f7b020', '#f7c320',
    '#f7d420', '#f7ea20', '#f7f720', '#eaf720', '#d4f720', '#b0f720',
    '#8cf720', '#68f720', '#44f720'
];

generateBtn.addEventListener('click', () => {
    const numbers = generateNumbers();
    displayNumbers(numbers);
    addHistory(numbers);
});

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers(numbers) {
    numbersDiv.innerHTML = '';
    numbers.forEach((number, index) => {
        setTimeout(() => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            numberDiv.style.backgroundColor = colors[number - 1];
            numberDiv.style.transform = 'scale(0)';
            numbersDiv.appendChild(numberDiv);
            setTimeout(() => {
                numberDiv.style.transform = 'scale(1)';
            }, 50);
        }, index * 100);
    });
}

function addHistory(numbers) {
    const listItem = document.createElement('li');
    const numbersString = numbers.join(', ');
    listItem.textContent = numbersString;
    historyList.prepend(listItem);
}