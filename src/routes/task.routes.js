const { Router } = require("express")

const router = Router();
router.get('/tasks', async (req, res) => {
res.send("Getting a task list...");
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