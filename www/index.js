// more code up here...
    alert('Received Event: ' + id);
    
    // Add the following 5 lines
    window.plugins.toastyPlugin.show('It feels toasty in here!', 'long', function() {
      console.log('Excelsior!');
    }, function(err) {
      console.log('Uh oh... ' + err);
    });
  }
};
