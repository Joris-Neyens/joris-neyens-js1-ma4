contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", length);

function length(event) {
    event.preventDefault();

    const divError = document.querySelector(".error");

    const firstName = document.querySelector("#firstName");
    const firstnameValue = firstName.value.trim();
    const firstNameLength = firstnameValue.length;

    if(firstNameLength >= 2) {
        divError.style.display = "none";
    }
    else {
        divError.style.display = "block";
    }
}




