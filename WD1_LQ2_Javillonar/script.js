// Dropdown menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", () => {
        dropdownContent.classList.toggle("show");
    });

    // Close dropdown pag nag-click sa labas
    window.addEventListener("click", (event) => {
        if (!event.target.matches(".dropbtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });

    // Like button counter
    const likeButtons = document.querySelectorAll(".actions li:first-child");
    likeButtons.forEach((btn) => {
        let count = 0;
        btn.addEventListener("click", () => {
            count++;
            btn.textContent = `👍 Like (${count})`;
        });
    });

    // Comment button action
    const commentButtons = document.querySelectorAll(".actions li:nth-child(2)");
    commentButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Comment feature coming soon! 💬");
        });
    });

    // Share button action
    const shareButtons = document.querySelectorAll(".actions li:nth-child(3)");
    shareButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Post shared! ↪️");
        });
    });
});