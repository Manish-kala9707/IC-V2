import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import FilterIcon from '../../image/filter-13.png';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';
const OffcanvasCard = ({ fiSearchData, setSelectedFilters, selectedFilters, filterName,setDctypevalue }) => {

    const [show, setShow] = useState(false);

    const handleFilterCheckboxChange = (option) => {
        
        // if (selectedFilters.includes(option)) {
        //     setSelectedFilters(selectedFilters.filter(item => item !== option));
        // } else {
        //     setSelectedFilters([...selectedFilters, option]);
        // }
        setDctypevalue(option)
    };
//console.log(selectedFilters)
    const resetFilters = () => {
        setSelectedFilters([]);
    };

    const handleApplyFilters = () => {
        handleClose();
    };
     

    const [searchText, setSearchText] = useState('');
    // Filter the items based on the search input


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div onClick={handleShow}><img src={FilterIcon} alt='' className='filtericon' /></div>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" className='sidepanel'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ textAlign: 'center' }}>{filterName}</Offcanvas.Title>

                </Offcanvas.Header>


                
                    <Offcanvas.Body>
                        {selectedFilters.length > 0 ? (
                            selectedFilters.map((data, index) => {
                                return <div key={index}><CloseIcon onClick={() => handleFilterCheckboxChange(data)}/>{data}</div>;
                            })
                        ) : (
                            ""
                        )}


                        <div>

                            {fiSearchData.filter((value, index, self) => self.indexOf(value) === index).map((option, index) => (

                                <label className="filter-panel" aria-label={`Checkbox ${index + 1}`}>

                                    <input
                                        type="checkbox"
                                        value={option?.values?.value}
                                        checked={selectedFilters.includes(option?.values?.value)}
                                        onChange={() => handleFilterCheckboxChange(option?.values?.value)}
                                    />
                                    <span className="checkmarkk">{`${option.values.value}(${option.values.count})`}</span>

                                </label>

                            ))}
                        </div>
                    </Offcanvas.Body>
                

            </Offcanvas>
        </>
    )
}

export default OffcanvasCard