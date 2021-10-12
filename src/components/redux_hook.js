import React, { useReducer } from 'react';
const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
const reducer=(state,action)=>{return {
    ...state,
    [action.type]: {
        value:action.val,
        error:action.error
    }
};
}

const ReduxHook=(props)=>{
    const [personstate, dispatch] = useReducer(reducer, initialState);
    const handleChange=(e) =>{
        const { name, value } = e.target;
        let error="";
        if(e.target.value.length<2 && e.target.name==='firstName'){
            error="First Name has to be greater than 2 characters";
        }

  
        if(e.target.value.length<2 && e.target.name==='lastName'){
            error="last Name has to be greater than 2 characters";
        }


        if(e.target.value.length<5 && e.target.name==='email'){
            error="email has to be greater than 5 characters";
        }

        dispatch({
            type: name,
            val: value,
            error:error
        });
    }
    return (
        <div>
        <div>
            <label>
                <span>First Name:</span>{' '}
                <input
                    name="firstName"
                    value={personstate.firstName.value}
                    onChange={handleChange}
                />
            </label>
            <label>{personstate.firstName.error}</label>
        </div>
        <div>
            <label>
                <span>Last Name:</span>{' '}
                <input
                    name="lastName"
                    value={personstate.lastName.value}
                    onChange={handleChange}
                />
            </label>
            <label>{personstate.lastName.error}</label>
        </div>
        <div>
            <label>
                <span>Email:</span>{' '}
                <input
                    name="email"
                    value={personstate.email.value}
                    onChange={handleChange}
                />
            </label>
            <label>{personstate.email.error}</label>
        </div>
    </div>
);
}
export default ReduxHook;