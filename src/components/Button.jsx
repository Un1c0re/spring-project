import styles from "@/styles/Home.module.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import Link from "next/link"
const Button = ({children, onClick, className, disabled, active, ...attrs}) => {

    const classes = classNames(
        'btn',
        className,
        { active },
    );

    const Tag = attrs.href ? Link : 'button';

    return (
        <Tag
            {...attrs}
            onClick={onClick}
            className={classes}
            disabled={disabled}
            > {children}
        </Tag>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
}

Button.defaultProps = {
    children: "Default button",
    onClick: () => {},
    className: "",
    disabled: false,
    active: false,
};


export default Button;