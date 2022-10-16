import Image from 'next/image'
import styles from '../styles/form.module.css'
import React, {Component} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NativeSelect, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material';
import Navbar from '../components/navbar';

const fields = ["zip-code", "acres", "soilPPM", "crop-type"];


class Form extends Component {



    constructor(){
        super();
        this.state = {
            loaded: false,
            inputs: ['', '', '', ''],
            select: []
        }
    }

    handlechange(event){
        console.log(this.state)
        for(let field in fields){
            if(event.target.id.search(fields[field])){
                let temp = this.state.inputs.slice()
                temp[field] = event.target.value
                this.setState({inputs: temp})
                console.log(this.state)
                return;
            }
        }

    }

    handleSelect(){

    }

    componentDidMount(){
        this.setState({
            loaded: true
        })
    }

    render(){
        if(this.state.loaded){
            return (
                <>  
                    <div className="image-background h-[100%] w-[100%] absolute m-0">
                    </div>

                    <Navbar />
                    <div className="grid absolute place-items-left bg-[#ecebeg] drop-shadow-lg w-[50%] h-[75vh] translate-y-[25vh]">
                        <div className="grid place-items-center bg-[#108ca4] p-5 rounded-lg m-0 space-y-0 drop-shadow-md text-white font-semibold">
                            <div className="grid grid-cols-1">
                                <TextField onChange={this.handlechange} className="input-box rounded" id="outlined-basic zip-code" label="ZIP Code" variant="filled" />
                            </div>

                            <div className="grid grid-cols-1">
                                <TextField className="input-box rounded" id="outlined-basic acres" label="Acres" variant="filled" />
                            </div>

                            <div className="grid grid-cols-1">
                                <TextField className="input-box rounded" id="outlined-basic soilPPM" label="Soil PPM" variant="filled" />
                            </div>

                            <div className="grid grid-cols-1">
                                <div>
                                    {/* <InputLabel className='input-box rounded border' id="demo-controlled-open-select-label">Crop Type</InputLabel> */}
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        label="Crop Type"
                                        value={this.state.select}
                                        onChange={this.handleSelect}
                                        className="input-box rounded h-[7.5vh] w-[15vw]"
                                        >
                                        <MenuItem key="cotton" value="cotton"> Cotton </MenuItem>
                                    </Select>
                                </div>


                            </div>

                            <div>
                                <button className='border bg-[#FDFCFF] rounded button'>
                                    Submit
                                </button>

                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

}

export default Form