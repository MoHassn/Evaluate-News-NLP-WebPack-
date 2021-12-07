import { checkURL } from "./urlChecker";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  if (!checkURL(formText)) {
    alert("you must enter a valid url");
    return;
  }

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8080/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: formText }),
  })
    .then((res) => res.json())
    .then(function (res) {
      console.log(res);
      const content = `
      <div>
        <p>subjectivity: <span>${res.subjectivity}</span></p>
        <p>agreement: <span>${res.agreement}</span></p>
        <p>confidence: <span>${res.confidence}</span></p>
        <p>irony: <span>${res.irony}</span></p>
        <p>score_tag: <span>${res.score_tag}</span></p>
      </div>
      `;
      document.getElementById("results").innerHTML = content;
    });
}

export { handleSubmit };
