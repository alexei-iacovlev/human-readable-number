module.exports = function toReadable(number) {
	const numToStr = {
		str0: ['zero'],
		str1: ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
		str10: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		str20: ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		str100: ['hundred'],
		str1000: ['thousand'],
	}
	let result;
	if (!number || number === 0) result = numToStr.str0[0];
	if ((number > 0) && (number < 10)) result = numToStr.str1[number];
	if ((number > 9) && (number < 20)) result = numToStr.str10[number - 10];
	if ((number > 19) && (number < 100)) result = numToStr.str20[Math.floor(number / 10)] + ' ' + numToStr.str1[number % 10];
	if ((number > 99) && (number < 1000) && (number % 100 < 10)) result = numToStr.str1[Math.floor(number / 100)] + ' ' + numToStr.str100[0] + ' ' + numToStr.str1[number % 10];
	if ((number > 99) && (number < 1000) && (number % 100 > 9) && (number % 100 < 20)) result = numToStr.str1[Math.floor(number / 100)] + ' ' + numToStr.str100[0] + ' ' + numToStr.str10[number % 100 - 10];
	if ((number > 99) && (number < 1000) && (number % 100 > 19)) result = numToStr.str1[Math.floor(number / 100)] + ' ' + numToStr.str100[0] + ' ' + numToStr.str20[Math.floor(number / 10) % 10] + ' ' + numToStr.str1[number % 10];

	return result.trim();
}

