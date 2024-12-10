// complete the given function

function palindrome(str){
	    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

const reverse = str.split("").reverse().join("")
	return reverse === cleanedStr 
}
module.exports = palindrome
