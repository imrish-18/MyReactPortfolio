import React ,{Component} from 'react'
const TITLES=[
    ' a software engineer',
    'a music lover',
    'a passionate coder',
    'a true sportsman'
]

class Title extends Component
{
    state={titleIndex:0}
    componentDidMount()
    {
        console.log('title component has mounted')
        this.animateTitles()
    }
    animateTitles=()=>{
        setInterval(()=>{
         const titleIndex=(this.state.titleIndex+1)%TITLES.length
         this.setState({titleIndex})
        
        },2000)
    }

    render()
    {
       const title=TITLES[this.state.titleIndex]
       return(
           <p className='text-success'>I am {title}</p>
       )
    }
}

export default Title


