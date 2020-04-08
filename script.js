
var last_increment; var last_points; 

function pressed(e){
	
	//116 = T = TOGGLE TOOLTIP
	if (e.keyCode == 116){
		z = document.getElementById('alert_box')
		if (tooltip_on){
			tooltip_on = false;
			z.innerHTML = "Tooltip off"
		}else{tooltip_on = true;z.innerHTML = "Tooltip on"}
		z.style.display = "block";
		z.style.top = 0;
		window.setTimeout(function(){document.getElementById('alert_box').style.display="none"},2000)
	}

	//114 = R = REFRESH
	if (e.keyCode == 114){window.location.reload();	}
	
	//45 = - = SUBTRACK INCREMENT
	if (e.keyCode == 45){		increment(last_increment, last_points, "subtract")	}

}

function mo(item,name){
	curitem = item.style.backgroundImage;
	x = curitem.split('/');
	item.style.backgroundImage = x[0] + '/' + x[1] + '_hover' + '/' + x[2];
	zyo = 15;
	if (tooltip_on == false){return true;}else{
		z = document.getElementById('alert_box')

		if (name == 'w1')   {z.innerHTML = ""; zy = 36+zyo;}
		if (name == '1-5')  {z.innerHTML = "1-5 Tunnel Trick = 0.5 points (Without taking damage or if small mario no death)"; zy = 36+zyo;}
		if (name == 'all')  {z.innerHTML = ""; zy = 36+zyo;}

		if (name == 'w2')   {z.innerHTML = ""; zy = 72+zyo;}
		if (name == '2-2')  {z.innerHTML = "2-2 292 enter pipe = 0.5 points"; zy = 72+zyo;}
		if (name == '2-C')  {z.innerHTML = "World 2 boss fire kill: Timer 221-222 = 0.5 points"; zy = 72+zyo;}
		if (name == 'A2')   {z.innerHTML = "Use no \"inventory\" stars = 0.5 points"; zy = 72+zyo;}

		if (name == 'w3')   {z.innerHTML = ""; zy = 108+zyo;}
		if (name == '3-1')  {z.innerHTML = "3-1 Single Frame Jump at the start = 0.5 points"; zy = 108+zyo;}
		if (name == '3-F1') {z.innerHTML = "Door 3 = 0.5 point (1 try only)"; zy = 108+zyo;}
		if (name == '3-C')  {z.innerHTML = "Kill Wendy with a time of exactly 210 while all 3 rings are out= 0.5 points"; zy = 108+zyo;}
		if (name == 'A3')   {z.innerHTML = "Deathless = 1 point"; zy = 108+zyo;}

		if (name == 'w4')   {z.innerHTML = ""; zy = 144+zyo;}
		if (name == '4-F1') {z.innerHTML = "World 4-Fort 1, 288 in game timer = 0.5 points"; zy = 144+zyo;}
		if (name == '4-A')  {z.innerHTML = "Fighting world 4 star bro= -0.5 points "; zy = 144+zyo;}
		if (name == 'A4')   {z.innerHTML = "Deaths (each)= -0.5 points"; zy = 144+zyo;}

		if (name == 'w5')   {z.innerHTML = ""; zy = 180+zyo;}
		if (name == '5-2')  {z.innerHTML = "Fall down the shaft in level 5-2 = -0.5 points"; zy = 180+zyo;}
		if (name == '5-F2') {z.innerHTML = "Jesus Clip = 3 points (1 try only)"; zy = 180+zyo;}
		if (name == '5-A')  {z.innerHTML = "5-World No moves of 4 = 0.5 points"; zy = 180+zyo;}
		if (name == 'A5')   {z.innerHTML = "Any triple card fanfare (each)  = -0.5 points"; zy = 180+zyo;}

		if (name == 'w6')   {z.innerHTML = ""; zy = 216+zyo;}
		if (name == '6-3')  {z.innerHTML = "Keep first fire flower from world 1 to world 6-Fort 1 = 3 points"; zy = 216+zyo;}
		if (name == '6-9')  {z.innerHTML = "6-9 Wall jump first try =  0.5 points"; zy = 216+zyo;}
		if (name == '6-F3') {z.innerHTML = "6-Fort 3 Floor Clip = 1.5 points (1 try only)"; zy = 216+zyo;}
		if (name == 'A6')   {z.innerHTML = "Over 1 hour = -1 point and your run ends."; zy = 216+zyo;}

		if (name == 'w7')   {z.innerHTML = ""; zy = 252+zyo;}
		if (name == '7-1')  {z.innerHTML = "7-1 Clip first try = 0.5 points"; zy = 252+zyo;}
		if (name == '7-6')  {z.innerHTML = "7-6 First try= 0.5 points"; zy = 252+zyo;}
		if (name == '7-7')  {z.innerHTML = "7-7 Clip = 1 point"; zy = 252+zyo;}
		if (name == '7-9')  {z.innerHTML = "7-9 Clips 2 and 3 first try (of the bottom 4) = 1.5 points"; zy = 252+zyo;}
		if (name == 'A7')   {z.innerHTML = "Coinship (each, simply spawning it) = -0.5 points"; zy = 252+zyo;}

		if (name == 'w8')   {z.innerHTML = ""; zy = 288+zyo;}
		if (name == '8-T1') {z.innerHTML = "No Hands = 0.5pt"; zy = 288+zyo;}
		if (name == '8-T1b'){z.innerHTML = "World 8 Tank 1 rangless fire kill = 0.5 points"; zy = 288+zyo;}
		if (name == 'A8')   {z.innerHTML = "Offscreen Wand Grab (each, only in worlds 2, 4, 5, 7  No P wings) = 1.5 points"; zy = 288+zyo;}

		if (name == 'bc')   {z.innerHTML = ""; zy = 216+zyo;}
		if (name == 'BC-1') {z.innerHTML = "Elevator Skip Clip first try (Bowser’s Castle) = 0.5 points"; zy = 216+zyo;}
		if (name == 'BC-2') {z.innerHTML = "Basement route with Hammer Suit wall clip within 2 attempts = 0.5 points "; zy = 216+zyo;}
		if (name == 'BC-3') {z.innerHTML = "EITHER: Kill bowser with same hammer suit from world 7 = 1 point, OR Kill bowser with same fire flower (before the airship) from World 7 = 1 point"; zy = 144+zyo;}
		if (name == 'A9')   {z.innerHTML = ""; zy = 216+zyo;}
		

		if (name == 't51') {z.innerHTML = "00:00--50:59 time = 4 points"; zy = 216+zyo;}
		if (name == 't52') {z.innerHTML = "51:00--51:59 time = 3 points"; zy = 216+zyo;}
		if (name == 't54') {z.innerHTML = "52:00--53:59 time = 2 points "; zy = 216+zyo;}
		if (name == 't60') {z.innerHTML = "54:00--59:59 time = 1 point"; zy = 144+zyo;}

		z.style.top = zy;
		z.style.display = "block"
	}

}

