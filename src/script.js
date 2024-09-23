var n = 0;
var score = 0;
var miss = 0;
var hit = 0;

var time = 0;
var start = 0;

let notes = {
	"one": {},
	"two": {},
	"tre": {},
	"for": {}
};
let sqnce = {
    "720": [
        1
    ],
    "2473": [
        4
    ],
    "4324": [
        2,
        3
    ],
    "6135": [
        1,
        4
    ],
    "7744": [
        1
    ],
    "9865": [
        4
    ],
    "11750": [
        3
    ],
    "15162": [
        4,
        1
    ],
    "15507": [
        3
    ],
    "15735": [
        2
    ],
    "16008": [
        4
    ],
    "16285": [
        1
    ],
    "16507": [
        3
    ],
    "16692": [
        2
    ],
    "16913": [
        4
    ],
    "17167": [
        4
    ],
    "17429": [
        3
    ],
    "17664": [
        3
    ],
    "17924": [
        1
    ],
    "18180": [
        1
    ],
    "18392": [
        2
    ],
    "18577": [
        2
    ],
    "18814": [
        4
    ],
    "19051": [
        3
    ],
    "19240": [
        1
    ],
    "19503": [
        2
    ],
    "19731": [
        4
    ],
    "19951": [
        3
    ],
    "20208": [
        3
    ],
    "20461": [
        3
    ],
    "20695": [
        2
    ],
    "20922": [
        3
    ],
    "21146": [
        1
    ],
    "21360": [
        4
    ],
    "21572": [
        2
    ],
    "21792": [
        3
    ],
    "22066": [
        1
    ],
    "22299": [
        3
    ],
    "22550": [
        2
    ],
    "22978": [
        2,
        3
    ],
    "23304": [
        4
    ],
    "23516": [
        1
    ],
    "23708": [
        3
    ],
    "23886": [
        2
    ],
    "24126": [
        4
    ],
    "24406": [
        3,
        1
    ],
    "24688": [
        4
    ],
    "25190": [
        2
    ],
    "25364": [
        3
    ],
    "25524": [
        1
    ],
    "25664": [
        4
    ],
    "25861": [
        2
    ],
    "26037": [
        3
    ],
    "26256": [
        4
    ],
    "26473": [
        4
    ],
    "26664": [
        1
    ],
    "26901": [
        3
    ],
    "27143": [
        2
    ],
    "27417": [
        4
    ],
    "27650": [
        1
    ],
    "27884": [
        3
    ],
    "28068": [
        2
    ],
    "28325": [
        4
    ],
    "28608": [
        3,
        2
    ],
    "29053": [
        4
    ],
    "29291": [
        1
    ],
    "29556": [
        3
    ],
    "29739": [
        2
    ],
    "30072": [
        4
    ],
    "30410": [
        1
    ],
    "30651": [
        3
    ],
    "30862": [
        2
    ],
    "31126": [
        4
    ],
    "31373": [
        1
    ],
    "31589": [
        3
    ],
    "31800": [
        2,
        4
    ],
    "32189": [
        3
    ],
    "32468": [
        3
    ],
    "32694": [
        1
    ],
    "33028": [
        3
    ],
    "33325": [
        2
    ],
    "33501": [
        4
    ],
    "33763": [
        4
    ],
    "34014": [
        4
    ],
    "34233": [
        2
    ],
    "34375": [
        3
    ],
    "34613": [
        1
    ],
    "34824": [
        4
    ],
    "35053": [
        2
    ],
    "35288": [
        3
    ],
    "35554": [
        3
    ],
    "35837": [
        1
    ],
    "36094": [
        4
    ],
    "36277": [
        2
    ],
    "36494": [
        4
    ],
    "36687": [
        1
    ],
    "36903": [
        3
    ],
    "37121": [
        2
    ],
    "37397": [
        4
    ],
    "37892": [
        4
    ],
    "38122": [
        4
    ],
    "38333": [
        1
    ],
    "38516": [
        3
    ],
    "38726": [
        2
    ],
    "38981": [
        4
    ],
    "39266": [
        3
    ],
    "39520": [
        2
    ],
    "39829": [
        3
    ],
    "40034": [
        1
    ],
    "40220": [
        4
    ],
    "40431": [
        2
    ],
    "40641": [
        3
    ],
    "41076": [
        2,
        3
    ],
    "41357": [
        3
    ],
    "41565": [
        1
    ],
    "41877": [
        4
    ],
    "42074": [
        2
    ],
    "42257": [
        3
    ],
    "42449": [
        2
    ],
    "42751": [
        3
    ],
    "43005": [
        2,
        3
    ],
    "43431": [
        1
    ],
    "43678": [
        3
    ],
    "43860": [
        2
    ],
    "44112": [
        4
    ],
    "44327": [
        1
    ],
    "45284": [
        2,
        3
    ],
    "45763": [
        3,
        2
    ],
    "46229": [
        2,
        3
    ],
    "46702": [
        3
    ],
    "47195": [
        2
    ],
    "47613": [
        3
    ],
    "48033": [
        2
    ],
    "48520": [
        4
    ],
    "48995": [
        1
    ],
    "49481": [
        4
    ],
    "49921": [
        1
    ],
    "50453": [
        3
    ],
    "50871": [
        2
    ],
    "51363": [
        2
    ],
    "51815": [
        2
    ],
    "52230": [
        4
    ],
    "52732": [
        1
    ],
    "53183": [
        4
    ],
    "53639": [
        1
    ],
    "54188": [
        3
    ],
    "54557": [
        2
    ],
    "55001": [
        3
    ],
    "55461": [
        2
    ],
    "55942": [
        4
    ],
    "56446": [
        1
    ],
    "56886": [
        4
    ],
    "57386": [
        1
    ],
    "57879": [
        2
    ],
    "58338": [
        3
    ],
    "58776": [
        4
    ],
    "60859": [
        2
    ],
    "61657": [
        4
    ],
    "62074": [
        1
    ],
    "62432": [
        3
    ],
    "63322": [
        2
    ],
    "63641": [
        3
    ],
    "64047": [
        1
    ],
    "64980": [
        4
    ],
    "65400": [
        2
    ],
    "65818": [
        3
    ],
    "66852": [
        1
    ],
    "67676": [
        2
    ],
    "68091": [
        3
    ],
    "68521": [
        4
    ],
    "68951": [
        1
    ],
    "69502": [
        2
    ],
    "69863": [
        3
    ],
    "70339": [
        4
    ],
    "70821": [
        1
    ],
    "71278": [
        2
    ],
    "71719": [
        3
    ],
    "72382": [
        4
    ],
    "72721": [
        1
    ],
    "73174": [
        2
    ],
    "73621": [
        3
    ],
    "74067": [
        4
    ],
    "74702": [
        2
    ],
    "75084": [
        3
    ],
    "75314": [
        1
    ],
    "75573": [
        4
    ],
    "75784": [
        2
    ],
    "76018": [
        3
    ],
    "76242": [
        1
    ],
    "76464": [
        3
    ],
    "76734": [
        2
    ],
    "76954": [
        4
    ],
    "77272": [
        1
    ],
    "77461": [
        3
    ],
    "77616": [
        2
    ],
    "77862": [
        4
    ],
    "78046": [
        1
    ],
    "78318": [
        3
    ],
    "78810": [
        4
    ],
    "79067": [
        1
    ],
    "79294": [
        3
    ],
    "79482": [
        2
    ],
    "79690": [
        4
    ],
    "80009": [
        2
    ],
    "80226": [
        3
    ],
    "80568": [
        2
    ],
    "80775": [
        4
    ],
    "81001": [
        1
    ],
    "81229": [
        3
    ],
    "81446": [
        2
    ],
    "81671": [
        3
    ],
    "81970": [
        3,
        2
    ],
    "82349": [
        4
    ],
    "82708": [
        1
    ],
    "82915": [
        3
    ],
    "83119": [
        2
    ],
    "83337": [
        4
    ],
    "83554": [
        1
    ],
    "83725": [
        3
    ],
    "83915": [
        2
    ],
    "84122": [
        4
    ],
    "84342": [
        3
    ],
    "84600": [
        1
    ],
    "84830": [
        4
    ],
    "85020": [
        2
    ],
    "85250": [
        3
    ],
    "85508": [
        1
    ],
    "85791": [
        2,
        3
    ],
    "86064": [
        4
    ],
    "86293": [
        2
    ],
    "86484": [
        3
    ],
    "86683": [
        1
    ],
    "86869": [
        4
    ],
    "87101": [
        2
    ],
    "87287": [
        3
    ],
    "87609": [
        4,
        1
    ],
    "88061": [
        3
    ],
    "88328": [
        2
    ],
    "88551": [
        4
    ],
    "88762": [
        1
    ],
    "88939": [
        3
    ],
    "89142": [
        2
    ],
    "89894": [
        2,
        3
    ],
    "90150": [
        4
    ],
    "90421": [
        2
    ],
    "90638": [
        3
    ],
    "90873": [
        1
    ],
    "91067": [
        4
    ],
    "91327": [
        2
    ],
    "91565": [
        3
    ],
    "91788": [
        4
    ],
    "92068": [
        4
    ],
    "92289": [
        3
    ],
    "92530": [
        2
    ],
    "92792": [
        4
    ],
    "93007": [
        1
    ],
    "93227": [
        3
    ],
    "93474": [
        2
    ],
    "93692": [
        4
    ],
    "93946": [
        1
    ],
    "94171": [
        3
    ],
    "94398": [
        2
    ],
    "94625": [
        4
    ],
    "94965": [
        2
    ],
    "95168": [
        3
    ],
    "95441": [
        2
    ],
    "95605": [
        4
    ],
    "95775": [
        1
    ],
    "95974": [
        3
    ],
    "96203": [
        2
    ],
    "96405": [
        4
    ],
    "96611": [
        1
    ],
    "96905": [
        2,
        3
    ],
    "97350": [
        4
    ],
    "97626": [
        1
    ],
    "97847": [
        3
    ],
    "98129": [
        1
    ],
    "98311": [
        4
    ],
    "98742": [
        3,
        4,
        1
    ],
    "99083": [
        3
    ],
    "99278": [
        1
    ],
    "99590": [
        2
    ],
    "99766": [
        4
    ],
    "99993": [
        1
    ],
    "100188": [
        3
    ],
    "100420": [
        2
    ],
    "100653": [
        4
    ],
    "100899": [
        2
    ],
    "101157": [
        4
    ],
    "101440": [
        3
    ],
    "101653": [
        1
    ],
    "101993": [
        3
    ],
    "102176": [
        2
    ],
    "102475": [
        4
    ],
    "102759": [
        2
    ],
    "103000": [
        3
    ],
    "103202": [
        1
    ],
    "103420": [
        4
    ],
    "103693": [
        2
    ],
    "103937": [
        3
    ],
    "104832": [
        2,
        3
    ],
    "105289": [
        4
    ],
    "105804": [
        3,
        1
    ],
    "106273": [
        3
    ],
    "106759": [
        2
    ],
    "107166": [
        4
    ],
    "107644": [
        3
    ],
    "108078": [
        2,
        3
    ],
    "108526": [
        3
    ],
    "109022": [
        1
    ],
    "109521": [
        4
    ],
    "109928": [
        2
    ],
    "110389": [
        3
    ],
    "110873": [
        1
    ],
    "111363": [
        2
    ],
    "111768": [
        4
    ],
    "112289": [
        3
    ],
    "112585": [
        2
    ],
    "112825": [
        3
    ],
    "113067": [
        1
    ],
    "113218": [
        3
    ],
    "113458": [
        2
    ],
    "113672": [
        4
    ],
    "114145": [
        3
    ],
    "114582": [
        1
    ],
    "115022": [
        2
    ],
    "115478": [
        3,
        2
    ],
    "115953": [
        4
    ],
    "116452": [
        2
    ],
    "116863": [
        1
    ],
    "117394": [
        3
    ],
    "117884": [
        2
    ],
    "118318": [
        4
    ],
    "118758": [
        3
    ],
    "119701": [
        1
    ],
    "119985": [
        2
    ],
    "120209": [
        3
    ],
    "120454": [
        4
    ],
    "120720": [
        1
    ],
    "121242": [
        2
    ],
    "121615": [
        3
    ],
    "122066": [
        4
    ],
    "122496": [
        3
    ],
    "122988": [
        1,
        4
    ],
    "123442": [
        3
    ],
    "123936": [
        2
    ],
    "124397": [
        3
    ],
    "124849": [
        2
    ],
    "125283": [
        1
    ],
    "125739": [
        2
    ],
    "126230": [
        3
    ],
    "126676": [
        4
    ],
    "127156": [
        2
    ],
    "127399": [
        3
    ],
    "127613": [
        2
    ],
    "127863": [
        3
    ],
    "128090": [
        2
    ],
    "128334": [
        3
    ],
    "128538": [
        2
    ],
    "128778": [
        4
    ],
    "129031": [
        2
    ],
    "129239": [
        4
    ],
    "129466": [
        2
    ],
    "129669": [
        4
    ],
    "129931": [
        2
    ],
    "130167": [
        4
    ],
    "130367": [
        2
    ],
    "130686": [
        3
    ],
    "130862": [
        1
    ],
    "131098": [
        3
    ],
    "131385": [
        1
    ],
    "131609": [
        3
    ],
    "131863": [
        1
    ],
    "132082": [
        3
    ],
    "132318": [
        2
    ],
    "132540": [
        4
    ],
    "134638": [
        2
    ],
    "134844": [
        3
    ],
    "135119": [
        2
    ],
    "135338": [
        3
    ],
    "135648": [
        2
    ],
    "135820": [
        3
    ],
    "136049": [
        2
    ],
    "136298": [
        3
    ],
    "136494": [
        2
    ],
    "136706": [
        3
    ],
    "136957": [
        2
    ],
    "137234": [
        3
    ],
    "137391": [
        2
    ],
    "137687": [
        3
    ],
    "137947": [
        2
    ],
    "138172": [
        3
    ],
    "138377": [
        2
    ],
    "138614": [
        3
    ],
    "138833": [
        2
    ],
    "139073": [
        3
    ],
    "139322": [
        2
    ],
    "139544": [
        3
    ],
    "139774": [
        2
    ],
    "139984": [
        3
    ],
    "140224": [
        2
    ],
    "140431": [
        3
    ],
    "140651": [
        2
    ],
    "140851": [
        3
    ],
    "141107": [
        2
    ],
    "141238": [
        3
    ],
    "142051": [
        1
    ],
    "142262": [
        2
    ],
    "142499": [
        3
    ],
    "142774": [
        4
    ],
    "143013": [
        1
    ],
    "143174": [
        2
    ],
    "143464": [
        3
    ],
    "143710": [
        4
    ],
    "143953": [
        1
    ],
    "144184": [
        2
    ],
    "144396": [
        3
    ],
    "144644": [
        4
    ],
    "144908": [
        1
    ],
    "145127": [
        2
    ],
    "145351": [
        3
    ],
    "145579": [
        4
    ],
    "145827": [
        1
    ],
    "146048": [
        2
    ],
    "146258": [
        3
    ],
    "146455": [
        4
    ],
    "147184": [
        4
    ],
    "147291": [
        3
    ],
    "147630": [
        2
    ],
    "147850": [
        1
    ],
    "149603": [
        2,
        3
    ],
    "150033": [
        4
    ],
    "150429": [
        1
    ],
    "150859": [
        3
    ],
    "151345": [
        2
    ],
    "151851": [
        4
    ],
    "152318": [
        3
    ],
    "152758": [
        1
    ],
    "153235": [
        2
    ],
    "153651": [
        4
    ],
    "154101": [
        1
    ],
    "154538": [
        3,
        2
    ],
    "155047": [
        3
    ],
    "155521": [
        1
    ],
    "155947": [
        2
    ],
    "156442": [
        4
    ],
    "156936": [
        1
    ],
    "157404": [
        3
    ],
    "157852": [
        2
    ],
    "158283": [
        3
    ],
    "158726": [
        1
    ],
    "159214": [
        3
    ],
    "159671": [
        2
    ],
    "160122": [
        4
    ],
    "160610": [
        3
    ],
    "161123": [
        2
    ],
    "161567": [
        1
    ],
    "162385": [
        2
    ],
    "162667": [
        3
    ],
    "162978": [
        4
    ]
};
let keys = {};
const controls = ['65', '83', '68', '70'];
function click(e) {
	if (controls[0] in keys) {
		blink1.main();
		//console.log(Object.keys(notes['one']).length);
		if (Object.keys(notes['one']).length == 0) {
			miss++;
			delete keys[controls[0]];
		}
		//delete keys[65];
	}
	if (controls[1] in keys) {
		blink2.main();
		if (Object.keys(notes['two']).length == 0) {
			miss++;
			delete keys[controls[1]];
		}
		//delete keys[83];
	}
	if (controls[2] in keys) {
		blink3.main();
		if (Object.keys(notes['tre']).length == 0) {
			miss++;
			delete keys[controls[2]];
		}
		//delete keys[68];
	}
	if (controls[3] in keys) {
		blink4.main();
		if (Object.keys(notes['for']).length == 0) {
			miss++;
			delete keys[controls[3]];
		}
		//delete keys[70];
	}
}





