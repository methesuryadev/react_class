import { React } from 'react'

function callme() {
    alert('hello')
}

function ClickButton() {
  return (
    <button className='' onClick={callme}> click me </button>
    );
}

export default ClickButton;
