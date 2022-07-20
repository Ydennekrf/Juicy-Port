import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim';
import React from 'react'
import { useCallback, useMemo } from 'react';

const Particle = (props) => {
    const options = useMemo(() => {
        return{
            // background: {
            //     color: "#32303100"
            // },
            fullScreen: {
                enable: false ,
            },
            interactivity: {
                events: {
                   
                    onHover: {
                        enable: true,
                        mode: "attract"
                    },
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    attract: {
                        distance: 150,
                    },
                },
            },
            particles: {
                number: {
                    value: 2
                },
                color: {
                    value: "#ca801e"

                },
                links: {
                    enable: true,
                    distance: 300,
                    color: "#e0482d"
                },
                move: {
                    enable: true,
                    speed: {
                        min: 0.1,
                        max: 0.75
                    },
                    straight: false,
                },
                opacity: {
                    value: {
                        min: 0.8,
                        max: 0.9
                    },
                },
                size: {
                    value: {
                        min: 150,
                        max: 200
                    },
                },
            },
        };
    }, []);
  const init = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={init} options={options} />
};

export default Particle;