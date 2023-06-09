let array = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-  ", "\\   ", "|   "];

array.forEach((element, index) => {
  setTimeout(() => {
    process.stdout.write(`\r${element}`);
  }, 100 + index * 200);
});
