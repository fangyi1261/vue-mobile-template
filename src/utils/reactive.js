let currentEffect = null;

class Dep {
  constructor(value) {
    this._value = value;
    this.effects = new Set();
  }

  get value() {
    this.depend();
    return this._value;
  }

  set value(newVal) {
    this._value = newVal;
    this.notice();
  }

  depend() {
    if (currentEffect) {
      this.effects.add(currentEffect);
    }
  }

  notice() {
    this.effects.forEach(effect => {
      effect();
    });
  }
}

const dep = new Dep(10);

function effectWatch(effect) {
  currentEffect = effect;
  effect();
  currentEffect = null;
}
let b = null;

effectWatch(() => {
  b = dep.value + 10;
  console.log(b);
});

dep.value = 20;
