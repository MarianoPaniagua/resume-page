document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadbtn").addEventListener("click", count);

    function count() {
        fetch('https://resume-visit-counter.herokuapp.com/info', {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => {
                if (response.ok) {
                    console.log("Thanks for downloading my resume :D")
                }
            }).catch(error => console.log("Ups there was a problem counting this, don´t worry, enjoy my resume :D"))
    }
})