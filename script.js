function deleteRow(row)
{
    document.getElementById('Tabela').deleteRow(row);
}

function insRow(sala=0, lekcja="TEST", klasa="SYSTEMU", uwagi="-")
{
    var x=document.getElementById('Tabela');
    var len = x.rows.length;
    // deep clone the targeted row
    row = x.insertRow(len),
    row.innerHTML = 
    `<td id="${len}S" class="sala">${sala}</td>
    <td id="${len}L" class="lekcje">${lekcja}</td>
    <td id="${len}K" class="klasa">${klasa}</td>
    <td id="${len}U" class="uwagi">${uwagi}</td>`;
}

var czas = 10 + (window.innerWidth / 400)
console.log(screen.width)
document.documentElement.style.setProperty('--time', `${czas}s`);
