function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
        // Reverse the word by splitting it into an array of characters, reversing, and joining back
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);

console.log(reversedSentence);
