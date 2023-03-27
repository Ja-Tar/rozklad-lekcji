function deleteRow(row) {
    document.getElementById('Tabela').deleteRow(row);
}

function createRowNormal(sala = 0, lekcja = "TEST", klasa = "SYSTEMU", uwagi = "-") {
    var x = document.getElementById('Tabela');
    var len = x.rows.length;
    // deep clone the targeted row
    row = x.insertRow(len)
    row.innerHTML =
        `<td id="${len}S" class="sala">${sala}</td>
        <td id="${len}L" class="lekcje">${lekcja}</td>
        <td id="${len}K" class="klasa">${klasa}</td>
        <td id="${len}I" class="inne">${uwagi}</td>`;
}

function createRowInfo(uwaga=true, tresc='TEST SYSTEMU - Informacje mogą być nie prawidłowe!') {
    var x = document.getElementById('Tabela');
    var len = x.rows.length;
    // deep clone the targeted row
    row = x.insertRow(len)
    if (uwaga == true) {
        var uwagatext = '<b>UWAGA:</b>'
    }
    row.innerHTML = 
        `<td colspan="4" class="info-scroll"><div class="scroll-left">
        <p>${uwagatext} ${tresc} </p>
        </div></td>`;
}

var czas = 10 + (window.innerWidth / 400)
console.log(screen.width)
document.documentElement.style.setProperty('--time', `${czas}s`);
