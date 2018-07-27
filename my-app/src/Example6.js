import React from 'react';
import Button from './Example6Cnt'

class App extends React.Component{
    constructor(props){
        super(props)
        //Initial state set up
        this.state = {RandomNum1:0,RandomNum2:0,result:0,status:"",question:"" ,answers:[0,0,0,0],activeArray:[0,0,0,0],details:"Choosen Person",correct:0,incorrect:0}
        this.clickHandler = this.clickHandler.bind(this)
        
        //binding is necessary to make 'this' point to the correct object
    }
    
    
    clickHandler(id,details){
       
        var arr= [0,0,0,0]
        if(details==this.state.result){
            arr[id]=1
            this.setState({status:"Correct"})
            this.setState((prevState,props)=> { return {correct:prevState.correct+1}})
            
        }else{
            
            this.setState({status:"Incorrect"})
            this.setState((prevState,props)=> { return {incorrect:prevState.incorrect+1}})
        }
        
        this.setState({activeArray:arr,details:details})
        setTimeout(() => this.nextStep(),1500);

            
        
    }
    
    
    
    
    shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    nextStep(){
        var arr=[0,0,0,0]
        this.setState({activeArray:arr})
        let RandomNumber = Math.floor(Math.random() * 10)  ;
        let RandomNumber2 = Math.floor(Math.random() * 10)  ;
        let result = RandomNumber*RandomNumber2;
        let ans=[result,result-1,result+1,result+2];
        ans=this.shuffle(ans);
        
        let initquestion=RandomNumber+"×"+RandomNumber2+" = ?";
        this.setState({RandomNum1:RandomNumber,RandomNum2:RandomNumber2,result:result,question:initquestion ,answers:ans});
        
    }
    
    
    componentDidMount(){
        this.nextStep();
    }
    
    render(){
        
        
        
        //renders a button that displays the state count
        return (<div>
            <div><h1>Question : {this.state.question}</h1></div>
            <div>
            <Button id = {0} active = {this.state.activeArray[0]}
            clickHandler = {this.clickHandler} name = {this.state.answers[0]} />
            </div>
            <div>
            <Button id = {1} active = {this.state.activeArray[1]}
            clickHandler = {this.clickHandler} name = {this.state.answers[1]} />
            </div>
            <div>
            <Button id = {2} active = {this.state.activeArray[2]}
            clickHandler = {this.clickHandler} name = {this.state.answers[2]} />
            </div>
            <div>
            <Button id = {3} active = {this.state.activeArray[3]}
            clickHandler = {this.clickHandler} name = {this.state.answers[3]} />
            </div>
            <div>
            <h1><b>{this.state.status}</b></h1>
            <th><h2><b>Correct:&emsp;{this.state.correct}&emsp;</b></h2></th>
            <th><h2><b>Incorrect:&emsp;{this.state.incorrect}</b></h2></th>
            </div>
            </div>)
        }
        /* BURAYA BUTTON CLASS I  DA YAZILABİLİR */
        
        
    }
    
    export default App;
    
