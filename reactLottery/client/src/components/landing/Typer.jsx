import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

const Typer = () => {
    const typer = document.getElementById('typer');
    const typewriter = new Typewriter(typer, {
        loop: false,
        delay: 75,
    });
    const [type, setType] = useState(false);
    const typerText = () => {
        typewriter
            .pauseFor(1000)
            .typeString('You have what it takes!')
            .pauseFor(1000)
            .deleteChars(23)
            .typeString(
                '<strong style="color: red">Don\'t</strong> become another <span style="color: rgb(13, 155, 92);">statistic</span>!'
            )
            .start();
    };

    useEffect(() => {
        if (!type) {
            typerText();
        }
    }, [type]);
    return (
        <div
            id="typer"
            className="hidden h-full mt-[-12rem] w-full px-[1rem] md:flex justify-center items-center text-[32px] text-center text-white"
        ></div>
    );
};

export default Typer;
