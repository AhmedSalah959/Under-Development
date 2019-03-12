const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user");
const checkAuth = require('../middleware/check-auth');


// post method to creat new user 
router.post('/signup', UserController.User_SignUp);

//post method to login
router.post("/login", UserController.User_Login);

//delete method to delete exist user
router.delete("/setting/:userId", UserController.User_Deleting);
//put method to update exist user password
router.put('/profile/setting/changepassword/:userId',checkAuth,UserController.User_Updating_password);
//put method to update exist user name
router.put('/profile/setting/changename/:userId',checkAuth,UserController.User_Updating_name);
//get method to go profile
router.get("/profile/:userId",checkAuth,UserController.User_profile);


module.exports = router