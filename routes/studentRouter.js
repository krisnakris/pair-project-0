const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');


router.get('/register', StudentController.registerStudentForm);

router.post('/register', StudentController.registerStudent);

router.get('/login', StudentController.loginStudentForm);

router.post('/login', StudentController.loginStudent);

const mid = (req, res, next) => {
  if (req.session.user_name) {
    next();
  } else {
    res.redirect('/student/login');
  }
}

router.use(mid);

router.get('/menu/:id', StudentController.studentMenu);

// router.get('/menu/addGroup', StudentController.studentAddGroupForm);

// router.post('/menu/addGroup', StudentController.studentAddGroup);

router.get('/menu/showMessage/:id');

// app.get('/listStudent', (req, res) => {
//   Student.findAll({
//     include: [{
//       model: Group,
//       include : [{model: Message}]
//     }]
//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.send(err);
//     })
// })

module.exports = router;