function toggleAnswer(id) {
    let answer = document.querySelector(".faq:nth-child(" + id + ") .answer");
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}