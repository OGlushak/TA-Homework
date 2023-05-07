// Task1
// document.getElementById("test").innerHTML = "Last";
// document.getElementsByName("test").innerHTML = "Last2";

// Task2
// let image = document.getElementsByTagName("image");
// image.src = "cat.jpg";
// alert(image.outerHTML);

// Task3
// let elements = document.getElementsByTagName("p");
// for (let i = 0; i < elements.length; i += 1);
// alert(`Selector text` + i + `: ` + elements[i].innerHTML);

// Task4
// let firstElement = document.nodeName[1].innerHTML;
// let lastElement = document.nodeName[5].innerHTML;
// Other way for the previous search
// let lastElement = document.lastChild[].innerHTML;
// let secondlement = document.nodeName[2].innerHTML;
// let foursElement = document.nodeName[4].innerHTML;
// let thirdElement = document.nodeName[3].innerHTML;

// Task5
// let header = document.querySelector('h1');
// header.style.backgroundColor = 'lightgreen';
// console.log(header.textContent);

// let firstP = document.querySelector('p:first-of-type');
// firstP.style.fontWeight = 'bold';

// let allP = document.querySelectorAll('p');
// allP[1].style.color = 'red';

// let thirdP = document.querySelectorAll('p');
// thirdP[2].style.textDecoration = 'underline';

// let fourseP = document.querySelectorAll('p');
// fourseP[3].style.fontStyle = 'oblique';
// fourseP[3].style.display = 'flex';

// Task6
// let message1 = prompt(`It's me, first message:`);
// let message2 = prompt(`It's me, secont message:`);
// document.getElementById('input1').value = message1;
// document.getElementById('input2').value = message2;

// let swap = document.getElementById('input1').value;
// document.getElementById('input1').value = document.getElementById('input2').value;
// document.getElementById('imput2').value = temp;

// Task7
/*
< !DOCTYPE html >
    <html>
        <head>
            <meta charset="utf-8">
                <title>DOM example</title>
        </head>
        <body>
            <main class='mainClass check item'>
                <div id='myDiv'>
                    <p>First paragraph</p>
                </div>
            </main>
        </body>
    </html>
*/
// const mainElement = document.createElement('main');
// mainElement.setAttribute('class', 'mainClass check item');

// const divElement = document.createElement('div');
// divElement.setAttribute('div', 'myDiv');

// const pElement = document.createElement('p');
// pElement.textContent = 'First paragraph';