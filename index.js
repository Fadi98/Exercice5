// 1.
const fullNameElement = document.getElementById("fullName");
fullNameElement.innerText = "Hey, I'm " + datas.fullname;

// 2.
const profilElement = document.getElementById("profil");
profilElement.textContent = datas.profil;
// 3.
const descriptionElement = document.getElementById("description");
descriptionElement.textContent = datas.description;

// 4.
const imageElement = document.getElementById("picture");
imageElement.src = datas.picture;

// 5.
const socialElements = document.querySelectorAll('.socials');
//console.log(socialElements);
socialElements.forEach(ulElement => {
  const liElement = ulElement.getElementsByTagName('li');
  ulElement.innerHTML +=`<li></li>`
  //console.log(liElement);
  for (let i = 0; i < liElement.length; i++) {
    //console.log(liElement[i]);
    liElement[i].textContent = '';
    const aElement = document.createElement('a');
    aElement.href = datas.socials[i].url;
    const iconElement = document.createElement('img');
    iconElement.src = datas.socials[i].link;
    aElement.appendChild(iconElement);
    liElement[i].appendChild(aElement);
  }
});
// 6.
//Selectionne des élements works
const worksElement = document.getElementById("works");
//Parcourt du tableau datas.works
for (const work of datas.works) {
  const card = document.createElement("div");
  card.classList.add("col-xl-4", "col-lg-4", "col-sm-6", "col-12", "my-2");
  //Définir le contenu HTML de la card
  card.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${work.preview}" alt="${work.name}">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${work.name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
          ${work.technology.map(tech => `
            <li>
              <span class="card-link">${tech}</span>
            </li>
          `).join('')}
        </ul>
        <div class="row w-100">
          <div class="d-flex justify-content-center">
            <a href="${work.url}" class="text-decoration-none px-4 py-3 mt-2 rounded">See Project</a>
          </div>
        </div>
      </div>
    </div>
  `; 

  worksElement.appendChild(card);
}

// 7.
//Sélectionne de éléments expériences
const experiencesElement = document.getElementById('experiences');
// Parcourt du tableau datas.experiences
for (const experience of datas.experiences) {
  // Créez un nouvel élément div pour chaque expérience
  const experienceDiv = document.createElement('div');
  experienceDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
  // Créer la structure des card
  experienceDiv.innerHTML = `
    <div class="card h-100">
      <img class="card-img-top" src="${experience.link}" alt="${experience.name}">
      <div class="card-body w-100 px-0">
        <h2 class="card-title mt-0 mb-4 text-center">${experience.name}</h2>
        <ul class="list-unstyled w-100 d-flex justify-content-center flex-wrap">
          ${experience.technology.map(tech => `
            <li>
              <span class="card-link">${tech}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  experiencesElement.appendChild(experienceDiv);
};

// 8.
const mailElement = document.getElementById("mail");
mailElement.textContent = datas.email;

