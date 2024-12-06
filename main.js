import { chorumeKit } from "./kit/init.js"

chorumeKit.init()

const hStyle = { margin: 0, padding: 0 }

chorumeKit.putElement('div', {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px'
}).id = 'welcome'

chorumeKit.putElement('h1', hStyle, 'welcome').innerText = 'Chorume Kit'
chorumeKit.putElement('h3', hStyle, 'welcome').innerText = 'Small and Pratice Lib'
chorumeKit.putElement('button', {}, 'welcome').innerText = 'This is a button'
