//Rafael Silva Barbon RA:19243633
let op1 = [], op2 = [], res = [];
let cont = 0, cont1 = 0, cont2 = 0, igual = [];
let operador = [];

function onLoad() {
    document.calc.visor.value = "Insira os números";
}

function onClick(button) {
    salvaop(button);
    if(button !== "=")
        document.calc.visor.value = ((op1 + operador + op2)); //button;
}

function salvaop(button){
    if(res == 0){ //Se for != 0 operando1 possui o resultado(Le apenas o operador e o operando2)
        if((button <= "9") && (button >= "0") && cont === 0){ // Se for número continua recebendo numero 
            op1 += button;
            return;
        }

        if(button === "AC"){ //Reinicia todas as variaveis
            op1 = op2 = operador = res = igual =[];
            cont = cont1 = cont2 = 0;
            onLoad();
            return;
        }
    }

    if(cont === 0){ //Chegou aqui, ja fez a leitura do op 1 
        operador = button;//Lendo operador 
        cont=1;
        return;
    }
    
    if((button <= "9") && (button >= "0")){
        op2 += button;
        cont2++;
        return;
    }

    igual = '=';
    result();
}

function result(){
    op1 = Number(op1);
    op2 = Number(op2);
    switch(operador){
        case "+": res = op1 + op2; break;
        case "-": res = op1 - op2; break;
        case "*": res = op1 * op2; break;
        case "/": res = op1 / op2; break;
        default: console.log("Operador nao reconhecido");
    }

    document.calc.visor.value = ((op1 + operador + op2 + igual + res)); //button;

    op1 = res;
    op2 = [];
    res = [];
    cont = 0; 
    cont1 = 0; 
    cont2 = 0; 
    igual = []; 
    operador = [];

    return;
}