class Budget extends React.Component{
	constructor(props){
		super(props);
		this.newBudget = this.newBudget.bind(this)
		this.state = { budget: [] };
	}

	componentDidMount(){
		$.ajax({
			url: '/budget',
			type: 'GET',
			data: { budget: true }
		}).success( data => {
			this.setState({ budget: data });
		});
	}

	newBudget(){
		$.ajax({
			url: '/budget',
			type: 'POST',
			data: { budget: { money: this.refs.newBudget.value }}
		}).success( data => {
			let budget = this.state.budget;
			budget.push(data);
			this.setState({ budget: budget });
		});
	}

	render(){
		debugger
		let budget = this.state.budget.map( budget => {
			let key = `budget-${budget}`;
			return(<Budget key={key} {...budget} />);
		});
		return(<div>
						 <h3 className="center">Budget</h3>
						 <hr />
						 <h1>{this.state.budget.money}</h1>
						 {Budget.money}
						 <input type="number" placeholder="Please Enter Budget" ref="newBudget" />
						 <br />
						 <button className="btn purple" onClick={this.newBudget}>Save</button>
					 </div>);
	}
}