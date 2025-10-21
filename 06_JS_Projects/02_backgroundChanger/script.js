const container = document.getElementById("container");

container.addEventListener("click", (e) => {
    //  console.log(e.target);
    //  console.log(e.target.tagName)
    if (e.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = e.target.id
    }
});
