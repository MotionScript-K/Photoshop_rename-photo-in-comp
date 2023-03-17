/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/

function renameObj() {

  var csvFile = File("C:/Users/Baluev.Kirill/Desktop/info/info.csv");
  var csvData = [];

    csvFile.open("r");
    do {
      csvData.push(csvFile.readln());
    } while (!csvFile.eof);
    csvFile.close();

  var targetFolder = Folder("C:/Users/Baluev.Kirill/Desktop/photoTest");
  var targetFiles = targetFolder.getFiles();

  for (var i = 0; i <= targetFiles.length; i++) {
    var objectPhoto = targetFiles[i].name.split(".");
    try{
      var variants = objectPhoto[0].split("-");
    }catch(e){alert("опля, неправильные варианты имени шк-2 шк-3 шк-4 ...")};

    for (var e = 1; e < csvData.length; e++) {
      var thisCSVRow = csvData[e].split(",");
      if (objectPhoto[0] == thisCSVRow[1]) {
        targetFiles[i].rename(targetFiles[i].name.replace(objectPhoto[0], thisCSVRow[0]));
        break;
      } 
      else if (variants[0] == thisCSVRow[1]){
        targetFiles[i].rename(targetFiles[i].name.replace(variants[0], thisCSVRow[0]));
        break;
      }
      else if (objectPhoto[0] != thisCSVRow[1] && variants[0] != thisCSVRow[1]){continue}
      else {alert("произошла какая то непредвиденная херня")}
    };
    if (i == targetFiles.length-1){alert("Готово, обязательно убери ТОВЫ по местам перед новым запуском")};
  };
};
