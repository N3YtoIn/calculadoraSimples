
//Limitar digitacao somente por números
function setBlockNumber(event){
    const charCode = (typeof event.which === "indefinido") ? event.keyCode : event.which;
    if (charCode !== 8 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
    }
}

//Funcao para pegar os valores pelo ID e mostrar resultado na tela
function getValue(id){
    return parseFloat(document.getElementById(id).value) || 0;
}

function setResult(resultado){
    document.getElementById('resultado').innerText = `${resultado}`;
}
//Funcoes dos operadores logicos para funcionamento das operacoes
document.getElementById('somar').onclick = function(){
    const v1 = getValue('valor1');
    const v2 = getValue('valor2');
    setResult(v1 + v2);
    };
document.getElementById('subtrair').onclick = function(){
    const v1 = getValue('valor1');
    const v2 = getValue('valor2');
    setResult(v1 - v2);
};

document.getElementById('multiplicar').onclick = function(){
    const v1 = getValue('valor1');
    const v2 = getValue('valor2');
    setResult(v1 * v2);
    };

    document.getElementById('dividir').onclick = function(){
        const v1 = getValue('valor1');
        const v2 = getValue('valor2');
        if(v2 == 0){
        setResult('Error!');
        }
        else{
        setResult(v1 / v2);
        }
    };

    document.getElementById('ce').onclick = function(){
        document.getElementById('valor1').value = '';
        document.getElementById('valor2').value = '';
        setResult('');
    };
