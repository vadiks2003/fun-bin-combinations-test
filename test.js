"use strict"
let resultelel;
let publicforamount;
function commitbincount()
{
	let binumber = [];
	let foramount = prompt("how much bit?");
	publicforamount = foramount;
	if (isNaN(+foramount))
	{
		return "no strings";
	}
	else if ((foramount!=Math.floor(foramount)))
	{
		return "normal numbers only";
	}
	else if(foramount>0)
	{
		for(let l = 0; l<foramount;l++)
		{
			binumber.push(0);
		}
		let thearray = "";
		for(let i = 0; i<2**foramount; i++)
		{
			testnumber();
			let whattotypein = "";
			for(let i = 0; i <foramount; i++)
			{whattotypein += binumber[i].toString();
		}
		whattotypein += " ";
		binumber[foramount-1]++;
		thearray += whattotypein;
		}
		function testnumber()
		{
			for(let countbin = foramount; countbin>0;countbin--)
			{
				if(binumber[countbin] == 2)
				{
					binumber[countbin] = 0;
					binumber[countbin-1]++;
				}
			}
		}
		return thearray;
	}
	else if (foramount<0)
	{
		return "no less than 0"
	}
	else if (foramount == "")
	{
		return "put in a number for real..."
	}
	else if (foramount == 0)
	{
		return "no zero";
	}
	else
	{
		return "unknown error";
	}
}
function ShowBINtextToUser()
{
	resultelel = commitbincount();
	 document.getElementById("a252").innerHTML = resultelel;
}
document.getElementById("b0").addEventListener("click",ShowBINtextToUser);


	let dumb = 0;
function commitbintohex()
{
	let stringhexres = "";
	let stringres = "";
	let count = 0;
	let string = resultelel;
	if (publicforamount == 0)
	{
		return "no 0";
	}
	else if(publicforamount%4 == 0 )
	{
		for(let k = 0; k < string.length/(+publicforamount+1);k++)
		{
			for(let l = 0; l<(publicforamount/4-(1/publicforamount%4));l++)
			{
				for(let i = 0; i<4;i++)
				{
					stringres += string[count];
					count++;
				}
				stringhexres += hexres(stringres);
				stringres = "";
			}
			count++;
			stringhexres += " ";
			
		}
		return "tuned into HEX: " + stringhexres;
	}
	else if(publicforamount%4 > 0)
	{
		return "cannot be done, number can't be divided by 4 or is not a number at all lol";
	}
	else if (publicforamount == undefined)
	{
		dumb++;
		switch(dumb)
		{
		case 0:
			return "again";
		case 1:
			return "press binary";
		case 2:
			return "i said binary";
		case 3:
			return "bi-na-ry its a button out there";
		case 4:
			return "YOU'RE REALLY STARTING TO PISS ME OFF";
		case 5:
			return "binary.";
		case 10:
			dumb = 0;
			return("...");
		case undefined:
			return "wat";
		default: 
			return "binary";
		}
	}
	else
	{
		return "wrong calculation"
	}
}

function ShowHEXtextToUser()
{
	document.getElementById("a253").innerHTML = commitbintohex();
}
document.getElementById("b1").addEventListener("click",ShowHEXtextToUser);



function hexres(hexswitch)
{
switch(hexswitch)
{
    case "0000":
	return("0");
	break;
    case "0001":
	return("1");
    break;
    case "0010":
	return("2");
    break;
    case "0011":
	return("3");
    break;
    case "0100":
	return("4");
    break;
    case "0101":
	return("5");
    break;
    case "0110":
	return("6");
    break;
    case "0111":
	return("7");
    break;
    case "1000":
	return("8");
    break;
    case "1001":
	return("9");
    break;
    case "1010":
	return("A");
    break;
    case "1011":
	return("B");
    break;
    case "1100":
	return("C");
    break;
	case "1101":
	return("D");
    break;
    case "1110":
	return("E");
    break;
    case "1111":
	return("F");
    break;
    default:
	console.log("your " + hexswitch + " is not a binary, Z = it");
    return ("Z");
break;
}
}