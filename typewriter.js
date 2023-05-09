const sentence = "hello there from Lighthouse Labs";
let delay = 0;
for (const char in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[char]);
  }, delay);
  delay += 50;
}
