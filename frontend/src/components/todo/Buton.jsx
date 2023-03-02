
import { GetClasses } from "./utio";

const buttontyp = {
    primary: "primary",
    secondary: "secondary",
};

function Buton({ children, type, variant, ...rest }) {
    return (
        <button className={"GetClasses"} type={type === "submit" ? "submit" : "button"} {...rest}>
            {children}
        </button>
    );
}
function SelectButton({ children, ...rest }){
    return <select {...rest}>{children}</select>;
}
export {SelectButton}
export default Buton;
