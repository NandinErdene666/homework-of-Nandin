import React from "react";
import GlobalIcon from "../icons/Global";
import styles from './firstSection.module.css';

function FirstSection(props) {
    const { title = "Hello" } = props;
    return (
        <section className={styles.section_container}>
            <div style={{ display: 'flex', alignItems: 'center' }} >
                <GlobalIcon />
                <p className={`text-style ${styles.section_text_style}`}>{title}</p>
            </div>

            <div style={{ display: 'flex' }}>
                <p className="text-style" style={{
                    fontSize: 12,
                    color: '#FFF',
                }}>RETURNING AN ORDER?</p>
                <p className="text-style" style={{
                    fontSize: 12,
                    color: '#FFF',
                    paddingLeft: 14,
                }}>Click for more info</p>
            </div>
            <div style={{ display: 'flex' }}>
                <p className="text-style" style={{
                    fontSize: 12,
                    color: '#FFF',

                }}>SIGN IN</p>
                <p className="text-style" style={{
                    fontSize: 12,
                    color: '#FFF',
                    marginLeft: 23
                }}>SIGN UP</p>
            </div>
        </section>
    )
}

export default FirstSection;
