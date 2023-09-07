const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");

// aaaa@bbbb.cc
// regex valid: /pattern/flags(opt)
const reg = /\w{4,}\@\w{4,}\.\w{2,}/;
const regTwo = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;

submitBtn.addEventListener(`click`, () => {
  if (regTwo.test(emailInput.value)) {
    alert("Email valid");
  } else {
    alert("Email invalid");
  }
});

const fn = document.querySelector("#fn");
const ln = document.querySelector("#ln");
const em = document.querySelector("#em");
const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const err = document.querySelector("#err");

function doError(msg) {
  err.style.opacity = 1;
  err.innerText = msg;
  setTimeout(() => {
    err.style.opacity = 0;
    err.innerText = "";
  }, 3000);
}

function submitRegister() {
  console.log(fn.value, ln.value, em.value, p1.value, p2.value);
  if (fn.value === "") {
    fn.style.border = "1px solid red";
    return;
  }
  if (ln.value === "") {
    ln.style.border = "1px solid red";
    return;
  }
  if (em.value === "") {
    em.style.border = "1px solid red";
    return;
  }
  if (p1.value === "") {
    p1.style.border = "1px solid red";
    return;
  }
  if (p2.value === "") {
    p2.style.border = "1px solid red";
    return;
  }
  const nameRegex = /\d{1,}/g;
  if (nameRegex.test(fn.value) || nameRegex.test(ln.value)) {
    doError("Numele nu poate sa contina cifre.");
    return;
  }
  if (!reg.test(em.value)) {
    doError("Adresa de email nu este valida.");
    return;
  }
  if (p1.value.length < 8) {
    doError("Parola trebuie sa contina minim 8 caractere.");
    return;
  }
  if (p1.value !== p2.value) {
    doError("Parolele nu coincid");
    return;
  }
  console.warn("totul ok");
  // trimitem formularul
}

const userData = {
  email: "username@provider.com",
  password: "1234qwer",
};
