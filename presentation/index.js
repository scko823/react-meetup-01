// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  CodePane,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Appear,
  Quote,
  Slide,
  Text
} from "spectacle";

import Slide1 from './slides/01.jsx'

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  kid: require("../assets/kid.jpg")
};

preloader(images);


// imperative =  require('./codes/imperative.js')


// preloader(codeExamples)


const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


const HOCFactory = (InnerComponent) => class extends React.Component{
	constructor(props){
		super(props)
		this.state={
			text:"Move the mouse around",
			red:"127",
			green:"127",
			blue:"127"
		}
		this.changeColor = this.changeColor.bind(this)
		this.restoreColor = this.restoreColor.bind(this)
	}
	restoreColor(){
		this.setState({"green": "127"})
		this.setState({"blue": "127"})
		this.setState({"red": "127"})
		this.setState({"text":"Move the mouse around",})
	}
	changeColor(e){
		// console.log(e.clientX)
		// console.log(e.clientY)
		this.setState({"green": e.clientX+''})
		this.setState({"blue": e.clientY+''})
		this.setState({text:"right for green, bottom for blue"})
		console.log(this.state)
	}
	render(){
		return <InnerComponent
			onMouseMove={this.changeColor}
			onMouseLeave={this.restoreColor}
			{...this.state} />
	}
}

const MyButton = (props) => (
	<button
		style={{
			"top":"0",
			"left":"0",
			"width":"255px",
			"height":"255px",
			"backgroundColor":`rgb(${props.red},${props.green-500},${props.blue-150})`
		}}
		onMouseMove={props.onMouseMove}
		onMouseLeave={props.onMouseLeave}
		className="btn"
	>
	{props.text}
	</button>
)

const DemoBtn = HOCFactory(MyButton);

export default class Presentation extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {

 }
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={50} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} fit caps lineHeight={1} textColor="secondary">
            Functional Programming and React
          </Heading>
          <Text lineHeight="3">
            A beginner's take
          </Text>
        </Slide>

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

        <Slide bgColor="black">
            <Heading size={4} textColor="primary">
                What is declartive ?
            </Heading>
            <Appear>
              <div>
                <Heading size={6} textColor="primary">
                  To express what to do, not how to do it.
                </Heading>
                <Text textColor="primary" textSize="24px">
                  "Given some data, React render the UI for you specified by a render function"
                </Text>
                <CodePane lang="javascript" source={`const MyComponent = (props) => (
                    <div id={props.id}>
                      <h1>{props.title}</h1>
                      <span>{props.click}</span>
                      <span onClick={props.onInc}>+</span>
                      <span onClick={props.onDec}>-</span>
                    </div>
                  )`}>
                </CodePane>
              </div>
            </Appear>
            <Appear>
              <Text textColor="primary" textSize="24px">
                With jsx, React abstract the DOM from you, and let you focus on mapping data to UI
              </Text>
            </Appear>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} textColor="primary">
            (functional) Component
          </Heading>
            <Text textColor="primary">
              Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
              Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
            </Text>
            <Cite>https://facebook.github.io/react/docs/components-and-props.html</Cite>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} textColor="primary">
            Functional Programming
          </Heading>
          <Heading size={6} textColor="primary">
            Not just a React thing.
          </Heading>
        </Slide>

        <Slide bgColor="black">
          <Text textColor="primary">
            "A pure function does not depend on the global state of the program."
          </Text>
          <Text textColor="primary">
            Given the same input, it always give the same output and does not mutate state.
          </Text>
          <Appear>
            <img src={images.kid} width={300} height={300}/>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3} textColor="black">
            Why functional programming
          </Heading>
          <Text>
            {"Since a function only do one thing, a well written function is"}
          </Text>
          <List>
            <ListItem> testable </ListItem>
            <ListItem> easy to reason about </ListItem>
          </List>
        </Slide>

        <Slide>
          <CodePane
						lang="go"
						source={require("raw-loader!./codes/creditCard.example")}
						textSize="24px"
						margin="0"
					>
          </CodePane>
        </Slide>

        <Slide>
          <Heading>To get started</Heading>
          <List>
            <ListItem>map/filter/reduce</ListItem>
            <ListItem>Lodash FP guide</ListItem>
          </List>
        </Slide>

				<Slide>
					<Heading>Bonus Point: HOC</Heading>
					<DemoBtn />
				</Slide>


					<CodeSlide
						lang="jsx"
						transition={[]}
            textSize={"24px"}
						ranges={[
            { loc: [0, 1], title: "A function that take a function" },
            { loc: [0, 1], title: "return a class Component" },
            { loc: [2, 12], title: "Setting up the state" },
            { loc: [12, 23], title: "Setting up the state" },
            { loc: [24, 30], title: "Decroate the inner component" },
            { loc: [31, 40], title: "inner component just render props" },
            { loc: [40, 50], title: "inner component just render props" },
          ]}
						code={require("raw-loader!./codes/HOC.example")}>
					</CodeSlide>


      </Deck>
    );
  }
}
