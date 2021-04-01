import {
    Typography,
    TextField,
    InputLabel,
    TextareaAutosize,
    Button,
    Grid,
 } from '@material-ui/core/';


const CreateProduct = (props) => {
    const {
        onInputChange,
        onAdd,
        isAddDisabled,
    } = props;

    return (
        <Grid container direction='column' spacing={2}>
            <Grid item>
                <Typography variant='h5'>Create Product</Typography>
                <TextField onChange={onInputChange} id='Name' label='Name'/>
                <TextField onChange={onInputChange} id='Price' type='number' label='Price'/>
                <TextField onChange={onInputChange} id='Rating' type='number' label='Rating'/>
            </Grid>
            <Grid item>
                <InputLabel>Description</InputLabel>
                <TextareaAutosize
                    onChange={onInputChange}
                    rowsMin={3}
                    id='Description'
                    label='Description'
                    placeholder='Product Description'
                />
            </Grid>
            <Grid item>
                <Button disabled={isAddDisabled} onClick={onAdd}>Add</Button>
            </Grid>
        </Grid>
    );
}

export default CreateProduct;