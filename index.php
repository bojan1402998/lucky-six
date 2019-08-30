<!DOCTYPE html>
<html>
<head>
	<title>BINGO</title>
	<link rel="stylesheet" href="style.css">
	<script src="function.js"></script>
</head>
<body>
<div id='okvir'><h1>Dobrodosli u mali BINGO</h1>

<div id='forma_ulaza'>
	<button id='dugme' onclick="clear_field()" >Unesi svoje brojeve!</button><br>
		Brojevi:
		<input  type="number" id="br1" min="1" max="49">
		<input type="number" id="br2" min="1" max="49">
		<input type="number" id="br3" min="1" max="49">
		<input type="number" id="br4" min="1" max="49">
		<input type="number" id="br5" min="1" max="49">
		<input type="number" id="br6" min="1" max="49"><br>
	<button id='dugme' onclick="validate()" >Potvrdi</button>
<div id='error_space'></div>

		
	
	
</div>
<div id='izvlacenje' >
</div>

</div>



</body>
</html>