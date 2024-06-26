let container = document.getElementById("flex-container");
let grow;

function Reset() {
  container.style.flexDirection = "row";
  container.style.justifyContent = "start";
  container.style.alignItems = "stretch";
  container.style.gap = "0px";
  document.getElementById("gap").value = 0;

  document.getElementById("grow1").value = 0;
  document.getElementById("grow2").value = 0;
  document.getElementById("grow3").value = 0;

  FlexGrow(1);
  FlexGrow(2);
  FlexGrow(3);
}

function UpdateGap() {
  const gap = document.getElementById("gap").value;
  container.style.gap = `${gap}px`;
}

function Direction(x) {
  if (x == 1) {
    container.style.flexDirection = "row";
  } else if (x == 2) {
    container.style.flexDirection = "column";
  }
}

function JustifyContent(x) {
  switch (x) {
    case 1:
      container.style.justifyContent = "start";
      break;
    case 2:
      container.style.justifyContent = "center";
      break;
    case 3:
      container.style.justifyContent = "end";
      break;
    case 4:
      container.style.justifyContent = "space-between";
      break;
    case 5:
      container.style.justifyContent = "space-around";
      break;
    case 6:
      container.style.justifyContent = "space-evenly";
  }
}

function AlignItems(x) {
  switch (x) {
    case 1:
      container.style.alignItems = "start";
      break;
    case 2:
      container.style.alignItems = "center";
      break;
    case 3:
      container.style.alignItems = "end";
  }
}

function FlexGrow(number) {
  const grow = document.getElementById(`grow${number}`).value;
  document.getElementById(`box${number}`).style.flexGrow = grow;
}

function UpdateGrow(x) {
  switch (x) {
    case 1:
      document.getElementById("box1").style.flexGrow++;
      document.getElementById("box2").style.flexGrow++;
      document.getElementById("box3").style.flexGrow++;
      document.getElementById("grow1").value++;
      document.getElementById("grow2").value++;
      document.getElementById("grow3").value++;
      break;
    case 2:
      document.getElementById("box1").style.flexGrow = 0;
      document.getElementById("box2").style.flexGrow = 0;
      document.getElementById("box3").style.flexGrow = 0;
      document.getElementById("grow1").value = 0;
      document.getElementById("grow2").value = 0;
      document.getElementById("grow3").value = 0;
      break;
  }
}
