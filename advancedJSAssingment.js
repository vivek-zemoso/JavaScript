async function getDataWithFetch(uId) {
    const server_url = `http://localhost:5000/images/10`;
    const data = await fetch(server_url, {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    });
    return data;
}

console.log("start");
let data = await getDataWithFetch("skc");
data = await data.json();
console.log("Following is the data obtained : \n " + data);
console.log("end");

function getData(uId) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            return resolve("skc@gmail.com");

        }, 4000);
    });

    return promise;
}

console.log("start");
let email = await getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");