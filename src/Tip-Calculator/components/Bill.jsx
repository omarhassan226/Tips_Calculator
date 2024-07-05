/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Bill = ({fieldsText, onChange, bill}) => {
    return (
        <div>
            {fieldsText.field1}
            <input type="number" onChange={onChange} />
            {/* {bill} */}
        </div>
    )
}

export default Bill
