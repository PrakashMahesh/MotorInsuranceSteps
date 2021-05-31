import React,{Component} from "react";
//import ProgressBar from "react-bootstrap/ProgressBar";
//import ProgressBar from 'react-customizable-progressbar'

class Progressbar extends Component{
    
    render(props){
        const Progress  = ({done}) => {
            return (
                <div className="progress">
                    <div className="progress-done" style={{opacity:1,width:`${done}%`
                }}>
                       
                    </div>
                </div>
            )
        }

        
        return(
            <div>
                   <Progress done={this.props.value*100/(this.props.length-1)}/>
                </div>
        )
    }

}

export default Progressbar;