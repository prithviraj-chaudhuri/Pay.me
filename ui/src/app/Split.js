// import React, { useRef, useState, useEffect } from 'react';
// import { checkDeviceType } from '../common/helper';
import './Split.css';

function Split() {


  return (
    <div class="row rem-space">
        <div class="col-sm-12 center-div">
            <div class="card full-width">
                <div class="card-header">
                    Oil
                </div>
                <div class="card-body">
                    <h5 class="card-title">$15.00</h5>
                    <p class="card-text">Select people to split this cost with</p>
                    <div class="card person-card" >
                        <div class="card-body row">
                            <div class="col-6">Prithviraj</div>
                            <div class="col-6">
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"></input>
                                <label class="btn btn-outline-primary" for="btn-check-outlined">Add</label>
                            </div>
                        </div>
                    </div>
                    <div class="card person-card" >
                        <div class="card-body row">
                            <div class="col-6">Taylor</div>
                            <div class="col-6">
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"></input>
                                <label class="btn btn-outline-primary" for="btn-check-outlined">Add</label>
                            </div>
                        </div>
                    </div>
                    <div class="card person-card" >
                        <div class="card-body row">
                            <div class="col-6">Srishti</div>
                            <div class="col-6">
                                <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off"></input>
                                <label class="btn btn-outline-primary" for="btn-check-outlined">Add</label>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div class="row">
                            <div class="col-6">
                                <button className="btn ios-button">Previous</button>
                            </div>
                            <div class="col-6">
                                <button className="btn ios-button">Next</button>
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
