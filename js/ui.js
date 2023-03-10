class UI {

  constructor(avatar, fullname, bio, follower, following, repos, company, location, email) {
    this.avatar = avatar
    this.fullname = fullname
    this.bio = bio
    this.follower = follower
    this.following = following
    this.repos = repos
    this.company = company
    this.location = location
    this.email = email
  }

  addToUI() {

    profile.innerHTML += `
    
    <div class="card card-body mb-3">
  <div class="row">
    <div class="col-md-4">
      <a href="" target = "_blank">
       <img class="img-fluid mb-2" src="${this.avatar}"> </a>
       <hr>
       <div id="fullName"><strong> ${this.fullname}</strong></div>
       <hr>
       <div id="bio">${this.bio}</div>
      </div>
    <div class="col-md-8">
          <button class="btn btn-secondary">
                Takipçi  <span class="badge badge-light">${this.follower}</span>
          </button>
          <button class="btn btn-info">
               Takip Edilen  <span class="badge badge-light">${this.following}</span>
            </button>
          <button class="btn btn-danger">
              Repolar  <span class="badge badge-light">${this.repos}</span>
          </button>
          <hr>
          <li class="list-group">
              <li class="list-group-item borderzero">
                  <img src="images/company.png" width="30px"> <span id="company">${this.company}</span>
                  
              </li>
              <li class="list-group-item borderzero">
                  <img src="images/location.png" width="30px"> <span id = "location">${this.location}</a>
                  
              </li>
              <li class="list-group-item borderzero">
                  <img src="images/mail.png" width="30px"> <span id="mail">${this.email}</span>
                  
              </li>
              
          </div>
             
          
    </div>
</div> 
`


  }

  clearGetDatas() {
    profile.innerHTML = ""
  }

  addToUIRepo(datas) {

    datas.forEach(data => {

      repo.innerHTML += `
      <div class="mb-2 card-body">
               <div class="row">

                  <div class="col-md-2">
                      <a href="${data.html_url}" target = "_blank" id = "repoName">${data.name}</a>
                  </div>

                  <div class="col-md-6">
                    <button class="btn btn-secondary">
                      Starlar  <span class="badge badge-light" id="repoStar">${data.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                      Forklar  <span class="badge badge-light" id ="repoFork">${data.forks_count}</span>
                    </button>
                    
                  </div>
                </div>     

      </div>
      `



    })
  }

  clearOldRepos() {
    repo.innerHTML = ""
  }

  addtoUiFromInput(username) {

    lastUsers.innerHTML += `
    <ul class ="list-group" id = "last-users">
        <li class="list-group-item">${username}</li> 
    </ul>
    <hr> 
    `
  }

}