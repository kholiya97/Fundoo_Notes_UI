import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colorpalette',
  templateUrl: './colorpalette.component.html',
  styleUrls: ['./colorpalette.component.scss']
})
export class ColorpaletteComponent {
@Output() colorChanged = new EventEmitter();
  borderColor = 'grey';  //default
  public colors: any[] = [
    { colorCode: '#d12d1b' },
    { colorCode: '#d15b1b' },
    { colorCode: '#d1851b' },
    { colorCode: '#d1a71b' },
    { colorCode: '#fff81f' },
    { colorCode: '#bcd11b' },
    { colorCode: '#9ad11b' },
    { colorCode: '#6ad11b' },
    { colorCode: '#1bd124' },
    { colorCode: '#1bd14f' },
    { colorCode: '#1bd17f' },
    { colorCode: '#1bd1b3' },
    { colorCode: '#1bb9d1' },
    { colorCode: '#1b88d1' },
    { colorCode: '#1b36d1' },
    { colorCode: '#821bd1' },
    { colorCode: '#cb1bd1' },
    { colorCode: '#d11b6a' },
  ];

  colorSelected(colorCode: string) {
    this.borderColor = colorCode;
    this.colorChanged.emit(colorCode);
  }
}
