const Manager = require("../lib/manager");

//  INITIALIZATION
describe("Managers", () => {
    describe("Initialized object", () => {
        it("should create an object called Manager", () => {
            //creates a new object of manager
            const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
            expect(typeof manager).toBe("object");
        });
    })

//  VALUES
    describe("Object includes the necessary values", () => {
        it("should save the name as a key value pair", () =>{
            const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
            expect(manager.name).toBe("exampleName");
        });

        it("should save the ID as a key value pair", () =>{
            const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
            expect(manager.id).toBe("exampleId");
        });

        it("should save the email as a key value pair", () =>{
            const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
            expect(manager.email).toBe("exampleEmail");
        });

        it("should save the office # as a key value pair", () =>{
            const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
            expect(manager.officeNumber).toBe("exampleOfficeNumber");
        });
    })

//  METHODS
    describe("Object includes the necessary methods", () => {
        describe("getName", () => {
            it("should return the name", () =>{
                const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
                expect(manager.getName()).toBe("exampleName");
            });
        })
        
        describe("getId", () => {
            it("should return the ID", () =>{
                const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
                expect(manager.getId()).toBe("exampleId");
            });
        })

        describe("getEmail", () => {
            it("should return the Email", () =>{
                const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
                expect(manager.getEmail()).toBe("exampleEmail");
            });
        })
        
        describe("getRole", () => {
            it("should return the role", () =>{
                const manager = new Manager("exampleName", "exampleId", "exampleEmail", "exampleOfficeNumber");
                expect(manager.getRole()).toBe("Manager");
            });
        })
    })
})