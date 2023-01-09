const form = document.getElementById("formToggle");
console.log(form);
const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

export const toggleForm = () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

export const clearForm = () => {
  name.value = "";
  phone.value = "";
  email.value = "";
}
