class Bills extends React.Component{
	constructor(props){
		super(props);
		this.state = { bills: [] };
	}

	render(){
		return(<div>
						 <input placeholder="Name of Bill" ref='newName' autoFocus={true} />
						 <input placeholder="Amount of Bill" ref='newAmount' />
						 <button className='btn' onClick={this.newBill}>Post</button>
			     </div>);
	}
}