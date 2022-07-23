import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim';
import React from 'react'
import { useCallback, useMemo } from 'react';

const Animation = (props) => {
    const options = useMemo(() => {
        return{
            
            fullScreen: {
                enable: false,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
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
                color: {
                    value: "#19181f"

                },
                links: {
                    enable: true,
                    distance: 90,
                    color: "#19181f"
                },
                move: {
                    enable: true,
                    speed: {
                        min: 0.1,
                        max: 0.75
                    },
                },
                opacity: {
                    value: {
                        min: 0.3,
                        max: 0.5
                    },
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
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

export default Animation;