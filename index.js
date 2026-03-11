import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 8080

app.get('/', (req, res) => {
   return  res.json({
        message: 'welcome to git actions demo'
    })
} )  

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})