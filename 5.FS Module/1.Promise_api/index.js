import * as fs from "fs/promises"

// create and write files

try {
    // await fs.writeFile("Readme.md","Hello node.js")
    // const data = await fs.readFile("Readme.md",'utf-8')
    // console.log(data)
    // await fs.appendFile("Readme.md", 'learning back-end')
    // await fs.copyFile('Readme.md','info.txt')

    const info = await fs.stat('info.txt')
    console.log(info.isDirectory())
    console.log(info.isFile())

}catch(error){
    console.log(error)
}