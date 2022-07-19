let input = document.getElementsByTagName('input');
let btn = document.getElementById('btn');
let get = JSON.parse(localStorage.getItem('key-input'));

input[0].value = input[0].value = get.number1 || ''
input[1].value = input[1].value = get.number2 || ''
input[2].value = input[2].value = get.number3 || ''

input[0].oninput = () => {
    let value = input[0].value.replace(/[^0-9]/g, '');
    value > 100000 ? input[0].value = 100000 : value
    input[1].value = input[1].value = value;
}
input[2].oninput = () => {
    let value = input[2].value.replace(/[^0-9]/g, '');
    value > 12 ? input[2].value = 12 : value
    number3 = value
}

btn.onclick = () => {
    localStorage.setItem('key-input', JSON.stringify({
        number1: input[0].value,
        number2: input[1].value,
        number3: input[2].value,
    }))
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: input[0].value,
            body: input[1].value,
            userId:input[2].value,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
