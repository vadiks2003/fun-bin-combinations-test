document.getElementById("b2").addEventListener("click",ShowBFtextToUser);
let wordarray = [];
let result = "";
	let howmuch;
let whattotypein = "";
let doublestring = "";

function dothestuff()
{
	wordarray = [];
	for(let l = 0; l<howmuch;l++) // колво символов в массив
	{
		wordarray.push(0);
	}
	for(let i = 0; i<26**howmuch; i++) // сколько раз сделать
	{
		
		testnumber(); // проверить кейс  
		for(let i = 0; i <howmuch; i++)	
		{
			whattotypein += switchworde(wordarray[i]); // запись 
			
		}
		doublestring += whattotypein + " ";
		whattotypein = "";
		wordarray[howmuch-1]++;
	}
	let kweq = doublestring;
		doublestring = "";
	return kweq;
}
function testnumber()
{
	for(let countbin = howmuch; countbin>0;countbin--)
	{
		if(wordarray[countbin] == 26)
		{
			wordarray[countbin] = 0;
			wordarray[countbin-1]++;
		}
	}
}
function ShowBFtextToUser()
{
	howmuch = prompt("how much");
	document.getElementById("a254").innerHTML = dothestuff();
	console.log(doublestring.length/(+howmuch+1));
}
function switchworde(switchword){
switch(switchword)
{
    case 0:
	return("A");
    break;
    case 1:
	return("B");
    break;
    case 2:
	return("C");
    break;
    case 3:
	return("D");
    break;
    case 4:
	return("E");
    break;
    case 5:
	return("F");
    break;
    case 6:
	return("G");
    break;
    case 7:
	return("H");
    break;
    case 8:
	return("I");
    break;
    case 9:
	return("J");
    break;
    case 10:
	return("K");
    break;
    case 11:
	return("L");
    break;
    case 12:
	return("M");
    break;
    case 13:
	return("N");
    break;
    case 14:
	return("O");
    break;
    case 15:
	return("P");
    break;
    case 16:
	return("Q");
    break;
    case 17:
	return("R");
    break;
    case 18:
	return("S");
    break;
    case 19:
	return("T");
    break;
    case 20:
	return("U");
    break;
    case 21:
	return("V");
    break;
    case 22:
	return("W");
    break;
    case 23:
	return("X");
    break;
    case 24:
	return("Y");
    break;
    case 25:
	return("Z");
    break;
	default:
	return("not a number");
}}