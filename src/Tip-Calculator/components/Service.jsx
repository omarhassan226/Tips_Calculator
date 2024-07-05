/* eslint-disable react/prop-types */
const Service = ({ fieldsText, onChange, bill }) => {
    return (
        <div>
            {fieldsText.field2}
            <select name="service" id="service" onChange={onChange}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={0.05 * bill}>It was okay (5%)</option>
                <option value={0.1 * bill}>It was good (10%)</option>
                <option value={0.2 * bill}>Absolutely amazing (20%)</option>
            </select>
        </div>
    );
};

export default Service;
