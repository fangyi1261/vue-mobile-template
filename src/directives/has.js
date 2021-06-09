export default {
  bind() {

  },
  inserted(el, binding, vnode, oldVnode) {
    const btnPremissionValue = binding.value;
    const boolean = vnode.context.$store.state.premission.buttonPremissionValue[btnPremissionValue];

    !boolean && el.parentNode.removeChild(el);
  },
  update() {

  },
  componentUpdated() {},
  unbind() {}
};
