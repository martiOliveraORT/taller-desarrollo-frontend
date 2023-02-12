const url = 'https://dwallet.develotion.com/'


export const login = async (user, password) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "usuario": user,
        "password": password
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const response = await fetch(`${url}login.php`, requestOptions)
    const json = await response.json();
    return json;

}