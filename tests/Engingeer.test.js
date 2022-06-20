const Engineer = require("../lib/engineer");

//  INITIALIZATION
describe("Engineers", () => {
    describe("Initialized object", () => {
        it("should create an object called Engineer", () => {
            //creates a new object of engineer
            const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
            expect(typeof engineer).toBe("object");
        });
    })

//  VALUES
    describe("Object includes the necessary values", () => {
        it("should save the name as a key value pair", () =>{
            const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
            expect(engineer.name).toBe("exampleName");
        });

        it("should save the ID as a key value pair", () =>{
            const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
            expect(engineer.id).toBe("exampleId");
        });

        it("should save the email as a key value pair", () =>{
            const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
            expect(engineer.email).toBe("exampleEmail");
        });

        it("should save the github as a key value pair", () =>{
            const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
            expect(engineer.github).toBe("exampleGithub");
        });
    })

//  METHODS
    describe("Object includes the necessary methods", () => {
        describe("getName", () => {
            it("should return the name", () =>{
                const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
                expect(engineer.getName()).toBe("exampleName");
            });
        })
        
        describe("getId", () => {
            it("should return the ID", () =>{
                const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
                expect(engineer.getId()).toBe("exampleId");
            });
        })

        describe("getEmail", () => {
            it("should return the Email", () =>{
                const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
                expect(engineer.getEmail()).toBe("exampleEmail");
            });
        })
        
        describe("getGithub", () => {
            it("should return the GitHub username", () =>{
                const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
                expect(engineer.getGithub()).toBe("exampleGithub");
            });
        })

        describe("getRole", () => {
            it("should return the role", () =>{
                const engineer = new Engineer("exampleName", "exampleId", "exampleEmail", "exampleGithub");
                expect(engineer.getRole()).toBe("Engineer");
            });
        })
    })
})