
import React,{Component} from "react";
import DynamicForm from '../aboutvechical/DynamicForm';
import AboutPolicyHolder from '../aboutpolicyholder/DynamicForm';
import Progressbar from "./Progressbar";
import WizardHeader from './WizardHeader'
// { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import PageLoader from '../aboutvechical/PageLoader';
import allReducers from '../reducers';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
class Wizardcheck extends Component {

        constructor(props){
                super(props)
            this.state={        
                            step:0,
                            verfication:[true,false,false,false],
                            steps:[{key:0,isDone:false,isverify:true,imgsrx:require('../images/car.png').default,tickmark:require('../images/Group 171.svg').default,component:<Provider store={store}><DynamicForm handleNext={this.handleNext.bind(this)} handleBack={this.handleBack.bind(this)} /><PageLoader/></Provider>},
                            {key:1,isDone:false,isverify:false,imgsrx:require('../images/contact.png').default,tickmark:require('../images/Group 171.svg').default,component:<AboutPolicyHolder  handleNext={this.handleNext.bind(this)} handleBack={this.handleBack.bind(this)} />},
                            {key:2, isDone:false,isverify:false,imgsrx:require('../images/vechical.png').default,tickmark:require('../images/Group 171.svg').default,component:"third"},
                            {key:3, isDone:false,isverify:false,imgsrx:require('../images/Checklist_2_.svg').default,tickmark:require('../images/Group 171.svg').default,component:"final"}]     
                        }
            this.handleNext=this.handleNext.bind(this)
            this.handleBack=this.handleBack.bind(this)

        }
    //go to next steptht
        handleNext = () =>  {
            console.log(this.state.steps.length)
            if(this.state.step===this.state.steps.length-1)
            {
            
                return;
            }
            let steps=[...this.state.steps];

            let step={...steps[this.state.step]};
        
            step.isDone=true;
        
            steps[this.state.step]=step;
        
            this.setState({steps});
            this.setState({
                    step:this.state.step +1
            });
            console.log(this.state.step);
        

        if(this.state.step!==0)
                console.log(this.state.steps[this.state.step].isDone)
        
    
    // veifydone 

        let verify=[...this.state.verfication]
        verify[this.state.step+1]=true;
        this.setState({
            verfication:verify
        })
        console.log(this.state.verfication[this.state.step+1]);
            
        }

        handleBack()  {
        
            if(this.state.step===0)
            {
            
                return;
            }
        
            let steps=[...this.state.steps];

            let step={...steps[this.state.step-1]};
        
            step.isDone=false;
        
            steps[this.state.step-1]=step;
        
            this.setState({steps});
            this.setState({
                    step:this.state.step -1
            });
            console.log(this.state.step);
        
        
            let verify=[...this.state.verfication]
            verify[this.state.step]=false;
            this.setState({
                verfication:verify
            })
    
            
        }
        componentDidMount() {
            window.scrollTo(0, 0)
          }
    
        render(){
                              
    
    
        
            return(
            

                <div>
                    <WizardHeader></WizardHeader>
                    <div className="wizard">
                        <div className="wizardbody">
                            { 
                        
                            this.state.steps.map((wizard) => {
                                return(
                            
                                <div key={wizard.key}>
                                    <div  className={this.state.verfication[wizard.key]?"car":"cardone"} onClick={this.handleNext.bind(this)} >
                                        <img src={wizard.imgsrx} alt="imgae" className="carimage"></img>
                                        <img src={wizard.tickmark} alt="imgae" className={wizard.isDone?"tickmark":"tickmarknone"}></img>
                                    </div> 
                                </div>
                                    )
                                
                            })
                            }

                        
                        </div>

                    </div>
                    <div className="contentbody">  

                    <Progressbar value={this.state.step} length={this.state.steps.length}/>                 
                    {this.state.steps[this.state.step].component}  
                           
                            <button onClick={this.handleNext}>next</button>
                            <button onClick={this.handleBack}>back</button>
                    
                    </div>
                   
                </div>
               
            )

        

        }
    }




    export default Wizardcheck;
