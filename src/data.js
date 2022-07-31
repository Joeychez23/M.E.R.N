

let data;

getData();

async function getData() {
    const response = await fetch('/books');
    const val = await response.json();
    console.log(val);
    data = val;
}

module.exports = data;