class ButtonAnimated {
  constructor(els) {
      this.elementData = {
          boxShadowDefault: '',
          boxShadowAfter: '',
          borderRadiusDefault: '',
          borderRadiusAfter: '',
      },
          els.forEach((item) => {
              item.addEventListener('mouseenter', ({ target }) => {
                  this.initAnimation(target);
              });
              item.addEventListener('touchstart', ({ target }) => {
                  this.initAnimation(target);
              });
              item.addEventListener("mouseleave", ({ target }) => this.finishAnimation(target));
              item.addEventListener("touchend", ({ target }) => this.finishAnimation(target));
              item.addEventListener("click", ({ target }) => {
                  this.finishAnimation(target);
              });
          });
  }
  colletDatasFromElement(target) {
      this.elementData.boxShadowDefault = window
          .getComputedStyle(target)
          .getPropertyValue("--box-shadow-default");
      this.elementData.boxShadowAfter = window
          .getComputedStyle(target)
          .getPropertyValue("--box-shadow-after");
      this.elementData.borderRadiusDefault = window
          .getComputedStyle(target)
          .getPropertyValue("--border-radius-default");
      this.elementData.borderRadiusAfter = window
          .getComputedStyle(target)
          .getPropertyValue("--border-radius-after");
  }
  initAnimation(target) {
      this.colletDatasFromElement(target);
      target.style.boxShadow = this.elementData.boxShadowAfter;
      target.style.borderRadius = this.elementData.borderRadiusAfter;
  }
  finishAnimation(target) {
      this.colletDatasFromElement(target);
      target.style.boxShadow = this.elementData.boxShadowDefault;
      target.style.borderRadius = this.elementData.borderRadiusDefault;
  }
}
export default document.addEventListener('DOMContentLoaded', () => {
  const buttonsAnimateds = document.querySelectorAll('.button-animated');
  new ButtonAnimated(buttonsAnimateds);
});