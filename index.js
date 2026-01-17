console.log("Javascript connection");
import http from "http";
import fs from "fs";

// // console.log(http);

const result = http.createServer((req, res) => {
    console.log("Request Done");


    res.setHeader("Content-Type", "text/html");


    switch (req.url) {
        case "/":
            //         res.end(`<h1>Welcome to Home Page</h1>
            // <a href="/about">About</a>`);
            fs.readFile("./index.html", (err, data) => {
                if (err) throw err
                console.log("Data Done");

                res.end(data)
            })
            break;

        case "/about":
            //         res.end(`<h1>Welcome to About Page</h1>
            // <a href="/">Home</a>`);
            fs.readFile("./about.html", (err, data) => {
                if (err) throw err;
                console.log("About Data Done");
                res.end(data)
            })
            break;

        default:
            // res.end("<h1>Page Not Found</h1>");

            fs.readFile("./notfound.html", (err, data) => {
                if (err) throw err;
                res.end(data)
            })

    }



    // if (req.url === "/") {
    //     res.write("WellCome to Home Page")
    //     res.end()
    // } else if (req.url === "/about") {
    //     res.write("WellCome to About Page")
    //     res.end()
    // } else {
    //     res.write("Page Not Found")
    //     res.end()
    // }

});

let PORT = 3000;

result.listen(PORT, () => {
    console.log(`Server Hosting Link in http://localhost:${PORT}`);

})


// // ================================


// import fs from "fs"

// =================================

// Folder Create and Folder Delete in fs method


// fs.mkdir("views", (err) => {
//     if (err) throw err
// })

// fs.rmdir("views", (err) => {
//     if (err) throw err
// })

// =================================


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
