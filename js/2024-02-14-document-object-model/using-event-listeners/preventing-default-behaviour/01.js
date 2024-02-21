const frmSendMessageEl = document.getElementById("frm-send-message");

const inpEmailEl = document.querySelector("input[name=email]");

frmSendMessageEl.addEventListener("submit", (e) => {
  e.preventDefault();
  /*
  const data = e.formData;
  console.log(data.get("email"));
  */
  const valEmail = inpEmailEl.value; //input elemanlarının value özelliğni kullanarak içindeki değere bakabilirsin.

  const frmData = new FormData(frmSendMessageEl);

  console.log(frmData.get("email"));

  console.log("asd", valEmail);
});

/*  Preventing  hyperlink's default behaviour */

const theLinkEl = document.getElementById("the-link");

theLinkEl.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Hello me");
});
