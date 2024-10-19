const rd = new FileReader();

var level = {
  "audio" : "",
  "sqnce" : {}
};

var keys = {};
var sqnce = {};


const controls = [65, 83, 68, 70, 72, 74, 75, 76];
var start = 0;
const aud = document.getElementById("audio");
aud.volume = 0.1;
var leng = Math.round(aud.duration * 1000);
function time() {
  return Math.round(aud.currentTime * 1000);
}
var mousedown = false;
var mousex = 0;

/*function sequence() {
        fetch('resources/swung.json')
            .then(res => res.json())
            .then(out => sqnce = out)
            .then(_ => main())
            .catch(err => console.log(err));
}
sequence();*/

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
    if (Math.abs(all[all.length - 1] - time()) < 50 && audio.paused) {
      let rtime = all[all.length - 1];
      for (let n in [...new Set(sqnce[rtime].concat(temp))]) {
        addNew(rtime, n);
      }
      sqnce[rtime] = [...new Set(sqnce[rtime].concat(temp))];
    } else {
      if (sqnce[time()]) {
        for (let n in [...new Set(sqnce[time()].concat(temp))]) {
          addNew(rtime, n);
        }
        sqnce[time()] = [...new Set(sqnce[time()].concat(temp))];
      } else {
        for (let n in [...new Set(sqnce[time()].concat(temp))]) {
          addNew(time(), n);
        }
        sqnce[time()] = [...new Set(sqnce[time()].concat(temp))];
      }
    }
    //console.log(sqnce);
  }
}
function del(dot) {
  delete seq[dot.time][dot.x];
}
function addNew(tim, x) {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  dot.style.left = key[tim] + "px";
  dot.style.top = CSS.percent(step[x] * 20);
  dot.style.background = ["#EF476F", "#FFD166", "#06D6A0", "#118AB2"][
    step[x] - 1
  ];
  dot.setAttribute("time", key[tim]);
  dot.setAttribute("x", step[x]);
  dot.addEventListener("click", (e) => {
    sqnce[e.target.getAttribute("time")].splice(
      sqnce[e.target.getAttribute("time")].indexOf(
        e.target.getAttribute("x") - 0
      ),
      1
    );
    this.remove();
  });
  document.getElementById("scroll").append(dot);
}
function refresh(seq) {
  document.getElementById("scroll").innerHTML = "";
  let key = Object.keys(seq);
  for (let i = 0; i < key.length; i++) {
    let step = seq[key[i]];
    for (let k = 0; k < step.length; k++) {
      
    }
  }
  document.getElementById("sqnce").innerText = JSON.stringify(sqnce, 1);
  level.sqnce = JSON.stringify(sqnce);
}
function exportMap() {
  let blob = JSON.stringify(level);
  const link = document.createElement("a");
  let file = new Blob([blob],{type: 'text/plain'});
  link.href = URL.createObjectURL(file);
  link.download = "MyLevel" + ".misumap"
  link.click();
  URL.revokeObjectURL(link.href);
  link.remove();
}
document.getElementById('importBtn').onchange = function () {
  const file = this.files[0];
  rd.addEventListener("loadend", () => {
    //document.getElementById("sqnce").innerText = rd.result;
    document.getElementById("audsource").src = rd.result;
    aud.load();
    leng = Math.round(aud.duration * 1000);
    level.audio = rd.result;
  });
  rd.readAsDataURL(file);
}

function update() {
  document.getElementById("timer").innerText = time() + " / " + leng;
  document.getElementById("scroll").style.left = -time() + "px";
}

function main() {
  start = Date.now();
  refresh(sqnce);
  document.getElementById("field").addEventListener("mousedown", (e) => {
    mousex = e.clientX;
    mousedown = true;
    aud.pause();
    document.getElementById("field").style.cursor = "grabbing";
  });
  window.addEventListener("mouseup", (e) => {
    mousedown = false;
    document.getElementById("field").style.cursor = "grab";
  });
  window.addEventListener("mousemove", (e) => {
    if (mousedown) {
      e.preventDefault();
      let change = mousex - e.clientX;
      console.log(mousex, e.clientX, change);
      aud.currentTime += change / 1000;
    }
    mousex = e.clientX;
  });
  window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
      if (e.repeat) return;
      e.preventDefault();
      if (aud.paused) {
        aud.play();
      } else {
        aud.pause();
      }
    } else if (e.keyCode == 39 || e.keyCode == 37 || e.keyCode == 16) {
      keys[e.keyCode] = true;
    } else if (controls.includes(e.keyCode)) {
      if (e.repeat) {
        delete keys[e.keycode];
        return;
      } else {
        keys[e.keyCode] = true;
        click();
      }
    }
  });
  window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode];
  });

  var audio = new Audio("resources/songs/swung.mp3");
  audio.volume = 0.1;
  //audio.play();

  setInterval(() => {
    if (Object.keys(keys).includes("37")) {
      Object.keys(keys).includes("16")
        ? (aud.currentTime -= 0.001)
        : (aud.currentTime -= 0.01);
    }
    if (Object.keys(keys).includes("39")) {
      Object.keys(keys).includes("16")
        ? (aud.currentTime += 0.001)
        : (aud.currentTime += 0.01);
    }
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    update();
  }, 1000 / 60);
}
main();
