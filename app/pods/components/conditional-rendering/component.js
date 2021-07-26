import Component from "@ember/component";

export default Component.extend({
    employees: null,
    isShowActiveChecked: false,
    employeesList: null,

    init() {
        this._super(...arguments);
        const employees = [{
                name: "Vinoth Kumar",
                age: 27,
                salary: 10,
                status: "active"
            },
            {
                name: "Mohamed Umar",
                age: 26,
                salary: 20,
                status: "active"
            },
            {
                name: "Saravana Kumar",
                age: 26,
                salary: 20,
                status: "inactive"
            },
            {
                name: "Dhanu Chandran",
                age: 26,
                salary: 20,
                status: "active"
            },
            {
                name: "Bala Vignesh",
                age: 26,
                salary: 20,
                status: "inactive"
            },
            {
                name: "Elavarasan",
                age: 31,
                salary: 30,
                status: "active"
            },
            {
                name: "Abinesh Vel",
                age: 34,
                salary: 32,
                status: "inactive"
            },
            {
                name: "lenin Prabhu",
                age: 34,
                salary: 40,
                status: "active"
            },
        ];
        this.set('employees', employees);
        this.set('employeesList', employees)


    },

    actions: {
        onShowActive(e) {
            if (e.target.checked) {
                var activeEmpList = this.get('employeesList').filter((emp) => emp.status == "active")
                this.set('employeesList', activeEmpList)
            } else {
                var empOutput = this.get('employees');
                this.set('employeesList', empOutput)
            }
        },
    }
});