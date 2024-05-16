import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are authenticated");
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are authenticated");
})

router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, deleteUser);
router.get("/:id",verifyUser, getUser);
router.get("/",verifyAdmin, getAllUsers);


export default router;