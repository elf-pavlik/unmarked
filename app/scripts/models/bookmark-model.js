Unmarked.Bookmark = Ember.Object.extend({

  url: null,
  title: null,
  description: null,
  unread: false,
  tags: [],
  createdAt: null,

  save: function() {
    return remoteStorage.bookmarks.storeItem(
      this.url, this.title, this.description, this.unread, this.tags, this.createdAt
    );
  },

  destroy: function() {
    return remoteStorage.bookmarks.removeItem( this.url );
  },

  tagsFormatted: function() {
    return this.get('tags').join(', ');
  }.property('tags'),

  createdAtTimeAgo: function() {
    // console.log(this.get('createdAt'));
    return moment(moment(this.get('createdAt'))).from(new Date())
  }.property('createdAt')

});
