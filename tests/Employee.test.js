const Employee = require("../lib/employee");

//  INITIALIZATION
describe("Employees", () => {
    describe("Initialized object", () => {
        it("should create an object called Employee", () => {
            //creates a new object of employee
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(typeof employee).toBe("object");
        });
    })

//  VALUES
    describe("Object includes the necessary values", () => {
        it("should save the name as a key value pair", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.name).toBe("exampleName");
        });

        it("should save the ID as a key value pair", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.id).toBe("exampleId");
        });

        it("should save the email as a key value pair", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.email).toBe("exampleEmail");
        });
    })

//  METHODS
    describe("Object includes the necessary methods", () => {
        it("should return the name", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.getName()).toBe("exampleName");
        });

        it("should return the id", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.getId()).toBe("exampleId");
        });
        
        it("should return the email", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.getEmail()).toBe("exampleEmail");
        });

        it("should return the role", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.getRole()).toBe("Employee");
        });
    })
})