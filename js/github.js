class GitHubDatas {

  constructor() {
    this.url = "https://api.github.com/users/"
  }

  async getProfileDatas(username) { // async => promise döndürüyor.
    const responseProfile = await fetch(this.url + username)
    const responseProfileData = responseProfile.json()

    return responseProfileData

  }

  async getReposData(username) {

    const responseRepo = await fetch(this.url + username + "/repos")
    const responseRepoData = await responseRepo.json()

    return responseRepoData

  }



}