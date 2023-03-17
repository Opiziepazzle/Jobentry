const express = require('express')
const app = express()
const PORT = process.env.PORT || 5333
const fs = require('fs')
const path = require('path')


 
const { engine } = require('express-handlebars');
 app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main" }));
 app.set('view engine', 'hbs');
 
 app.use(express.static(path.join(__dirname, 'public')))

 const myjobs = fs.readFileSync(path.join(__dirname,'jobs.json'), 'utf-8') //reading the file just once
const changeJobs = JSON.parse(myjobs) //changing it from json to javascript format

const mymessages = fs.readFileSync(path.join(__dirname,'messages.json'), 'utf-8') //reading the file just once
const changeMessages = JSON.parse(mymessages) //changing it from json to javascript format






 app.get('/', (req, res) => {
    res.render('datas/index',{
     styles:'style.css',
     main: 'main.js'

})
})

 app.get('/about', (req, res) => {
    res.render('datas/about', {
        styles:'style.css',
        main: 'main.js'

     
 })
  })

app.get('/latest-job', (req, res) => {
    res.render('datas/latest-jobs', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/contact', (req, res) => {
    res.render('datas/contact', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/job-detail', (req, res) => {
    res.render('datas/job-detail', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/category', (req, res) => {
    res.render('datas/category', {
    styles:'style.css',
    main: 'main.js'

 })
})


app.get('/admin-messages', (req, res) => {
    res.render('datas/admin-messages', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/admin-applications', (req, res) => {
    res.render('datas/admin-applications', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/admin-jobs', (req, res) => {
    res.render('datas/admin-jobs', {
    styles:'style.css',
    main: 'main.js'

 })
})

app.get('/404', (req, res) => {
    res.render('datas/404', {
    styles:'style.css',
    main: 'main.js'

 })
})





// app.get('/langs', (req, res) => {
//     res.render('datas/langs', {
//      styles:'show.css',
//      lang : langs,
     
//  })
// })


app.listen(PORT, () => {
    console.log(`Server started running on port ${PORT}`)})
