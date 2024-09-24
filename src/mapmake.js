var keys = {}
var sqnce = {};
var time = 0;
const controls = [65, 83, 68, 70];
var start = 0;
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
function main() {
    start = Date.now();
    window.addEventListener("keydown", function (e) {
        time = Date.now() - start;
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

    var audio = new Audio('resources/songs/Balls in yo Jaws.mp3');
    audio.volume = 0.1;
	audio.play();

    setInterval(() => {
        time = Date.now() - start;
        document.getElementById('timer').innerText = time;
    }, 1000 / 60);
}

let clickListener = document.getElementById('cover').addEventListener('click', () => {
	if (document.getElementById('cover')) {
        main();
        document.getElementById('cover').remove();
    }
	
}, {once: true});