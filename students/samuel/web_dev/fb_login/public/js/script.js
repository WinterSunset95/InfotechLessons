var name = document.getElementById('username').value;
var pass = document.getElementById('password').value;

const data = {
    username: name,
    userpass: pass
}

const clicked = () => {
    console.log(JSON.stringify(data))
    fetch('/api?username=' + name + '&userpassword=' + pass, {
        method: 'GET'
    })
    fetch('/post', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(data)
    })
}