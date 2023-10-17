import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(allemployees:any[],serchTerm:string,propName:string): any[]{
    if(!allemployees||serchTerm==''||propName==""){
      return allemployees;
    }
    const result:any=[]
  allemployees.forEach((employee:any)=>{
    if(employee[propName].trim().toLowerCase().includes(serchTerm.trim().toLocaleLowerCase()))
    result.push(employee)
  })
    return result;
  }

}
