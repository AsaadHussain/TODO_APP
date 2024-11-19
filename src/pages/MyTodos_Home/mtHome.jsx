
import React from "react";
import './mtHome.css';

export default function Home() {

    return (
        <div className="homeDivMain">
            <div className="headingHomeDiv">
                <h1 className="headingHome">
                    T&#9675;D&#9675;
                </h1>
            </div>
            <div className="subHeadHomeDiv">
                <h1 className="subHeadHome">
                    My Todo's
                </h1>
            </div>
            <div className="myTodoOutterDiv">
                <div className="myTodoDiv">
                    <p className="myTodoNum">
                        1
                    </p>
                    <h3 className="myTodoName">
                        Party Organise
                    </h3>
                    <h4 className="myTodoDate">
                        26 Nov 24
                    </h4>
                </div>
                <div className="myTodoDiv">
                    <p className="myTodoNum">
                        1
                    </p>
                    <h3 className="myTodoName">
                        Party Organise
                    </h3>
                    <h4 className="myTodoDate">
                        26 Nov 24
                    </h4>
                </div>
            </div>
        </div>
    );
}