const rd = new FileReader();

var n = 0;
var score = 0;
var miss = 0;
var hit = 0;
var nnotes = 0;
var combo = 0;

var time = 0;
var start = 0;

var song = {
  title : "",
  song  : "",
  cover : "",
  sqnce : {},
};
var speed = 2;
var audio = new Audio(song.song);
audio.volume = 1;

var startDelay = 1500;

let audioCtx;
let smoothvol = 0;
let visualizerRes = 64;

for (let i = 1; i < visualizerRes + 1; i++) {
  let bar = document.createElement("div");
  bar.classList.add("bar");
  bar.id = "bar" + i;
  bar.style.left = CSS.percent((100 / visualizerRes) * (i - 1) + 0.1 * (i - 1));
  bar.style.width = CSS.percent(100 / visualizerRes);
  document.getElementById("barcon").append(bar);
}

audio.addEventListener("play", () => {
  if (!audioCtx) {
    audioCtx = new window.AudioContext();

    let analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    let bufferLength = analyser.frequencyBinCount;
    let dataArray = new Uint8Array(bufferLength);

    let source = audioCtx.createMediaElementSource(audio);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    function calculateVolume() {
      analyser.getByteFrequencyData(dataArray);

      let sum = 0;
      let bsum = 0;
      let dataPerBar = bufferLength / visualizerRes;
      for (let i = 0; i < bufferLength; i++) {
        sum += dataArray[i];
        bsum += dataArray[i];
        if (i % 16 == 0 && i != 0) {
          document.getElementById(`bar${i / dataPerBar}`).style.height =
            (bsum / dataPerBar) * 3 + "px";
          bsum = 0;
        }
      }
      let volume = sum / bufferLength;
      volume = Math.pow((volume * volume) / 1500, 2) / 2;
      smoothvol += (volume - smoothvol) / 2;
      //document.getElementById('combo').innerHTML = smoothvol;
      document.querySelector(".planecon").style.perspective =
        300 - smoothvol + "px";
      document.querySelector(".planecon").style.transform = `rotatez(${
        (smoothvol / 16) * Math.sin(Date.now() / 100)
      }deg)`;

      requestAnimationFrame(calculateVolume);
    }
    calculateVolume();
  }
});

document.getElementById('importBtn').onchange = function () {
  const file = this.files[0];
  rd.addEventListener("load", () => {
    try {
      const fileReaded = rd.result;
      var jsonified = JSON.parse(fileReaded);
      song.song = jsonified.audio;
      jsonified.sqnce = JSON.parse(jsonified.sqnce);
      song.sqnce = jsonified.sqnce;
      song.title = jsonified.title;
      song.cover = jsonified.cover;
      console.log(song);
      document.getElementById("start").disabled = false;
    } catch(error) {
      document.getElementById("start").innerText = error;
    }
  });
  /*let objurl = URL.createObjectURL(file);
  document.getElementById("start").innerText = objurl;
  let a = document.createElement("a");
  a.href = objurl;
  a.click();
  a.remove();
  URL.revokeObjectURL(objurl);*/
  rd.readAsText(file);
}

