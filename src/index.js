let nums = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");


module.exports = function toReadable(number) {
    if (number < 20) {
        return nums[number];
    }

    let numeral = number % 10;

    if (number < 100) {
        return tens[~~(number / 10) - 2] + (numeral ? " " + nums[numeral] : "");
    } else if (number < 1000) {
        return nums[~~(number / 100)] + " hundred" + (number % 100 == 0 ? "" : " " + toReadable(number % 100));
    }  else {
        return toReadable(~~(number / 1000)) + " thousand" + (number % 1000 != 0 ? " " + toReadable(number % 1000) : "");
    }
    
}
