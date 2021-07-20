import Component from '@ember/component';

export default Component.extend({
    name: "faiyaz",
    employees: null,

    init() {

        this._super(...arguments);
        const employees = [{
                name: "Vinoth Kumar",
                age: 27,
                place: "Tirunelveli",
                position: "Software Developer",
            },
            {
                name: "Mohamed Umar",
                age: 26,
                place: "Chennai",
                position: "Senior Software Developer",
            },
            {
                name: "Saravana Kumar",
                age: 28,
                place: "Erode",
                position: "Asst. Manager",
            }, {
                name: "Dhanu Chandran",
                age: 29,
                place: "Nagercoil",
                position: "Delivery Manager",
            }, {
                name: "Bala Vigneshwaran",
                age: 30,
                place: "Kanchipuram",
                position: "Designer",
            }
        ]
        this.set("employees", employees)

    }
});