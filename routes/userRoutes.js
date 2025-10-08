import express from 'express'

const router = express.Router();

router.get("/", (req,res)=>{
    res.send("Users");
});

router.get("/:id", (req,res)=>{
    const userId = req.params.id;
    const user = db.getUserById(userId);
    res.json(user);
});

router.post("/", (req,res)=>{
    const newUser = req.body;
    db.createUser(newUser);
    res.status(201).json(newUser);
});

router.put("/:id", (req,res)=>{
    const userId = req.params.id;
    const updatedUser = req.body;
    db.updateUser(userId, updatedUser);
    res.json(updatedUser);
});

router.delete("/:id", (req,res)=>{
    const userId = req.params.id;
    db.deleteUser(userId);
    res.status(204).send();
});



export default router;