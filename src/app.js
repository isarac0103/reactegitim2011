class Counter extends React.Component {

    constructor (props) {
        super(props)

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onReset = this.onReset.bind(this)

        this.state = {
            count: props.starts
        }
    }

    onReset () {

        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    onIncrement () {

        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        }, () => {
            console.log(`current count value ${this.state.count}`)
        })
    }

    onDecrement () {

        this.setState((prevState) => {
            return {
                count: prevState.count-1
            }
        })
    }

    render () {
        return (
            <React.Fragment>
                <div>Current Count: {this.state.count}</div>
                <button onClick={this.onReset}>Sıfırla</button>
                <button onClick={this.onDecrement}>Azalt</button>
                <button onClick={this.onIncrement}>Arttır</button>
            </React.Fragment>
        )
    }
}

var appRoot = document.getElementById('app')
ReactDOM.render(<Counter starts={0} />, appRoot)