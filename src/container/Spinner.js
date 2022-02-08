import React from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';

export default function Spinner() {
    return (
        <div className="text-center">
            <MDBSpinner color="primary" style={{ width: '3rem', height: '3rem' }}>
                <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
        </div>
    );
}
