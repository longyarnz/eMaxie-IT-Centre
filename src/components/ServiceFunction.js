export default function ServiceFunction(title, optionItems){
	const name = {
		name: 'input',
		type: 'text',
		ref: 'name',
		placeholder: 'What is Your Name?',
		required: true,
		autoComplete: true,
		spellCheck: false,
		divClassName: "form-control",
    className: "form-control",
		disabled: false
	}

  const phone = {
    name: 'input',
    type: 'number',
    ref: 'phone',
    placeholder: 'What is Your Phone Number?',
    required: true,
    autoComplete: true,
    spellCheck: false,
    divClassName: "form-control",
    className: "form-control",
    disabled: false
  }

  const email = {
    name: 'input',
    type: 'email',
    ref: 'email',
    placeholder: 'What is Your Email?',
    autoComplete: true,
    spellCheck: false,
    divClassName: "form-control",
    className: "form-control",
    disabled: false
  }

  const laptop = {
    name: 'input',
    type: 'text',
    ref: 'laptop',
    placeholder: 'What is Your Laptop Name and Model?',
    required: true,
    autoComplete: true,
    spellCheck: false,
    divClassName: "form-control",
    className: "form-control",
    disabled: false
  }

	const problem = {
		name: 'textArea',
		type: 'text',
		ref: 'problem',
		placeholder: 'How May We Help You?',
		required: true,
		autoComplete: true,
		spellCheck: false,
		row: 7,
		divClassName: "form-control",
    className: "form-control"
	}

	const specs = {
		name: 'textArea',
		type: 'text',
		ref: 'specs',
		placeholder: 'Describe the Kind of Laptop You Want?',
		required: true,
		autoComplete: true,
		spellCheck: false,
		divClassName: "form-control",
    className: "form-control"
	}

	// const swapList = {
	// 	name: 'select',
	// 	type: 'select',
	// 	ref: 'swapList',
	// 	options: optionItems,
	// 	required: true,
	// 	divClassName: "form-control",
 //    className: "form-control"
	// }

	switch(title){
		case 'Computer Repairs': return [name, phone, email, laptop, problem];
		case 'Buy A New PC': return [name, phone, email, specs];
		case 'Swap Your Old PC': return [name, phone, email, laptop, specs];
		default: return [name, phone, email, problem];
	}
}