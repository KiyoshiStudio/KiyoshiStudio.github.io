function goToFacebook () {
  var URL = document.location.toString();
  var useragent = navigator.userAgent;
  useragent = useragent.toLowerCase();

  if( useragent.indexOf('iphone') != -1 ) location.replace("fb://page/?id=101458241466947");//iphone
  else if( useragent.indexOf('ipad') != -1 || useragent.indexOf('ipod') != -1) location.replace("fb://page/?id=101458241466947");//ipad
  else if( useragent.indexOf('android') != -1 ) {
  if( ConsiderLimits() )
    {
      location.replace("fb://page/101458241466947"); // android pad
    }else{
      location.replace("fb://page/101458241466947"); // android phone
    }
    }else{
      location.replace("http://www.facebook.com/"); // PC
    }

  function ConsiderLimits() {
  if( screen.width >= 1024 && screen.height >= 600 )
  return 1;
  return 0;
  }


}