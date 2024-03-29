var names=new Array();
var names = ["Jasmine", "Oliver", "Liam", "Jennifer", "Eva", "Max", "Julia", "Nathan", "Lucy", "Jack"];

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}