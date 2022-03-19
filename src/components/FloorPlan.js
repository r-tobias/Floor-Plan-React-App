import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan () {
    return (
    <div className="FloorPlan">
        <div className="first-div">
        <Bedroom bedNum={1}/>
        <Bath size = {"Full"}/>
        </div>
        <div className="second-div">
        <LivingRoom/>
        <Kitchen/>
        </div>
        <div className="third-div">
        <Bedroom bedNum={2}/>
        <Bath size = {"Half"}/>
        <Bedroom bedNum={3}/>

        </div>
        
        
        


    </div>
    )

}

export default FloorPlan;