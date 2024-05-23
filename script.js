// calculator

const display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value = "";
}

function backspace(){
    display.value = display.value.substring(0, display.value.length - 1)
}

function cos() {
	display.value = Math.cos(display.value);
}

function sin() {
	display.value = Math.sin(display.value);
}

function tan() {
	display.value = Math.tan(display.value);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Syntax Error"
    }
}