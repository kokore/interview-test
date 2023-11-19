type numberProps = {
    number: string
    underlineClassName?: string | ""
    numberClassName?: string | ""
}

const Number = ({ number, underlineClassName, numberClassName }: numberProps) => {
    return (
        <div className="mobile:h-5 mobile:w-4 tablet:h-30 tablet:w-22 relative">
            <div className="bg-purple rounded-md w-4 h-1 absolute left-0 bottom-0"></div>
            <div className="text-black text-left font-normal text-base absolute left-0 top-0 w-22">{number}</div>
        </div>
    )
}

export default Number