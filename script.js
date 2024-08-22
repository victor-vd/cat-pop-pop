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
callStyle(styleTemp);
document.head.appendChild(styleSheet);

let audioPop = new Audio('pop.mp3');
let audioLua = new Audio('lua.mp3');
document.querySelector("div").addEventListener('mouseover', e => {
    audioPop.play();
});
function mouseClick(){
    if(document.querySelector("#def").src != "cat_rainbow.gif") {
        document.querySelector("#def").src = "cat_rainbow.gif";
        audioLua.play();
        callStyle(styleMod);
    } else {
        document.querySelector("#def").src = "pop-cat-empty.ico";
        audioLua.pause();
        callStyle(styleTemp);
    }
}
function mouseLeave(){
    document.querySelector("#def").src = "pop-cat-empty.ico";
    audioLua.pause();
    callStyle(styleTemp);
}

function callStyle(style) {
    styleSheet.textContent = style;
}