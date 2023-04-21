import React from "react";
import './Accordion.css'

function Accordion() {

    return (
        <div className="test1">
            <h1>
                Pure CSS Accordion <sup>2.0</sup>
            </h1>
            <div className="row">
                <div className="col">
                    <h2>
                        Open <b>one</b>
                    </h2>
                    <div className="tabs">
                        <div className="tab">
                            <input type="radio" id="rd1" name="rd" />
                            <label className="tab-label" htmlFor="rd1">
                                Item 1
                            </label>
                            <div className="tab-content">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                                facilis.
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd2" name="rd" />
                            <label className="tab-label" htmlFor="rd2">
                                Item 2
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd3" name="rd" />
                            <label className="tab-label" htmlFor="rd3">
                                Item 2
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd4" name="rd" />
                            <label className="tab-label" htmlFor="rd4">
                                Item 2
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.
                            </div>
                        </div>
                        <div className="tab">
                            <input type="radio" id="rd5" name="rd" />
                            <label className="tab-label" htmlFor="rd5">
                                Item 2
                            </label>
                            <div className="tab-content">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
                                aut.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
