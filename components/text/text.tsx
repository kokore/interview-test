type textProps = {
    className: string
    words: string
}

const Text = ({ className , words } : textProps) => {
    return <span className={className}>{words}</span>
}

export default Text