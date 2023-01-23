const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req,res) => {
    let num1 = req.body.n1
    let num2 = req.body.n2

    res.send(`Your result is ${(+num1)+(+num2)}`)
})

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', (req,res) => {
    let weight = parseFloat(req.body.weight)
    let height = parseFloat(req.body.height)

    let bmi = weight / (height * height)

    res.send(`Your BMI is ${bmi}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

