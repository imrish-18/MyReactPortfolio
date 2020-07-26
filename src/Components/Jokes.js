import React ,{Component} from 'react'
import Header from './Header'
class Jokes extends Component{
    state={jokes:{}}
    componentDidMount()
    {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response=>response.json())
        .then(json=>this.setState({jokes:json}))
    }
    render()
    {
        const{setup,punchline}=this.state.jokes
        return(
            <div>
                <Header></Header>
                <h2 className='text-warning'>Highlighted Jokes</h2>
                <p className='text-danger'>{setup}<em>{punchline}</em></p>
             
            </div>
        )
    }
}

export default Jokes