let ul = document.createElement('ul')
document.querySelector('#main').appendChild(ul)

function render_repos(repos) {
    ul.innerHTML = ""
    
    document.querySelector('#main').style.padding = '75px'
    for (let repo of repos) {
        let li = document.createElement('li')
        li.innerText = repo.name
        ul.appendChild(li)
    }
}

function render_error() {
    ul.innerHTML = ""

    let li = document.createElement('li')
    li.innerText = "Este usuário não existe! Tente novamente"
    ul.appendChild(li)
}

function render_loading() {
    let li = document.createElement('li')
    li.innerText = "Carregando..."
    ul.appendChild(li)
}

function load_repos() {
    let gh_user = document.getElementById('gh-user').value
    ul.innerHTML = ""

    if (gh_user.length == 0) {
        return ""
    }

    render_loading()

    axios.get(`https://api.github.com/users/${gh_user}/repos`)
        .then(function (response) {
            render_repos(response.data)
        })
        .catch(function (error) {
            render_error()
        })
}

