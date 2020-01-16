import { observable, computed, action } from 'mobx';


class formData {
    @observable formData = getformData();

    @computed get formValid() {
        return Object.values(this.formData).every(field => field.valid);
    }

    @computed get data(){
        let data = {};
        
        for(let arrayname in this.formData){
            data[arrayname] = this.formData[arrayname].value;
        }
        return data;
    }

    @action changeData(label, newValue) {
        let field = this.formData[label];
        field.value = newValue;
        field.valid = field.validator(newValue);
    }

}

export default new formData();


function getformData() {
    return {
        name: {
            label: "Your name",
            value: "",
            validator: value => /^[a-zA-Z ]{2,}$/.test(value),
            errorText: "Latin symbols length of 2 or more",
            valid: null
            }
        ,
        email: {
            label: "Email",
            value: "",
            validator: value => /^.+@.+$/.test(value),
            errorText: "At sign",
            valid: null
        },
        label: {
            label: "Phone",
            value: "",
            validator: value => /^\d{7,15}$/.test(value),
            errorText: "Numbers length of 7 to 15",
            valid: null
        }

    }
}