import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";

class InformationComponent extends Component {
    render() {

        const classes = makeStyles((theme) => ({
            root: {
                '& > *': {
                    margin: theme.spacing(1),
                    width: '25ch',
                },
            },
        }));

        const handleChange = (event) => {
            // this.props.parentCallback(
            console.log(
                {
                    target: event.target.id,
                    info: event.target.value
                });
        }

        return (
            <div className={"container"} style={{width: '60%'}}>
                <form className={classes.root}>
                    //TODO this thing
                    <h5>Input your information to schedule a party</h5>
                    <div className={'input-field'}>
                        <TextField
                            required
                            id={'partyName'}
                            label={'Name on Party:'}
                            variant={'filled'}
                            onChange={handleChange}
                        />

                        {/*<label htmlFor={'partyName'}>Name on Party:</label>*/}
                        {/*<input*/}

                        {/*    type={'text'}*/}
                        {/*    id={'partyName'}*/}
                        {/*    className={'validate'}*/}
                        {/*    required={true}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        this.props.parentCallback({target: e.target.id, info: e.target.value});*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<span className="helper-text" data-error="Please enter in the name of the party person"/>*/}
                    </div>

                    <div className={'input-field'}>
                        <TextField
                            required
                            type={'number'}
                            id={'age'}
                            label={'Age of average participant:'}
                            variant={'filled'}
                            onChange={handleChange}
                        />
                        {/*<label htmlFor={'age'}>Age of average participant:</label>*/}
                        {/*<input*/}
                        {/*    type={'number'}*/}
                        {/*    id={'age'}*/}
                        {/*    className={'validate'}*/}
                        {/*    required={true}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        this.props.parentCallback({target: e.target.id, info: e.target.value});*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<span className="helper-text" data-error="Please enter in the name of the party person"/>*/}
                    </div>

                    <div className={'input-field'}>
                        <TextField
                            required
                            id={'contactName'}
                            label={'Host Name:'}
                            variant={'filled'}
                            onChange={handleChange}
                        />
                        {/*<label htmlFor={'hostName'}>Host Name:</label>*/}
                        {/*<input*/}

                        {/*    type={'text'}*/}
                        {/*    id={'contactName'}*/}
                        {/*    className={'validate'}*/}
                        {/*    required={true}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        this.props.parentCallback({target: e.target.id, info: e.target.value});*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<span className="helper-text" data-error="Please enter in the name of the host of the party"/>*/}
                    </div>

                    <div className={'input-field'}>
                        <TextField
                            required
                            type={'email'}
                            id={'email'}
                            label={'Contact Email:'}
                            variant={'filled'}
                            onChange={handleChange}
                        />
                        {/*<label htmlFor={'email'}>Contact Email:</label>*/}
                        {/*<input*/}
                        {/*    type={'email'}*/}
                        {/*    id={'email'}*/}
                        {/*    className={'validate'}*/}
                        {/*    required={true}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        this.props.parentCallback({target: e.target.id, info: e.target.value});*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<span className="helper-text" data-error="Please enter a valid email address"/>*/}
                    </div>

                    <div className={'input-field'}>
                        <TextField
                            required
                            type={'tel'}
                            id={'phoneNumber'}
                            label={'Contact Phone Number:'}
                            variant={'filled'}
                            onChange={handleChange}
                        />
                        {/*<i className="material-icons prefix">phone</i>*/}
                        {/*<label htmlFor={'phoneNumber'}>Contact Phone Number:</label>*/}
                        {/*<input*/}
                        {/*    type={'tel'}*/}
                        {/*    id={'phoneNumber'}*/}
                        {/*    className={'validate'}*/}
                        {/*    required={true}*/}
                        {/*    onChange={(e) => {*/}
                        {/*        this.props.parentCallback({target: e.target.id, info: e.target.value});*/}
                        {/*    }}*/}
                        {/*/>*/}
                        {/*<span className="helper-text" data-error="Please enter a valid phone number"/>*/}
                    </div>
                </form>
            </div>
        );
    }
}


export default InformationComponent