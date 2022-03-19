import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen() {
    return (
    <div className="Kitchen">
        <div className="Kitchen-1">
        <span id = "Oven"><Oven/></span>
        <span id = "Sink"><Sink/></span>
        </div>
        <div className="Kitchen-2">
        <p>Kitchen</p>
        </div>
    </div>
    )
}

export default Kitchen;