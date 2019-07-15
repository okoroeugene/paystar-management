import React from 'react';

export default function (props) {
    return (
        <div className="modal fade show" id="small-Modal" tabIndex="-1" role="dialog" style={{ zIndex: 1050, display: "none" }}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{props.title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={props.onPress}
                            className="btn hor-grd btn-grd-primary"
                            disabled={props.isProcessing ? true : false}>{props.buttonText}</button>
                        {/* <button type="button" className="btn btn-default waves-effect " data-dismiss="modal">Close</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}