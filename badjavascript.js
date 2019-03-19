class brokenjavascript {
  var date = "x";
  constructor(date) {
    this.date=date;
  }
  
  getDate () {
    throw new Error(`externalLibrary method broken: ${date}`);
  }
}




