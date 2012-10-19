var Unmarked = Ember.Application.create({
  rootElement: '#application'
});

remoteStorage.claimAccess({
  bookmarks: 'rw'
});

remoteStorage.displayWidget('remotestorage-connect');
