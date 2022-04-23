class CommonFunctions {

  //Function to splice and convert the desire data from the result stats div
  static getResultNumberAndTime(resultString) {
    //Regex to match any formatted number inside the given string
    var matches = resultString.match(/[.,0-9]*\d/g);
    //Confirms that has matches
    if (matches) {
      //Removing all the . from the first match, will be always the number of results 
      let totalResults = matches[0].replaceAll(".", "");
      //Parsing the result number to float and returning it with the time info inside an array         
      return [parseFloat(totalResults), matches[1]]
    }
  }
}

module.exports = { CommonFunctions }