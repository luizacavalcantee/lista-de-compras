const form = document.getElementById("form");
const newItem = document.getElementById("new-item");
const list = document.getElementById("list");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    if (newItem.value !== "") {
        const listItem = document.createElement("li");
        const uniqueId = `item-${Date.now()}`;

        listItem.innerHTML = `
            <input type="checkbox" name="item" id="${uniqueId}" />
            <label for="${uniqueId}">${newItem.value}</label>
            <button type="button" class="delete-button">
                <img src="assets/trash.svg" alt="deletar">
            </button>
        `;

        list.appendChild(listItem);
        newItem.value = "";

        const deleteItem = listItem.querySelector(".delete-button");

        deleteItem.addEventListener("click", () => {
            if (alert.classList.contains("invisible")) {
                alert.classList.remove("invisible");
                alert.style.transition = 'opacity 0.5s ease-in-out';
                alert.style.opacity = '1';

                setTimeout(() => {
                    alert.style.opacity = '0';
                    setTimeout(() => {
                        alert.classList.add("invisible");
                    }, 500);
                }, 3000);
            }
            list.removeChild(listItem);
        });
    }
});

const alertButton = alert.querySelector("button");
alertButton.addEventListener("click", () => {
    if (!alert.classList.contains("invisible")) {
        alert.style.opacity = '0';
        setTimeout(() => {
            alert.classList.add("invisible");
        }, 500);
    }
});