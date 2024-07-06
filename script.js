document.getElementById('tableForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = document.getElementById('number').value;
    generateMultiplicationTable(number);
});

function generateMultiplicationTable(number) {
    let table = '<table>';
    table += '<tr><th>Çarpan</th><th>Sonuç</th></tr>';

    for (let i = 1; i <= 10; i++) { // 1'den 10'a kadar çarpım
        let result = number * i;
        let cellClass = result % 2 === 0 ? 'highlight' : '';
        table += `<tr><td>${number} x ${i}</td><td class="${cellClass}">${result}</td></tr>`;
    }

    table += '</table>';
    document.getElementById('multiplicationTable').innerHTML = table;
}