const express=require('express');
const { createUser, loginUser, getAllUsers, logoutUser, forgotPassword, resetPassword } = require('../controller/userController');
const router=express.Router();
const multer=require('multer');
const path=require('path');
const { isAuthenticated, authorizeRoles } = require('../middlewares/authenticate');


const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads/user' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
}) })



router.post('/register',upload.single('avatar'),createUser);

router.post('/login',loginUser);

router.get('/admin/getAllUsers',isAuthenticated,authorizeRoles('admin'),getAllUsers)

router.post('/password/forgot',forgotPassword);

router.route('/password/reset/:token').post(resetPassword);



router.get('/logout',logoutUser)

module.exports=router;