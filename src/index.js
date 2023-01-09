module.exports = function reverse (n) {

  let reverseN = Math.abs(n).toString().split("").reverse();
  while ( reverseN.length > 1 && reverseN[0] === "0") {
    reverseN.shift();
  }
  const result = reverseN.join("");
  return +result;
}
