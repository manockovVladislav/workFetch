document.addEventListener("DOMContentLoaded", ready);

function ready() {
  let click_button = document.getElementById("click_button_s");
  click_button.addEventListener("click", get_data);
  click_button.addEventListener("click", vis_data);
}

async function get_data() {
  start_preloader();
  const url = "https://randomuser.me/api/?results=10";

  let response = await fetch(url);
  let content = await response.json();
  let sort_content = content.results;

  let key;

  let list = document.getElementById("block_group");

  // console.log(list);
  // console.log(typeof list);

  for (key in sort_content) {
    let div = list.appendChild(document.createElement("div"));
    div.className = "col-md-3 col-sm-6";

    let div_2 = div.appendChild(document.createElement("div"));
    div_2.className = "card text-center";

    let div_3 = div_2.appendChild(document.createElement("div"));
    div_3.className = "card-body";

    let oImg = div_3.appendChild(document.createElement("img"));
    oImg.setAttribute("src", sort_content[key].picture.large);

    div_3.appendChild(document.createElement("h5")).innerHTML =
      sort_content[key].name.first;
    div_3.appendChild(document.createElement("h5")).innerHTML =
      sort_content[key].name.last;
    div_2.appendChild(document.createElement("p")).innerHTML =
      sort_content[key].gender;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].location.country;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].location.state;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].location.city;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].location.street.number;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].location.street.name;
    div_2.appendChild(document.createElement("p")).innerHTML =
      sort_content[key].email;

    let st = sort_content[key].dob.date;
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(st.replace(pattern, "--"));
    console.log(dt);

    dt = String(dt);
    dt = dt.substr(0, dt.length - 37);

    div_2.appendChild(document.createElement("div")).innerHTML = dt;
    div_2.appendChild(document.createElement("div")).innerHTML =
      sort_content[key].dob.age;

    div_2.appendChild(document.createElement("p")).innerHTML =
      sort_content[key].phone;
  }
  stop_preloader();
}

function vis_data() {
  if (document.getElementById("block_hidden").style.display == "block") {
    window.location.reload();
  } else {
    document.getElementById("block_hidden").style.display = "block";
  }
}

function start_preloader() {
  let preloaderEl = document.getElementById("preloader");
  let block_hidden = document.getElementById("block_hidden");
  block_hidden.style.visibility = "hidden";
  preloaderEl.classList.add("visible");
  preloaderEl.classList.remove("hidden");
}

function stop_preloader() {
  let preloaderEl = document.getElementById("preloader");
  let block_hidden = document.getElementById("block_hidden");
  block_hidden.style.visibility = "visible";
  preloaderEl.classList.add("hidden");
  preloaderEl.classList.remove("visible");
}
