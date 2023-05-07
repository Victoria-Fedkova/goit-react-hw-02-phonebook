import PropTypes from 'prop-types';
import { Form, FormGroup, FormInput, AddBtn} from './Filter.styled'


const Filter = ({value, onChange, onFilterReset})=> (
    <Form>
        <FormGroup>
        Find contacts by name
        <FormInput
        type="text"
        value={value}
        onChange={onChange}
        />
    </FormGroup>
    <AddBtn type="button" onClick={onFilterReset}>Clear</AddBtn>
    </Form>
    )

Filter.propeTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFilterReset: PropTypes.func,
    };

export default Filter;