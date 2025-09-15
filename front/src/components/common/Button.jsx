import * as S from "./Button.style"

export default function Button({buttonName, isPick, onClick}){
    return <S.Container $isPick={isPick} onClick={onClick}>{buttonName}</S.Container>;
}