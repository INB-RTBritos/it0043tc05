let container = document.getElementById("flex-container");
let changer;

function Reset() {
  container.style.flexDirection = "row";
  container.style.justifyContent = "start";
  container.style.alignItems = "stretch";
  container.style.gap = "0px";
  document.getElementById("gap").value = 0;
}

function Gap() {
  const gap = document.getElementById("gap").value;
  container.style.gap = "${gap} px";
  console.log(gap);
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

function FlexGrow(x) {
  switch (x) {
    case 1:
      container.style.flexGrow = "1px";
      break;
  }
}