function ml(item, name){
	curitem = item.style.backgroundImage;
	x = curitem.split('/');
	item.style.backgroundImage = x[0] + '/' + x[1].split('_')[0] + '/' + x[2];
	document.getElementById('alert_box').style.display = "none";
}

function toggle_active(item, xpoints){
	curitem = item.style.backgroundImage;
	points = parseFloat(document.getElementById('score').innerHTML);
	x = curitem.split('/');
	switch(x[1].split('_')[0]){
		case 'default':
		nfold = 'active';
		points = points + parseFloat(xpoints);
		break;
		case 'active':
		nfold = 'default';
		points = points - parseFloat(xpoints);
		break;
		case 'inactive':
		nfold = 'active';
		points = parseFloat(points);
		break;
	}
	document.getElementById('score').innerHTML = points;
	item.style.backgroundImage = x[0] + '/' + nfold + '/' + x[2];
}

function increment(item, xpoints, direction){

	last_increment = item;
	last_points = xpoints;
	curitem = item.style.backgroundImage;
	points = parseFloat(document.getElementById('score').innerHTML);
	x = curitem.split('/');


	//get current ammount
	if (item.innerHTML == ""){
		cur_score = "x0"
	}
	else
	{
		cur_score = item.innerHTML;
	}
	cur_score = parseInt(cur_score.slice(1));


	if (direction == "add"){
		new_score = cur_score + 1;
		points = points + parseFloat(xpoints);
	}

	if (direction == "subtract"){
		if (cur_score >=1){	new_score = cur_score - 1 ;}else {new_score = 0; xpoints = 0;}
		points = points - parseFloat(xpoints);
	}

	new_score_text = "x" + new_score;

	if (new_score == 0){
		item.innerHTML = "";
		
		item.style.backgroundImage = x[0] + '/' + "default" + '/' + x[2];
	}
	else{
		item.innerHTML = new_score_text;
		item.style.backgroundImage = x[0] + '/' + "active" + '/' + x[2];
	}
	
	document.getElementById('score').innerHTML = points;

}


function changeplace(item){
	points = parseFloat(document.getElementById('score').innerHTML);

	if(item.style.backgroundImage == 'url("images/1st.png")')
	{
		item.style.backgroundImage = 'url("images/2nd.png")';
		// document.getElementById('score').innerHTML  = points -1;
	}
	else
		{
			item.style.backgroundImage = 'url("images/1st.png")';
			// document.getElementById('score').innerHTML  = points +1;
		}
}