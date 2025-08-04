import chalk from "chalk";

console.log(
  chalk.blue("Hello Myra!")
);
console.log(
  chalk.yellow("Hello Ethan!")
);
console.log(
  chalk.green("Hello Aline!")
);
console.log(
  chalk.red("Hello Shalom!")
);

const users = ["Shafi", "Clara", "Mumu", "Fatma"]
console.log(
  chalk.red(users[0]),
  chalk.yellow(users[1]),
  chalk.blue(users[2]),
  chalk.green(users[3])
);