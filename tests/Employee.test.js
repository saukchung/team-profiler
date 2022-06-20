const Employee = require("../lib/employee");
//  INITIALIZATION
describe("Employees", () => {
    describe("Initialized object", () => {
        it("should create an object called Employee", () => {
            //creates a new object of employees
            const employee = new Employee("exampleName", "exampleId","exampleEmail");
            expect(typeof employee).toBe("object");
        });
    })
//  VALUES
    describe("Object includes the necessary values", () => {
        it("should save the name as a key value pair", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.name).toBe("exampleName");
            expect(employee.id).toBe("exampleId");
            expect(employee.email).toBe("exampleEmail");
        });
    })
//  METHODS
    describe("Object includes the necessary methods", () => {
        it("should save the name as a key value pair", () =>{
            const employee = new Employee("exampleName", "exampleId", "exampleEmail");
            expect(employee.getName()).toBe("exampleName");
            expect(employee.getId()).toBe("exampleId");
            expect(employee.getEmail()).toBe("exampleEmail");
            expect(employee.getRole()).toBe("Employee");
        });
    })
})