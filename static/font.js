var loadFont = e => {
  var t = new XMLHttpRequest();
  t.open("GET", e, !0),
    (t.onreadystatechange = () => {
      if (4 == t.readyState && 200 == t.status) {
        var e = t.responseText;
        e = e.replace(/}/g, "font-display: swap; }");
        var a = document.getElementsByTagName("head")[0],
          o = document.createElement("style");
        o.appendChild(document.createTextNode(e)), a.appendChild(o);
      }
    }),
    t.send();
};
loadFont("https://fonts.googleapis.com/css?family=Cabin:400,500,600,700");
//loadFont("https://use.typekit.net/dsg7wdu.css");
loadFont("https://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700");
