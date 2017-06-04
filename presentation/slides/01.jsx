import React from 'react';

import {
  BlockQuote,
  Cite,
  Heading,
  ListItem,
  List,
  Quote,
  Appear,
  Slide,
  Text
} from "spectacle";

export default class Slide1 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Slide bgColor="black" textColor="primary">
                <Heading size={4} textColor="primary">
                    What does React give us
                </Heading>
                <Appear>
                  <BlockQuote transition={["fade"]}>
                    <Quote>A <span style={{'color':'red'}}>declarative</span>, efficient, and flexible JavaScript library for building user interfaces.</Quote>
                    <Cite>https://github.com/facebook/react</Cite>
                  </BlockQuote>
                </Appear>
            </Slide>
        )
    }
}
