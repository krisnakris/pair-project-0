const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/groupController');


const mid = (req, res, next) => {
  console.log(req.session);
  if (req.session.user_name == 'admin') {
    next();
  } else {
    res.redirect('/student/login');
  }
}

router.use(mid)

router.get('/', GroupController.getGroup);
router.get('/add', GroupController.addGroupForm);
router.post('/add', GroupController.addGroup);
router.get('/edit/:id', GroupController.editGroupForm);
router.post('/edit/:id', GroupController.editGroup);
router.get('/delete/:id', GroupController.deleteGroup);
router.get('/message/:id', GroupController.getMessageByGroup);
router.get('/addMessage/:id', GroupController.addMessageByGroupForm);
router.post('/addMessage/:id', GroupController.addMessageByGroup);
router.get('/student/:id', GroupController.getStudentByGroup);

module.exports = router
