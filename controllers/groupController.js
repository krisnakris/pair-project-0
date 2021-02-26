const {Group, Message, Student} = require('../models')
const formatCreatedAt = require('../helpers/createdAtForView');

class GroupController {

  static getGroup (req, res) {
    Group.findAll()
      .then(data => {
        res.render('group', {data});
        // res.send(data);
      })
      .catch(err => {
        res.send(err);
      })
  }

  static addGroupForm (req, res) {
    res.render('addGroupForm');
  }

  static addGroup (req, res) {
    let body = req.body;

    let object = {
      name_group : body.nameGroup,
      email_group : body.emailGroup
    }

    Group.create(object)
      .then(data => {
        res.redirect('/group')
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editGroupForm (req, res) {
    let id = req.params.id;

    Group.findByPk(id)
      .then(data => {
        res.render('editGroupForm', {data});
      })
      .catch(err => {
        res.send(err);
      })
  }

  static editGroup (req, res) {
    let id = req.params.id;
    let body = req.body;

    let object = {
      name_group : body.nameGroup,
      email_group : body.emailGroup
    }

    Group.update(object, {
      where : {
        id
      }
    })
    .then(data => {
      res.redirect('/group')
    })
    .catch(err => {
      res.send(err);
    })
  }

  static deleteGroup (req, res) {
    let id = req.params.id;

    Group.destroy({
      where : {
        id
      }
    })
      .then(data => {
        res.redirect('/group')
      })
      .catch(err => {
        res.send(err);
      })  
  }

  static getMessageByGroup (req, res) {
    let id = req.params.id;

    Group.findByPk(id, {
      include : Message
    })
      .then(data => {
        let message = data.Messages;
        let createdAt = formatCreatedAt(message);
        res.render('getMessageByGroup', {data, message, createdAt});
      })
      .catch (err => {
        res.send(err);
      })

  }

  static addMessageByGroupForm (req, res) {
    let id = req.params.id;

    Group.findByPk(id)
      .then(data => {
        res.render('addMessageByGroup', {data});
      })
      .catch(err => {
        res.send(err);
      })
  }

  static addMessageByGroup (req, res) {
    let id = req.params.id;
    let body = req.body;

    let object = {
      message : body.message,
      group_id : id
    }

    Message.create(object)
      .then(data => {
        res.redirect('/group');
      })
      .catch(err => {
        res.send(err);
      })
  }

  static getStudentByGroup (req, res) {
    let id = req.params.id;

    Group.findByPk(id, {
      include : Student
    })
      .then(data => {
        let students = data.Students;
        res.render('getStudentByGroup', {data, students});
      })
      .catch (err => {
        res.send(err);
      })
  }
}

module.exports = GroupController;