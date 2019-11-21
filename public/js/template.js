$("#block0").show();
$("#block99").hide();

$("#entrar").click(function () {
	$("#block0").hide();
	$("#block1").show();
});

$("#suscribir").click(function () {
	$("#block1").hide();
	$("#block2").show();
});

$("#comprar").click(function () {
	$("#block2").hide();
	$("#block3").show();
});

$("#juego1").click(function () {
	$("#block3").hide();
	$("#block4").show();
});

$("#juego2").click(function () {
	$("#block3").hide();
	$("#block4").show();
});

$("#juego3").click(function () {
	$("#block3").hide();
	$("#block4").show();
});

$("#juego4").click(function () { //pagina de slots
	$("#block3").hide();
	$("#block4").show();
});

$("#imgLogo").click(function () {
	$("#block1").hide();
	$("#block2").hide();
	$("#block3").hide();
	$("#block4").hide();
	$("#block99").hide();
	$("#block0").show();
});

//Botones x10 x50 x100

$("#ap10").click(function () {
	$("#ap10").css("background-color", "orange");
	$("#ap50").css("background-color", "black");
	$("#ap100").css("background-color", "black");
});
$("#ap50").click(function () {
	$("#ap10").css("background-color", "black");
	$("#ap50").css("background-color", "orange");
	$("#ap100").css("background-color", "black");
});
$("#ap100").click(function () {
	$("#ap10").css("background-color", "black");
	$("#ap50").css("background-color", "black");
	$("#ap100").css("background-color", "orange");
});

$("#salir").click(function () {
	$("#block4").hide();
	$("#block5").show();
});

$("#end").click(function () {
	$("#block1").hide();
	$("#block2").hide();
	$("#block3").hide();
	$("#block4").hide();
	$("#block0").hide();
	$("#block99").show();
});