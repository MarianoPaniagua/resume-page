document.addEventListener("DOMContentLoaded", function() {
    let loading = document.getElementById("wrap");

    let certs = [];

    fetch('certs.json')
        .then(response => response.json())
        .then(data => {
            certs = data;
        }).then(() => {
            generateGrid();
        });

    function generateGrid() {
        let container = document.getElementById("rowsOfCerts");
        console.log(certs);
        certs.forEach(cert => {
            let divCard = document.createElement("div");
            divCard.classList.add("card", "divCard");

            let img = document.createElement("img");
            img.classList.add("card-img-top");
            img.setAttribute("src", cert.img);
            divCard.appendChild(img);

            let divCard2 = document.createElement("div");
            divCard2.classList.add("card-body", "text-center");
            let title = document.createElement("h5");
            title.classList.add("card-title");
            var testTitle = document.createTextNode(cert.title);
            title.appendChild(testTitle);
            divCard2.appendChild(title);

            let info = document.createElement("p");
            info.classList.add("card-text");
            var textInfo = document.createTextNode(cert.info);
            info.appendChild(textInfo);
            divCard2.appendChild(info);

            let url = document.createElement("a");
            url.classList.add("btn", "btn-secondary");
            var textUrl = document.createTextNode("Certificate");
            url.appendChild(textUrl);
            url.setAttribute("href", cert.url)
            divCard2.appendChild(url);

            divCard.appendChild(divCard2);

            container.appendChild(divCard);
        })
    }

})