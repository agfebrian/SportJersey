class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:justify-between items-center bg-primary py-2 px-4 md:px-8">
                <h1 class="text-white text-center md:text-left font-bold text-3xl">SportJersey Store</h1>
                <input type="text" id="search-input" class="w-full md:w-72 px-4 py-2 bg-hover rounded-md outline-none font-medium text-xl text-gray-400" placeholder="Search Jersey">
            </div>
        `
    }
}

customElements.define('app-bar', AppBar);