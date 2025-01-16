//STEP 1
//let aToZ = str => str.split('').sort().join('') 

//console.log(aToZ('webmaster'))
//STEP 2
//let capFirstLetter = str => str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ') 

//console.log(capFirstLetter('the quick brown fox'))
//STEP 3
//let numVowels = str => (str.match(/[aeiou]/gi) || []).length 

//console.log(numVowels('The quick brown fox'))
//STEP 4
//let ranGenString = length => [...Array(length)].map(() => 'ABCDEFGHstuvwxyz01234567'.charAt(Math.random() * 75)).join('') 

//console.log(ranGenString(8))
//STEP 5
//let longestCountryName = countries => countries.reduce((longest, country) => country.length > longest.length ? country : longest, '') 

//console.log(longestCountryName(['Greece', 'Sweden', 'New Zealand', 'Argentina', 'United Kingdom']))