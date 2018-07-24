import React from 'react';

const main = (props) => {
    return (
        <section className="container pt-3">
            {props.children}
        </section>
    )
}

export default main;