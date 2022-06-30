import {useForm} from "react-hook-form";

import {setComment} from "../../services";

function FormComment(){

    const {register, handleSubmit} = useForm();

    const submit = (comment) =>{
        setComment(comment).then(({data}) => console.log(data))
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
                    {...register('body')}
                />
                <button>Set</button>
            </form>

        </div>
    );
}

export {FormComment}