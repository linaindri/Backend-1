const express = require('express');
const app = express();
const port = 5000

app.get('/',(req,res) =>{
    res.send('Hello Express')
})

app.post('/',(req,res) =>{
    res.send('belajar express')
})
app.put('/',(req,res) =>{
    res.send('backend express')
})
app.delete('/',(req,res) =>{
    res.send('data backend telah dihapus ')
})


app.listen(port,()=>{
    console.log(`server berjalan pada localhost:${port}`)
});