
const clicked = () => {
    const username = document.getElementById('username').value;
    const userpass = document.getElementById('password').value;

    const data = {
        username: username,
        userpass: userpass
    }

    console.log(JSON.stringify(data))
    fetch("api/?username=" + username + "&password=" + userpass, {
        method: 'GET'
    })
}