class Storage {
    constructor() {
    }

    getDatas() {

        let value

        if (localStorage.getItem("usernames") === null) {
            value = []
        }
        else {
            value = JSON.parse(localStorage.getItem("usernames"))

        }

        return value

    }

    addToStorage(username) {

        let value = this.getDatas()

        value.push(username)
        localStorage.setItem("usernames", JSON.stringify(value))

    }

    addToUiFromStorage() {

        let usernames = this.getDatas()

        usernames.forEach(username => {
            lastUsers.innerHTML += `
        <ul class ="list-group" id = "last-users">
        <li class="list-group-item">${username}</li> 
        </ul>
        <hr> 
        `
        });

    }

    clearFromStorage() {
        localStorage.removeItem("usernames")
    }






}


