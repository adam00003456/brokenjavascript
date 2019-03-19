class brokenjavascript {
  var date = "";
  constructor(date) {
    this.date=date;
  }
  
  getDate () {
    throw new Error(`externalLibrary method broken: ${date}`);
  }
}




