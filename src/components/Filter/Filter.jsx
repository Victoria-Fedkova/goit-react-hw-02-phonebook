import PropTypes from 'prop-types';


const Filter = ({value, onChange, onFilterReset})=> (
    <div>
        <label>
        Find contacts by name
        <input
        type="text"
        value={value}
        onChange={onChange}
        />
    </label>
    <button type="button" onClick={onFilterReset}>X</button>
    </div>
    )

Filter.propeTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFilterReset: PropTypes.func,
    };

export default Filter;