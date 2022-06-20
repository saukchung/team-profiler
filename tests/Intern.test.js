const Intern = require("../lib/intern");

//  INITIALIZATION
describe("Interns", () => {
    describe("Initialized object", () => {
        it("should create an object called Intern", () => {
            //creates a new object of intern
            const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
            expect(typeof intern).toBe("object");
        });
    })

//  VALUES
    describe("Object includes the necessary values", () => {
        it("should save the name as a key value pair", () =>{
            const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
            expect(intern.name).toBe("exampleName");
        });

        it("should save the ID as a key value pair", () =>{
            const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
            expect(intern.id).toBe("exampleId");
        });

        it("should save the email as a key value pair", () =>{
            const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
            expect(intern.email).toBe("exampleEmail");
        });

        it("should save the school as a key value pair", () =>{
            const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
            expect(intern.school).toBe("exampleSchool");
        });
    })

//  METHODS
    describe("Object includes the necessary methods", () => {
        describe("getName", () => {
            it("should return the name", () =>{
                const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
                expect(intern.getName()).toBe("exampleName");
            });
        })
        
        describe("getId", () => {
            it("should return the ID", () =>{
                const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
                expect(intern.getId()).toBe("exampleId");
            });
        })

        describe("getEmail", () => {
            it("should return the Email", () =>{
                const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
                expect(intern.getEmail()).toBe("exampleEmail");
            });
        })
        
        describe("getGithub", () => {
            it("should return the GitHub username", () =>{
                const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
                expect(intern.getSchool()).toBe("exampleSchool");
            });
        })

        describe("getRole", () => {
            it("should return the role", () =>{
                const intern = new Intern("exampleName", "exampleId", "exampleEmail", "exampleSchool");
                expect(intern.getRole()).toBe("Intern");
            });
        })
    })
})