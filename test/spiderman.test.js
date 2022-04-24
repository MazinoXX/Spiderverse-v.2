const Spiderman = require('./../app/spiderman')
describe("Unit test for Spiderman class", () => {
    test('1) Creat an spiderman object', () => {

        // Se instancia un objeto con la información correspondiente
        const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Gardfield",2,"Sony")

        // Aqui se valida si la información es la esperada
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Gardfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony")
    

    });
    test('2) Use the method getInfo', () =>{
        const tomHolland = new Spiderman("Spiderman Marvel",25,"Tom Holland",5,"Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
    
})