import { Component } from "@angular/core";
import { JediService } from "./../../service/jedi.service";
import { Jedi } from "./../../entity/jedi";

@Component({
	templateUrl: 'jedi.component.html',
  styleUrls: ['jedi.component.css']
})
export class JediComponent {
	jedis: Jedi[] = [];

	constructor(private jediService: JediService) {}

	onSave(id: string, status: string, name: string) {
		var jedi = new Jedi({id:id, status:status, name:name});
		this.jediService.save(jedi).subscribe(
			() => {this.onGetAll()}
		);
	}

	onGetAll() {
  	this.jediService.getAll().subscribe(
  		data => {
        		const myArray = [];
        		for (let key in data) {
          		myArray.push({id: key, status: data[key].status, name: data[key].name});
        		}
        	this.jedis = myArray;
      	}
    	);
	}

	onUpdate(id: string, status: string, name: string) {
		var jedi = new Jedi({id:id, status:status, name:name});
  	this.jediService.update(jedi).subscribe(
        	() => {this.onGetAll()}
      );
	}

	onRemove(id: string) {
  	this.jediService.delete(id).subscribe(
      	() => {this.onGetAll()}
    	);
	}
}