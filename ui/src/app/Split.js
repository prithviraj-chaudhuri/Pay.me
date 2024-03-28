
import React, { useState, useEffect } from 'react';
import './Split.css';
import Cookies from 'js-cookie';

function Split() {
    const [receiptData, setReceiptData] = useState(null);
    const [users, setUsers] = useState(null);
    const [itemNumber, setItemNumber] = useState(0);

    useEffect(() => {
        const receiptDataCookie = Cookies.get('receiptData');
        const usersCookie = Cookies.get('users');

        if (receiptDataCookie) {
            setReceiptData(JSON.parse(receiptDataCookie));
        }

        if (usersCookie) {
            setUsers(JSON.parse(usersCookie));
        }
    }, []);

    const handleNext = () => {
        if (itemNumber < receiptData.items.length - 1) {
            setItemNumber(itemNumber + 1);
        } else {
            window.location.href = '/final';
        }
    };

    const handlePrevious = () => {

        if (itemNumber > 0) {
            const updatedReceiptData = { ...receiptData };
            const selectedUsers = users.filter((user, index) => {
                const checkbox = document.getElementById(`btn-check-add-${index}`);
                return checkbox.checked;
            });
            updatedReceiptData.items[itemNumber].selectedUsers = selectedUsers;
            setReceiptData(updatedReceiptData);
            Cookies.set('receiptData', JSON.stringify(updatedReceiptData));
            setItemNumber(itemNumber - 1);
        } else { 
            window.location.href = '/users';
        }
    };

    return (
        <div class="row rem-space">
            <div class="col-sm-12 center-div">
                <div class="card full-width">
                    {receiptData &&
                    <div class="card-header">
                        {receiptData.items[itemNumber].item}
                    </div>
                    }
                    <div class="card-body">
                        {receiptData &&
                            <h5 class="card-title">{receiptData.items[itemNumber].price}</h5>
                        }
                        <p class="card-text">Select people to split this cost with</p>
                        {users && users.map((user, index) => (
                            <div class="card person-card" key={index}>
                                <div class="card-body row">
                                    <div class="col-6">{user}</div>
                                    <div class="col-6">
                                        <input type="checkbox" class="btn-check" id={`btn-check-add-${index}`} autocomplete="off"></input>
                                        <label class="btn btn-outline-primary" for={`btn-check-add-${index}`} >Add</label>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <br />
                        <div>
                            <div class="row">
                                <div class="col-6">
                                    <button className="btn ios-button" onClick={handlePrevious}>Previous</button>
                                </div>
                                <div class="col-6">
                                    <button className="btn ios-button" onClick={handleNext}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Split;
