import * as React from "react";
// New paragraph
var element: JSX.Element = React.createElement('p', {}, 'test');

// Array of numbers
const numbers: Array<number> = Array.from(Array(10).keys());

// paragraphs which are containing numbers
const listItems: JSX.Element[] = numbers.map((number) => <p>{number}</p>);

export default class ExampleComponent extends React.Component <{}> {
    render(){
        return (
        <div>
            {element}
            {listItems}
        </div>
        );
    }
}
