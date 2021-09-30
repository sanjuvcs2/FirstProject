class people {
    showName() {
        console.log('my name is faithful');
    }
    showAge() {
        console.log('Faithful is 20');
    }
}

const result = new people();
result.showAge();
result.showName();



class people {
    showName() {
        console.log('my name is faithful');
    }
    #showAge() {
        console.log('Faithful is 20');
    }
    showAll() {
        this.showName();
        this.#showAge();
    }
}

const result = new people();
result.showAll();