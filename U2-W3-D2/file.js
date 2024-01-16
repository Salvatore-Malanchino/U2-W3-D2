const userName = document.getElementById('name-text');
const saveButton = document.getElementById('btn-save');
const removeButtun = document.getElementById('btn-remove');
const form = document.getElementsByTagName('form')[0];

let data = [];

class UserData {
  constructor(_name) {
    this.name = _name;
  }
}

const emptyForm = function () {
  userName.value = '';
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const sensitiveData = new UserData(userName.value);

  data.push(sensitiveData);

  localStorage.setItem('username', JSON.stringify(data));
});
