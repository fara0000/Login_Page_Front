export const sendGetRequest = cb => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "/getLogin");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send();

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log(xhr.statusText);
        } else {
            const data = JSON.parse(xhr.response);
            console.log(data);
            cb(data);
        }
    }
}

export const sendPutRequest = data => {
    const xhr = new XMLHttpRequest();
    const dataInJson = JSON.stringify(data);

    xhr.open("PUT", "/setLogin");
    xhr.setRequestHeader("Content-type", "application-json");
    xhr.send(dataInJson);
}
