function test1(event) {
    event.preventDefault();
    console.log('1');
}
function test2(event) {
    event.preventDefault();
    console.log('2');
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('change').addEventListener("submit", (event) => {
        test1(event);
    })
    document.getElementById('calc').addEventListener("submit", event =>{
        test2(event);
    })
})

