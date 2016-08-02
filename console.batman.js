/**
 *  Console.batman. A better way to log!
 *    - Logs a batman, saying your log... Yep!
 *
 *  MIT licensed
 *  Copyright (C) 2016 Tim Holman, http://tholman.com
 *
 *  Forked by:
 *  Paul Fitzgerald
 */

(function doTheThing () {

  if(!window.console){
    //do nothing if window.console doesn't exist
    return;
  }

  window.console.batman = function() {
    var x,
     css = "color:blue"
    
    // Taken from here - http://chris.com/ascii/index.php
    var batman = [
      "%c            |\_|\     %c",
      "%c            | a_a\    %c",
      "%c             | | ']     %c",
      "%c         ____| '-\___         %c",
      "%c       /.----.___.-'\   %c",
      "%c      //        _    \  %c",
      "%c     //   .-. (~v~) /|  %c",
      "%c    |'|  /\:  .--  / \  %c",
      "%c   // |-/  \_/____/\/~|   %c",
      "%c   |/  \ |  []_|_|_] \ |  %c",
      "%c   | \  | \ |___   _\ ]_} %c",
      "%c   | |  '-' /   '.'  |  %c",
      "%c   | |     /    /|:  |  %c",
      "%c  | |     |   / |:  /\  %c",
      "%c   | |     /  /  |  /  \  %c",
      "%c  | |    |  /  /  |    \  %c",
      "%c   \ |    |/\/  |/|/\    \    %c",
      "%c    \|\ |\|  |  | / /\/\__\   %c",
      "%c     \ \| | /   | |__         %c",
      "%c          / |   |____)  %c",
      "%c          |_/     %c", 
      "%c          %c"
    ];

    // Gets args as a string passed into console.batman
      var args = Array.prototype.slice.call(arguments);
      var stringOfArgs = args.join(' ');

      // Add the bubble if there is something to log!
      if( stringOfArgs.length > 0 ) {
        batman[0] = batman[0] + "   ---" + ("-".repeat(stringOfArgs.length)) + "-";
        batman[1] = batman[1] + "-(   " + stringOfArgs + "   )";
        batman[2] = batman[2] + "    ---" + ("-".repeat(stringOfArgs.length)) + "-";
      }

    for(x = 0; x < batman.length; x++) {
      console.log(batman[x], css, "");
    }

    (function playAudio(){
      var audio = document.createElement('audio');
      audio.src = "http://www.televisiontunes.com/uploads/audio/Batman%20-%201966%20TV.mp3";
      audio.play();
    })();
  }

})();
