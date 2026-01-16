console.log("Javascript connection");
import http from "http";
// console.log(http);

http.createServer((req, res) => {
    res.write("Hello Would")
    res.end()
})
    .listen(9002, () => {
        console.log("Port Number 9002");

    })
// ================================


// import fs from "fs"
// sync
// fs.writeFileSync("./test.txt", "Muhammad Farooq")

// ================================
// asycn
// Add Data
// fs.writeFile("./test.txt", "Hello Would", (err) => {
//     if (err) throw err;
//     console.log("Data Adding");
// })
// ================================

// ================================
// asycn
// read Data
// fs.readFile("./test.txt", (err, data) => {
//     if (err) throw err
//     console.log(data.toString());
// })
// ================================

// ================================
// asycn
// Delete Data
// fs.unlink("./test.txt", (err) => {
//     if (err) throw err
//     console.log("Delete Sucessfully");
// })
// ================================

// ================================
// async
// update Data
// fs.appendFile("./test.txt", "Hello NodeJs\r\n", (err) => {
//     if (err) throw err;
//     console.log("Updated Successfully");
// });
// ================================

// ================================

// import and export
// import { add } from "./calc.js"
// console.log(`Adding ${add(2, 2)}`);
