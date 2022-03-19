import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan () {
    return (
    <div className="FloorPlan">
        <Kitchen/>
        <LivingRoom/>
        <Bedroom/>
        <Bedroom/>
        <Bedroom/>
        <Bath size = {"Full"}/>
        <Bath size = {"Full"}/>


    </div>
    )

}

export default FloorPlan;