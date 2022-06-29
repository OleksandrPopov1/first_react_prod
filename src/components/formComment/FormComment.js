import {useForm} from "react-hook-form";

import {setComment} from "../../services";

function FormComment(){

    let {register, handleSubmit} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(setComment)}>
                <input
                    type="text"
                    {...register('name', {required: true, })}
                    placeholder='Name'
                />

                <input
                    type="email"
                    {...register('email', {required: true})}
                    placeholder='Email'
                />

                <input
                    type="text"
                    {...register('body', {required: true})}
                    placeholder='Comment'
                />

                <input
                    type="number"
                    {...register('postId', {required: true, min: 1, max: 100})}
                    placeholder='Number post'
                />

                <button>Add Comment</button>
            </form>
        </div>
    );
}

export {FormComment}