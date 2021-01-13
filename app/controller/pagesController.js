import axios from 'axios';

const home = async (req, res) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users');
    res.render('index', { users: data, title: 'Home page' });
  } catch (err) {
    res.send(err);
  }
};

const addUserPage = (req, res) => {
  res.render('pages/add-user', { title: 'Add User' });
};

const editUserPage = async (req, res) => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/users', { params: { id: req.query.id } });
    res.render('pages/edit-user', { user: data, title: 'Edit User' });
  } catch (err) {
    res.send(err);
  }
};

export { home, addUserPage, editUserPage };
