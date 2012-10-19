Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Unmarked</h1>\n\n<p>Keep your bookmarks where they belong: in your remoteStorage.</p>\n\n");
  stack1 = helpers.view.call(depth0, "Unmarked.BookmarkListView", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});

Ember.TEMPLATES["bookmark_list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <li>\n    ");
  stack1 = helpers['if'].call(depth0, "title", {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <span class=\"url\"><a ");
  stack1 = {};
  stack1['href'] = "url";
  stack1 = helpers.bindAttr.call(depth0, {hash:stack1,contexts:[],data:data});
  data.buffer.push(escapeExpression(stack1) + ">");
  stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</a></span>\n    <br>\n    <span class=\"tags\">");
  stack1 = helpers._triageMustache.call(depth0, "tags", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "</span>\n  </li>\n");
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

  data.buffer.push("<ul>\n");
  stack1 = helpers.each.call(depth0, "Unmarked.BookmarksController.content", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n");
  return buffer;
});