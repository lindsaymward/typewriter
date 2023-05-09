const sentence = "hello there from Lighthouse Labs";
let delay = 0;
for (const char in sentence) {
  setTimeout(() => {
    if (char == (sentence.length - 1)) {
      process.stdout.write(sentence[char]);
      console.log();
    } else {
    process.stdout.write(sentence[char]);
    }
  }, delay);
  delay += 50;
}