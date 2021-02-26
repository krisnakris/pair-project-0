const {Student, Group} = require('../models');
const {comparePass} = require('../helpers/bcrypt');

class StudentController {

  static registerStudentForm (req, res) {
    res.render('register');
  }

  static registerStudent (req, res) {
    let body = req.body;
    console.log('body: ', body);

    let object = {
      name: body.name,
      user_name: body.username,
      email : body.email, 
      password : body.password,
      phone_number : body.phoneNumber
    }

    Student.create(object)
      .then(data => {
        res.redirect(`/student/login`)
      })
      .catch(err => {
        res.send(err);
      })
  }

  static loginStudentForm (req, res) {
    res.render('login')
  }

  static loginStudent (req, res) {
    Student.findOne({
      where: {
        user_name : req.body.username
      }
    })
    .then(data => {
      const correctPassword = comparePass(req.body.password, data.password);

      let id = data.id;

      if (data && correctPassword) {
        req.session.userId = id;
        req.session.user_name = data.user_name;
        console.log(req.session);
        res.redirect(`/student/menu/${id}`)
      }
    })
    .catch(err => {
      res.redirect('/');
    })

  }

  static studentMenu (req, res) {
    Student.findByPk(req.params.id, {
      include : Group
    })
      .then(data => {
        res.render('studentMenu', {data});
      })
      .catch(err => {
        res.send(err);
      })
  }

  static studentAddGroupForm (req, res) {

  }

}

module.exports = StudentController;