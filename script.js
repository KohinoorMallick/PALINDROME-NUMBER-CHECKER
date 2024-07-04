function checkPalindrome() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');

    const formattedText = inputText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = formattedText.split('').reverse().join('');

    if (formattedText === reversedText) {
        resultElement.textContent = `"${inputText}" is a palindrome!`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputText}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
}
