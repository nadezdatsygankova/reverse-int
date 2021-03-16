module.exports = function reverse(n) {
    let string = n.toString();
    let letters = string.split('');
    let rever = letters.reverse();
    let newstring = rever.join('');


    return (
        parseFloat(newstring))

}
