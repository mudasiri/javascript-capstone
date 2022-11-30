export const countHomeItems = () => {
    const numberOfPersons = document.querySelectorAll('.person').length;
    document.getElementById('count-items').innerHTML = `(${numberOfPersons})`;
}