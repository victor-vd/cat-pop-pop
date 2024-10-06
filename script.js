const styleTemp = `
    #abc{
        position: absolute;
    }
    #def{
        position: absolute;
        display: none;
    }
    div{
        margin-top: 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        width: 100%;
        img{
            height: 40%;
            width: 40%;
        }
        &:hover{
            #abc{
                    display: none;
            }
            #def{
                    display: flex;
            }
        }
    }
`
const styleMod = `
    #abc{
        position: absolute;
    }
    #def{
        position: absolute;
        display: none;
    }
    div{
        margin-top: 5%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        width: 100%;
        img{
            height: 60%;
            width: 60%;
        }
        &:hover{
            #abc{
                    display: none;
            }
            #def{
                    display: flex;
            }
        }
    }
`
const styleSheet = document.createElement("style");

let audioLua = new Audio('lua.mp3');

callStyle(styleTemp);
document.head.appendChild(styleSheet);

function pop() {
    let audioPop = new Audio(`cat-pop-${Math.ceil(Math.random() * 4)}.mp3`);
    audioPop.play();
}

function mouseClick() {
    if (document.querySelector("#def").src != "cat_rainbow.gif") {
        document.querySelector("#def").src = "cat_rainbow.gif";
        audioLua.play();
        callStyle(styleMod);
    } else {
        document.querySelector("#def").src = "pop-cat-empty.ico";
        audioLua.pause();
        callStyle(styleTemp);
    }
}

function mouseLeave() {
    document.querySelector("#def").src = "pop-cat-empty.ico";
    audioLua.pause();
    callStyle(styleTemp);
}

function callStyle(style) {
    styleSheet.textContent = style;
}