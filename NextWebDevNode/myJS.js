$(document).ready(function(){
    $("#button1").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
    });
});

player = 1
red11 = []
blue11 = []

$(document).ready(function(){
    //1.1
    $("#bt").click(function(){
        if(player==1){    
            $("#bt").parents("td").css({"color": "red", "border": "2px solid red"});
            //$("#bt")(".tac").css({"background-color": "red"});
            $("#xo").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt').disabled = true;
            box11 = 1
        }else{
            $("#bt").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo").load("txtFiles/x.txt");
            $("#bt").css({"color": "black"});
            player = 1
            document.querySelector('#bt').disabled = true;
            $("#bt").css({"color": "black"});
            box11 = 2
        }   
    });
    //1.2
    $("#bt1").click(function(){
            $("#bt1").parents("td").css({"color": "red", "border": "2px solid red"});
        if(player==1){    
            $("#xo1").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt1').disabled = true;
            box12 = 1
        }else{
            //$("#bt").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo1").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt1').disabled = true;
            box12 = 2
        }
    });
    //1.3
    $("#bt2").click(function(){
        if(player==1){    
            $("#bt2").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo2").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt2').disabled = true;
            box13 = 1
        }else{
            $("#bt2").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo2").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt2').disabled = true;
            box13 = 2
        }
    });
    //2.1
    $("#bt3").click(function(){
        if(player==1){    
            $("#bt3").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo3").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt3').disabled = true;
            box21 = 1
        }else{
            $("#bt3").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo3").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt3').disabled = true;
            box21 = 2
        }
    });
    //2.2
    $("#bt4").click(function(){
        if(player==1){    
            $("#bt4").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo4").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt4').disabled = true;
            box22 = 1
        }else{
            $("#bt4").parents("td").css({"color": "blue", "border": "2px solid blue", });
            $("#xo4").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt4').disabled = true;
            box22 = 2
        }
    });


});



//2.3
$(document).ready(function(){
    $("#bt5").click(function(){
        if(player==1){    
            $("#bt5").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo5").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt5').disabled = true;
            box23 = 1
        }else{
            $("#bt5").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo5").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt5').disabled = true;
            box23 = 2
        }
    });
});
//3.1
$(document).ready(function(){
    $("#bt6").click(function(){
        if(player==1){    
            $("#bt6").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo6").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt6').disabled = true;
            box31 = 1
        }else{
            $("#bt6").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo6").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt6').disabled = true;
            box31 = 2
        }
    });
});
//3.2
$(document).ready(function(){
    $("#bt7").click(function(){
        if(player==1){    
            $("#bt7").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo7").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt7').disabled = true;
            box32 = 1
        }else if(player==2){
            $("#bt7").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo7").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt7').disabled = true;
            box32 = 2
        }
    });
});
//3.3
$(document).ready(function(){
    $("#bt8").click(function(){
        if(player==1){    
            $("#bt8").parents("td").css({"color": "red", "border": "2px solid red"});
            $("#xo8").load("txtFiles/o.txt");
            player = 2
            document.querySelector('#bt8').disabled = true;
            box33 = 1
        }else{
            $("#bt8").parents("td").css({"color": "blue", "border": "2px solid blue"});
            $("#xo8").load("txtFiles/x.txt");
            player = 1
            document.querySelector('#bt8').disabled = true;
            box33 = 2
        }
    });
    if (box11 == box12 && box12 == box13) {
        document.getElementById("gameWinner").innerHTML = xwins;
    }
});

if(box11 == 1 && box12 == 1 && box13 == 1){
    
}

if (box11 == box12 && box12 == box13) {
    document.getElementById("gameWinner").innerHTML = "xwins";
}
/*$(document).ready(function(){
    $("#bt1").click(function(){
        $("#bt1").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});

$(document).ready(function(){
    $("#bt2").click(function(){
        $("#bt2").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt3").click(function(){
        $("#bt3").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt4").click(function(){
        $("#bt4").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt5").click(function(){
        $("#bt5").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt6").click(function(){
        $("#bt6").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt7").click(function(){
        $("#bt7").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
$(document).ready(function(){
    $("#bt8").click(function(){
        $("#bt8").parents("td").css({"color": "red", "border": "2px solid red"});
    });
});
*/