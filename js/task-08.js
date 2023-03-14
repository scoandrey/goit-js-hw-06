const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const forElements = event.currentTarget.elements;
  const emailEl = forElements.email.value;
  const passwordEl = forElements.password.value;
  const formData = {
    emailEl,
    passwordEl,
  };
  console.log(formData);
  form.reset();
}
