import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(dataIngles: string): string {
    if (!dataIngles) {
      return '';
    }

    const dataArray = dataIngles.split('-');
    if (dataArray.length !== 3) {
      return dataIngles;
    }

    return `${dataArray[2]}/${dataArray[1]}/${dataArray[0]}`;
  }

}
