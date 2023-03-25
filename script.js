let string = "";
let buttons = document.querySelectorAll(".button");
let backspace = document.querySelector(".backspace");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                document.querySelector(".input1").value = string;
                string = eval(string);
                document.querySelector(".input2").value = string;
            } catch (e) {
                document.querySelector(".input2").value = "ERROR";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector(".input2").value = string;
            document.querySelector(".input1").value = string;
        } else if (e.target.id == 'sqrt') {
            let a = document.querySelector(".input2").value;
            a = Math.pow(a, 1 / 2);
            document.querySelector(".input1").value = "Sqrt of "+document.querySelector(".input2").value;
            document.querySelector(".input2").value = a;
            string = a;
        } else if (e.target.id == 'cbrt') {
            let a = document.querySelector(".input2").value;
            a = Math.pow(a, 1 / 3);
            document.querySelector(".input1").value = "Cbrt of "+document.querySelector(".input2").value;
            document.querySelector(".input2").value = a;
            string = a;
        } else if (e.target.id == 'backspace' || e.target.id == 'backspace2') {
            let str = document.querySelector(".input2").value.toString();
            document.querySelector(".input2").value = str.substr(0, str.length - 1);
            string = str.substr(0, str.length - 1);
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector(".input2").value = string;
        }
    })

});

