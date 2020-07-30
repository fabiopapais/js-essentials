var newPromise = function() {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/fabiopapaiss')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject("Erro na requisição")
                }
            }
        }
    })
}

newPromise()
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.warn(error)
    })
