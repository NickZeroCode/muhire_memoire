
      // const powerThreshold = 10; // en MW
  
      const cabines = [
        { id: 1, name: "Ex - Hop", power: 1, status: "on", priority: true, feeder: 0, nom_feeder:"Feeder Sud"},
        { id: 2, name: "Lac(Yengo)", power: 0.3, status: "on", priority: false, feeder: 1, nom_feeder:"Feeder S/Station" },
        { id: 3, name: "Instigo", power: 0.7, status: "on", priority: false, feeder: 2, nom_feeder:"Feeder Centre" },
        { id: 4, name: "Présidentielle", power: 0.1, status: "on", priority: true, feeder: 0,nom_feeder:"Feeder Sud"},
        { id: 5, name: "Eveché", power: 0.2, status: "on", priority: false, feeder: 1, nom_feeder:"Feeder S/Station"},
        { id: 6, name: "Hopital Général", power: 0.2, status: "on", priority: true, feeder: 0,nom_feeder:"Feeder Sud"},
        { id: 7, name: "Ihusi Vision", power: 0.1, status: "on", priority: true, feeder: 0,nom_feeder:"Feeder Sud"},
        { id: 8, name: "Cabine H", power: 1, status: "on", priority: true, feeder: 0,nom_feeder:"Feeder Sud"},
        { id: 9, name: "Chateau I", power: 0.6, status: "on", priority: false, feeder: 1,nom_feeder:"Feeder S/Station"},
        { id: 10, name: "Chateau II", power: 0.7, status: "on", priority: false, feeder: 1,nom_feeder:"Feeder S/Station"},
        { id: 11, name: "Procure", power: 0.2, status: "on", priority: false, feeder: 2,nom_feeder:"Feeder Centre"},
        { id: 12, name: "ITIG", power: 1, status: "on", priority: false, feeder: 2,nom_feeder:"Feeder Centre"},
        { id: 13, name: "Carmel", power: 0.3, status: "on", priority: false, feeder: 3,nom_feeder:"Feeder Route Sake"},
        { id: 14, name: "Akili", power: 0.2, status: "on", priority: false, feeder: 3,nom_feeder:"Feeder Route Sake"},
        { id: 15, name: "Akiphar", power: 0.6, status: "on", priority: false, feeder: 3,nom_feeder:"Feeder Route Sake"},
        { id: 16, name: "Abdallah", power: 0.1, status: "on", priority: false, feeder: 3,nom_feeder:"Feeder Route Sake"},
      ];
  
      const prioritaires = document.getElementById("prioritaires");
      const feeder1 = document.getElementById("feeder-1");
      const feeder2 = document.getElementById("feeder-2");
      const feeder3 = document.getElementById("feeder-3");
      const totalPowerElement = document.getElementById("total-power-value");
      const criticalSection = document.getElementById("critical-section");
      const criticalList = document.getElementById("critical-list");
  
      function renderCabines() {
        prioritaires.innerHTML = "";
        feeder1.innerHTML = "";
        feeder2.innerHTML = "";
        feeder3.innerHTML = "";
        criticalList.innerHTML = "";
        criticalSection.style.display = "none";
  
        // Calcul initial du total de puissance
        let totalPower = cabines.reduce((sum, cabine) => sum + cabine.power, 0);
        let adjustedPower = totalPower;  // Commence avec la puissance totale
  
        // Créer des listes pour les cabines prioritaires et non prioritaires
        let cabinesPrioritaires = cabines.filter(cabine => cabine.priority);
        let cabinesNonPrioritaires = cabines.filter(cabine => !cabine.priority);
  
        // Affichage des cabines prioritaires
        cabinesPrioritaires.forEach((cabine) => {
          const cabineElement = document.createElement("div");
          cabineElement.classList.add("cabine", "prioritaire");

          if (cabine.power != 0){
            cabine.status = "on";
          }else{
            cabine.status = "off";
            }
  
          cabineElement.innerHTML = `
            <h3>${cabine.name}</h3>
            <div class="status ${cabine.status}">
              <span></span> ${cabine.status === "on" ? "Allumé" : "Éteint"}
            </div>
            <div class="power">Puissance : ${cabine.power} MW</div>
          `;
  
          prioritaires.appendChild(cabineElement);
        });
  
        // Étape 1: Trier les cabines non prioritaires par consommation croissante
        cabinesNonPrioritaires.sort((a, b) => a.power - b.power);  // Trier par puissance croissante
  
        // Créer une liste pour les cabines qui peuvent être coupées
        let clignotantes = [];
        let normales = [];
  
        cabinesNonPrioritaires.forEach((cabine) => {
          if (adjustedPower > powerThreshold) {
            if (cabine.power != 0){

                cabine.status = "on";
                clignotantes.push(cabine);

            }else{
                cabine.status = "off";
                normales.push(cabine);
            }

            adjustedPower -= cabine.power;  // Réduire la puissance
          } else {
            normales.push(cabine);
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
  
          if (cabine.feeder === 1) {
            feeder1.appendChild(cabineElement);
          } else if (cabine.feeder === 2) {
            feeder2.appendChild(cabineElement);
          }
          else if (cabine.feeder === 3){
            feeder3.appendChild(cabineElement);
          }
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
  
          if (cabine.feeder === 1) {
            feeder1.appendChild(cabineElement);
          } else if (cabine.feeder === 2) {
            feeder2.appendChild(cabineElement);
          } else if (cabine.feeder === 3){
            feeder3.appendChild(cabineElement);
          }
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
            let randomNumber = Math.random() * 1;
            let truncatedNumber = Math.floor(randomNumber * 100) / 100;
          cabine.power = truncatedNumber;  // Simuler une variation de puissance
        });
        renderCabines();
      }
  
      // Mettre à jour la puissance toutes les 3 secondes
      setInterval(updatePower, 7000);
  
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