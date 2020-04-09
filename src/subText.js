module.exports=function(text,startStr,endStr){
    var startIndex=text.indexOf(startStr);
    var endIndex=text.lastIndexOf(endStr);
    return text.substring(startIndex+1,endIndex);
}