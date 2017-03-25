export class Jedi {
	id: string;
  	status: string = '';
  	name: string = '';

  	constructor(values: Object = {}) {
    	Object.assign(this, values);
  	}
}