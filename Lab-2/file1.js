import { writeFile, appendFile, readfile } from "fs/promises";

// await writeFile("hello.txt", "JS is easy")

 await appendFile("hello.txt", "\nFS is much easy than others");
 await writeFile("hello.txt", "\nAditya Mishra");

// const content = await readFile("hello.txt", "utf-8");
// console.log(content);
