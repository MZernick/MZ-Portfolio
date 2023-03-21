import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';

function Home() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    return (
        <div>
            <div className="homeContainer">
                <div className="meContainer">
                    <h1 className='bigFont'>Magdalene Zernick</h1>
                    <h4 className='medFont'>Full Stack Developer</h4>
                    <button className='all-btn' animation="glow" ref={target} onClick={() => setShow(!show)}>
                        About Me
                    </button>
                    <Overlay target={target.current} show={show} placement="bottom">
                        {({
                            placement: _placement,
                            arrowProps: _arrowProps,
                            show: _show,
                            popper: _popper,
                            hasDoneInitialMeasure: _hasDoneInitialMeasure,
                            ...props
                        }) => (
                            <div
                                {...props}
                                style={{
                                    margin: '2%',
                                    position: 'absolute',
                                    backgroundColor: '#CB7C89',
                                    padding: '2%',
                                    color: '#FFE1EA',
                                    borderRadius: 3,
                                    ...props.style,
                                }}
                            >
                                Extensive experience in customer service and a track record of positive client relations bringing enthusiasm, dedication and an exceptional work ethic. Recently completed a certificate in Full Stack Web Development at the University in Texas at Austin. Currently furthering knowledge through post-course activities to combine my customer experience into a new profession of web development. Outgoing, adaptable and reliable.
                            </div>
                        )}
                    </Overlay>
                </div>
                <div className='avatarContainer'>
                    <img src={require("../assets/avataaars.png")} alt="Avatar" />
                </div>
            </div>
        </div>
    );
}

export default Home;