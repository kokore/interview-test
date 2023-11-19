type listProps = {
    className: string
    children?: string | JSX.Element | JSX.Element[]
}

const List = ({ className , children } : listProps) => {
    return <div className={className}>{children}</div>
}

export default List