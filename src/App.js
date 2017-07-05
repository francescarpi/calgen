import React, {Component} from 'react'


class App extends Component {
    state = { calendar: null }

    componentDidMount () {
        import('./components/calendar/Calendar')
            .then(calendar => {
                this.setState({ calendar: calendar.default })
            })
    }
    
    render () {
        return <div>{!this.state.calendar ? 'Cargando...' : this.state.calendar()}</div>
    }
}

export default App