class Note {
	constructor(note, x, offset) {
		this.note = note.cloneNode();
		this.x = x;
		this.offset = offset;
		this.y = 0 - this.offset;
		this.n = 0 - this.offset;
		this.note.style.left = (this.x * 25) + "%";
		this.id = n;
		this.note.id = "note" + this.id;
		n++;
		this.height = 15;
		this.note.classList.add(['one','two','tre','for'][this.x]);
		this.start = Date.now() + 200;
		setTimeout(() => {
			([c1, c2, c3, c4][this.x]).main()
		}, 150);
		document.getElementById('plane').prepend(this.note);
	}
	moveNote() {
		this.y = (Date.now() - this.start) / 15;
		this.n++;
		//console.log(this.y, this.n);
		this.note.style.top = this.y + "%";
	}
	main() {
		let i = 0;
		setTimeout(() => {
		var loop = setInterval(() => {
			this.moveNote();
			if (this.y >= (75 - this.height) && this.y <= 75) {
				notes[['one','two','tre','for'][this.x]][this.id] = true;
				if (controls[this.x] in keys) {
					window.clearInterval(loop);
					delete keys[controls[this.x]];
					delete notes[['one','two','tre','for'][this.x]][this.id];
					let gains = Math.round(Math.min(Math.max(Math.sin((Math.PI * (this.y - 3.75)) / (this.height / 2)) * 47 + 55, 10), 100));
					score += gains;
					hit++;
					this.note.classList.add('hit');
					if (gains == 100) {
						this.note.classList.add('perf');
						this.note.animate([
						{
							opacity: 1
						},
						{
							top: 0,
							height: CSS.percent(200),
							opacity: 0
						},
					],{ duration: 500, fill: 'both' });
					} else {
						this.note.animate([
						{
							opacity: 0.5
						},
						{
							top: 0,
							height: CSS.percent(200),
							opacity: 0
						},
					],{ duration: 500, fill: 'both' });
					}
					setTimeout(() => {this.note.remove}, 500);
				}
			} else {
				//console.log(this.x, this.id, ['one','two','tre','for'][this.x]);
				delete notes[['one','two','tre','for'][this.x]][this.id];
			}
			if (this.y >= 100) {
				window.clearInterval(loop);
				miss++;
				this.note.remove();
			}
		}, 1000 / 60);
		}, 200);
	}
}

