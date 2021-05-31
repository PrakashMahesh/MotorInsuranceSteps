import React,{useEffect,useState} from 'react';



function WizardHeader(){
    // const [policyHolderElements, setPolicyHolderElements] = useState(null);

    // useEffect(() => {
    //     policyHolderDetails();
      
    // }, []);
    
    
    // const policyHolderDetails = async () => {
        
    //     const response = await fetch("https://run.mocky.io/v3/85b24794-671f-4915-8f09-fb3a6b49d267");
    //     const policyHolderData = await response.json();
       
    //   console.log(  setPolicyHolderElements(policyHolderData));
    //     console.log(policyHolderElements.policyHolderName);
    // }
    
    return (
        <div>
            <div className="WizardHeader" >
            <img src={require('../images/logo.png').default} alt="imgae" className="WizardHeaderlogo"></img>
            <img src={require('../images/car.png').default} alt="imgae" className="PolicyHoderImage"></img>
                <div className="PolicyHolderNameDispaly"> Hi John</div>
            </div>
        </div>
      )
}

export default WizardHeader;