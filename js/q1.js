const url = 'https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json';
fetch(url)
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('paintings');
        data.forEach(painting => {
            const row = table.insertRow();
            const nameCell = row.insertCell();
            const yearCell = row.insertCell();
            const artistCell = row.insertCell();
            nameCell.innerHTML = painting.name;
            yearCell.innerHTML = painting.year;
            artistCell.innerHTML = painting.artist;
        });
    })
    .catch(error => console.log(error));
    