class Blink {
	constructor(node) {
		this.node = node;
	}
	main() {
		this.node.animate([
  { opacity: 1 },
  { opacity: 0 },
	], {duration: 200, fill: 'both'});
	}
}

var blink1 = new Blink(document.getElementById('b1'));
var blink2 = new Blink(document.getElementById('b2'));
var blink3 = new Blink(document.getElementById('b3'));
var blink4 = new Blink(document.getElementById('b4'));

var c1 = new Blink(document.getElementById('c1'));
var c2 = new Blink(document.getElementById('c2'));
var c3 = new Blink(document.getElementById('c3'));
var c4 = new Blink(document.getElementById('c4'));

function noteLoop(current){
	// if (Math.random() < 0.5) {
	// 	let xpos = Math.round(Math.random()*3);
	// 	const newnote = new Note(document.getElementById('notebase'), xpos);
	// 	newnote.main();
	// }
	//console.log(rtime - (67.5 * (1000 / 60)) - 200 + 1500);
	
	/*let comp = Math.round((rtime - (67.5 * (1000 / 60)) - 200 + 1500)/10)*10;
	let key = Object.keys(sqnce);
	let step;
	for (let k; k < key.length; k++) {
		key[k] = Math.round(key[k]/10)*10;
	}

	let temp = key.findIndex((e) => e == comp);
	if (temp !== 'undefined') {
		step = sqnce[Object.keys(sqnce)[temp]];
		delete sqnce[Object.keys(sqnce)[temp]];
	}
	console.log(key, comp);
	if (step) {
		console.log(step);
		for (let k = 0; k < step.length; k++) {
			const newnote = new Note(document.getElementById('notebase'), step[k] - 1);
			newnote.main();
		}
	}*/
	let key = Object.keys(sqnce);
	console.log(key);
	for (let i = 0; i < key.length; i++) {
		let step = sqnce[key[i]];
		console.log(step);
		for (let k = 0; k < step.length; k++) {
			console.log(key[i] - (67.5 * (1000 / 60)) - 200 + 1500);
			let offset = 0;
			let timef = key[i] - (67.5 * (1000 / 60)) - 200 + 1500;
			setTimeout(() => {
				offset = Date.now() - (current + timef);
				console.log(offset);
				const newnote = new Note(document.getElementById('notebase'), step[k] - 1);
				newnote.main();
			}, timef);
		}
	}
}
function main() {
	window.addEventListener("keydown", function (e) {
		if (e.repeat) {
			delete keys[e.keycode];
			return
		} else {
			keys[e.keyCode] = true;
			click(e.keycode);
		}
	});
	window.addEventListener("keyup", function (e) {
	  delete keys[e.keyCode];
	});
	//setInterval(noteLoop, 250);
	noteLoop(Date.now());
	console.log('game started');
	
	var audio = new Audio('resources/songs/The Perfect Phonk.mp3');
	audio.volume = .1;
	setTimeout(() => {
		audio.play();
	}, 1500);
	//setTimeout(() => {console.log(time)}, 1000);
	start = Date.now();
	setInterval(() => {

		document.getElementById('score').innerHTML = '0'.repeat(7 - score.toString().length) + score.toString();
		document.getElementById('ratio').innerHTML = `${hit} / ${miss}`;
		time = Date.now() - start;
		//console.clear();
		//console.log(keys, notes);
	}, 1);
}

let clickListener = document.getElementById('cover').addEventListener('click', () => {
	if (document.getElementById('cover')) {main()}
	document.getElementById('cover').remove();
}, {once: true});

let keyListener = window.addEventListener('keydown', (e) => {
	if (!(e.keyCode in controls)) {return}
	if (document.getElementById('cover')) {main()}
	document.getElementById('cover').remove();
});