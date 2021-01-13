import Users from '../model/user.js';

/**
 * @description CREATE NEW USER
 * @method POST /api/users
 */

const createUser = async (req, res) => {
  try {
    const { firstname, lastname, email, gender, status } = req.body;
    const newUser = new Users({ firstname, lastname, email, gender, status });

    await newUser.save();

    res.redirect('/');
  } catch (err) {
    res.send(err.message || 'create user error');
  }
};

/**
 * @description GET USER / USERS
 * @method GET /api/users || /api/users/:id
 */

const getUser = async (req, res) => {
  if (req.query.id) {
    try {
      const _id = req.query.id;
      const user = await Users.findById({ _id });
      res.send(user);
    } catch (err) {
      res.send(err.message || `Error get user with ID: ${_id}`);
    }
  } else {
    try {
      const users = await Users.find();
      res.send(users);
    } catch (err) {
      res.send(err.message || 'Error get users');
    }
  }
};

/**
 * @description UPDATE USER BY ID
 * @method PUT /api/users/:id
 */

const updateUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const { firstname, lastname, email, gender, status } = req.body;
    const updatedUser = await Users.findByIdAndUpdate(
      { _id },
      {
        $set: { firstname, lastname, email, gender, status },
      },
      { new: true }
    );
    res.send(updatedUser);
  } catch (err) {
    res.send(err.message || `Error update user with ID: ${_id}`);
  }
};

/**
 * @description DELETE USER BY ID
 * @method DELETE /api/users/:id
 */

const deleteUser = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedUser = await Users.findByIdAndDelete({ _id });
    res.send(deletedUser);
  } catch (err) {
    res.send(err.message || `Error delete user with ID: ${_id}`);
  }
};

export { createUser, getUser, updateUser, deleteUser };
