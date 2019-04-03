import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(value: any[], property?: string , searchString?: string ): any {
    console.log(searchString);
    if (value !== undefined) {
      return value.filter((e) => {
        return e[property].toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1;
      });
    } else {
      return[];
    }
  }

}
