import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
    return (
        <Button style={{ backgroundColor: color }} className="btn">
            {text}
        </Button>
    )
}

Button.defaultProps = {
    color: "steelblue",
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
}

export default Button
