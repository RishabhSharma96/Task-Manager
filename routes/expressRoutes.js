const express = require('express')
const schema = require('../schema/mongooseSchema')
const session = require('express-session')

const router = express.Router()

router.get("/", (req, res) => {
    schema.find().exec((err, result) => {
        if (err) {
            res.send(err.messsage)
        }
        else {
            res.render('index', { data: result })
            // console.log(result);
        }
    })
})

router.get("/add_task", (req, res) => {
    res.render('add_task')
})

router.post('/add_task', (req, res) => {
    const task = new schema({
        Name: req.body.name,
        TaskName: req.body.taskname,
        TaskDescription: req.body.taskabout
    })
    task.save().then(() => {
        // req.session.mess = req.body.name
        res.status(201).redirect('/')
    }).catch((err) => {
        console.log(err.message);
    })
})

router.get('/edit/:id', (req, res) => {
    let id = req.params.id
    schema.findById(id, (err, resultById) => {
        if (err) {
            res.send(err.messsage)
        }
        else {
            res.render('edit_task', { data: resultById })
        }
    })
})

router.post('/edit/:id', async (req, res) => {
    let id = req.params.id
    try {

        if (req.body.status == "true") {
            var doneOrNot = true;
        }
        else {
            var doneOrNot = false;
        }

        await schema.findOneAndUpdate({ _id: id }, {
            Name: req.body.name,
            TaskName: req.body.taskname,
            TaskDescription: req.body.taskabout,
            IsCompleted: doneOrNot
        })
        res.redirect('/')
    }
    catch (err) {
        console.log(err.message);
    }
})

router.get('/delete/:id', async (req, res) => {
    let id = req.params.id
    try {
        await schema.findOneAndDelete({ _id: id })
        res.redirect('/')
    }
    catch (err) {
        console.log(err.message);
    }

})


module.exports = router