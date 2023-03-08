import { Attribute, Component, ElementRef, Input } from "@angular/core";


@Component({
  selector: `
    button[ui-plain-button],
    button[ui-fill-button],
  `,
  templateUrl: './buttons.component.html'
})


export class ButtonsComponent {

  attribute = ""
  @Input() content = ""

  clickEvent(str: string) {
    console.log(str)
  }

  constructor(private el: ElementRef) {
    const attributesLength = el.nativeElement.attributes.length
    this.attribute = this.getAttributes(attributesLength)
  }


  getAttributes(attributesLength: Number): string {
    const attributes = []
    for (let i = 0; i < attributesLength; i++) {
      if (this.el.nativeElement.attributes[i].name.startsWith('ui-')) {
        attributes.push(this.el.nativeElement.attributes[i].name)
      }
    }

    if(attributes.length > 1) {
      throw new Error("You can only use one UI type attribute")
    }

    return attributes[0]
  }



}
