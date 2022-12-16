const inputUserName = document.querySelector("#githubname")
const form = document.querySelector("#github-form")
const repo = document.querySelector("#repos")
const lastUsers = document.querySelector("#lastSearch")

const github = new GitHubDatas()
const ui = new UI()
const storage = new Storage()

eventListeners()

function eventListeners() {
  form.addEventListener("submit", getData)
  document.addEventListener("DOMContentLoaded", getAllStorage)

  document.getElementById("clear-last-users").addEventListener("submit", function (e) {

    localStorage.removeItem("usernames")
    lastUsers.innerHTML = " "

    e.preventDefault()
  })

}

function getData(e) {

  github.getProfileDatas(inputUserName.value.trim())
    .then(response => {

      if (response.message === "Not Found") {

        window.alert("Girdiğiniz kullanıcı adında bir kullanıcı bulunamadı..")

      }
      else {

        const ui = new UI(response.avatar_url, response.name, response.bio, response.followers,
          response.following, response.public_repos, response.company, response.location, response.email)
        setTimeout(() => {
          ui.clearGetDatas()
          ui.addToUI()

        }, 2000);

      }

    })
    .catch(err => console.log(err))


  github.getReposData(inputUserName.value.trim())
    .then(response => {
      setTimeout(() => {
        ui.clearOldRepos()
        ui.addToUIRepo(response)
        ui.addtoUiFromInput(inputUserName.value)

        storage.addToStorage(inputUserName.value.trim())
      }, 2000);

    })
    .catch(err => console.error(err))

  e.preventDefault()
}

function getAllStorage() {
  storage.addToUiFromStorage()
}

