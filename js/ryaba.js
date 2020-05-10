const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  $.getJSON(
  	dataURL,
  	function(data) {
  		handleData(data)
  	})
}

function handleData(data) {
  const var1 = $("input[name='var1']").val()
  const var2 = $("input[name='var2']").val()
  const var3 = $("input[name='var3']").val()
  const var4 = $("input[name='var4']").val()
  const var5 = $("input[name='var5']").val()
  const var6 = $("input[name='var6']").val()
  const speach = $("input[name='speach']").val()

  let text = "";
  data.text.forEach(function(aText) {
  	text = text + " " + aText;
  });

  text = text.replace(/{var1}/g,var1);
  text = text.replace(/{var2}/g,var2);
  text = text.replace(/{var3}/g,var3);
  text = text.replace(/{var4}/g,var4);
  text = text.replace(/{var5}/g,var5);
  text = text.replace(/{var6}/g,var6);
  text = text.replace(/{speach}/g,speach);
  	

  $("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
