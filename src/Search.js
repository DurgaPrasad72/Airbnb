import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom';
import './Search.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from "@material-ui/icons/People";
import {Button} from "@material-ui/core";

//DATE PICKER  COMPONENT



const Search = () => {
    const history=useHistory();
    const [startDate, setStartDate]=useState(new Date());
    const [endDate, setEndDate]=useState(new Date());

    const selectionRange  = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>Number of guest <PeopleIcon /> </h2>
        <input min={0}  defaultValue={2} type="number" />
        <Button   onclick={()=>history.push('/search')}>search airbnb</Button>
        </div>
    )
}

export default Search
