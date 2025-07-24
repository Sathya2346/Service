// Form

function handleSubmit(event){
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const formDate = document.getElementById('formDate').value.trim();
    const formTime = document.getElementById('formTime').value.trim();
    const check = document.getElementById('check').checked;

    if
    ( firstName === "" ||
    lastName === "" ||
    email === "" ||
    phone === "" ||
    formDate === "" ||
    formTime === "" ){
        alert("Please fill All Details");
        return;
    }
    else if(!check) {
        alert("Please accept the terms and privacy policy.");
        return;
    }

    alert("Form submitted successfully!");

    document.getElementById("myForm").reset();
}

// Future Time

document.addEventListener("DOMContentLoaded", function () {
    const today = new Date().toISOString().split('T')[0];
    const formDateInput = document.getElementById("formDate");
    const formTimeInput = document.getElementById("formTime");

    formDateInput.setAttribute("min", today);

    formDateInput.addEventListener("change", function () {
        const selectedDate = new Date(this.value);
        const now = new Date();

        if (
            selectedDate.getFullYear() === now.getFullYear() &&
            selectedDate.getMonth() === now.getMonth() &&
            selectedDate.getDate() === now.getDate()
        ) {
            const currentTime = now.toTimeString().slice(0, 5);
            formTimeInput.min = currentTime;
        } else {
            formTimeInput.removeAttribute("min");
        }
    });
});

