Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1>Unmarked</h1>\n\n<p>Keep your bookmarks where they belong: in your remoteStorage.</p>\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],data:data});
  data.buffer.push(escapeExpression(stack1) + "\n");
  return buffer;
});