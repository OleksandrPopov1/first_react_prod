import {useForm} from "react-hook-form";

import {setUser} from "../../services";

function FormUser(){
    
    const {register, handleSubmit} = useForm();

    const submit = (user) => {
        setUser(user).then(({data}) => console.log(data));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input
                    type="text"
                    {...register('name')}
                />
                <input
                    type="text"
                    {...register('surname')}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export {FormUser}