class Data {
  elementCount = 0;
  elementArray = [];

  constructor(count) {
    this.elementCount = count;
  }

  init () {
    let object = this;
    return new Promise(function (resolve) {
      setTimeout(() => {
        object.elementArray = Array.from({ length: object.elementCount }, (k, v) => v + 1);
        setTimeout(() => {
          resolve("done");
        }, 1000);
      }, 1000);
    });
  }

  get () {
    return this.elementArray;
  }
}

export default Data;
