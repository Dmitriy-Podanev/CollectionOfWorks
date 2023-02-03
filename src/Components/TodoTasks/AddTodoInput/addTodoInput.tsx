import {useDispatch} from "react-redux";
import {TypeTodoActions} from "../../../store/actions/actions";
import {useRef} from "react";




export const AddTodoInput = () => {

    const dispatch = useDispatch();

    let input = useRef<HTMLInputElement>();

    const onHandlerSubmitButton = (e) => {
        e.preventDefault()
        if (!input.current) {
            return null
        }
        dispatch({type: TypeTodoActions.ADD_TODO, payload: {text: input.current.value}})
        if (input.current) {
            input.current.value = ''
        }
    }

    return (
        <div>
            <form
                onSubmit={e =>
                    onHandlerSubmitButton(e)
                }
            >
                <input
                    ref={input}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}