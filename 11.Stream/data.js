import fs from 'fs'

for(let i=0;i<100;i++){
    fs.writeFileSync('./data.txt',`${i}\n`,{flag:'a'})
}