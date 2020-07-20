import React from 'react';
import { Container } from 'reactstrap';
import CardContainerStyles from './CardContainerStyles';

const CardContainer = (props) => {

    return (
        <React.Fragment>
            <CardContainerStyles/>
            <div className='cardContainer-body'>
                <Container className='border-top cardContainer-inner-wrapper'>
                    {props.children}
                </Container>
            </div>
        </React.Fragment>
    )

}
export default CardContainer;