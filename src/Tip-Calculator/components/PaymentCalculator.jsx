/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const PaymentCalculator = ({ bill, service, friendService }) => {
    const services = (service + friendService)/2
    const total = bill + service;
    return (
        <div>
            <h1>You pay ${total.toFixed(2)} (${bill} + ${services} Tips)</h1>
        </div>
    );
};

export default PaymentCalculator;
