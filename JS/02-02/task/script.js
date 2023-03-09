ball = document.querySelector('#ball');

let down = 0;
let up = 0;
let right = 0;
let left = 0;
const step = 10;

document.addEventListener('keydown', (e) => {
    console.log(`Key "${e.key}" pressed [event: keydown]`);

    if(e.key === 'ArrowDown'){

        ball.style.transform = `translate(${-50 + right + left}%,${up + down}px)`;
        down+=step;
    }

    if(e.key === 'ArrowUp'){

        ball.style.transform = `translate(${-50 + right + left}%,${up + down}px)`;
        up-=step;
    }

    if(e.key === 'ArrowRight'){

        ball.style.transform = `translate(${-50 + right + left}%,${up + down}px)`;
        right+=step;
    }

    if(e.key === 'ArrowLeft'){

        ball.style.transform = `translate(${-50 + right + left}%,${up + down}px)`;
        right-=step;
    }
    })

    let stopper = false; 
    let counter = 0;

    while(!stopper){

        setTimeout(() => {
            stopper = true; 
          }, 1000)

    }

    // counter++;
    // console.log(`Counter is ${counter}`);
    // document.addEventListener('keydown', (e) => {

    // if(e.key === 'Enter'){
    //         stopper = true;
    // }})

    var myFunc01 = function() {
          var i = 0;
          while (i < 100) {
            (function(i) {
              setTimeout(function() {
                document.getElementById('d01').innerHTML += 100 - i + "<br>";
              }, 1000 * i)
            })(i++)
          }
        };
        
        myFunc01();