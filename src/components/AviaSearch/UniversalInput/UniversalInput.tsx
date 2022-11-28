import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import style from "../AviaSearch.module.css";

type TextFieldProps = {
    value: string
    placeholder: string
    text: string
    title: string
    callback: Dispatch<SetStateAction<string>>
}

export const UniversalInput = (props: TextFieldProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <label>{props.title}</label>
            </div>
            <input className={style.search_form_txt}
                   value={props.value}
                   type={props.text}
                   placeholder={props.placeholder}
                   onChange={onChangeHandler}
            />
        </div>
    );
};

