//STEP 1
//let userName = prompt('Welcome! Please enter your name.').trim()

//let nameLength = userName.length

//alert(`Nice to meet you ${userName}! Your name is made up of  ${nameLength} letters combined. Cool!`)

//STEP 2
//let userName = prompt('Please enter your name.')

//let charNum = parseInt(prompt('Enter any number within the legnth of your name to return the letter at that position'))

//if (charNum >= 0 && charNum <= userName.length) {
//    alert( `The letter at index ${charNum} in your name is ${userName.charAt(charNum)} `)
//}else{
//    alert('The number you entered is larger than your name length, please enter another number and try again.')
//}

//STEP 3
//let firstName = prompt('Hello! Please enter your first name.')

//let lastName = prompt( 'and your last name as well.')

//let fullName = firstName.concat(` ${lastName} `)

//alert(`Your name is: ${fullName}! It's a pleasure to meet you ${firstName}!`)

//STEP 4
//let phrase = 'The quick brown fox jumps over the lazy dog.'

//alert('The quick brown fox jumps over the lazy dog.')

//alert(`The word fox is at at the index of ${phrase.indexOf('fox')}`)

//STEP 5
//let phrase = 'The quick brown fox jumps over the lazy fox.'

//alert('Our sentence is: The quick brown fox jumps over the lazy fox.')

//alert(`The last instance of fox is at index ${phrase.lastIndexOf('fox')} in the sentence.`)

//STEP 6
//let phrase = 'The quick brown fox jumped over the lazy dog.'

//let fullName = prompt('Please enter your first and last name.')

//alert(phrase.replace('the lazy dog', fullName))

//STEP 7
//let phrase = 'The quick brown fox jumps over the lazy dog.'

//alert('Here\'s the sentence: The quick brown fox jumps over the lazy dog.')

//let word = prompt('Enter a word to search for in the phrase.')

//let wordIndex = phrase.indexOf(word)

//if(wordIndex  !== -1){
//    alert(`The word ${word} was found at position ${wordIndex} in the sentence.`)
//}else{
//    alert(`The word ${word} was not found in the sentece.`)
//}

//STEP 8
//let old_string = 'The quick brown fox jumps over the lazy dog.'

//let new_string = old_string.slice(31, 47)

//alert(new_string.toUpperCase())

//STEP 9
//let upperPhrase = ' THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.  '

//let lowerPhrase = upperPhrase.toLowerCase().trim()

//alert(lowerPhrase)

//STEP 10
//let phrase = 'the quick brown fox jumps over the lazy dog.'

//let upperPhrase = phrase.replace(/^./, phrase[0].toUpperCase())

//alert(upperPhrase)
