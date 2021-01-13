const addForm = $('#add-user');
const editForm = $('.edit-user');
const deleteBtn = $('.deleteUser');

addForm.submit(function () {
  alert('User is added to DataBase');
});

editForm.submit(function (e) {
  e.preventDefault();

  let form_array = $(this).serializeArray();
  let userData = {};

  form_array.map((arr) => {
    userData[arr.name] = arr.value;
  });

  const request = {
    url: `http://localhost:3000/api/users/${userData.hidden_id}`,
    method: 'PUT',
    data: userData,
  };

  $.ajax(request).done(() => {
    alert('Data Successs Updated');
  });
});

deleteBtn.click(function () {
  const id = $(this).attr('data-id');

  const request = {
    url: `http://localhost:3000/api/users/${id}`,
    method: 'DELETE',
  };

  if (confirm('Do you really want to delete this user?')) {
    $.ajax(request).done(() => {
      alert('User is deleted!');
      location.reload();
    });
  }
});
