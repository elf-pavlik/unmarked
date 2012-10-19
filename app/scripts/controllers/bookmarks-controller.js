Unmarked.BookmarksController = Ember.ArrayController.create({

  content: [],

  createBookmark: function(url, title, unread, tags, createdAt) {
    var bookmark = Unmarked.Bookmark.create({
      url: url,
      title: title,
      unread: unread,
      tags: tags,
      createdAt: createdAt
    });

    this.pushObject(bookmark);
  }

});
