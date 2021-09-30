class People {
    get Name() {
      return "Faithful"
    }
    get #Age() {
      return 20
    }
    get publicAge() {
      return this.#Age
    }
  }
  
  let people = new People();
  console.log(people.publicAge)

  
  class People {
    get Name() {
      return "Faithful"
    }
    get #Age() {
      return 20
    }
  
  }
  
  let people = new People();
  console.log(people.Age) // undefined

  