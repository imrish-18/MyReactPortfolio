import React,{Component} from 'react'
import PROJECTS from '../data/projects'

class Project extends Component
{
    render()
    {
        const {title,image,description,link}=this.props.project
        return (
        <div style={{display:'inline-block',width:300,margin:20}}>
            <h3 className='text-info'>{title}</h3>
            <img src={image} alt='project' style={{width:300,height:120}}></img>
            <p className='text-success'>{description}</p>
            <a href={link}>{link}</a>
        </div>
        )
    }
}

class  Projects extends Component
{
    render()
    {
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
            {
                PROJECTS.map(project=> {
                    return  (
                        <Project key={project.id}  project={project}></Project>
                    )
                })
            }
                </div>
            </div>
        )
    }
}

export default Projects