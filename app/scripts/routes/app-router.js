Unmarked.Router = Ember.Router.extend({
  location: "hash",
  enableLogging: true,

  root: Ember.Route.extend({
    goToBookmarks: Ember.Route.transitionTo('bookmark_list'),
    goToImport: Ember.Route.transitionTo('import'),

    index: Ember.Route.extend({
      route: '/',
      redirectsTo: 'bookmark_list'
    }),

    bookmark_list: Em.Route.extend({
      route: '/bookmarks',
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet({
          controller: router.get('bookmarksController'), viewClass: Unmarked.BookmarkListView
        });
      },
      enter: function() {
        // return Em.run.next(function() {
        //   $('div.tabs').addClass('tab1');
        //   $('div.slider div.foreground').stop().animate({
        //     'width': '90px'
        //   }, 1000);
        //   return $('div.slider div.handle').stop().animate({
        //     'left': '82px'
        //   }, 1000);
        // });
      },
      exit: function() {
        // return $('div.tabs').removeClass('tab1');
      }
    }),

    import: Em.Route.extend({
      route: '/import',
      connectOutlets: function(router, context) {
        router.get('applicationController').connectOutlet({
          name: 'import'
        });
      },
      enter: function() {
        // return Em.run.next(function() {
        //   $('div.tabs').addClass('tab1');
        //   $('div.slider div.foreground').stop().animate({
        //     'width': '90px'
        //   }, 1000);
        //   return $('div.slider div.handle').stop().animate({
        //     'left': '82px'
        //   }, 1000);
        // });
      },
      exit: function() {
        // return $('div.tabs').removeClass('tab1');
      }
    })

  })
});
