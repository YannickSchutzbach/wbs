function test1(event) {
    event.preventDefault();
    console.log('1');
}
function test2(event) {
    event.preventDefault();
    console.log('2');
}
document.addEventListener('DOMContentLoaded', function (event) {
    document.getElementById('change').addEventListener("submit", function (event) {
        test1(event);
    });
    document.getElementById('calc').addEventListener("submit", function (event) {
        test2(event);
    });
});
