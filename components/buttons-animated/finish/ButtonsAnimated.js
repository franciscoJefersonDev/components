class ButtonAnimated {
    elementData;
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
                item.addEventListener('mousedown', ({ target }) => {
                    this.initAnimation(target);
                });
                item.addEventListener('touchstart', ({ target }) => {
                    this.initAnimation(target);
                });
                item.addEventListener("mouseup", ({ target }) => this.finishAnimation(target));
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
            .getPropertyValue("--bsw-default");
        this.elementData.boxShadowAfter = window
            .getComputedStyle(target)
            .getPropertyValue("--bsw-after");
        this.elementData.borderRadiusDefault = window
            .getComputedStyle(target)
            .getPropertyValue("--brd-default");
        this.elementData.borderRadiusAfter = window
            .getComputedStyle(target)
            .getPropertyValue("--brd-after");
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
    const buttonsAnimateds = document.querySelectorAll('.wk-btn-anim');
    new ButtonAnimated(buttonsAnimateds);
});
const AddManualBtnsAnim = (buttonsAnimated) => {
    new ButtonAnimated(buttonsAnimated);
};
export { AddManualBtnsAnim };
