import React, { Component } from 'react'
import styled from 'styled-components';
export default class ProgressBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color : '#a82222',
            infos : [
                {
                    name : 'Shipping',
                    completed : true,
                },
                {
                    name : 'second',
                    completed : true,
                },
                {
                    name : 'third',
                    completed : true,
                },
            ]
        }
    }
    
    render () {
        let s = this.state;
        let Out = []
        for(let i = 0; i < s.infos.length; i++){
            if(i === s.infos.length - 1){
                Out[Out.length] = (
                <Wrapper key = {s.infos[i].name}>
                    {
                        s.infos[i].completed 
                        ? 
                            <FilledBar Color = {s.color} />
                        :
                            <EmptyBar />
                    }
                </Wrapper>);
            }else {
                Out[Out.length] = (
                <Wrapper key = {s.infos[i].name}>
                    {
                        s.infos[i].completed 
                        ? 
                            <FilledBar Color = {s.color}/>
                        :
                            <EmptyBar />
                    }
                    <WrapperCercle>
                        <Cercle Color = {s.color} Display = {s.infos[i].completed}>
                            <Text>{
                                s.infos[i].completed ? '✔️' : i + 1    
                            }</Text>
                        </Cercle>
                            <Text>{s.infos[i].name}</Text>
                    </WrapperCercle>
                </Wrapper>);
            }
        }
        return <Container>
                {Out.map(
                    item => {
                        return item
                    }
                )}
            </Container>
    }
}
const WrapperCercle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: flex-end;
    justify-content: flex-end;
`;
const Text = styled.p`
    font-weight: bold;
    font-size: 12px;
    margin-top: 15px;
`;
const FilledBar = styled.div`
    height: 6px;
    width: 100%;
    margin: 5px;
    border-radius:5px;
    background: ${props => props.Color && props.Color};
    background-size: 200%;
    transition: .5s ease-out;
    background-position: left;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
`;
const EmptyBar = styled.div`
    height: 6px;
    width: 100%;
    background: #dbdbdb;
    margin: 5px;
    border-radius:5px;
`;
const Cercle = styled.div`
    background: ${props => props.Display ? props.Color :' #dbdbdb'};
    height: 30px;
    width : 30px;
    border-radius: 50%;
    margin-top: 35px;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;

`;