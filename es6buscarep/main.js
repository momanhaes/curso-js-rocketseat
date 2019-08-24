// var imported = document.createElement('script');
// imported.src = 'api.js';
// document.head.appendChild(imported);

class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById('repoForm');
        this.inputEl = document.querySelector('input[name=repository]');
        this.listEl = document.getElementById('repoList');

        this.registerHandlers();
    }

    //Registro dos eventos
    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    // setLoading(loading = true) {
    //     if (loading == true) {
    //         let loadingEl = document.createAttribute('span');
    //         loadingEl.setAttribute('id', 'loading');
    //         loadingEl.appendChild(document.createTextNode('Carregando'));

    //         this.formEl.appendChild(loadingEl);
    //     } else {
    //         document.getElementById('loading').remove();
    //     }
    // }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
            return;

        // this.setLoading();

        try {
            const response = await axios.get(`https://api.github.com/users/${repoInput}`);

            const {
                name,
                html_url,
                avatar_url
            } = response.data;

            this.repositories.push({
                name,
                avatar_url,
                html_url,
            });

            this.inputEl.value = '';

            this.render();
        } catch (err) {
            alert('O repositório não existe!');
        }

        // this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            imgEl.style.marginBottom = '10px';

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            // let descriptionEl = document.createElement('p');
            // descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));
            linkEl.style.marginLeft = '10px';

            let listItemEl = document.createElement('li');

            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            // listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        })
    }

}

new App();