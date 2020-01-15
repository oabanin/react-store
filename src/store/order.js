import { observable, computed, action } from 'mobx';


class formData {
    @observable formData = getformData();
    /*@computed get total() {
        return this.formData.reduce((t, pr) => t + pr.price * pr.current, 0)
    }*/

    @action changeData(label, newValue) {
        this.formData[label].value = newValue;
    }

}

export default new formData();


function getformData() {
    return {
        name: {
            label: "Your name",
            value: "test"
        },
        email: {
            label: "Email",
            value: ""
        },
        label: {
            label: "Phone",
            value: ""
        }

    }
}