let notes = {
  one: {},
  two: {},
  tre: {},
  for: {},
  fiv: {},
  six: {},
  sev: {},
  ate: {},
};
let keys = {};
const controls = ["65", "83", "68", "70", "72", "74", "75", "76"];
const noteMap = ["one", "two", "tre", "for", "fiv", "six", "sev", "ate"];
function click() {
  if (controls[0] in keys) {
    blink1.main();
    if (Object.keys(notes["one"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[0]];
    }
    //delete keys[65];
  }
  if (controls[1] in keys) {
    blink2.main();
    if (Object.keys(notes["two"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[1]];
    }
    //delete keys[83];
  }
  if (controls[2] in keys) {
    blink3.main();
    if (Object.keys(notes["tre"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[2]];
    }
    //delete keys[68];
  }
  if (controls[3] in keys) {
    blink4.main();
    if (Object.keys(notes["for"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[3]];
    }
    //delete keys[70];
  }
  if (controls[4] in keys) {
    s1.main();
    if (Object.keys(notes["fiv"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[4]];
    }
    //delete keys[65];
  }
  if (controls[5] in keys) {
    s2.main();
    if (Object.keys(notes["six"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[5]];
    }
    //delete keys[83];
  }
  if (controls[6] in keys) {
    s3.main();
    if (Object.keys(notes["sev"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[6]];
    }
    //delete keys[68];
  }
  if (controls[7] in keys) {
    s4.main();
    if (Object.keys(notes["ate"]).length == 0) {
      miss++;
      combo = 0;
      delete keys[controls[7]];
    }
    //delete keys[70];
  }
}
function doKey(keycode) {
  keys[keycode] = true;
  click();
  window.focus();
}
document.getElementById("mob1").addEventListener("touchstart", () => {
  doKey(controls[0]);
});
document.getElementById("mob2").addEventListener("touchstart", () => {
  doKey(controls[1]);
});
document.getElementById("mob3").addEventListener("touchstart", () => {
  doKey(controls[2]);
});
document.getElementById("mob4").addEventListener("touchstart", () => {
  doKey(controls[3]);
});

function modScore(pts, x) {
  score += pts;
  combo++;
  let popUp = document.createElement("div");
  popUp.textContent = pts;

  popUp.classList.add("pop");
  popUp.style.left = x * 25 + "%";

  document.getElementById("planecon").append(popUp);

  popUp.animate(
    [
      {
        transform: "translatez(119px) translatey(-50px)",
      },
      {
        transform: `rotateY(360deg) translatez(50px) translatey(-119px) translatex(${
          Math.random() * 100 - 50
        }px)`,
      },
    ],
    {
      duration: 500,
      fill: "both",
      easing: "ease-out",
    }
  );
  popUp.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 500,
      fill: "both",
      delay: 100,
    }
  );
  popUp.animate(
    [
      {
        translate: "0 0",
      },
      {
        translate: "0 -50px",
      },
    ],
    {
      duration: 500,
      fill: "both",
      easing: "cubic-bezier(.48,1.95,1,1)",
    }
  );

  setTimeout(() => {
    popUp.remove();
  }, 500);
}

class Note {
  constructor(note, x, offset, mini = false) {
    this.note = note.cloneNode();

    this.x = x;
    this.offset = offset;

    this.y = 0;
    this.n = 0 - this.offset;
    this.note.style.left = this.x * 25 + "%";

    this.id = n;
    this.note.id = "note" + this.id;
    this.note.classList.remove("note");
    n++;
    this.height = 15;
    this.mini = mini;
    this.classed = false;
    this.start = Date.now() + 200;

    this.passed = false;
    this.note.style.opacity = 0;
    document.getElementById("plane").prepend(this.note);
  }
  addClasses() {
    if (!this.classed) {
      this.classed = true;
      this.note.style.opacity = 1;
      this.note.classList.add("note");
      this.note.classList.add(["one", "two", "tre", "for"][this.x]);
      if (this.mini) {
        this.note.classList.add("mini");
        this.x += 4;
      }
      setTimeout(() => {
        if (this.mini) {
          [c1, c2, c3, c4][this.x - 4].main();
        } else {
          [c1, c2, c3, c4][this.x].main();
        }
      }, 150);
    }
  }
  moveNote() {
    if ((Date.now() + 200 - this.start + this.offset) / 15 * speed > 0) {
      this.addClasses();
      this.y = (Date.now() - this.start + this.offset) / 15 * speed;
      this.note.style.top = Math.max(this.y, 0) + "%";
    }
  }
  main() {
    setTimeout(() => {
      var loop = setInterval(() => {
        this.moveNote();
        if (this.y >= 75 - this.height && this.y <= 75) {
          notes[noteMap[this.x]][this.id] = true;
          if (controls[this.x] in keys) {
            window.clearInterval(loop);
            delete keys[controls[this.x]];
            delete notes[noteMap[this.x]][this.id];
            let gains = Math.round(
              Math.min(
                Math.max(
                  Math.sin((Math.PI * (this.y - 3.75)) / (this.height / 2)) *
                    47 +
                    55,
                  10
                ),
                100
              )
            );
            modScore(gains, this.x - this.mini * 4);
            hit++;
            nnotes++;
            this.note.classList.add("hit");
            if (gains == 100) {
              this.note.classList.add("perf");
              this.note.animate(
                [
                  {
                    opacity: 1,
                  },
                  {
                    top: 0,
                    height: CSS.percent(200),
                    opacity: 0,
                  },
                ],
                { duration: 500, fill: "both" }
              );
            } else {
              this.note.animate(
                [
                  {
                    opacity: 0.5,
                  },
                  {
                    top: 0,
                    height: CSS.percent(200),
                    opacity: 0,
                  },
                ],
                { duration: 500, fill: "both" }
              );
            }
            setTimeout(() => {
              this.note.remove;
            }, 500);
          }
        } else if (this.y > 75 && !this.passed) {
          miss++;
          combo = 0;
          this.passed = true;
          nnotes++;
        } else {
          delete notes[noteMap[this.x]][this.id];
        }
        if (this.y >= 100) {
          window.clearInterval(loop);
          this.note.remove();
        }
      }, 1000 / 120);
    }, 200);
  }
}

class Blink {
  constructor(node) {
    this.node = node;
  }
  main() {
    this.node.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 200,
      fill: "both",
    });
  }
}

var blink1 = new Blink(document.getElementById("b1"));
var blink2 = new Blink(document.getElementById("b2"));
var blink3 = new Blink(document.getElementById("b3"));
var blink4 = new Blink(document.getElementById("b4"));

var s1 = new Blink(document.getElementById("s1"));
var s2 = new Blink(document.getElementById("s2"));
var s3 = new Blink(document.getElementById("s3"));
var s4 = new Blink(document.getElementById("s4"));

var c1 = new Blink(document.getElementById("c1"));
var c2 = new Blink(document.getElementById("c2"));
var c3 = new Blink(document.getElementById("c3"));
var c4 = new Blink(document.getElementById("c4"));

function noteLoop(current, seq) {
  console.log(current);
  let key = Object.keys(seq);
  for (let i = 0; i < key.length; i++) {
    let step = seq[key[i]];
    for (let k = 0; k < step.length; k++) {
      let offset = 0;
      let timef = key[i] - (67.5 * 15 / speed) - 200 + 1500;
      setTimeout(() => {
        console.log(Date.now());
        console.log(key[i]);
        offset = Date.now() - (current + timef);
        let newnote;
        if (step[k] > 4) {
          newnote = new Note(
            document.getElementById("notebase"),
            step[k] - 1 - 4,
            offset,
            true
          );
        } else {
          newnote = new Note(
            document.getElementById("notebase"),
            step[k] - 1,
            offset
          );
        }
        newnote.main();
      }, timef - 500);
    }
  }
}
function main() {
  let noteSeq = song.sqnce;
  window.addEventListener("keydown", function (e) {
    if (e.repeat) {
      delete keys[e.keycode];
      return;
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
  console.log("game started");

  setTimeout(() => {
    audio.play();
  }, 1500);
  start = Date.now();
  setInterval(() => {
    document.getElementById("score").innerHTML =
      "0".repeat(7 - score.toString().length) + score.toString();
    document.getElementById("ratio").innerHTML = `${hit} / ${miss}`;
    document.getElementById("combo").innerHTML = combo;
    let grade = Math.round((score / (nnotes * 100)) * 100);
    if (grade >= 90) {
      grade = "SS";
    } else if (grade >= 80) {
      grade = "S";
    } else if (grade >= 70) {
      grade = "A";
    } else if (grade >= 60) {
      grade = "B";
    } else if (isNaN(grade)) {
      grade = "SS";
    } else {
      grade = "C";
    }
    document.getElementById("grade").innerHTML = grade;
    time = Date.now() - start;
  }, 1);
}
function startGame() {
  // fetch(song.data)
  //       .then((res) => res.json())
  //       .then((out) => main(out))
  //       .catch((err) => console.log(err));
  audio.src = song.song;
  document.getElementById("menu").style.display = "none";
  main();
}