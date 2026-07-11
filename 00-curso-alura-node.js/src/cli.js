import fs from "fs";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import { countWords } from "./index.js";
import { assemblesOutputFile } from "./helpers.js";
import handleErrors from "./errors/errorFunctions.js";

const program = new Command();

program
  .version("0.0.1")
  .option("-t, --text <string>", "path of the text to be processed")
  .option(
    "-d, --destiny <string>",
    "path to the folder where results file will be saved",
  )
  .action((options) => {
    const { text, destiny } = options;

    if (!text || !destiny) {
      console.log(
        chalk.red("\nError: Please, insert a origin and destiny path"),
      );

      program.help();
      return;
    }

    const pathText = path.resolve(text);
    const pathDestiny = path.resolve(destiny);

    try {
      processFile(pathText, pathDestiny);

      console.log(chalk.green("\nFile path processed succefully!"));
    } catch (error) {
      console.log(
        chalk.red(
          "\nAn error ocurred during processing: ",
          handleErrors(error),
        ),
      );
    }
  });

program.parse();

function processFile(text, destiny) {
  fs.readFile(text, "utf-8", (err, text) => {
    try {
      if (err) throw err;

      const result = countWords(text);
      createAndSaveFile(result, destiny);
    } catch (err) {
      console.error(handleErrors(err));
    }
  });
}

// ? Forma mais simplificada de transformar um código em operação assíncrona, apenas adicionando async e await

async function createAndSaveFile(listWords, destiny) {
  const newFile = `${destiny}/result.txt`;
  const textWords = assemblesOutputFile(listWords);

  try {
    await fs.promises.writeFile(newFile, textWords);
    console.log(chalk.blue("\nFile created"));
  } catch (error) {
    throw erro;
  }
}

// ? Outra forma de resolver sem utilizar async & await (sendo normal ter esses casos também)

// function createAndSaveFile(listWords) {
//     const newFile = `${address}/result.txt`
//     const textWords = JSON.stringify(listWords)

//     fs.promises.writeFile(newFile, textWords)
//     .then(() => {
// ? processamento feito com o resultado da promessa
//         console.log("\n- File created");
//     })
//     .catch((erro) => {
//         throw erro
//     })
//     .finally(() => console.log("\n- Operation finished"))
// }
