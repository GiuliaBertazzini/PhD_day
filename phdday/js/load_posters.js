function load_poster() {
    fetch('images/DICEA.csv')
        .then(response => response.text())
        .then(text => {
            // Dividi il testo in righe
            const rows = text.split('\n');

            var postersData = [];
            // Analizza ogni riga
            rows.forEach(row => {
                if (row !== "email,Author,OtherAuthors,PhDProgram,Cycle,Advisors,Title,Lab,Path,Nome,Cognome" && row !== ""){
                    const columns = row.split(',');
                    var authors;

                    if (columns[2] === ""){
                        authors = columns[1]
                    }
                    else {
                        authors = columns[1] + "; " + columns[2];
                    }
                    var content = { title: columns[6].replace(";", ","), author: authors , advisors: columns[5], image: columns[8] };
                    postersData.push(content);
                }

         // Stampa ogni colonna del CSV
            });
            var postersContainer = document.getElementById("posters_container_DICEA");

            postersData.forEach(function(poster) {
                var posterDiv = document.createElement("div");
                posterDiv.classList.add("col-md-6");
                posterDiv.innerHTML = `
         <div class="container_main">
            <h1 class="poster_title big_title">${poster.title}</h1>
            <h3 class="poster_title">Author: ${poster.author}</h3>
            <h3 class="poster_title">Advisors: ${poster.advisors}</h3>
            <h3 class="poster_title" style="padding-bottom: 15px;">PhD program in International Doctorate in Civil and Environmental Engineering</h3>
            <a href="${poster.image}"><img src="${poster.image}" alt="Avatar" class="image"></a>
         </div>
      `;
                postersContainer.appendChild(posterDiv);
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore durante il recupero del file CSV:', error);
        });

    fetch('images/DIEF.csv')
        .then(response => response.text())
        .then(text => {
            // Dividi il testo in righe
            const rows = text.split('\n');

            var postersData = [];
            // Analizza ogni riga
            rows.forEach(row => {
                if (row !== "email,Author,OtherAuthors,PhDProgram,Cycle,Advisors,Title,Lab,Path,Nome,Cognome" && row !== ""){
                    const columns = row.split(',');
                    var authors;
                    if (columns[2] === ""){
                        authors = columns[1]
                    }
                    else {
                        authors = columns[1] + "; " + columns[2];
                    }
                    var content = { title: columns[6], author: authors , advisors: columns[5], image: columns[8] };
                    postersData.push(content);
                }

                // Stampa ogni colonna del CSV
            });
            var postersContainer = document.getElementById("posters_container_DIEF");

            postersData.forEach(function(poster) {
                var posterDiv = document.createElement("div");
                posterDiv.classList.add("col-md-6");
                posterDiv.innerHTML = `
         <div class="container_main">
            <h1 class="poster_title big_title">${poster.title}</h1>
            <h3 class="poster_title">Author: ${poster.author}</h3>
            <h3 class="poster_title">Advisors: ${poster.advisors}</h3>
            <h3 class="poster_title" style="padding-bottom: 15px;">PhD program in Industrial Engineering</h3>
            <a href="${poster.image}"><img src="${poster.image}" alt="Avatar" class="image"></a>
         </div>
      `;
                postersContainer.appendChild(posterDiv);
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore durante il recupero del file CSV:', error);
        });

    fetch('images/DINFO.csv')
        .then(response => response.text())
        .then(text => {
            // Dividi il testo in righe
            const rows = text.split('\n');

            var postersData = [];
            // Analizza ogni riga
            rows.forEach(row => {
                if (row !== "email,Author,OtherAuthors,PhDProgram,Cycle,Advisors,Title,Lab,Path,Nome,Cognome" && row !== ""){
                    const columns = row.split(',');
                    var authors;
                    if (columns[2] === ""){
                        authors = columns[1]
                    }
                    else {
                        authors = columns[1] + "; " + columns[2];
                    }
                    var content = { title: columns[6], author: authors , advisors: columns[5], image: columns[8] };
                    postersData.push(content);
                }

                // Stampa ogni colonna del CSV
            });
            var postersContainer = document.getElementById("posters_container_DINFO");

            postersData.forEach(function(poster) {
                var posterDiv = document.createElement("div");
                posterDiv.classList.add("col-md-6");
                posterDiv.innerHTML = `
         <div class="container_main">
            <h1 class="poster_title big_title">${poster.title}</h1>
            <h3 class="poster_title">Author: ${poster.author}</h3>
            <h3 class="poster_title">Advisors: ${poster.advisors}</h3>
            <h3 class="poster_title" style="padding-bottom: 15px;">PhD program in Information Engineering</h3>
            <a href="${poster.image}"><img src="${poster.image}" alt="Avatar" class="image"></a>
         </div>
      `;
                postersContainer.appendChild(posterDiv);
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore durante il recupero del file CSV:', error);
        });

    fetch('images/SMART.csv')
        .then(response => response.text())
        .then(text => {
            // Dividi il testo in righe
            const rows = text.split('\n');

            var postersData = [];
            // Analizza ogni riga
            rows.forEach(row => {
                if (row !== "email,Author,OtherAuthors,PhDProgram,Cycle,Advisors,Title,Lab,Path,Nome,Cognome" && row !== ""){
                    const columns = row.split(',');
                    var authors;
                    if (columns[2] === ""){
                        authors = columns[1]
                    }
                    else {
                        authors = columns[1] + "; " + columns[2];
                    }
                    var content = { title: columns[6], author: authors , advisors: columns[5], image: columns[8] };
                    postersData.push(content);
                }

                // Stampa ogni colonna del CSV
            });
            var postersContainer = document.getElementById("posters_container_DINFO_SMART_COMPUTING");

            postersData.forEach(function(poster) {
                var posterDiv = document.createElement("div");
                posterDiv.classList.add("col-md-6");
                posterDiv.innerHTML = `
         <div class="container_main">
            <h1 class="poster_title big_title">${poster.title}</h1>
            <h3 class="poster_title">Author: ${poster.author}</h3>
            <h3 class="poster_title">Advisors: ${poster.advisors}</h3>
            <h3 class="poster_title" style="padding-bottom: 15px;">PhD program in Smart Computing</h3>
            <a href="${poster.image}"><img src="${poster.image}" alt="Avatar" class="image"></a>
         </div>
      `;
                postersContainer.appendChild(posterDiv);
            });
        })
        .catch(error => {
            console.error('Si è verificato un errore durante il recupero del file CSV:', error);
        });



}