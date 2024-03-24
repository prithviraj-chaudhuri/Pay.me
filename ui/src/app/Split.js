// import React, { useRef, useState, useEffect } from 'react';
// import { checkDeviceType } from '../common/helper';

function Split() {


  return (
    <div className="ios-style ios-container">
        <h1 className="mt-5 mb-4 text-center ios-title">Pay.me</h1>
        <div class="mt-4 ios-camera-container">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Select Your Options</h5>
                <form>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option1" value="option1"></input>
                    <label class="form-check-label" for="option1">Option 1</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option2" value="option2"></input>
                    <label class="form-check-label" for="option2">Option 2</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option3" value="option3"></input>
                    <label class="form-check-label" for="option3">Option 3</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option4" value="option4"></input>
                    <label class="form-check-label" for="option4">Option 4</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="option5" value="option5"></input>
                    <label class="form-check-label" for="option5">Option 5</label>
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
);
}

export default Split;
