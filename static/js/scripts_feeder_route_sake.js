
// const powerThreshold = 15; // en MW
  
const cabines = [
  // Feeder Sous Station (Feeder: 1)
  { id: 1, name: "Cabine Sous Station", power: 0.403, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.403 },
  { id: 2, name: "Cabine Lac (Yengo)", power: 0.6, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.6 },
  { id: 3, name: "Cabine Makabuza", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 4, name: "Cabine Evêché", power: 0.201, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.201 },
  { id: 5, name: "Cabine Graben", power: 0.032, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.032 },
  { id: 6, name: "Cabine Château I", power: 0.403, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.403 },
  { id: 7, name: "Cabine Château II", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 8, name: "Cabine Karibu", power: 0.256, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.256 },
  { id: 9, name: "Cabine Sotraki", power: 0.256, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.256 },
  { id: 10, name: "Cabine Keshero", power: 0.403, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.403 },
  { id: 11, name: "Cabine Pallotin", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 12, name: "Cabine Lukundula", power: 0.403, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.403 },
  { id: 13, name: "Cabine Abattoir", power: 0.403, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.403 },
  { id: 14, name: "Cabine Adventiste", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 15, name: "Cabine New Hope", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 16, name: "Cabine Village Jambo", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 17, name: "Cabine Okito", power: 0.16, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.16 },
  { id: 18, name: "Cabine Buhimba", power: 0.06, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.06 },
  { id: 19, name: "Cabine Kinyogote", power: 0.06, status: "on", priority: false, feeder: 1, nom_feeder: "Feeder Sous Station", max_consumption: 0.06 },

  // Feeder Sud (Feeder: 4)
  { id: 20, name: "Cabine Ex Hôpital", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 21, name: "Cabine Présidentielle", power: 0.16, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.16 },
  { id: 22, name: "Cabine Hôpital Générale", power: 0.563, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.563 },
  { id: 23, name: "Cabine Mont Goma", power: 0.192, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.192 },
  { id: 24, name: "Cabine Mbiza", power: 0.256, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.256 },
  { id: 25, name: "Cabine Ihusi", power: 0.256, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.256 },
  { id: 26, name: "Cabine Celtel", power: 0.256, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.256 },
  { id: 27, name: "Cabine Tennis", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 28, name: "Cabine Regideso", power: 0.512, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.512 },
  { id: 29, name: "Cabine JP Bishweka", power: 0.032, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.032 },
  { id: 30, name: "Cabine Jambo", power: 0.16, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.16 },
  { id: 31, name: "Cabine Imara", power: 0.032, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.032 },
  { id: 32, name: "Cabine FPI", power: 0.102, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.102 },
  { id: 33, name: "Cabine Bralima", power: 0.064, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.064 },
  { id: 34, name: "Cabine Tribunal", power: 0.672, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.672 },
  { id: 35, name: "Cabine Regideso", power: 0.576, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.576 },
  { id: 36, name: "Cabine BDGL", power: 0.16, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.16 },
  { id: 37, name: "Cabine Poste", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 38, name: "Cabine Mulinga", power: 0.064, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.064 },
  { id: 39, name: "Cabine Docs", power: 0.064, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.064 },
  { id: 40, name: "Cabine Mapendo", power: 0.256, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.256 },
  { id: 41, name: "Cabine Hotel", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 42, name: "Cabine Ntibaganira", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 43, name: "Cabine Ihusi", power: 0.16, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.16 },
  { id: 44, name: "Cabine Orchidée I", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 45, name: "Cabine Monusco EQ", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 46, name: "Cabine Monusco", power: 0.32, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.32 },
  { id: 47, name: "Cabine Orchidée II", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },
  { id: 48, name: "Cabine Ihusi II", power: 0.403, status: "on", priority: true, feeder: 4, nom_feeder: "Feeder Sud", max_consumption: 0.403 },

  // Feeder Nord (Feeder: 2)
  { id: 49, name: "Cabine Lipton", power: 0.403, status: "on", priority: false, feeder: 2, max_consumption: 0.403, nom_feeder: "Feeder Nord" },
  { id: 50, name: "Cabine Katoyi", power: 0.403, status: "on", priority: false,feeder: 2, max_consumption: 0.403, nom_feeder: "Feeder Nord" },
  { id: 51, name: "Cabine Mabanga", power: 0.403, status: "on", priority: false,feeder: 2, max_consumption: 0.403, nom_feeder: "Feeder Nord"},
  { id: 52, name: "Cabine Dunia", power: 0.256, status: "on", priority: false,feeder: 2, max_consumption: 0.256, nom_feeder: "Feeder Nord" },
  { id: 53, name: "Cabine Majengo", power: 0.403, status: "on", priority: false,feeder: 2, max_consumption: 0.403, nom_feeder: "Feeder Nord" },
  { id: 54, name: "Cabine Ngangi", power: 0.16, status: "on", priority: false,feeder: 2, max_consumption: 0.16, nom_feeder: "Feeder Nord" },

  // Feeder Route Sake (Feeder: 5)
  { id: 55, name: "Cabine Camp Militaire", power: 0.32, status: "on",feeder: 5, priority: false, max_consumption: 0.32, nom_feeder: "Feeder Route Sake" },
  { id: 56, name: "Cabine Carmel", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 57, name: "Cabine Carmélite", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 58, name: "Cabine Endundu", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 59, name: "Cabine Akili", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 60, name: "Cabine Himbi", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 61, name: "Cabine Ya Wazazi", power: 0.201, status: "on", feeder: 5, priority: false, max_consumption: 0.201, nom_feeder: "Feeder Route Sake" },
  { id: 62, name: "Cabine Akiphar", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 63, name: "Cabine La Joie", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 64, name: "Cabine LUPET I", power: 0.32, status: "on", feeder: 5, priority: false, max_consumption: 0.32, nom_feeder: "Feeder Route Sake" },
  { id: 65, name: "Cabine NTURO", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 66, name: "Cabine HABITATION", power: 0.032, status: "on", feeder: 5, priority: false, max_consumption: 0.032, nom_feeder: "Feeder Route Sake" },
  { id: 67, name: "Cabine CONTENAIRE", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 68, name: "Cabine KABATI", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 69, name: "Cabine ABDALAH", power: 0.256, status: "on", feeder: 5, priority: false, max_consumption: 0.256, nom_feeder: "Feeder Route Sake" },
  { id: 70, name: "Cabine Université", power: 0.64, status: "on", feeder: 5, priority: false, max_consumption: 0.64, nom_feeder: "Feeder Route Sake" },
  { id: 71, name: "Cabine Labo Médical", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 72, name: "Cabine KONDE", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 73, name: "Cabine MBIZA", power: 0.64, status: "on", feeder: 5, priority: false, max_consumption: 0.64, nom_feeder: "Feeder Route Sake" },
  { id: 74, name: "Cabine REGIE KYESHERO", power: 0.403, "status": "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 75, name: "Cabine ULPGL", "power": 0.064, status: "on", feeder: 5, priority: false, max_consumption: 0.064, nom_feeder: "Feeder Route Sake" },
  { id: 76, name: "Cabine Hôpital KESHERO", power: 0.32, status: "on", feeder: 5, priority: false, max_consumption: 0.32, nom_feeder: "Feeder Route Sake" },
  { id: 77, name: "Cabine CBCA NDOSHO", power: 0.032, status: "on", feeder: 5, priority: false, max_consumption: 0.032, nom_feeder: "Feeder Route Sake" },
  { id: 78, name: "Cabine NDOSHO", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 79, name: "Cabine KESHERO I", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 80, name: "Cabine KAYISAVERA", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 81, name: "Cabine KIMOKA", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 82, name: "Cabine SAKE", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 83, name: "Cabine Matcha", power: 0.403, status: "on", feeder: 5, priority: false, max_consumption: 0.403, nom_feeder: "Feeder Route Sake" },
  { id: 84, name: "Cabine SAKE I", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 85, name: "Cabine RUYANGE", power: 0.064, status: "on", feeder: 5, priority: false, max_consumption: 0.064, nom_feeder: "Feeder Route Sake" },
  { id: 86, name: "Cabine KIROTCHE", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 87, name: "Cabine SHASHA", power: 0.064, status: "on", feeder: 5, priority: false, max_consumption: 0.064, nom_feeder: "Feeder Route Sake" },
  { id: 88, name: "Cabine MUHETO", power: 0.16, status: "on", priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 89, name: "Cabine Dynamique", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 90, name: "Cabine MUSANGANYA", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 91, name: "Cabine Marché", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 92, name: "Cabine BUDONDO", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  { id: 93, name: "Cabine Olive", power: 0.16, status: "on", feeder: 5, priority: false, max_consumption: 0.16, nom_feeder: "Feeder Route Sake" },
  
  // Feeder Centre (Feeder: 3)
  { id: 94, name: "Cabine Intigo", power: 0.403, status: "on", feeder: 3, "priority": false, max_consumption: 0.403, nom_feeder: "Feeder Centre" },
  { id: 95, name: "Cabine Mbiza", power: 0.256, status: "on", feeder: 3, "priority": false, max_consumption: 0.256, nom_feeder: "Feeder Centre" },
  { id: 96, name: "Cabine CTC CF", power: 0.256, status: "on", feeder: 3, "priority": false, max_consumption: 0.256, nom_feeder: "Feeder Centre" },
  { id: 97, name: "Cabine Procure", power: 0.256, status: "on", feeder: 3, "priority": false, max_consumption: 0.256, nom_feeder: "Feeder Centre" },
  { id: 98, name: "Cabine Eugene Serufuli", power: 0.403, status: "on", feeder: 3, "priority": false, max_consumption: 0.403, nom_feeder: "Feeder Centre" },
  { id: 99, name: "Cabine AERO", power: 0.403, status: "on", feeder: 3, "priority": false, max_consumption: 0.403, nom_feeder: "Feeder Centre" },
  { id: 100, name: "Cabine CTC", power: 0.403, status: "on", feeder: 3, "priority": false, max_consumption: 0.403, nom_feeder: "Feeder Centre" },
  { id: 101, name: "Cabine Cimenterie", power: 0.403, status: "on", feeder: 3, "priority": false, max_consumption: 0.403, nom_feeder: "Feeder Centre" },
  { id: 102, name: "Cabine Inshaallah", power: 0.256, status: "on", feeder: 3, "priority": false, max_consumption: 0.256, nom_feeder: "Feeder Centre" },
  { id: 103, name: "Cabine Hilio", power: 0.16, status: "on", feeder: 3, "priority": false, max_consumption: 0.16, nom_feeder: "Feeder Centre" },
  { id: 104, name: "Cabine Monusco AERO", power: 0.2016, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre", max_consumption: 0.2016},
  { id: 105, name: "Cabine Jambo Café", power: 0.32, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.2016, },
  { id: 106, name: "Cabine Premidis", power: 0.403, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.403,},
  { id: 107, name: "Cabine Itig", power: 0.403, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.403, },
  { id: 108, name: "Cabine RVA", power: 0.416, status: "on",feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.416,},
  { id: 109, name: "Cabine Jumbo Air", power: 0.16, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.16,},
  { id: 110, name: "Cabine Ihusi", power: 0.16, status: "on", feeder: 3, priority: false, feeder: 3, nom_feeder: "Feeder Centre",max_consumption: 0.16,}
];

const feeder1 = document.getElementById("feeder-5");
const totalPowerElement = document.getElementById("total-power-value");
const criticalSection = document.getElementById("critical-section");
const criticalList = document.getElementById("critical-list");

function renderCabines() {
  feeder1.innerHTML = "";
  criticalList.innerHTML = "";
  criticalSection.style.display = "none";

  // Calcul initial du total de puissance
  let totalPower = cabines.reduce((sum, cabine) => sum + cabine.power, 0);
  let adjustedPower = totalPower;  // Commence avec la puissance totale

  // Créer des listes pour les cabines prioritaires et non prioritaires   
  // let cabinesPrioritaires = cabines.filter(cabine => cabine.priority);
  let cabinesNonPrioritaires = cabines.filter(cabine => !cabine.priority);

  // Étape 1: Trier les cabines non prioritaires par consommation croissante
  cabinesNonPrioritaires.sort((a, b) => a.power - b.power);  // Trier par puissance croissante

  // Créer une liste pour les cabines qui peuvent être coupées
  let clignotantes = [];
  let normales = [];

  cabinesNonPrioritaires.forEach((cabine) => {
    if (adjustedPower > powerThreshold) {
      if (cabine.power != 0){
          {
           if (cabine.feeder === 5) {
              cabine.status = "on";
              clignotantes.push(cabine);
           }
          }

      }else{
          if (cabine.feeder === 5) {
              cabine.status = "off";
              normales.push(cabine);
          }
          }
      adjustedPower -= cabine.power;  // Réduire la puissance
    } else {
      if (cabine.feeder === 5) {
          normales.push(cabine);
      }
    }
  });

  // Affichage des cabines normales
  normales.forEach((cabine) => {
    const cabineElement = document.createElement("div");
    cabineElement.classList.add("cabine");

    cabineElement.innerHTML = `
      <h3>${cabine.name}</h3>
      <div class="status ${cabine.status}">
        <span></span> ${cabine.status === "on" ? "Allumé" : "Éteint"}
      </div>
      <div class="power">Puissance : ${cabine.power} MW</div>
    `;

  feeder1.appendChild(cabineElement);
  
  });

  // Affichage des cabines clignotantes
  clignotantes.forEach((cabine) => {
    const cabineElement = document.createElement("div");
    cabineElement.classList.add("cabine", "clignotante");

    cabineElement.innerHTML = `
      <h3>${cabine.name}</h3>
      <div class="status ${cabine.status}">
        <span></span> ${cabine.status === "on" ? "Allumé" : "Éteint"}
      </div>
      <div class="power">Puissance : ${cabine.power} MW</div>
    `;

  feeder1.appendChild(cabineElement);
  
  });

  totalPowerElement.textContent = totalPower.toFixed(2) + " MW";  // Afficher la puissance ajustée
  if (totalPower >= powerThreshold){
      totalPowerRed = document.getElementById("total-power-value"); 
      totalPowerRed.classList.add("red-display");
  }else{
      totalPowerRed.classList.remove("red-display");
  }

  // Afficher les cabines clignotantes dans la section critique
  if (clignotantes.length > 0) {
    criticalSection.style.display = "block";
    nombre = document.getElementById("nombre_couper")
    nombre.innerHTML = clignotantes.length;
    clignotantes.forEach(cabine => {
      const listItem = document.createElement("li");
      listItem.textContent = `${cabine.nom_feeder} - ${cabine.name}`;
      criticalList.appendChild(listItem);
    });
  }
}

function updatePower() {
  cabines.forEach((cabine) => {
      let randomNumber = Math.random() * cabine.max_consumption;
      let truncatedNumber = Math.floor(randomNumber * 100) / 100;
      cabine.power = truncatedNumber;  // Simuler une variation de puissance
  });
  renderCabines();
}

// Mettre à jour la puissance toutes les 3 secondes
setInterval(updatePower, 1000);

renderCabines();

// Gérer le clic sur le bouton de bascule pour la barre latérale
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.getElementById("sidebar");
const header = document.getElementById("header");
const content = document.getElementById("content");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  header.classList.toggle("collapsed");
  content.classList.toggle("collapsed");
});