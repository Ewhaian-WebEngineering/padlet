import * as S from "./Button.style"

export default function Button({buttonName, isPick}){
    return <S.Container $isPick={isPick}>{buttonName}</S.Container>;
}