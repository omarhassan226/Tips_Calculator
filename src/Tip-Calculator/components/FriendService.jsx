/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const FriendService = ({fieldsText, onChange, bill, service}) => {
    return (
        <div>
            {fieldsText.field3}
            <select name="friendService" id="friendService" onChange={onChange}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={0.05 * bill}>It was okay (5%)</option>
                <option value={0.1 * bill}>It was good (10%)</option>
                <option value={0.2 * bill}>Absolutely amazing (20%)</option>
            </select>
        </div>
    )
}

export default FriendService
