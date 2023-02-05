class BetterStringLib {
  reverse(str) {
    return str.split("").reverse().join("");
  }

  equal(str1, str2) {
    return str1.normalize() === str2.normalize();
  }
}

// export { BetterStringLib };
const BS = new BetterStringLib();

console.log(BS.reverse("ab"));
console.log(BS.reverse("foo 𝌆 bar"));
console.log(BS.reverse("mañana mañana"));

console.log(BS.equal("a", "a"));
console.log(BS.equal("mañana", "mañana"));
