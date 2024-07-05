import { useState } from "react"
import Bill from "./components/Bill"
import FriendService from "./components/FriendService"
import PaymentCalculator from "./components/PaymentCalculator"
import Service from "./components/Service"


const fieldsText = {
    field1: "How much was the bill?",
    field2: "How much did you like the service?",
    field3: "How did your friend like the service?"
}

const TipCalculator = () => {
    const [bill, setBill] = useState(0)
    const [service, setService] = useState(0)
    const [friendService, setFriendService] = useState(0)

    const handleChange = (e) => {
        const value = parseFloat(e.target.value)
        setBill(value)
    }

    const handleServiceChange = (e) => {
        const value = parseFloat(e.target.value);
        setService(value);
    };

    const handleFriendService = (e) => {
        const value = parseFloat(e.target.value);
        setFriendService(value);
    };

    const resetFields = () => {
        setBill("");
        setService("");
        setFriendService("");
      };

    return (
        <div>
            <Bill onChange={handleChange} fieldsText={fieldsText} />
            <Service onChange={handleServiceChange} fieldsText={fieldsText} bill={bill}/>
            <FriendService onChange={handleFriendService} fieldsText={fieldsText} bill={bill} service={service}/>
            {
                bill && <PaymentCalculator bill={bill} service={service} friendService={friendService}/>
            }
            <button  onClick={resetFields}>Reset</button>
        </div>
    )
}

export default TipCalculator
