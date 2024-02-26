const form = document.getElementById("form");


async function fetchUsers(limit = 10, skip = 0) {
    const response = await fetch(`https://dummyjson.com/users?limit=${limit}&${skip}`);

    const result = await response.json();
    // console.log(result.users);
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = "";

    result.users.forEach((users, index) => {
        tbody.innerHTML += `<tr>
            <td>${index + 1}</td>
            <td id = "firstName">${users.firstName}</td>
            <td>${users.lastName}</td>
            <td>${users.age}</td>
            <td>${users.email}</td>
            <td>${users.phone}</td>
            <td class = "text-center"><i onclick = "deletePost(${users.id})" class="fa-solid fa-trash-can"></i></td>
        </tr>`
        let deleteElement = document.getElementsByClassName(".fa-solid")
        deleteElement.style = "cursor: pointer;"
    })

}

fetchUsers();



document.addEventListener('click', (e) => {
    if (e.target.classList[0] === 'fa-solid'){
        e.target.parentElement.parentElement.remove();
       


    }
})




let formInput = document.getElementById("form_input");

async function searchUsers(text) {
    console.log(text);
    const response = await fetch(
      `https://dummyjson.com/users/search?q=${text}`
    );
    const result = await response.json();
    console.log("searched data", result.users);
  }

formInput.addEventListener("keyup", () => {
  processChange();
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const processChange = debounce(() => searchUsers(formInput.value));






let showMoreBtn = document.getElementById("showMore");

showMoreBtn.addEventListener("click", () => {
  fetchUsers(30, 0);
  
});

// fetch('https://dummyjson.com/users/firstname')
// .then(res => res.json())
// .then(console.log);

form['form_input'].addEventListener('input' , () => {
    const inputValue = form['form_input'].value.toLocaleLowerCase();
    const name = document.querySelectorAll('firstName');
    
});
