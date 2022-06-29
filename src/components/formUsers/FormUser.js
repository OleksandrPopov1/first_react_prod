import {useForm} from "react-hook-form";

import {setUser} from "../../services";

function FormUser(){

    let {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(setUser)}>
                <input
                    type="text"
                    {...register('name', {required: true})}
                    placeholder='Name'
                />

                <input
                    type="text"
                    {...register('surname', {required: true})}
                    placeholder='Surname'
                />

                <input
                    type="text"
                    {...register('email', {required: true})}
                    placeholder='Email'
                />
                <button>Add User</button>
            </form>
        </div>
    );
}

export {FormUser}