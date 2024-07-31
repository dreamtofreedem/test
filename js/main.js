document.getElementById("display").innerHTML = "0";

//当前输入的值，初始值为null
let currentInput = null;

//当前操作符，初始值为空(null)
let currentOperator = null;

//第一操作数，初始值为空(null)
let firstOperand = null;

//将数字或小数点添加到显示屏上
function appendToDisplay(value) {
    if(currentInput === "0" && value !== ".") {
        //如果当前输入为0，并且value不是小数点，直接用value替换currenInput
        currentInput = value;
    } else {
        //否则，将value拼接到currentInput后面
        currentInput += value;
    }
    //将currentInput显示到显示屏上
    document.getElementById("display").innerHTML = currentInput;
}

// 清空显示屏
function clearDisplay() {
    //将currentInput置为0
    currentInput = "0";
    document.getElementById("display").innerHTML = "0";
}

//记录当前操作符，并将当前输入的值保存到firstOperand中
function operate(operator) {
    if(currentOperator !== null) {
        //如果currentOperator不为空，则计算firstOperand和currentInput的值
        calculate();
    }
    //记录第一操作数为当前输入值
    firstOperand = currentInput;

    //记录当前操作符
    currentOperator = operator;

    //将当前输入值重置为0
    currentInput = "0";
}

//根据当前操作符和第二操作数计算结果，并将结果显示在屏幕上
function calculate() {
    //如果当前未记录操作符或第一操作数，则直接返回
    if(currentOperator === null || firstOperand === null) return;

    let result;

    //获取第二操作数
    const secondOperand = currentInput;

    //根据currentOperator计算firstOperand和secondOperand的值
    switch(currentOperator) {
        case "+":
            currentInput = Number(firstOperand) + Number(secondOperand);
            break;
        case "-":
            currentInput = Number(firstOperand) - Number(secondOperand);
            break;
        case "*":
            currentInput = Number(firstOperand) * Number(secondOperand);
            break;
        case "/":
            currentInput = Number(firstOperand) / Number(secondOperand);
            break;
        default:
            //如果currentOperator不是加减乘除，则直接返回
            return;
    }

    //将计算结果更新为当前输入值
    currentInput = result.toString();

    //重置当前操作符和第一操作数
    currentOperator = null;
    firstOperand = null;

    //更新显示屏上显示的内容
    document.getElementById("display").innerHTML = currentInput;
}