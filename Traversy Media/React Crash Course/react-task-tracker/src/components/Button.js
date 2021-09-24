const button = ({ color, text }) => {
    return (
        <button style={{ backgroundColor: color }} className="btn">
            {text}
        </button>
    )
}

export default button
