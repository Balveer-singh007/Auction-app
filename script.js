{
  /* <div class="card">
          <div class="top">
            <div class="left">
              <span class="status">APPROVED</span>
              <span class="case-number">S230SKAN</span>
            </div>
            <div class="right">
              <span class="date">Mar 24, 2023, 5:03:24 PM</span>
            </div>
          </div>
          <div class="bottom">
            <b>Bellenduru spike lake</b>
            <span
              >KHB Colony, Basaveshwar Nagar, Bengaluru, Karnataka, India</span
            >
            <span class="price">₹ 0</span>
          </div>
        </div> */
}

const container = document.getElementById("container");
const btn = document.getElementById("btn");

async function appLoad() {
  let url = "https://gauravgitacc.github.io/postAppData/auctionData.json";
  let response = await fetch(url);
  let data = await response.json();
  listData(data);
}

function listData(load) {
  for (let i = 0; i < load.length; i++) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
  <div class="top">
    <div class="left">
      <span id="badge" class="${load[i].status.toLowerCase()}">${
      load[i].status
    }</span>
      <span class="case-number">${load[i].caseNumber}</span>
    </div>
    <div class="right">
      <span class="date">${load[i].date}</span>
    </div>
  </div>
  <div class="bottom">
    <b>${load[i].fromLocation}</b>
    <span
      >${load[i].toLocation}</span
    >
    <span class="price">${load[i].fare}</span>
  </div>
`;
    container.appendChild(div);
  }
}

appLoad();
