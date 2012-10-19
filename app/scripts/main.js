var Unmarked = Ember.Application.create();

remoteStorage.claimAccess({
  bookmarks: 'rw'
});

remoteStorage.displayWidget('remotestorage-connect');
