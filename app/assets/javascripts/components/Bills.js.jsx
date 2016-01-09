class Bills extends React.Component{
	constructor(props){
		super(props);
		this.newBill = this.newBill.bind(this);
		this.state = { bills: [] };
	}

	componentDidMount(){
		$.ajax({
			url: '/bills',
			type: 'GET',
		}).success( data => {
			this.setState({ bills: data });
		});
	}

	newBill(){
		$.ajax({
			url: '/bills',
			type: 'POST',
			data: { bill: { name: this.refs.newName.value, amount: this.refs.newAmount.value }}
		}).success( data => {
			let bills = this.state.bills;
			bills.push(data.bill);
			this.setState({ bills: bills });
		});
	}

	render(){
		let bills = this.state.bills.map( bill => {
			let key = `bill-${bill.id}`;
			return(<Bill key={key} {...bill} />);
		})
		return(<div className="container">
						 <input placeholder="Name of Bill" ref='newName' autoFocus={true} />
						 <input placeholder="Amount of Bill" ref='newAmount' />
						 <button className='btn' onClick={this.newBill}>Post</button>
						 <hr />
						 <h1 className='center-text'>Bills</h1>
						 <hr />
						 {bills}
			     </div>);
	}
}