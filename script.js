let player1 = true;
let player2 = false;
let choice1 = null;
let choice2 = null;
let info = document.querySelector(".info")
let choice1Div = document.querySelector(".choice-player-1")
let choice2Div = document.querySelector(".choice-player-2")

document.addEventListener("keydown", function(arg){
	console.log(arg);
	if(player1 == true && player2 == false){
		if(arg.code == "KeyA"){
			console.log("kamen");
			player1 = false;
			player2 = true;
			choice1 = "Камень"
			info.innerHTML = "Игрок 2 ходит!"

		}

		else if(arg.code == "KeyS"){
			console.log("nojnici");
			player1 = false;
			player2 = true;
			choice1 = "Ножницы"
			info.innerHTML = "Игрок 2 ходит!"
		}

		else if(arg.code == "KeyD"){
			console.log("bumaga");
			player1 = false;
			player2 = true;
			choice1 = "Бумага"
			info.innerHTML = "Игрок 2 ходит!"
		}
	}

	if(player2 == true && player1 == false){
		if(arg.code == "KeyJ"){
			console.log("kamen");
			player2 = false;
			choice2 = "Камень"

			

			setTimeout(vibor, 500)
			setTimeout(result, 1000)
		}

		else if(arg.code == "KeyK"){
			console.log("nojnicy");
			player2 = false;
			choice2 = "Ножницы"



			setTimeout(vibor, 500)
			setTimeout(result, 1000)
		}

		else if(arg.code == "KeyL"){
			console.log("bumaga");
			player2 = false;
			choice2 = "Бумага"
			


			setTimeout(vibor, 500)
			setTimeout(result, 1000)
		}
	}
})

			function vibor(){
				if(choice1 == "Камень"){
					choice1Div.style.backgroundColor = "gray"
				}
				else if(choice1 == "Ножницы"){
					choice1Div.style.backgroundColor = "orange"
				}
				else if(choice1 == "Камень"){
					choice1Div.style.backgroundColor = "white"
				}

				if(choice2 == "Камень"){
					choice2Div.style.backgroundColor = "gray"
				}
				else if(choice2 == "Ножницы"){
					choice2Div.style.backgroundColor = "orange"
				}
				else if(choice2 == "Бумага"){
					choice2Div.style.backgroundColor = "white"
				}
			}

			function result(){
				if(choice1 == "Камень" && choice2 == "Ножницы"){
					alert("Выиграл 1 игрок!")
				}
				else if(choice1 == "Камень" && choice2 == "Бумага"){
					alert("Выиграл 2 игрок!")
				}
				else if(choice1 == "Ножницы" &&choice2 == "Камень"){
					alert("Выиграл 2 игрок!")
				}
				else if(choice1 == "Ножницы" && choice2 == "Бумага"){
					alert("Выиграл 1 игрок!")
				}
				else if(choice1 == "Бумага" && choice2 == "Камень"){
					alert("Выиграл 1 игрок!")
				}
				else if(choice1 == "Бумага" && choice2 == "Ножницы"){
					alert("Выиграл 2 игрок!")
				}
			}

