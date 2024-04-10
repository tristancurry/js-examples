function Device (name = 'mr_happy') {
    this.name = name;
}

Device.prototype.hello = function () {
    console.log (`hello, my name is ${this.name}`);
}

export { Device };