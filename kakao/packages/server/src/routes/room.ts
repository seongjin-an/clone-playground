import { Router } from 'express'
import Room from "../schemas/room";
import User from "../schemas/user";

const router = Router();

//chat room list
router.get('/', async (req, res) => {
    try{
        const rooms = await Room.findAll({
            include: User
        });
        res.json(rooms)
    }catch(e){}
})

//detail chat room
router.get('/:roomId', async (req, res) => {
    try{
        const room = await Room.findOne({
            where: {
                id: Number(req.params.roomId),
            },
            include: User
        })
        res.json(room);
    }catch(e){}
})

//create chat room
router.post('/', async (req, res) => {
    try{
        const room = await Room.create({
            opponentId: req.body.opponentId
        })
        res.json(room);
    }catch(e){}
})
export default router;