
var grassL = new Image();
var grassC = new Image();
var grassR = new Image();
var rocket = new Image();
var mushroom = new Image();
var goldBlock = new Image();
var playBtn = new Image();
var Background = new Image();
var Castle = new Image();


grassL.src = "images_game/grassLeftBlock.png";
grassC.src = "images_game/grassCenterBlock.png";
grassR.src = "images_game/grassRightBlock.png";
rocket.src = "images_game/rocket.png";
mushroom.src = "images_game/mushroom.png";
goldBlock.src = "images_game/goldBlock.png";
// playBtn.src = "images_game/playBtn.png";
Background.src = "images_game/Background.png";
Castle.src = "images_game/castle.png";


var tilesize = 50;
var inicio = 0;
var score = 0;



var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

];


function jogo(start) {


    var primeiravez = localStorage.getItem("primeiravez");

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var ultimoscore = localStorage.getItem("ultimoscore");
    var highscore = localStorage.getItem("highscore");

    if (primeiravez === null) {
        localStorage.setItem("highscore", 0);
        localStorage.setItem("ultimoscore", 0);

    }




    var imagem = 1;
    var abobora = new Image();
    abobora.src = "images_game/abobora.png";
    var x = tilesize;
    var y = canvas.height - 145;
    var width = 110;
    var height = 150;

    var btnX = 920;
    var btnY = 350;
    var btnWidth = 80;
    var btnHeight = 50;

    function menu() {

        //desenha o menu
        context.drawImage(Background, 0, 0);
        context.drawImage(playBtn, btnX, btnY, btnWidth, btnHeight);

        //aparece o ultimo score no menu
        context.fillStyle = "rgba(229, 100, 9, 1)";
        context.font = "bold 18px Arial";
        context.fillText("Last Score:" + ultimoscore, 800, 50);

        //aparece o highscore no menu
        context.fillStyle = "rgba(229, 100, 9, 1)";
        context.font = "bold 18px Arial";
        context.fillText("Best Score:" + highscore, 800, 70);

        window.addEventListener('click', carregou);
        window.addEventListener('mousemove', passou);
        //deteta colisão com o botao play
        //deteta quando carrega no botao play
        function carregou(e) {
            var mouseX = e.pageX - canvas.offsetLeft;
            var mouseY = e.pageY - canvas.offsetTop;
            if (mouseX > btnX && mouseX < btnX + btnWidth) {
                if (mouseY > btnY && mouseY < btnY + btnHeight) {
                    //ao carregar no play o botão desaparece e começa o jogo
                    btnX = 100000;
                    btnY = 100000;
                    animate();

                }
            }
        }
        //poe ponteiro no botao quando passa por cima
        function passou(e) {
            var mouseX = e.pageX - canvas.offsetLeft;
            var mouseY = e.pageY - canvas.offsetTop;
            if (mouseX > btnX && mouseX < btnX + btnWidth) {
                if (mouseY > btnY && mouseY < btnY + btnHeight) {
                    document.getElementById("myCanvas").style.cursor = "pointer";

                }
            }
            else {
                document.getElementById("myCanvas").style.cursor = "auto";
            }
        }

    }



    function fundo() {
        //gradiante que faz o fundo
        var gradiante = context.createLinearGradient(0, 0, 0, 260);
        gradiante.addColorStop(0, "#01AAF3");
        gradiante.addColorStop(1, "white");
        context.fillStyle = gradiante;
        context.fillRect(0, 0, canvas.width, canvas.height);

    }
    //deteta teclado
    window.addEventListener('keydown', KeyDown);
    var wkey = false;
    var leftKey = false;
    function KeyDown(evt) {
        switch (evt.keyCode) {
            case 37: leftKey = true; rightKey = false;
                break;
            case 87: wkey = true; leftKey = false;
                break;
        }
    }

    var perdeu = false;
    function desenha() {
        var posX = 0;
        var posY = 0;

        //ciclo para colocar as imagens nas posições do mapa
        for (var i = 0; i < map.length; i++) {
            for (var j = inicio; j < map[i].length; j++) {
                var posBloco = posY;
                if (map[i][j] == 1) {
                    context.drawImage(grassL, posX, posY, tilesize, tilesize);
                    if (x + width < posX + 60) {
                        //console.log("está totalmente à esquerda");
                    } else if (x > posX) {
                        //console.log("está totalmente à direita");


                    } else if (y + height < posY) {
                        //console.log("está totalmente acima");
                        isJumping = false;
                        wkey = false;
                        dy = 0;
                        y = posBloco - height;

                    } else if (y > posY + 40) {
                        //console.log("está totalmente abaixo");

                    } else {
                        //console.log("colidiu");
                    }
                }
                if (map[i][j] == 2) {
                    context.drawImage(grassC, posX, posY, tilesize, tilesize);
                }
                if (map[i][j] == 3) {
                    context.drawImage(grassR, posX, posY, 2, tilesize);

                    if (x + width < posX + tilesize) {
                        //console.log("está totalmente à esquerda");
                    } else if (x > posX) {
                        //console.log("está totalmente à direita");
                    } else if (y + height < posY) {
                        //console.log("está totalmente acima");
                    } else if (y > posY + 40) {
                        //console.log("está totalmente abaixo");
                    } else {
                        isJumping = true;
                    }

                }
                if (map[i][j] == 4) {
                    context.drawImage(rocket, posX, posY, 100, 100);
                    if (x + width < posX + 60) {
                        //console.log("está totalmente à esquerda");
                    } else if (x > posX) {
                        //console.log("está totalmente à direita");
                    } else if (y + height < posY) {
                        //console.log("está totalmente acima");
                    } else if (y > posY + 40) {
                        //console.log("está totalmente abaixo");
                    } else {
                        perdeu = true;

                    }
                }
                if (map[i][j] == 5) {
                    context.drawImage(Castle, posX, posY, 500, 450);
                    if (x + 500 < posX + 60) {
                        //console.log("está totalmente à esquerda");
                    } else if (x > posX) {
                        //console.log("está totalmente à direita");
                        perdeu = true;
                    } else if (y < posY) {
                        //console.log("está totalmente acima");
                    } else if (y > posY + 40) {
                        //console.log("está totalmente abaixo");
                    } else {
                        perdeu = true;

                    }
                }
                if (map[i][j] == 6) {
                    context.drawImage(goldBlock, posX, posY, tilesize, tilesize);
                    //deteta colisão do tile 6 com abobora (x e y)
                    //+60 porque as pernas estao no meio da imagem da abobora
                    if (x + width < posX + 60) {
                        //console.log("está totalmente à esquerda");
                    } else if (x > posX) {
                        //console.log("está totalmente à direita");
                    } else if (y + height < posY) {
                        //console.log("está totalmente acima");
                    } else if (y > posY + 40) {
                        //console.log("está totalmente abaixo");
                    } else {
                        perdeu = true;
                    }

                }
                posX += tilesize;


            }
            posX = 0;
            posY += tilesize;
        }

    }

    var isJumping = false;
    var gravity = 1;
    var dy = 0;
    function salta() {
        // how long the jump button can be pressed down

        // jump if not currently jumping or falling
        if (wkey && !isJumping) {
            isJumping = true;
            dy = -20;
        }
        // add gravity
        if (isJumping) {
            imagem = 8;
            dy += gravity;

        }
        y += dy;

        // se toca no chao não cai
        if (y >= 255) {
            dy = 0;
            isJumping = false;
            wkey = false;
            y = 255;
        }
    };


    function aboboraRun() {
        var frameHeight = (abobora.height / 19);
        context.drawImage(abobora, 0, frameHeight * imagem, abobora.width, frameHeight, x, y, width, height);
    }

    var contador1 = 0;
    var fpsA = 2.5;

    function updateAbobora() {

        contador1 += 1;

        if (contador1 > fpsA) {

            contador1 = 0;

            if (imagem <= 7) {
                imagem++;
            }
            else {
                imagem = 1;
            }
        }
    };
    var fpsM = 5;
    var contador2 = 0
    function updateMap() {
        contador2 += 1;
        fundo();
        desenha();
        if (contador2 > fpsM) {

            contador2 = 0;
            inicio++;

        }
    }
    function pontuacao() {
        context.fillStyle = "rgba(229, 100, 9, 1)";
        context.font = "bold 18px Arial";
        context.fillText("Score:" + score, 10, 20);
        localStorage.setItem("ultimoscore", score);
        if (score > highscore) {
            localStorage.setItem("highscore", score);
        }


    }
    function pergunta() {
        var pergunta = Math.floor(Math.random() * 10)
        if (pergunta == 0) {
            var conta = prompt("Bonus 200 points: 144x2=?");
            if (conta == "288") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 1) {
            var conta = prompt("Bonus 200 points: 7x7=?");
            if (conta == "49") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 2) {
            var conta = prompt("Bonus 200 points: 8x8=?");
            if (conta == "64") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 3) {
            var conta = prompt("Bonus 200 points: 9x9=?");
            if (conta == "81") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 4) {
            var conta = prompt("Bonus 200 points: 7x6=?");
            if (conta == "42") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 5) {
            var conta = prompt("Bonus 200 points: 8x6=?");
            if (conta == "48") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 7) {
            var conta = prompt("Bonus 200 points: 9x6=?");
            if (conta == "54") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 8) {
            var conta = prompt("Bonus 200 points: 8x9=?");
            if (conta == "72") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 9) {
            var conta = prompt("Bonus 200 points: 7x4=?");
            if (conta == "28") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
        if (pergunta == 10) {
            var conta = prompt("Bonus 200 points: 8x4=?");
            if (conta == "32") {
                score += 200;
                localStorage.setItem("ultimoscore", score);
                location.reload();
            }
            else {
                location.reload();
            }
        }
    }

    if (start == true) {
        animate();
    }


    function animate() {
        updateMap();
        aboboraRun();
        updateAbobora();
        salta();
        score++;
        pontuacao();

        if (!perdeu) {
            window.requestAnimationFrame(animate);
        }
        if (perdeu) {
            localStorage.setItem("primeiravez", 1);
            pergunta();

        }

    }

    menu();
}



