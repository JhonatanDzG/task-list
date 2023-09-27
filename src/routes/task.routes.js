const { Router } = require("express")
const pool = require('../db.js')

const router = Router();
router.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT NOW();')
    console.log(result);
    res.json('executed');
})
router.get(`/task/3`, (req, res) => {
    res.send(`task by id` )
})
router.post('/create-task', (req, res) => {
    res.send('creating task...')
})
router.delete('/rm-task', (req, res) => {
    res.send("deleting task...")
})
router.put('/put-task', (req, res) => {
    res.send('updating task...')
})

module.exports = router;