const loadPicsBtn = document.getElementById("loadPics");
const loadSecondaryPicsBtn = document.getElementById("loadSecondaryPics");
const row = document.querySelector(".cards-row");

const getPics = async (query) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: "HJfWn4k4dZhROm4k2hCuhM7XJUSr7Epc0lHTZH8hovXxSdkvLB6ZOA64",
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=15`,
      options
    );
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const createCards = (photo, rowElement) => {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col-md-4");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "mb-4", "shadow-sm");
  cardDiv.innerHTML = `
      <img src="${photo.src.landscape}" class="card-img-top" alt="Photo by ${photo.photographer}">
      <div class="card-body">
        <p class="card-text">${photo.photographer}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary view-btn">View</button>
            <button type="button" class="btn btn-sm btn-outline-secondary hide-btn">Hide</button>
          </div>
          <small class="text-muted">${photo.id}</small>
        </div>
      </div>
    `;

  colDiv.appendChild(cardDiv);

  rowElement.appendChild(colDiv);
};

const handleLoadClick = async (e) => {
  e.preventDefault();
  const photos = await getPics("nature");
  row.innerHTML = "";

  console.log(photos);

  photos.forEach((photo) => {
    createCards(photo, row);
  });
};

const handleSecondaryClick = async (e) => {
  e.preventDefault();
  const photos = await getPics("wood");
  row.innerHTML = "";

  console.log(photos);

  photos.forEach((photo) => {
    createCards(photo, row);
  });
};

loadPicsBtn.addEventListener("click", handleLoadClick);
loadSecondaryPicsBtn.addEventListener("click", handleSecondaryClick);

async function readImgs(string) {
  try {
    let ask = await fetch(URL + string, {
      headers: {
        Authorization:
          "cPxSuuVJ73X6S7cCb2L1OjhvaPrJzRH8DRUT2NOVzdWzlNIp31n4Lrcy",
      },
    });
    let response = await ask.json();

    for (let i = 0; i < arrayCards.length; i++) {
      arrayCards[i].src = response.photos[i].url;
    }
  } catch (error) {
    console.log(error);
  }
}
