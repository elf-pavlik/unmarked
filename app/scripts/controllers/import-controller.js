Unmarked.ImportController = Ember.ObjectController.extend({

  importDeliciousLinks: function () {
    console.log("calling importDeliciousLinks");
    window.deliciousLinks.each(function(index, element){
      a = $(element);
      var description = null;
      var tags = null;

      if (a.parent().next().is('dd')) {
        description = $(a).parent().next().text();
      }
      if (a.attr('TAGS')) {
        tags = a.attr('TAGS').split(',');
      }

      Unmarked.get('router.bookmarksController').loadBookmark(
        a.attr('href'),
        a.text(),
        description,
        false,
        tags,
        moment.unix(a.attr('ADD_DATE')).format()
      );
    });
  }

});
