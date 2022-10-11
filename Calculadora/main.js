let num;
let numsCalList = [];
let displayScreen = document.getElementById('display');
let newNum;
let currentResult;
let currentOperation = 0;

function input(num) {
  if (num === ',' || document.getElementById('display').textContent.length > 9) {
    if (numsCalList.includes(',') || document.getElementById('display').textContent.length > 9) {
      numsCalList.push(num);
      numsCalList.pop(num);
    } else {
      numsCalList.push(num);
      displayScreen.innerHTML = numsCalList.join('');
      newNum = numsCalList.join('');
    }
  } else {
    num = parseFloat(num);
    numsCalList.push(num);
    displayScreen.innerHTML = numsCalList.join('');
    newNum = numsCalList.join('');
    newNum = parseFloat(newNum.replace(/,/, '.'));
  }
}

function acFunCal() {
  numsCalList = [];
  currentResult = 0;
  newNum = 0;
  currentOperation = 0;
  displayScreen = document.getElementById('display');
  displayScreen.innerHTML = '0';
}
document.getElementById('clearCalculator').onclick = acFunCal;

function delFunCal() {
  numsCalList.pop();
  displayScreen = document.getElementById('display');
  displayScreen.innerHTML = numsCalList.join('');
  newNum = numsCalList.join('');
  newNum = parseFloat(newNum.replace(/,/, '.'));
}
document.getElementById('delete').onclick = delFunCal;


function operation(operator) {

  switch (operator) {
    case '+':
      numsCalList = [];
      operationProgress();
      currentOperation = 1;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = '+';
      break;
    case '-':
      numsCalList = [];
      operationProgress();
      currentOperation = 2;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = '-';
      break;
    case 'x':
      numsCalList = [];
      operationProgress();
      currentOperation = 3;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = 'x';
      break;
    case '/':
      numsCalList = [];
      operationProgress();
      currentOperation = 4;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = '/';
      break;
    case '=':
      numsCalList = [];
      operationProgress();
      currentOperation = 5;
      currentResult = currentResult.toString().replace(/\./g, ',');
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = currentResult;
      currentResult = parseFloat(currentResult);
      break;
    case '%':
      numsCalList = [];
      operationProgress();
      currentOperation = 6;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = '%';
      break;
    case '+/-':
      numsCalList = [];
      operationProgress();
      currentOperation = 7;
      displayScreen = document.getElementById('display');
      displayScreen.innerHTML = '+/-';
      displayScreen = - displayScreen.innerHTML;
      break;
    default:
      console.log('Error');
      break;
  }
}

function addition(currentResult, newNum) {
  return currentResult + newNum;
}

function subtraction(currentResult, newNum) {
  return currentResult - newNum;
}

function multiplication(currentResult, newNum) {
  return currentResult * newNum;
}

function division(currentResult, newNum) {
  return currentResult / newNum;
}

function percentage(currentResult) {
  return currentResult / 100;
}

function opposite(currentResult) {
  return currentResult = - currentResult;
}

function operationProgress() {
  switch (currentOperation) {
    case 0:
      currentResult = newNum;
      break;
    case 1:
      currentResult = addition(currentResult, newNum);
      break;
    case 2:
      currentResult = subtraction(currentResult, newNum);
      break;
    case 3:
      currentResult = multiplication(currentResult, newNum);
      break;
    case 4:
      currentResult = division(currentResult, newNum);
      break;
    case 5:
      currentResult = currentResult;
      break;
    case 6:
      currentResult = percentage(currentResult);
      break;
    case 7:
      currentResult = opposite(currentResult);
      break;
    default:
      console.log('Error');
      break;
  }
}