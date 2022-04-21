import { createSlice , PayloadAction} from "@reduxjs/toolkit";


//check account function
//add account function
//remove account function

const accounts =  [
    {
        username : 'admin',
        password : 'admin'
    },

    {
        username : 'hello',
        password : 'goodbye'
    }
]

export const CheckAccount = createSlice({
    name: 'checkAccount',
    initialState: {
        isValid: false,
    },
    reducers: {
        checkValidAccount: (state,data) => {
            console.log(data.payload.username);
            console.log("Test Redux OK")
            accounts.map((account) => {
                
                if(account.username == data.payload.username)
                {
                    state.isValid = true;
                    return;
                }
                console.log("Fail");

            })
        }
    }

})

export const { checkValidAccount } = CheckAccount.actions;
export default CheckAccount.reducer;
export const selectorCheckAccount = (state) => state.checkAccount;