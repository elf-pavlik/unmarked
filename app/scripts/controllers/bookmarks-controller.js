Unmarked.BookmarksController = Ember.ArrayController.extend({

  content: [],

  loadBookmark: function(url, title, description, unread, tags, createdAt) {
    console.log("calling loadBookmark");
    var bookmark = Unmarked.Bookmark.create({
      url: url,
      title: title,
      description: description,
      unread: unread,
      tags: tags,
      createdAt: createdAt
    });
    this.pushObject(bookmark);
  },

  createBookmark: function(url, title, description, unread, tags, createdAt) {
    var bookmark = Unmarked.Bookmark.create({
      url: url,
      title: title,
      description: description,
      unread: unread,
      tags: tags,
      createdAt: createdAt || new Date()
    });
    this.pushObject(bookmark);

    bookmark.save();
  },

  destroyBookmark: function(url) {
    self = this;
    $.each(this.filterProperty('url', url), function(){
      self.removeObject(this);
      this.destroy();
    });
  }

});
