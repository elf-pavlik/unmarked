Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<header>\n  <h1>Unmarked</h1>\n  <p>Keep your bookmarks where they belong: in your remoteStorage.</p>\n</header>\n\n<nav>\n  <ul>\n    <li><a ");
  stack1 = helpers.action.call(depth0, "goToBookmarks", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + ">Bookmarks</a></li>\n    <li><a ");
  stack1 = helpers.action.call(depth0, "goToImport", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + ">Import</a></li>\n  </ul>\n</nav>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});

Ember.TEMPLATES["bookmark_list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <li>\n    ");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <p class=\"url\"><a ");
  stack1 = {};
  stack1['href'] = "url";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</a></p>\n    ");
  stack1 = helpers['if'].call(depth0, "description", {hash:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <p class=\"meta\">\n      ");
  stack1 = helpers['if'].call(depth0, "tags", {hash:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <span class=\"created-at\">");
  stack1 = helpers._triageMustache.call(depth0, "createdAtTimeAgo", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</span>\n    <p>\n  </li>\n");
  return buffer;}
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <h3><a ");
  stack1 = {};
  stack1['href'] = "url";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</a></h3>\n    ");
  return buffer;}

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <h3><a ");
  stack1 = {};
  stack1['href'] = "url";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + ">Untitled</a></h3>\n    ");
  return buffer;}

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <p class=\"description\">");
  stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</p>\n    ");
  return buffer;}

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <span class=\"tags\">");
  stack1 = helpers._triageMustache.call(depth0, "tagsFormatted", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</span> &middot;\n      ");
  return buffer;}

  data.buffer.push("<h2>Bookmarks</h2>\n<ul>\n");
  stack1 = helpers.each.call(depth0, "controller.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
});

Ember.TEMPLATES["import"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div id=\"delicious\">\n  <h2>Import from Delicious export file</h2>\n  <input id=\"import-delicious\" type=\"file\" name=\"import-delicious\" onchange=\"importDeliciousFile();\" />\n  <div class=\"status\"></div>\n</div>\n");
});