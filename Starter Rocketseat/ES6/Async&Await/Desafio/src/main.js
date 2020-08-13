// Transforme os códigos abaixo em async/await

// 1.
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/* function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
} */
async function umPorSegundo() {
    for (let i = 1; i <= 3; i++) {
        await delay()
        console.log(`${i}s`)
    }
}
umPorSegundo()


// 2.
import axios from 'axios';
/* function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
} */
async function getUserFromGithub(user) {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`)
        console.log(data)
    } catch (err) {
        console.log('Usuário não existe!')
    }
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


// 3.
/* class Github1 {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
} */
class Github {
    static async getRepositories(repo) {
        try {
            const { data } = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(data)
        } catch (err) {
            console.log('Repositório não existe')
        }
    }
}
Github.getRepositories('rocketseat/unform');
Github.getRepositories('rocketseat/dslkvmskv');


// 4.
/* const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
} */
const buscaUsuario = async usuario => {
    try {
        const { data } = await axios.get(`https://api.github.com/users/${user}`)
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('diego3g');