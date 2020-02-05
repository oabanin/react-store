let initialState = {
    formData : {
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

function change(state, name, value){
    let formData = {...state.formData};
    formData[name] = {...formData[name], value}
    formData[name].valid = formData[name].validator(value);
    return {
        ...state,
        formData
    }
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'ORDER_FROM_DATA_CHANGE':
            return change(state, action.label, action.newValue);
            break;

    }
    return state;

}

export default reducer;
