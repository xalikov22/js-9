// let x = 5;
// let y = x;

// console.log(x);
// console.log(y);

// x = 10;
// y = 15;


// console.log(x);
// console.log(y);


// const obj = {
//     name: 'John',
//     age: 41
// }

// const obj2 = JSON.parse(JSON.stringify(obj));

// console.log(obj);
// console.log(obj2);

// obj.name = 'Jack';
// obj2.name = 'Done';

// console.log(obj);
// console.log(obj2);




// const sayHello = function(a, b, c, d, e) {
//     console.log(`Salom men ${this.name}, yoshim ${this.age}`, a, b, c, d, e)
// }

// const obj = {
//     name: 'Jack',
//     age: 25
// }

// // call

// const btn = document.querySelector('.btn');

// sayHello.call(obj, [1, 2, 3, 4, 5, 6]);
// https://jsonplaceholder.typicode.com/post




async function createPost() {
    const firstName = document.querySelector('.firstName').value.trim();
    const lastName = document.querySelector('.lastName').value.trim();
    const userID = new Date().getMilliseconds();


    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json;  charset=UTF-8'
        },
        body: JSON.stringify({ firstName, lastName, userID })
    });

    console.log(response);

    if (response.ok) {
        const newPost = await response.json();

        const postWrapper = document.createElement('div');

        const name = document.createElement('h2');
        name.textContent = newPost.firstName;

        const lastName = document.createElement('h3');
        lastName.textContent = newPost.lastName;

        postWrapper.appendChild(name);
        postWrapper.appendChild(lastName);
        document.body.appendChild(postWrapper);


        delete.addEventListener('click', async() => {
            const response = fetch(`https://jsonplaceholder.typicode.com/posts/${newPost.userID}`, {
                method: 'DELETE'
            });

        })

    }

}


const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createPost();

    form.reset();
})