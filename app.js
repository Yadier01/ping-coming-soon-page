const form = document.querySelector("#form");
const input = document.querySelector("#email");
const btnSend = document.querySelector("#hidden");

const classList = form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    input.style.border = "1px solid red";
    btnSend.classList.remove("hidden");
  }else{
    input.style.border = "1px solid green";
    btnSend.classList.add("hidden");
     input.value = "";
  }

  console.log(email);
});
