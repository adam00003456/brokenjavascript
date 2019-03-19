class brokenjavascript {
  constructor(date) {
    this.date=date;
  }
  
  getDate () {
    throw new Error(`externalLibrary method broken: this.date`);
  }
}




