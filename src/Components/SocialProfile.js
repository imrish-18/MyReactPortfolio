import React,{Component} from 'react'
import SOCIAL_PROFILES from '../data/socialProfile'

class SocialProfile extends Component
{
    render()
    {
        const {link,image}=this.props.socialProfile
        return(
            <span>
                <a href={link}>
                <img src={image} alt='socail-profile '  style={{width:35,height:35,margin:10}}/>
                    </a>
            </span>
        )
    }
}

class SocialProfiles extends Component
{
    render()
    {
        return(
            <div>
                <h2 className='text-danger'>Connet with me..</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map(social=>{
                            return <SocialProfile   key={social.id} socialProfile={social}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SocialProfiles