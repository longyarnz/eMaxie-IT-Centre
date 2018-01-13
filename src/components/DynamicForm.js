import React, { Component } from 'react';
import UUID from 'uuid';

export default class DynamicForm extends Component {
	constructor(props){
    super(props);
    this.state = {
      name: ""
    };
    // this._handleChange = this._handleChange.bind(this);
  }

  // _handleChange(event){
  // 	event.preventDefault();
  // 	event.persist();
  // 	const name = event.target.value;
  // 	this.setState({
  // 		name
  // 	});
  // }

	_handleInputs(input){
		if(!input.type) {
			console.error("DynamicForm inputs are not wrapped in an object");
			return;
		}

		const { name, type='text', ref, placeholder, options=['HP'], autoComplete=true, spellCheck=true, required=true, row=7, className, disabled=false, divClassName, autoFocus=false } = input;
		if (name === 'input'){
			return(
				<div className={divClassName} key={UUID.v4()}>
					<input 
						type={type}
						className={className} 
						ref={ref} 
						placeholder={placeholder} 
						required={required}
						autoComplete={autoComplete}
						autoFocus={autoFocus}
						spellCheck={spellCheck}
						disabled={disabled}
					/>
				</div>
			)
		}
		else if(name === 'select'){
			return(
				<div className={divClassName} key={UUID.v4()}>
					<select className={className} ref={ref} defaultValue={options[0]}>
						{
							options.map((option, i)=>{
								return (
									<option key={i} value={option}>
										{option}
									</option>
								)
							})
						}
					</select>
				</div>
			)
		}
		else if(name === 'textArea'){
			return(
				<div className={divClassName} key={UUID.v4()}>
					<textarea 
						ref={ref} 
						placeholder={placeholder} 
						required={required}
						autoComplete={autoComplete}
						spellCheck={spellCheck}
						rows={row}
						className={className}
						disabled={disabled} 
					/>
				</div>
			)
		}
		else if(name === 'file'){
			return(
				<div className={divClassName} key={UUID.v4()}>
					<textarea 
						ref={ref} 
						placeholder={placeholder} 
						required={required}
						className={className}
						disabled={disabled} 
					/>
				</div>
			)
		}
	}

	// componentDidMount() {
	//   // this.setState({
	//   // 	refs: this.refs
	//   // })
	// }

	// componentWillUpdate(nextProps, nextState) {
	//   if(this.props.check === "contact") {
	//   	// for(var x in this.state.refs) {
	//   	// 	// this.refs[x].value = prevState.refs[x].value;
	//   	// 	// console.log(x);
	//   	// 	console.log(nextState.refs[x].value);
	//   	// 	this.refs[x].value = nextState.refs[x].value;
	//   	// }
	//   	console.log(nextState.refs);
	//   }
	// }

	// componentDidUpdate(prevProps, prevState) {
	//   // console.log("Updated1");
	// }

	render() {
    return (
      <form className={this.props.className} onSubmit={(e)=>{e.preventDefault();this.props.submit(this.refs);
      	if(this.props.clear === true) { for(var x in this.refs) {this.refs[x].value = ""}}
      }}>
    		{
    			this.props.formData.map(data => {
    				return this._handleInputs(data);
    			})
    		}
    		<button className={this.props.className}>{this.props.button}</button>
    	</form>
    );
  }
}
