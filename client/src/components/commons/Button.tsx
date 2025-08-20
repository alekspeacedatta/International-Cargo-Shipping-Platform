import styled from "styled-components"

const Button = ({buttonText, submit, fn} : {buttonText: string, submit: boolean, fn: () => void | null}) => {
    const Button = styled.button`
        background-color: var(--button-bc);
        color: white;
        border: none;
        padding: 10px 10px;
        border-radius: 3px;
        transition: all .2s;
        cursor: pointer;
        outline: none;
    `
    if(submit) return (
        <Button type='submit'>{buttonText}</Button>
    )
    if(fn) return (
        <Button onClick={fn} type='submit'>{buttonText}</Button>
    )
    return (
        <Button>{buttonText}</Button>
    )
}
export default Button