import React, { Comonent } from 'react';

export default class ServiceForm extends Component {
  render() {
    return (
      <div className="icon-panel">
        <Close close={()=>this.props.iconDisplay.remove()}/>
      	<Title title={imageData.title} />
      	<DynamicForm className="icon-panel" formData={formData} button="" submit={(data)=>this.submit(data, imageData.title)} clear={true} />
      	<SideImage imageData={ imageData } />
      </div>
    );
  }
}
