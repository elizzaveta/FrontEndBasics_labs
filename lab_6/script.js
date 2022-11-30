const apiBaseUrl = `https://randomuser.me/api`

document.getElementById("downloadButton").addEventListener("click", downloadButtonClick);

const GET = (apiUrl) => {
    return fetch(apiUrl)
        .then(response =>{
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
        .catch(e=> console.log(e.message));
};

async function downloadButtonClick() {

    for (let i = 0; i < 5; i++) {
        let randomUser = GET(apiBaseUrl)
        let wrapper = document.getElementById("wrapper");
        randomUser.then(data => {
            try{
                let userInfo = data.results[0];
                let html = getUserHTML(userInfo)
                wrapper.innerHTML += html
                hideMessage("errorMessage")
                displayMessage("successMessage");
            }
            catch (e){
                hideMessage("successMessage")
                displayMessage("errorMessage");
            }
        })
    }

}

function getUserHTML(userInfo) {
    return `<div class="user-wrapper">
            <img src=${userInfo.picture.large} alt="user picture">
            <div class="user-data-div">
                <p>Name: ${userInfo.name.first} ${userInfo.name.last}</p>
                <p>Country: ${userInfo.location.country}</p>
                <p>PostCode: ${userInfo.location.postcode}</p>
                <p>Phone: ${userInfo.phone}</p>
            </div>
        </div>`
}

function displayMessage(id){
    let message = document.getElementById(id);
    message.style.visibility = "visible";
}
function hideMessage(id){
    let message = document.getElementById(id);
    message.style.visibility = "hidden";
}


