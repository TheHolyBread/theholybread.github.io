var keys = {}
var sqnce = {};
var time = 0;
const controls = [65,83,68,70,72,74,75,76];
var start = 0;
const aud = document.getElementById('audio');
var leng = Math.round(aud.duration * 1000);

fetch('resources/swung.json')
        .then(res => res.json())
        .then(out => main(out))
        .catch(err => console.log(err));

function click() {
    let all = Object.keys(sqnce);
    if (Object.keys(keys).length) {
        let temp = [];
        if (controls[0] in keys) {
            temp.push(1);
            delete keys[controls[0]];
        }
        if (controls[1] in keys) {
            temp.push(2);
            delete keys[controls[1]];
        }
        if (controls[2] in keys) {
            temp.push(3);
            delete keys[controls[2]];
        }
        if (controls[3] in keys) {
            temp.push(4);
            delete keys[controls[3]];
        }
        if (controls[4] in keys) {
            temp.push(5);
            delete keys[controls[4]];
        }
        if (controls[5] in keys) {
            temp.push(6);
            delete keys[controls[5]];
        }
        if (controls[6] in keys) {
            temp.push(7);
            delete keys[controls[6]];
        }
        if (controls[7] in keys) {
            temp.push(8);
            delete keys[controls[7]];
        }
        //console.log("difference from last inp", Math.abs(all[all.length - 1] - time) < 100);
        if (Math.abs(all[all.length - 1] - time) < 100) {
            let rtime = all[all.length - 1];
            sqnce[rtime] = sqnce[rtime].concat(temp);
        } else {
            if (sqnce[time]) {
                sqnce[time] = sqnce[time].concat(temp);
            } else {
                sqnce[time] = temp;
            }
        }
        //console.log(sqnce);
        document.getElementById('sqnce').innerText = JSON.stringify(sqnce, 1);
    }
}
function refresh(seq) {
    let key = Object.keys(seq);
	for (let i = 0; i < key.length; i++) {
		let step = seq[key[i]];
		for (let k = 0; k < step.length; k++) {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            dot.style.left = key[i] + 'px';
            dot.style.top = CSS.percent(step[k] * 20);
            dot.style.background = ['#EF476F','#FFD166','#06D6A0','#118AB2'][step[k] - 1];
            document.getElementById('scroll').append(dot);
        }
    }
}
function main(seq) {
    start = Date.now();

    window.addEventListener("keydown", function (e) {
        
        if (controls.includes(e.keyCode)) {
            if (e.repeat) {
                delete keys[e.keycode];
                return
            } else {
                keys[e.keyCode] = true;
                click();
            }
        }
	});
	window.addEventListener("keyup", function (e) {
	  delete keys[e.keyCode];
	});

    var audio = new Audio('resources/songs/swung.mp3');
    audio.volume = 0.1;
	//audio.play();

    setInterval(() => {
        time = Math.round(aud.currentTime * 1000);
        leng = Math.round(aud.duration * 1000);
        document.getElementById('timer').innerText = time + ' / ' + leng;
        document.getElementById('scroll').style.left = (- time) + 'px';
    }, 1000 / 60);
}