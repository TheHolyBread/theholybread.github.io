var n = 0;
var score = 0;
var miss = 0;
var hit = 0;
var nnotes = 0;

var time = 0;
var start = 0;

const song = {
	"song": "resources/songs/Balls in yo Jaws.mp3",
	"data" : "resources/balls.json"
}
var audio = new Audio(song.song);
audio.volume = 1;


let notes = {
	"one": {},
	"two": {},
	"tre": {},
	"for": {}
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

		this.passed = false;
		
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
					nnotes++;
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
			} else if (this.y > 75 && !this.passed) {
				miss++;
				this.passed = true;
				nnotes++;
			} else {
				//console.log(this.x, this.id, ['one','two','tre','for'][this.x]);
				delete notes[['one','two','tre','for'][this.x]][this.id];
			}
			if (this.y >= 100) {
				window.clearInterval(loop);
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

function noteLoop(current, seq){
	let key = Object.keys(seq);
	console.log(key);
	for (let i = 0; i < key.length; i++) {
		let step = seq[key[i]];
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
function main(noteSeq) {
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
	noteLoop(Date.now(), noteSeq);
	console.log('game started');
	
	setTimeout(() => {
		audio.play();
	}, 1500);
	//setTimeout(() => {console.log(time)}, 1000);
	start = Date.now();
	setInterval(() => {

		document.getElementById('score').innerHTML = '0'.repeat(7 - score.toString().length) + score.toString();
		document.getElementById('ratio').innerHTML = `${hit} / ${miss}`;
		let grade = Math.round((score / (nnotes * 100)) * 100);
		if (grade >= 90) {
			grade = 'SS';
		} else if (grade >= 80) {
			grade = 'S';
		} else if (grade >= 70) {
			grade = 'A';
		} else if (grade >= 60) {
			grade = 'B';
		} else if (isNaN(grade)) {
			grade = 'SS';
		} else {
			grade = 'C';
		}
		document.getElementById('grade').innerHTML = grade;
		time = Date.now() - start;
		//console.clear();
		//console.log(keys, notes);
	}, 1);
}

let clickListener = document.getElementById('cover').addEventListener('click', () => {
	if (document.getElementById('cover')) {
	    fetch(song.data)
        .then(res => res.json())
        .then(out => main(out))
        .catch(err => console.log(err));
	}
	document.getElementById('cover').remove();
}, {once: true});