export function uploadpdf(element) {
  const input = element.querySelector("input");
  
  input.addEventListener("change", function () {
    const file = input.files[0];
    if (file.type !== "application/pdf") {
      alert("Invalid file type. Please upload a PDF file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const pdf = e.target.result;
      const content = document.getElementById("content");
      content.innerHTML = `<embed src="${pdf}" type="application/pdf" width="100%" height="100%">`;
    };

    reader.readAsDataURL(file);
  });
}
