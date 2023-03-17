/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, window, location, CSInterface, SystemPath, themeManager*/

(function () {

  'use strict';
  var csInterface = new CSInterface();
  function loadJSX(fileName) {
    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
    csInterface.evalScript('$.evalFile("' + extensionRoot + fileName + '")');
  }
  loadJSX("hostscript2.jsx");


  function init() {

    themeManager.init();
    //кнопке
    $("#getImgBtn").click(function () {
      csInterface.evalScript('renameObj()');
    });
  }
  init();
}());
