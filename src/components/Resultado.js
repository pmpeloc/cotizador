import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Resultado = ({cotizacion}) => {

    const nodeRef = useRef(null)

    return (
        (cotizacion === 0) ? <Mensaje>Elige marca, año y plan</Mensaje> : (
            <ResultadoCotizacion>
                <TransitionGroup component={null} className="resultado">
                    <CSSTransition nodeRef={nodeRef} classNames="resultado" key={cotizacion} timeout={{enter: 500, exit: 500}}>
                        <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
            </ResultadoCotizacion>
        )
    );
};

Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;