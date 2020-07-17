import React from "react"

class New extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2500)
    }
    
    render() {
        function Conditional(props) {
            return (
                <div>
                    {props.isLoading ? <h1>Please wait...</h1> :
                    <h1>Here are your results.</h1>}
                </div>
            )
        }

        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}


export default New