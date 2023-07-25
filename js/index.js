var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputNumber = document.getElementById("number");
var submit = document.getElementById("submit");
var update = document.getElementById("update");
var search = document.getElementById("search");
var index;

var productPro = [];

if (localStorage.getItem("allProduct") != null) {
  productPro = JSON.parse(localStorage.getItem("allProduct"));
}
display();

function add() {
  if (regexName() == true && regexEmail() == true && regexNumber() == true) {
    var productValue = {
      name: inputName.value,
      email: inputEmail.value,
      number: inputNumber.value,
    };

    productPro.push(productValue);
    localStorage.setItem("allProduct", JSON.stringify(productPro));
    display();
    clear();
  }
}

function display() {
  var showProduct = " ";
  for (var i = 0; i < productPro.length; i++) {
    showProduct += `
  <tr>
  <td style="color: #1aa2b8";> ${i + 1}</td>
  <td style="color: #1aa2b8";>${productPro[i].name}</td>
  <td style="color: #1aa2b8";>${productPro[i].email}</td>
  <td style="color: #1aa2b8";>${productPro[i].number}</td>
  <td><button class="btn btn-outline-info" onclick="Update(${i})">Update</button></td>
  <td><button class="btn btn-outline-danger" onclick="Delete(${i})">Delete</button></td>
  </tr>
  `;
  }

  document.getElementById("explan").innerHTML = showProduct;
}

function clear() {
  inputName.value = " ";
  email.value = " ";
  number.value = " ";
}

function Delete(i) {
  productPro.splice(i, 1);
  localStorage.setItem("allProduct", JSON.stringify(productPro));
  display();
}

function Update(element) {
  index = element;
  currentIndex = productPro[index];
  inputName.value = currentIndex.name;
  inputEmail.value = currentIndex.email;
  inputNumber.value = currentIndex.number;
  submit.classList.add("d-none");
  update.classList.remove("d-none");
}

function updateTable() {
  indexPro = index;
  if (regexName() == true && regexEmail() == true && regexNumber() == true) {
  
  var productValue = {
    name: inputName.value,
    email: inputEmail.value,
    number: inputNumber.value,
  };
  productPro.splice(indexPro, 1, productValue);
  localStorage.setItem("allProduct", JSON.stringify(productPro));
  display();
  clear();
  submit.classList.remove("d-none");
  update.classList.add("d-none");
}
}

function searchfn() {
  var searchVal = search.value;
  var showProduct = " ";
  for (var i = 0; i < productPro.length; i++) {
    if (productPro[i].name.toLowerCase().includes(searchVal.toLowerCase())) {
      showProduct += `
  <tr>
  <td> ${i + 1}</td>
  <td>${productPro[i].name}</td>
  <td>${productPro[i].email}</td>
  <td>${productPro[i].number}</td>
  <td><button class="btn btn-outline-dark" onclick="Update(${i})">Update</button></td>
  <td><button class="btn btn-outline-danger" onclick="Delete(${i})">Delete</button></td>
  </tr>
  `;
    }
  }
  document.getElementById("explan").innerHTML = showProduct;
}

function regexName() {
  var vaildName = document.getElementById("vaildName");
  var regexName = /^[A-Z][a-z]{3,10}/;
  var text = inputName.value;
  if (regexName.test(text) == true) {
    inputName.classList.add("is-valid");
    inputName.classList.remove("is-invalid");
    vaildName.classList.add("d-none");
    return true;
  } else {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
    vaildName.classList.remove("d-none");
    return false;
  }
}

function regexEmail() {
  var vaildEmail = document.getElementById("vaildEmail");
  var regexEmail = /[^@]+@[^@]+\.[a-zA-Z]{2,6}/;
  var text = inputEmail.value;
  if (regexEmail.test(text) == true) {
    inputEmail.classList.add("is-valid");
    inputEmail.classList.remove("is-invalid");
    vaildEmail.classList.add("d-none");
    return true;
  } else {
    inputEmail.classList.add("is-invalid");
    inputEmail.classList.remove("is-valid");
    vaildEmail.classList.remove("d-none");
    return false;
  }
}

function regexNumber() {
  var vaildNumber = document.getElementById("vaildNumber");
  var regexNumber = /^[0-9]{10,11}$/;
  var text = inputNumber.value;
  if (regexNumber.test(text) == true) {
    inputNumber.classList.add("is-valid");
    inputNumber.classList.remove("is-invalid");
    vaildNumber.classList.add("d-none");
    return true;
  } else {
    inputNumber.classList.add("is-invalid");
    inputNumber.classList.remove("is-valid");
    vaildNumber.classList.remove("d-none");
    return false;
  }
}
