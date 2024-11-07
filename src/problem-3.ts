// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// // Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// // Sample Output:
// 2;

{

    // update code
    function countWordOccurrences(sentence: string, word: string): number {
        const lowercaseWord = word.toLowerCase() //  word value is converted to lowercase
        // First I convert the sentence to lowercase then I split it with spaces
        const splitSentence = sentence.toLowerCase().split(' ') 
        //  then i compare with split CSSMathValue,if word includes in sentence this value will be return 
        const filterUniqueWord = splitSentence.filter(singleWord => singleWord === lowercaseWord)

        return filterUniqueWord.length

    }

    console.log(countWordOccurrences("I love TypeScript", "Typescript"));
    
    // previous code
    // function countWordOccurrences(sentence: string, word: string): number {
    //     const lowercaseWord = word.toLowerCase() //  word value is converted to lowercase
    //     // First I convert the sentence to lowercase then I split it with spaces
    //     const splitSentence = sentence.toLowerCase().split(' ') 
    //     //  then i compare with split CSSMathValue,if word includes in sentence this value will be return 
    //     const filterUniqueWord = splitSentence.filter(singleWord => singleWord.includes(lowercaseWord))

    //     return filterUniqueWord.length

    // }


    // console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "Typescript"));



}