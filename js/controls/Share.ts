import { link } from "fs";

export default class Share {

  supported

  constructor(target?:HTMLElement) {
    // find share buttons
    const shareButtons:Array<HTMLElement> = this.findShareButtons();
    this.attachEventListenersFor(shareButtons);
  }

  private findShareButtons():Array<HTMLElement> {
    const knownTargets = [
      "shareFacebook", "shareTwitter", "shareTumblr", "shareReddit"
    ];
    const buttons:Array<HTMLElement> = [];
    for (let i = 0; i < knownTargets.length; i++) {
      let el = document.getElementById(knownTargets[i]);
      if (el !== null) {
        buttons.push(el);
      }
    }
    return buttons;
  }

  private handleClick(ev:MouseEvent) {
    ev.preventDefault();
    if (ev.target instanceof Element) {
      this.handleShareFor(ev.target.getAttribute('id').replace('share', '').toLowerCase(), ev.target.getAttribute('href'));
    }
  }

  private attachEventListenersFor(linkElement:Array<HTMLElement>):void {
    linkElement.map((el) => {
      el.addEventListener('click', this.handleClick.bind(this));
    });
  }

  private handleShareFor(type:string, href:string) {
    // we actually don't do anything different for these right now
    // just spawn a popup that seems like it's an OK size
    const width = Math.max(100, Math.ceil(window.innerWidth * 0.6));
    const height = Math.ceil(width * 0.5625);
    const y = Math.ceil(window.top.outerHeight / 2 + window.top.screenY - ( height / 2));
    const x = Math.ceil(window.top.outerWidth / 2 + window.top.screenX - ( width / 2));
    console.log(width,height,x,y);
    window.open(
      href,
      '_blank',
      `popup=1,noopener=1,noreferrer=1,width=${width},height=${height},top=${y},left=${x}`
    );
  }

}

