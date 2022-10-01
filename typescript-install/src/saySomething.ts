export default class SaySomething {
  message: string;

  // init
  constructor(message: string){
    this.message = message
  }

  public sayText(elem: HTMLElement | null){
    if(elem){
      elem.innerText = this.message
    }
  }
}