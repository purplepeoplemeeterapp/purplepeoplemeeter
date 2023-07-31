/* Copyright 2023 biolithic. All rights reserved. 
variable types:
scbt...Is can be true or false
scbt...Show can be 1 or 2 or 3 (show, blur, hidden)
scbt...Arr is an array
scbtOptions is an object of viewer selected options
scbt...Ref  is a reference to a live DOM element
scbt... is a string

all DOM selector variables are arrays. Use [0] to get the 1st one/single selector
multiple element selector document.body.getElementsByTagName document.body.getElementsByClassName
multiple element selector complex document.body.querySelectorAll

elemArr = array of DOM elements selected
elem = one DOM element from a selected array
str = text string
arr = generic array
arrl = array length
chat = line of chat containing username, message, etc
obj = object
chatObj = chat object
chatObjArr = array of chat objects
username = text string like John
message = text string like hello

indexedDB = window.indexedDB

These are lower case so we dont get confused in selectors
channelid
serviceid
videoid

*/
if ( window.hasOwnProperty('scbtOptions') ) {  } else { window.scbtOptions = {}; }
if ( window.scbtOptions.hasOwnProperty('scbtBorderColor') ) {  } else { window.scbtOptions.scbtBorderColor = '#ff0000'; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature4') ) {  } else { window.scbtOptions.scbtfeature4 = false; }
if ( window.scbtOptions.hasOwnProperty('scbtfeature5') ) {  } else { window.scbtOptions.scbtfeature5 = false; }

if ( window.hasOwnProperty('scbtchannelid') ) {  } else { window.scbtchannelid = null; }
if ( window.hasOwnProperty('scbtserviceid') ) {  } else { window.scbtserviceid = null; }
if ( window.hasOwnProperty('scbtvideoid') ) {  } else { window.scbtvideoid = null; }

if ( window.hasOwnProperty('scbtCurrentURL') ) {  } else { window.scbtCurrentURL = null; }
if ( window.hasOwnProperty('scbtDbName') ) {  } else { window.scbtDbName = null; }
if ( window.hasOwnProperty('scbtDbNameToSearch') ) {  } else { window.scbtDbNameToSearch = null; }
if ( window.hasOwnProperty('scbtFileName') ) {  } else { window.scbtFileName = null; }
if ( window.hasOwnProperty('scbtFontSize') ) {  } else { window.scbtFontSize = null; }
if ( window.hasOwnProperty('scbtFontUp') ) {  } else { window.scbtFontUp = null; }
if ( window.hasOwnProperty('scbtHeightSize') ) {  } else { window.scbtHeightSize = null; }
if ( window.hasOwnProperty('scbtSearchChat') ) {  } else { window.scbtSearchChat = null; }

if ( window.hasOwnProperty('scbtFullScreenHeightIs') ) {  } else { window.scbtFullScreenHeightIs = false; }
if ( window.hasOwnProperty('scbtFullScreenWidthIs') ) {  } else { window.scbtFullScreenWidthIs = false; }
if ( window.hasOwnProperty('scbtMobileIs') ) {  } else { window.scbtMobileIs = false; }
if ( window.hasOwnProperty('scbtSearchBarActiveIs') ) {  } else { window.scbtSearchBarActiveIs = false; }
if ( window.hasOwnProperty('scbtVODIs') ) {  } else { window.scbtVODIs = false; }
if ( window.hasOwnProperty('scbtVODLoadedIs') ) {  } else { window.scbtVODLoadedIs = false; }
if ( window.hasOwnProperty('scbtVODCommentsLoadedIs') ) {  } else { window.scbtVODCommentsLoadedIs = false; }
if ( window.hasOwnProperty('scbtKeybindOnIs') ) {  } else { window.scbtKeybindOnIs = false; }

if ( window.hasOwnProperty('scbtNonBotChatShow') ) {  } else { window.scbtNonBotChatShow = 1; }
if ( window.hasOwnProperty('scbtSubChatShow') ) {  } else { window.scbtSubChatShow = 1; }
if ( window.hasOwnProperty('scbtTextOnlyChatShow') ) {  } else { window.scbtTextOnlyChatShow = 1; }
if ( window.hasOwnProperty('scbtVerifiedChatShow') ) {  } else { window.scbtVerifiedChatShow = 1; }
if ( window.hasOwnProperty('scbtVisibilityChatShow') ) {  } else { window.scbtVisibilityChatShow = 1; }

if ( window.hasOwnProperty('scbtjsonSocialMediaArr') ) {  } else { window.scbtjsonSocialMediaArr = []; }
if ( window.hasOwnProperty('scbtSavingChatIdsArr') ) {  } else { window.scbtSavingChatIdsArr = []; }
if ( window.hasOwnProperty('scbtBlockedWordsArr') ) {  } else { window.scbtBlockedWordsArr = []; }
if ( window.hasOwnProperty('scbtSpokenWordsArr') ) {  } else { window.scbtSpokenWordsArr = []; }
if ( window.hasOwnProperty('scbtSavedStreamsArr') ) {  } else { window.scbtSavedStreamsArr = []; }
if ( window.hasOwnProperty('scbtSearchingMessageIdsArr') ) {  } else { window.scbtSearchingMessageIdsArr = []; }
if ( window.hasOwnProperty('scbtUsernamesArr') ) {  } else { window.scbtUsernamesArr = []; }
if ( window.hasOwnProperty('scbtFollowedChannelsArr') ) {  } else { window.scbtFollowedChannelsArr = []; }

if ( window.hasOwnProperty('scbtVODSecondsTotal') ) {  } else { window.scbtVODSecondsTotal = 1; }
if ( window.hasOwnProperty('scbtVODMinutesLong') ) {  } else { window.scbtVODMinutesLong = 1; }
if ( window.hasOwnProperty('scbtVODSecondsLong') ) {  } else { window.scbtVODSecondsLong = 1; }

// *** OPTIONS FUNCTIONS
function scbt_helper_save_options() {
  var obj = {};

  // THEME
  var x = document.body.getElementsByClassName('scbttheme1'); // background color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme1'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme1': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme1': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme2'); // user name color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme2'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme2': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme2': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme3'); // highlighted chat color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme3'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme3': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme3': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme4'); // message color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme4'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme4': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme4': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme5'); // font size
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme5'; obj.b = '';
      if (e.target.value) {
        obj.b = e.target.value;
        chrome.storage.sync.set({'scbttheme5': e.target.value }, function() { scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme5': '' }, function() { scbt_helper_apply_css_from_option(obj) })
      }
    });
  }

  x = document.body.getElementsByClassName('scbttheme6'); // text only chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbttheme6'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbttheme6': true}, function() { window.scbtOptions.scbttheme6 = true; scbt_helper_apply_css_from_option(obj) })
      } else {
        chrome.storage.sync.set({'scbttheme6': false}, function() { window.scbtOptions.scbttheme6 = false; scbt_helper_apply_css_from_option(obj) })
      }
    });
  }
  


  // HIGHLIGHT
  x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted1': e.target.value }, function() { window.scbtOptions.scbthighlighted1 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted1': '' }, function() { window.scbtOptions.scbthighlighted1 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted2': e.target.value }, function() { window.scbtOptions.scbthighlighted2 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted2': '' }, function() { window.scbtOptions.scbthighlighted2 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted3': e.target.value }, function() { window.scbtOptions.scbthighlighted3 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted3': '' }, function() { window.scbtOptions.scbthighlighted3 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted4': e.target.value }, function() { window.scbtOptions.scbthighlighted4 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted4': '' }, function() { window.scbtOptions.scbthighlighted4 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted5'); // highlight VIP messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted5': e.target.value }, function() {  window.scbtOptions.scbthighlighted5 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted5': '' }, function() { window.scbtOptions.scbthighlighted5 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted6': e.target.value }, function() { window.scbtOptions.scbthighlighted6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted6': '' }, function() { window.scbtOptions.scbthighlighted6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted7': e.target.value }, function() { window.scbtOptions.scbthighlighted7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted7': '' }, function() { window.scbtOptions.scbthighlighted7 = ''; })
      }
    });
  }


  x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted8': e.target.value }, function() { window.scbtOptions.scbthighlighted8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted8': '' }, function() { window.scbtOptions.scbthighlighted8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted9': e.target.value }, function() { window.scbtOptions.scbthighlighted9 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted9': '' }, function() { window.scbtOptions.scbthighlighted9 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted10': e.target.value }, function() { window.scbtOptions.scbthighlighted10 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted10': '' }, function() { window.scbtOptions.scbthighlighted10 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthighlighted11': e.target.value }, function() { window.scbtOptions.scbthighlighted11 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthighlighted11': '' }, function() { window.scbtOptions.scbthighlighted11 = ''; })
      }
    });
  }





  
  // MUTE
  x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted1': true}, function() { window.scbtOptions.scbtmuted1 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted1': false}, function() { window.scbtOptions.scbtmuted1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted2': true}, function() { window.scbtOptions.scbtmuted2 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted2': false}, function() { window.scbtOptions.scbtmuted2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted3': true}, function() { window.scbtOptions.scbtmuted3 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted3': false}, function() { window.scbtOptions.scbtmuted3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted4': true}, function() { window.scbtOptions.scbtmuted4 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted4': false}, function() { window.scbtOptions.scbtmuted4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted5': true}, function() { window.scbtOptions.scbtmuted5 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted5': false}, function() { window.scbtOptions.scbtmuted5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtmuted6': true}, function() { window.scbtOptions.scbtmuted6 = true; })
      } else {
        chrome.storage.sync.set({'scbtmuted6': false}, function() { window.scbtOptions.scbtmuted6 = false; })
      }
    });
  }

  // HIDDEN
  x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden1': true}, function() { window.scbtOptions.scbthidden1 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden1': false}, function() { window.scbtOptions.scbthidden1 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden2': true}, function() { window.scbtOptions.scbthidden2 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden2': false}, function() { window.scbtOptions.scbthidden2 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden3': true}, function() { window.scbtOptions.scbthidden3 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden3': false}, function() { window.scbtOptions.scbthidden3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden4': true}, function() { window.scbtOptions.scbthidden4 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden4': false}, function() { window.scbtOptions.scbthidden4 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden5': true}, function() { window.scbtOptions.scbthidden5 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden5': false}, function() { window.scbtOptions.scbthidden5 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden6': true}, function() { window.scbtOptions.scbthidden6 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden6': false}, function() { window.scbtOptions.scbthidden6 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden7': e.target.value }, function() { window.scbtOptions.scbthidden7 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden7': '' }, function() { window.scbtOptions.scbthidden7 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbthidden8': e.target.value }, function() { window.scbtOptions.scbthidden8 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbthidden8': '' }, function() { window.scbtOptions.scbthidden8 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden9': true}, function() { window.scbtOptions.scbthidden9 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden9': false}, function() { window.scbtOptions.scbthidden9 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden10': true}, function() { window.scbtOptions.scbthidden10 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden10': false}, function() { window.scbtOptions.scbthidden10 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden11': true}, function() { window.scbtOptions.scbthidden11 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden11': false}, function() { window.scbtOptions.scbthidden11 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden12': true}, function() { window.scbtOptions.scbthidden12 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden12': false}, function() { window.scbtOptions.scbthidden12 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden13': true}, function() { window.scbtOptions.scbthidden13 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden13': false}, function() { window.scbtOptions.scbthidden13 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden14': true}, function() { window.scbtOptions.scbthidden14 = true; })
      } else {
        chrome.storage.sync.set({'scbthidden14': false}, function() { window.scbtOptions.scbthidden14 = false; })
      }
    });
  }


// parental
  var x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden15': true}, function() { localStorage.setItem("scbthidden15", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden15': false}, function() { localStorage.setItem("scbthidden15", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden16': true}, function() { localStorage.setItem("scbthidden16", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden16': false}, function() { localStorage.setItem("scbthidden16", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden17': true}, function() { localStorage.setItem("scbthidden17", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden17': false}, function() { localStorage.setItem("scbthidden17", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden18': true}, function() { localStorage.setItem("scbthidden18", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden18': false}, function() { localStorage.setItem("scbthidden18", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden19': true}, function() { localStorage.setItem("scbthidden19", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden19': false}, function() { localStorage.setItem("scbthidden19", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden20': true}, function() { localStorage.setItem("scbthidden20", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden20': false}, function() { localStorage.setItem("scbthidden20", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden21': true}, function() { localStorage.setItem("scbthidden21", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden21': false}, function() { localStorage.setItem("scbthidden21", "0"); });
      }
    });
  }

  x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbthidden22': true}, function() { localStorage.setItem("scbthidden22", "1"); });
      } else {
        chrome.storage.sync.set({'scbthidden22': false}, function() { localStorage.setItem("scbthidden22", "0"); });
      }
    });
  }



  // FEATURE
  x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature1': true}, function() { window.scbtOptions.scbtfeature1 = true; window.scbtKeybindOnIs = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature1': false}, function() { window.scbtOptions.scbtfeature1 = false; window.scbtKeybindOnIs = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature2': true}, function() { window.scbtOptions.scbtfeature2 = true; scbt_helper_options_turn_on_keybinds(); window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature2': false}, function() { window.scbtOptions.scbtfeature2 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature3': true}, function() { window.scbtOptions.scbtfeature3 = true; })
      } else {
        chrome.storage.sync.set({'scbtfeature3': false}, function() { window.scbtOptions.scbtfeature3 = false; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature4': true}, function() { window.scbtOptions.scbtfeature4 = true; window.location.reload(); })
      } else {
        chrome.storage.sync.set({'scbtfeature4': false}, function() { window.scbtOptions.scbtfeature4 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature5': true}, function() { window.scbtOptions.scbtfeature5 = true; scbt_helper_chat_auto_show(); })
      } else {
        chrome.storage.sync.set({'scbtfeature5': false}, function() { window.scbtOptions.scbtfeature5 = false; window.location.reload(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature6'); // API key
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature6': e.target.value }, function() { window.scbtOptions.scbtfeature6 = e.target.value })
      } else {
        chrome.storage.sync.set({'scbtfeature6': '' }, function() { window.scbtOptions.scbtfeature6 = ''; })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature7'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature7': true}, function() { window.scbtOptions.scbtfeature7 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature7': false}, function() { window.scbtOptions.scbtfeature7 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }


  x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature8'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature8': true}, function() { window.scbtOptions.scbtfeature8 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature8': false}, function() { window.scbtOptions.scbtfeature8 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat 
  if (x[0]) {
    x[0].addEventListener('change', e => {
      obj.a = 'scbtfeature9'; obj.b = false;
      if (e.target.checked) {
        obj.b = true;
        chrome.storage.sync.set({'scbtfeature9': true}, function() { window.scbtOptions.scbtfeature9 = true; scbt_helper_apply_css_from_option(obj); })
      } else {
        chrome.storage.sync.set({'scbtfeature9': false}, function() { window.scbtOptions.scbtfeature9 = false; scbt_helper_apply_css_from_option(obj); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature10': true}, function() { window.scbtOptions.scbtfeature10 = true; scbt_add_listener_for_at_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature10': false}, function() { window.scbtOptions.scbtfeature10 = false; scbt_remove_listener_for_at_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.checked) {
        chrome.storage.sync.set({'scbtfeature11': true}, function() { window.scbtOptions.scbtfeature11 = true; scbt_add_listener_for_press_chat_to_mention_menu(); })
      } else {
        chrome.storage.sync.set({'scbtfeature11': false}, function() { window.scbtOptions.scbtfeature11 = false; scbt_remove_listener_for_press_chat_to_mention_menu(); })
      }
    });
  }

  x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
  if (x[0]) {
    x[0].addEventListener('change', e => {
      if (e.target.value) {
        chrome.storage.sync.set({'scbtfeature12': e.target.value }, function() { window.scbtOptions.scbtfeature12 = e.target.value; });
      } else {
        chrome.storage.sync.set({'scbtfeature12': '' }, function() { window.scbtOptions.scbtfeature12 = ''; });
      }
    });
  }

  return false;
}



function scbt_helper_get_options() {
  chrome.storage.sync.get(null, function(items) {
    var allKeys = Object.keys(items);

    if (items.scbttheme1) {
      x = document.body.getElementsByClassName('scbttheme1'); // background color
      if (x[0]) {
        x[0].value = items.scbttheme1;
        window.scbtOptions.scbttheme1 = items.scbttheme1;
        var obj  = {};
        obj.a = 'scbttheme1';
        obj.b = items.scbttheme1;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme1 = '';
      }
    }

    if (items.scbttheme2) {
      x = document.body.getElementsByClassName('scbttheme2');  // username color
      if (x[0]) {
        x[0].value = items.scbttheme2;
        window.scbtOptions.scbttheme2 = items.scbttheme2;
        var obj  = {};
        obj.a = 'scbttheme2';
        obj.b = items.scbttheme2;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme2 = '';
      }
    }

    if (items.scbttheme3) {
      x = document.body.getElementsByClassName('scbttheme3'); // highlight color
      if (x[0]) {
        x[0].value = items.scbttheme3;
        window.scbtOptions.scbttheme3 = items.scbttheme3;
        var obj  = {};
        obj.a = 'scbttheme3';
        obj.b = items.scbttheme3;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme3 = '';
      }
    }

    if (items.scbttheme4) {
      x = document.body.getElementsByClassName('scbttheme4'); // message color
      if (x[0]) {
        x[0].value = items.scbttheme4;
        window.scbtOptions.scbttheme4 = items.scbttheme4;
        var obj  = {};
        obj.a = 'scbttheme4';
        obj.b = items.scbttheme4;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme4 = '';
      }
    }

    if (items.scbttheme5) {
      x = document.body.getElementsByClassName('scbttheme5'); // font size
      if (x[0]) {
        x[0].value = items.scbttheme5;
        window.scbtOptions.scbttheme5 = items.scbttheme5;
        var obj  = {};
        obj.a = 'scbttheme5';
        obj.b = items.scbttheme5;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].value = '';
        window.scbtOptions.scbttheme5 = '';
      }
    }

    if (items.scbttheme6) {
      x = document.body.getElementsByClassName('scbttheme6'); // TEXT ONLY
      if (x[0]) {
        x[0].checked = items.scbttheme6;
        window.scbtOptions.scbttheme6 = items.scbttheme6;
        var obj  = {};
        obj.a = 'scbttheme6';
        obj.b = items.scbttheme6;
        if (items.scbttheme6 === true) {
          scbt_helper_apply_css_from_option(obj);
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbttheme6 = false;
      }
    }

    if (items.scbthighlighted1) {
      x = document.body.getElementsByClassName('scbthighlighted1'); // highlight sub messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted1;
        window.scbtOptions.scbthighlighted1 = items.scbthighlighted1;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted1 = '';
      }
    }

    if (items.scbthighlighted2) {
      x = document.body.getElementsByClassName('scbthighlighted2'); // highlight moderator messages
      if (x[0]) {
        x[0].value = items.scbthighlighted2;
        window.scbtOptions.scbthighlighted2 = items.scbthighlighted2;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted2 = '';
      }
    }

    if (items.scbthighlighted3) {
      x = document.body.getElementsByClassName('scbthighlighted3'); // highlight @ mention messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted3;
        window.scbtOptions.scbthighlighted3 = items.scbthighlighted3;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted3 = '';
      }
    }

    if (items.scbthighlighted4) {
      x = document.body.getElementsByClassName('scbthighlighted4'); // highlight hashtag messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted4;
        window.scbtOptions.scbthighlighted4 = items.scbthighlighted4;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted4 = '';
      }
    }

    if (items.scbthighlighted5) {
      x = document.body.getElementsByClassName('scbthighlighted5');  // highlight VIP messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted5;
        window.scbtOptions.scbthighlighted5 = items.scbthighlighted5;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted5 = '';
      }
    }

    if (items.scbthighlighted6) {
      x = document.body.getElementsByClassName('scbthighlighted6'); // personal VIP List
      if (x[0]) {
        x[0].value = items.scbthighlighted6;
        window.scbtOptions.scbthighlighted6 = items.scbthighlighted6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted6 = '';
      }
    }

    if (items.scbthighlighted7) {
      x = document.body.getElementsByClassName('scbthighlighted7'); // highlight these words in chat
      if (x[0]) {
        x[0].value = items.scbthighlighted7;
        window.scbtOptions.scbthighlighted7 = items.scbthighlighted7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted7 = '';
      }
    }

    if (items.scbthighlighted8) {
      x = document.body.getElementsByClassName('scbthighlighted8'); // highlight founder messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted8;
        window.scbtOptions.scbthighlighted8 = items.scbthighlighted8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted8 = '';
      }
    }

    if (items.scbthighlighted9) {
      x = document.body.getElementsByClassName('scbthighlighted9'); // highlight OG messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted9;
        window.scbtOptions.scbthighlighted9 = items.scbthighlighted9;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted9 = '';
      }
    }

    if (items.scbthighlighted10) {
      x = document.body.getElementsByClassName('scbthighlighted10'); // highlight owner messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted10;
        window.scbtOptions.scbthighlighted10 = items.scbthighlighted10;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted10 = '';
      }
    }

    if (items.scbthighlighted11) {
      x = document.body.getElementsByClassName('scbthighlighted11'); // highlight gifter messages color
      if (x[0]) {
        x[0].value = items.scbthighlighted11;
        window.scbtOptions.scbthighlighted11 = items.scbthighlighted11;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthighlighted11 = '';
      }
    }




    if (items.scbtmuted1) {
      x = document.body.getElementsByClassName('scbtmuted1'); // mute non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbtmuted1;
        window.scbtOptions.scbtmuted1 = items.scbtmuted1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted1 = false;
      }
    }

    if (items.scbtmuted2) {
      x = document.body.getElementsByClassName('scbtmuted2'); // mute owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbtmuted2;
        window.scbtOptions.scbtmuted2 = items.scbtmuted2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted2 = false;
      }
    }

    if (items.scbtmuted3) {
      x = document.body.getElementsByClassName('scbtmuted3'); // mute @ mention messages
      if (x[0]) {
        x[0].checked = items.scbtmuted3;
        window.scbtOptions.scbtmuted3 = items.scbtmuted3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted3 = false;
      }
    }

    if (items.scbtmuted4) {
      x = document.body.getElementsByClassName('scbtmuted4'); // mute bot messages/commands
      if (x[0]) {
        x[0].checked = items.scbtmuted4;
        window.scbtOptions.scbtmuted4 = items.scbtmuted4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted4 = false;
      }
    }

    if (items.scbtmuted5) {
      x = document.body.getElementsByClassName('scbtmuted5'); // mute follow alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted5;
        window.scbtOptions.scbtmuted5 = items.scbtmuted5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted5 = false;
      }
    }

    if (items.scbtmuted6) {
      x = document.body.getElementsByClassName('scbtmuted6'); // mute subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbtmuted6;
        window.scbtOptions.scbtmuted6 = items.scbtmuted6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtmuted6 = false;
      }
    }


    if (items.scbthidden1) {
      x = document.body.getElementsByClassName('scbthidden1'); // hide non moderator/sub messages
      if (x[0]) {
        x[0].checked = items.scbthidden1;
        window.scbtOptions.scbthidden1 = items.scbthidden1;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden1 = false;
      }
    }

    if (items.scbthidden2) {
      x = document.body.getElementsByClassName('scbthidden2'); // hide owner/streamer messages
      if (x[0]) {
        x[0].checked = items.scbthidden2;
        window.scbtOptions.scbthidden2 = items.scbthidden2;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden2 = false;
      }
    }

    if (items.scbthidden3) {
      x = document.body.getElementsByClassName('scbthidden3'); // hide @ mention messages
      if (x[0]) {
        x[0].checked = items.scbthidden3;
        window.scbtOptions.scbthidden3 = items.scbthidden3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden3 = false;
      }
    }

    if (items.scbthidden4) {
      x = document.body.getElementsByClassName('scbthidden4'); // Hide bot/command messages
      if (x[0]) {
        x[0].checked = items.scbthidden4;
        window.scbtOptions.scbthidden4 = items.scbthidden4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden4 = false;
      }
    }

    if (items.scbthidden5) {
      x = document.body.getElementsByClassName('scbthidden5'); // hide follow alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden5;
        window.scbtOptions.scbthidden5 = items.scbthidden5;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden5 = false;
      }
    }

    if (items.scbthidden6) {
      x = document.body.getElementsByClassName('scbthidden6'); // hide subscribe alert messages
      if (x[0]) {
        x[0].checked = items.scbthidden6;
        window.scbtOptions.scbthidden6 = items.scbthidden6;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden6 = false;
      }
    }

    if (items.scbthidden7) {
      x = document.body.getElementsByClassName('scbthidden7'); // hide these words in chat.
      if (x[0]) {
        x[0].value = items.scbthidden7;
        window.scbtOptions.scbthidden7 = items.scbthidden7;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden7 = '';
      }
    }

    if (items.scbthidden8) {
      x = document.body.getElementsByClassName('scbthidden8'); // hide chats from these usernames
      if (x[0]) {
        x[0].value = items.scbthidden8;
        window.scbtOptions.scbthidden8 = items.scbthidden8;
      } else {
        x[0].value = '';
        window.scbtOptions.scbthidden8 = '';
      }
    }

    if (items.scbthidden9) {
      x = document.body.getElementsByClassName('scbthidden9'); // hide website links in chat
      if (x[0]) {
        x[0].checked = items.scbthidden9;
        window.scbtOptions.scbthidden9 = items.scbthidden9;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden9 = false;
      }
    }

    if (items.scbthidden10) {
      x = document.body.getElementsByClassName('scbthidden10'); // hide usernames on screen chat
      if (x[0]) {
        x[0].checked = items.scbthidden10;
        window.scbtOptions.scbthidden10 = items.scbthidden10;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden10 = false;
      }
    }

    if (items.scbthidden11) {
      x = document.body.getElementsByClassName('scbthidden11'); // hide sexual or body words in chat.
      if (x[0]) {
        x[0].checked = items.scbthidden11;
        window.scbtOptions.scbthidden11 = items.scbthidden11;
        scbt_helper_get_sexual_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden11 = false;
      }
    }

    if (items.scbthidden12) {
      x = document.body.getElementsByClassName('scbthidden12'); // hide profanity in chat
      if (x[0]) {
        x[0].checked = items.scbthidden12;
        window.scbtOptions.scbthidden12 = items.scbthidden12;
        scbt_helper_get_profanity_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden12 = false;
      }
    }

    if (items.scbthidden13) {
      x = document.body.getElementsByClassName('scbthidden13'); // hide USA political words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden13;
        window.scbtOptions.scbthidden13 = items.scbthidden13;
        scbt_helper_get_political_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden13 = false;
      }
    }

    if (items.scbthidden14) {
      x = document.body.getElementsByClassName('scbthidden14'); // hide negative words in chat
      if (x[0]) {
        x[0].checked = items.scbthidden14;
        window.scbtOptions.scbthidden14 = items.scbthidden14;
        scbt_helper_get_negative_json();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbthidden14 = false;
      }
    }



    // parental features
    if (items.scbthidden15) {
      x = document.body.getElementsByClassName('scbthidden15'); // hide other-tv-shows-movies category
      if (x[0]) {
        x[0].checked = items.scbthidden15;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden16) {
      x = document.body.getElementsByClassName('scbthidden16'); // hide just-sleeping category
      if (x[0]) {
        x[0].checked = items.scbthidden16;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden17) {
      x = document.body.getElementsByClassName('scbthidden17'); // hide asmr category
      if (x[0]) {
        x[0].checked = items.scbthidden17;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden18) {
      x = document.body.getElementsByClassName('scbthidden18'); // hide body-art category
      if (x[0]) {
        x[0].checked = items.scbthidden18;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden19) {
      x = document.body.getElementsByClassName('scbthidden19'); // hide gambling category
      if (x[0]) {
        x[0].checked = items.scbthidden19;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden20) {
      x = document.body.getElementsByClassName('scbthidden20'); // hide pools-hot-tubs-bikinis category
      if (x[0]) {
        x[0].checked = items.scbthidden20;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }

    if (items.scbthidden21) {
      x = document.body.getElementsByClassName('scbthidden21'); // hide just-chatting category
      if (x[0]) {
        x[0].checked = items.scbthidden21;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }


    if (items.scbthidden22) {
      x = document.body.getElementsByClassName('scbthidden22'); // hide marked 18+ tag videos
      if (x[0]) {
        x[0].checked = items.scbthidden22;
        if (items.scbthidden15 === true) {
          localStorage.setItem('scbthidden15', '1');
        } else {
          localStorage.setItem('scbthidden15', '0');
        }
      } else {
        x[0].checked = false;
        localStorage.setItem('scbthidden15', '0');
      }
    }





    if (items.scbtfeature1) {
      x = document.body.getElementsByClassName('scbtfeature1'); // turn on basic keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature1;
        window.scbtOptions.scbtfeature1 = items.scbtfeature1;
        if (items.scbtfeature1 === true) {
          window.scbtKeybindOnIs = true;
        } else {
          window.scbtKeybindOnIs = false;
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature1 = false;
        window.scbtKeybindOnIs = false;
      }
    }

    if (items.scbtfeature2) {
      x = document.body.getElementsByClassName('scbtfeature2'); // turn on full keybinds
      if (x[0]) {
        x[0].checked = items.scbtfeature2;
        window.scbtOptions.scbtfeature2 = items.scbtfeature2;
        if (items.scbtfeature2 === true) {
          scbt_helper_options_turn_on_keybinds();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature2 = false;
      }
    }

    if (items.scbtfeature3) {
      x = document.body.getElementsByClassName('scbtfeature3'); // turn on voice commands
      if (x[0]) {
        x[0].checked = items.scbtfeature3;
        window.scbtOptions.scbtfeature3 = items.scbtfeature3;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature3 = false;
      }
    }

    if (items.scbtfeature4) {
      x = document.body.getElementsByClassName('scbtfeature4'); // turn on auto-saving of chat
      if (x[0]) {
        x[0].checked = items.scbtfeature4;
        window.scbtOptions.scbtfeature4 = items.scbtfeature4;
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature4 = false;
      }
    }

    if (items.scbtfeature5) {
      x = document.body.getElementsByClassName('scbtfeature5'); // turn on auto-showing of chat on screen
      if (x[0]) {
        x[0].checked = items.scbtfeature5;
        window.scbtOptions.scbtfeature5 = items.scbtfeature5;
        scbt_helper_chat_auto_show();
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature5 = false;
      }
    }

    if (items.scbtfeature6) {
      x = document.body.getElementsByClassName('scbtfeature6'); // API key
      if (x[0]) {
        x[0].value = items.scbtfeature6;
        window.scbtOptions.scbtfeature6 = items.scbtfeature6;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature6 = '';
      }
    }

    if (items.scbtfeature7) {
      x = document.body.getElementsByClassName('scbtfeature7'); // left handed chat 
      if (x[0]) {
        x[0].checked = items.scbtfeature7;
        window.scbtOptions.scbtfeature7 = items.scbtfeature7;
        var obj  = {};
        obj.a = 'scbtfeature7';
        obj.b = items.scbtfeature7;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature7 = false;
      }
    }

    if (items.scbtfeature8) {
      x = document.body.getElementsByClassName('scbtfeature8'); // upside down chat
      if (x[0]) {
        x[0].checked = items.scbtfeature8;
        window.scbtOptions.scbtfeature8 = items.scbtfeature8;
        var obj  = {};
        obj.a = 'scbtfeature8';
        obj.b = items.scbtfeature8;
        scbt_helper_apply_css_from_option(obj);
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature8 = false;
      }
    }

    if (items.scbtfeature9) {
      x = document.body.getElementsByClassName('scbtfeature9'); // mouseover enlarge chat
      if (x[0]) {
        x[0].checked = items.scbtfeature9;
        window.scbtOptions.scbtfeature9 = items.scbtfeature9;
        if (items.scbtfeature9) {
          var obj = {};
          obj.a = 'scbtfeature9';
          obj.b = true;
          scbt_helper_apply_css_from_option(obj);  
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature9 = false;
      }
    }

    if (items.scbtfeature10) {
      x = document.body.getElementsByClassName('scbtfeature10'); // turn on press @ in chat
      if (x[0]) {
        x[0].checked = items.scbtfeature10;
        window.scbtOptions.scbtfeature10 = items.scbtfeature10;
        if (items.scbtfeature10 === true) {
          scbt_add_listener_for_at_mention_menu();
        } else {
          scbt_remove_listener_for_at_mention_menu();
        }

      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature10 = false;
        scbt_remove_listener_for_at_mention_menu();
      }
    }

    if (items.scbtfeature11) {
      x = document.body.getElementsByClassName('scbtfeature11'); // press on chat messages to mention
      if (x[0]) {
        x[0].checked = items.scbtfeature11;
        window.scbtOptions.scbtfeature11 = items.scbtfeature11;
        if (items.scbtfeature11 === true) {
          scbt_add_listener_for_press_chat_to_mention_menu();
        } else {
          scbt_remove_listener_for_press_chat_to_mention_menu();
        }
      } else {
        x[0].checked = false;
        window.scbtOptions.scbtfeature11 = false;
        scbt_remove_listener_for_press_chat_to_mention_menu();
      }
    }

    if (items.scbtfeature12) {
      x = document.body.getElementsByClassName('scbtfeature12'); // speak chat list
      if (x[0]) {
        x[0].value = items.scbtfeature12;
        window.scbtOptions.scbtfeature12 = items.scbtfeature12;
      } else {
        x[0].value = '';
        window.scbtOptions.scbtfeature12 = '';
      }
    }


    if (window.scbtvideoid && window.scbtVODIs === false) {
        var chatElmArr = scbt_get_arr_chats(); 
        [].forEach.call(chatElmArr, function(chatElm) {
           scbt_helper_process_chat_line(chatElm, false);
        });
        scbt_helper_chat_listen();
    }

    x = items = chatElmArr = chatElm = null;
  });
  return false;
}



// ***** DB FUNCTIONS
// done
async function scbt_get_binary_if_db_exists(dbName) {
  var dbFound = false;
  if (dbName) { } else { return dbFound; }
  var arr = await indexedDB.databases();
  if (arr.length > 0) { } else { return dbFound; }

  var arrl = arr.length;
  dbName = dbName.toLowerCase().trim();
  for (var i = 0; i < arrl && !dbFound; i++) {
    var dbNameToCheck = arr[i].name;
    if (arr[i].name) {
      dbNameToCheck = arr[i].name.toLowerCase().trim();
    }
    if (dbNameToCheck === dbName) {
      dbFound = true;
    }
  }
  dbName = arr = arrl = i = dbNameToCheck = null; return dbFound;
}


// done
function scbt_get_arr_of_all_dbnames() {
  window.scbtSavedStreamsArr = [];
  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      window.scbtChatPreviousContentRef.innerHTML = '';
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          var dbArr = scbt_get_arr_from_dbname_string(dbName); // scbt_get_arr_from_dbname_string
          var obj = {};
          obj.dbName = dbName;
          obj.serviceid = dbArr[1];
          obj.channelid = dbArr[2];
          obj.videoid = dbArr[3];
          window.scbtSavedStreamsArr.push(obj);
        }
      }
      scbt_handler_sort_saved_streams_by_serviceid();
    }
  });
}


// done here
function scbt_helper_build_chat_by_dbname_string(dbName) {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function(successObj) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function(completeObj) {
      console.log('oncomplete')
    };
    transaction.onabort = function(abortObj) {
      scbt_set_db_error_message(transaction.error); return false;
    };
    
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(successAllObj) {
      if (!successAllObj) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 failed.'); }, 2700);  return false; }
      if (!successAllObj.target) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream e2 target result failed.'); }, 2700);  return false; }
      if (!successAllObj.target.result.length || successAllObj.target.result.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: build chat for live stream not found.'); }, 2700);  return false; }
      
      window.scbtDbNameToSearch = dbName;
      var chatObjs = successAllObj.target.result;
      window.scbtChatContentRef.innerHTML = '';
      window.scbtChatARef.textContent = 'Saved Chat From ' + chatObjs[0].username + ' on ' + chatObjs[0].message;
      window.scbtChatBRef.textContent = '';
      chatObjs = scbt_get_arr_sortedtimes_from_arr(chatObjs);
      [].forEach.call(chatObjs, function(chatObj) {
        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        scbt_user_chat_down_to_bottom();
      }, 2000);
    };
    store.getAll().onerror = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };
    store.getAll().onblocked = function(errorAllObj) {
      scbt_set_db_error_message(errorAllObj);
       return false;
    };

  }; // request.onsuccess
  request.onerror = function(errorObj) {
    scbt_set_db_error_message(errorObj);
     return false;
  };
  request.onblocked = function(errorObj) {
    scbt_set_db_error_message(errorObj);
    return false;
  };
}


function scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr) {

  return new Promise((resolve, reject) => {
    var request = indexedDB.open(dbName, 10);

    request.onupgradeneeded = function() {
      if (!request.result) {
        scbt_set_db_error_message(e); 
        return e;
      }
      var store = request.result.createObjectStore('chat', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('itemid', 'itemid', {unique: true});
      store.createIndex('timestamp', 'timestamp', {unique: false});
      store.createIndex('username', 'username', {unique: false});
      store.createIndex('message', 'message', {unique: false});
      store.createIndex('sub', 'sub', {unique: false});
      store.createIndex('moderator', 'moderator', {unique: false});
      store.createIndex('owner', 'owner', {unique: false});
      store.createIndex('donation', 'donation', {unique: false});
      store.createIndex('newSub', 'newSub', {unique: false});
      store.createIndex('verified', 'verified', {unique: false});
      store.createIndex('gifter', 'gifter', {unique: false});
      store.createIndex('founder', 'founder', {unique: false});
      store.createIndex('og', 'og', {unique: false});
      store.createIndex('staff', 'staff', {unique: false});
      store.createIndex('anevent', 'anevent', {unique: false});
      store.transaction.oncomplete = (eee) => {
        resolve('good');
      }
    };

    request.onsuccess = function() {
      var db = request.result;
      var transaction = db.transaction('chat', 'readwrite', { durability: 'relaxed' } );
      var objectStore = transaction.objectStore('chat');
      [].forEach.call(chatObjArr, function(chatObj) {
        objectStore.put(chatObj);
      });
      transaction.commit();
    };

  });
}


function scbt_user_chat_delete_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e) { e.preventDefault(); }
  
  window.scbtSearchingMessageIdsArr = [];
  setTimeout(function(){
    var request = indexedDB.deleteDatabase(e.srcElement.dataset.dbname);
    request.onsuccess = function(e2) {
      setTimeout(function(){ scbt_helper_toast('Status: Chat messages from this stream successfully deleted'); scbt_get_arr_of_all_dbnames(); }, 4000);
      e = e2 =dbName = request = error = null; return false;
    }
    request.onerror = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
    request.onblocked = function(error) {
      scbt_set_db_error_message(error);
      e = e2 =dbName = request = error = null; return false;
    };
   }, 1000);
}


function scbt_user_chat_mark_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e) { e.preventDefault(); }

  var str = localStorage.getItem(window.location.href);
  if (str) {
    localStorage.removeItem(window.location.href);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video will NOT load this livestream chat automatically.'); return false; }, 2700);
  } else {
    localStorage.setItem(window.location.href, e.srcElement.dataset.dbname);
    setTimeout(function(){ scbt_helper_toast('Status: Loading this video WILL load this livestream chat automatically.'); return false; }, 2700);
  }
}


function scbt_user_chat_export_by_videoid(e) {
  if (e) { } else { return false; }
  if (e.srcElement) { } else { return false; }
  if (e.srcElement.dataset) { } else { return false; }
  if (e.srcElement.dataset.dbname) { } else { return false; }
  if (e) { e.preventDefault(); }
  
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(e.srcElement.dataset.dbname, 10);

  request.onsuccess = function(e2) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
      setTimeout(function(){ scbt_helper_toast('Error: get database result for chat export result failed.'); }, 2700); return false;
    };
    var store = transaction.objectStore('chat'); 
    
    store.getAll().onsuccess = function(e3) {
      var chatObjArr = e3.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700); return false; }
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      var output = [];
      var titles = 'initial, message, itemid, timestamp, username, sub, moderator, owner, donation, newSub, VIP, gifter, founder, og, staff, anevent, id';
      output.push(titles);
      output.push('\n');
      
      [].forEach.call(chatObjArr, function(chatObj) {
          var row = '';
          var str = '';
          var str2 = '';
          var username = chatObj.username;
          if (username) {
            str = username.replace(/[^a-zA-Z0-9!._\-@\s]/g, ' ');
            str = str.replace(/(\r\n|\n|\r)/gm, "");
            str = str.replaceAll(',', ' ');
            str = str.trim();
          }
          var message = chatObj.message;
          if (message) {
            // message = message.replace(/[^a-zA-Z0-9!._\-@\s]/g, ' ');
            str2 = message.replace(/\/‘’,‚“”„"`~«´<>/g, ' ');
            str2 = str2.replace(/(\r\n|\n|\r)/gm, "");
            str2 = str2.replaceAll(',', ' ');
            str2 = str2.trim();  
          }
          row = row + str2 + ',';
          row = row + chatObj.itemid + ',';
          row = row + chatObj.timestamp + ',';
          row = row + str + ',';
          row = row + chatObj.sub + ',';
          row = row + chatObj.moderator + ',';
          row = row + chatObj.owner + ',';
          row = row + chatObj.donation + ',';
          row = row + chatObj.newSub + ',';
          row = row + chatObj.verified + ',';
          row = row + chatObj.gifter + ',';
          row = row + chatObj.founder + ',';
          row = row + chatObj.og + ',';
          row = row + chatObj.staff + ',';
          row = row + chatObj.anevent + ',';
          row = row + chatObj.id;
          output.push(row);
          output.push('\n');
      });
    
      var csvString = output.join();
      var output = null;
      csvString = csvString.replace(/\/'"`/g, '');
      csvString = csvString.replace(/%3D/g, '');
      var blob = scbt_get_csv_file_from_str(csvString);
      var csvName = e.srcElement.dataset.dbname + '&' + new Date().toISOString().slice(0, 10) + '-chatlog.csv';
      scbt_helper_csv_download(blob, csvName);
      return false;
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  };

  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}


function scbt_get_usernames_for_mention_menu(e) {
  window.scbtSearchingMessageIdsArr = [];
  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(e) {
    if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result for mention chat failed.'); }, 2700); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {
      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 for mention chat failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target for mention chat failed.'); }, 2700);  return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database result e2 target result for mention chat failed.'); }, 2700); return false; }

      var chatObjArr = e2.target.result;
      if (chatObjArr.length < 1) { setTimeout(function(){ scbt_helper_toast('Error: this stream chat not found for display'); }, 2700);  return false; }
      var sortedchats = chatObjArr.sort(function(a, b) {
        var nameA = a.username;
        if (nameA) {
          nameA = nameA.toUpperCase();
        }
        var nameB = b.username;
        if (nameB) {
          nameB = nameB.toUpperCase();
        }
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      var i = 0;
      [].forEach.call(sortedchats, function(item) {
          var theHTML = '';
          if ( window.usernamesArr.indexOf(item.username) < 0) {
            theHTML = theHTML + "<li><button class='scbtusername' id='scbtusername" + i + "' tabindex='0'>" + item.username + "</button></li>";
            i = i + 1;
            window.usernamesArr.push(item.username);
            var elemArr = window.scbtMentionMenuRef.getElementsByTagName('ul');
            if (elemArr[0]) {
              elemArr[0].insertAdjacentHTML('afterbegin', theHTML );
            }
          }
      });
       return false;      
    };
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
       return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  
}


function scbt_user_search_multiple_saved_chat(e) {  
  if (e) {
    // if ( e.preventDefault ) { e.preventDefault(); }
  }
  var str = scbt_get_str_for_search();

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = t + ' beginning a message is being searched for';
    toastMessage2 = t + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    toastMessage = ' stream event search ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }
  if (str.length < 3) {  return false; }
  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);  
  window.scbtSavedStreamsArr = [];

  indexedDB.databases().then((arr) => {
    if (arr.length > 0) {
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var dbName = arr[i].name;
        if (dbName.startsWith('savedchat') ) {
          window.scbtSavedStreamsArr.push(dbName);
            
          (async () => {
            var request = await indexedDB.open(dbName, 10);
            request.onsuccess = function(e) {
              if (!request.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat result failed.'); }, 2700);  return false; }
              window.scbtSearchingMessageIdsArr = [];
              var db = request.result;
              var transaction = db.transaction('chat', 'readonly');
              transaction.oncomplete = function() {
              };
              transaction.onabort = function() {
                scbt_set_db_error_message(transaction.error);
              };
              var store = transaction.objectStore('chat'); 
              // (async () => {
              store.getAll().onsuccess = function(e2) {
                if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 failed.'); }, 2700);  return false; }
                if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target failed.'); }, 2700);  return false; }
                if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for multiple search chat e2 target result failed.'); }, 2700);  return false; }
                var chatObjArr = e2.target.result;
                if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display');  return false; }
                window.scbtChatARef.textContent = 'Saved Chat From All'; // + channelid + ' on ' + serviceid + ' ' + theDate
                window.scbtChatBRef.textContent = labelMessage;
                chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
                window.scbtChatWrapperRef.classList.add('scbt-bl');

                if (searchType == 'bykeyword') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'byuser') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.username) {
                      if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                if (searchType == 'full') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                    window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                  });
                }

                if (searchType == 'startswith') {
                  [].forEach.call(chatObjArr, function(chatObj) {
                    if (chatObj.message) {
                      if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
                        var theHTML = scbt_helper_build_chat_line_from_obj(chatObj, chatObjArr[0]);
                        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
                      }
                    }
                  });
                }

                setTimeout(function() {
                  scbt_add_listener_for_username_insert_into_search();
                  scbt_add_listener_for_click_timestamp_go_to_video();
                  scbt_user_chat_down_to_bottom();
                }, 2000);
            };
            store.getAll().onerror = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
            store.getAll().onblocked = function(error2) {
              scbt_set_db_error_message(error2);
              return false;
            };
          }; // request.onsuccess
          request.onerror = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
          request.onblocked = function(error) {
            scbt_set_db_error_message(error);
            return false;
          };
      })(); // async

        }
      }
    }
  }); // indexedDB.databases().then
return false;
}


function scbt_user_search_saved_chat(e) {
  window.scbtSearchingMessageIdsArr = [];
  if (e) {
    if ( e.preventDefault ) { e.preventDefault(); }
  }
  if (window.scbtDbNameToSearch) { } else { setTimeout(function(){ scbt_helper_toast('Error: no active or loaded chat to search.'); }, 500); return false; }

  var str = scbt_get_str_for_search();
  if (e.target.classList) {
    if (e.target.classList.contains('scbt-multiple') ) {
      if (e.target.id == 'scbtChatSearchStartsWithButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchUserButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
      if (e.target.id == 'scbtChatSearchKeywordButton') {
        scbt_user_search_multiple_saved_chat(e);
        return false;
      }
    }
  }

  searchType = '';
  toastMessage = 'Searching...';
  toastMessage2 = '';
  labelMessage = ''; 
  if (e.target.id == 'scbtChatSearchStartsWithButton') {
    searchType = 'startswith';
    toastMessage = str + ' beginning a message is being searched for';
    toastMessage2 = str + ' not found starting message';
    labelMessage = ' chat starting with: ' + str;
  }
  if (e.target.id == 'scbtChatSearchUserButton') {
    searchType = 'byuser';
    toastMessage = ' messages from ' + str + ' being searched for ';
    toastMessage2 = str + ' username has no saved chat messages';
    labelMessage = ' chat from username: ' + str;
  }
  if (e.target.id == 'scbtChatSearchKeywordButton') {
    searchType = 'bykeyword';
    toastMessage = str + ' in a message is being searched for ';
    toastMessage2 = str + ' not found in chat';
    labelMessage = ' chat by phrase: ' + str;
  }
  if (e.target.id == 'scbtChatSearchEventsButton') {
    searchType = 'byevent';
    str = 'test';
    toastMessage = ' stream events ';
    toastMessage2 = ' events not found ';
    labelMessage = ' stream events';
  }
  if (e.target.id == 'scbtChatSearchFullButton') {
    searchType = 'full';
    str = 'test';
    toastMessage = ' full chat search ';
    toastMessage2 = ' chat not found ';
    labelMessage = ' full stream chat';
  }

  if (str.length < 3) { return false; }

  window.scbtChatContentRef.innerHTML = '';
  scbt_helper_toast(toastMessage);
  var request = indexedDB.open(window.scbtDbNameToSearch, 10);

  request.onsuccess = function(e) {
    if (!request.result) { scbt_helper_toast('Error: get database for live stream chat failed.'); return false; }
    var db = request.result;
    var transaction = db.transaction('chat', 'readonly');
    transaction.oncomplete = function() {
      
    };
    transaction.onabort = function() {
      scbt_set_db_error_message(transaction.error);
    };
    var store = transaction.objectStore('chat'); 
    store.getAll().onsuccess = function(e2) {
      
      if (!e2) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 failed.'); }, 2700); return false; }
      if (!e2.target) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target failed.'); }, 2700); return false; }
      if (!e2.target.result) { setTimeout(function(){ scbt_helper_toast('Error: get database for search chat e2 target result failed.'); }, 2700);  return false; }
      var chatObjArr = e2.target.result;
      if (chatObjArr.length < 1) { scbt_helper_toast('Error: this stream chat not found for display'); return false; }

      var dbArr = scbt_get_arr_from_dbname_string(window.scbtDbNameToSearch);
      window.scbtChatContentRef.innerHTML = '';
      chatObjArr = scbt_get_arr_sortedtimes_from_arr(chatObjArr);
      window.scbtChatARef.textContent = dbArr[2] + ' on ' + dbArr[1] + ': ' + chatObjArr[0].message;
      window.scbtChatBRef.textContent = labelMessage;
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      
      if (searchType == 'byevent') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if ( (chatObj.anevent == 1) || (chatObj.staff === 1) ) {
            var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);
/*              
anevent: 1
donation: 0
founder: 0
gifter: 0
id: 238
itemid: 1688922450366
message: "Group Situation\nClipped by Balerion25 img https://clips.kick.com/clips/0b87b2d6-cb47-4b20-a7b7-e242ee33e600-thumbnail.jpeg"
moderator: 0
newSub: 0
og: 0
owner: 0
staff: 0
sub: 0
timestamp: "10:07AM"
username: "Balerion25"
verified: 0
window.scbtChatBRef.textContent = dbArr[2] + ' on ' + dbArr[1] + ' ' + chatObjArr[0].message;
*/
          if (chatObj.message) {
            if (chatObj.message.indexOf('clips.kick.com') > -1) {
              var m = chatObj.message;
              var mArr = m.split('-thumbnail.jpeg');
              var mString = mArr[0];
              var mmArr = mString.split('https://clips.kick.com/clips/');
              var clipID = mmArr[1];
              var mArr = m.split('img ');
              var imgElm = mArr[0] + "<br /><video class='vjs-tech' webkit-playsinline='' playsinline='' controls src='https://clips.kick.com/clips/" + clipID + ".mp4'></video>";
              var theHTML = "<p class='" + classString + "'><span>" + "<span class='author-name'>" + chatObj.username + "</span></span><b>" + imgElm + "</b></p>";
            } else {
              var theHTML = "<p class='" + classString + "'><span>" + " : <span class='author-name'>" + chatObj.username + "</span> </span><b>" + chatObj.message + "</b></p>";
            }
          }
          window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);  
          }
        });
      }

// .toLowerCase().includes(someString.toLowerCase() )
      if (searchType == 'bykeyword') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'byuser') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.username) {
            if (chatObj.username.toLowerCase().includes(str.toLowerCase() ) ) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      if (searchType == 'full') {
        [].forEach.call(chatObjArr, function(chatObj) {
          var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
          window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
        });
      }

      if (searchType == 'startswith') {
        [].forEach.call(chatObjArr, function(chatObj) {
          if (chatObj.message) {
            if (chatObj.message.toLowerCase().indexOf(str.toLowerCase()) == 0) {
              var theHTML = scbt_helper_build_chat_line_from_obj(chatObj);
              window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
            }
          }
        });
      }

      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        scbt_user_chat_down_to_bottom();
      }, 2000);

    }; // store.getAll().onsuccess
    store.getAll().onerror = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
    store.getAll().onblocked = function(error2) {
      scbt_set_db_error_message(error2);
      return false;
    };
  }; // request.onsuccess
  request.onerror = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };
  request.onblocked = function(error) {
    scbt_set_db_error_message(error);
    return false;
  };

}


// done
function scbt_set_db_for_saving(dbName, startSaving) {
  if (!dbName) { 
    console.error('Error: chat database not supported');
    setTimeout(function(){ scbt_helper_toast('Error: chat database not supported'); }, 2700);
    return false;
  }
  var request = indexedDB.open(dbName, 10);

  request.onsuccess = function (successObj) {
   if (startSaving == 'startSaving') {
    scbt_helper_chat_listen();
   }
   return request;
  };
  request.onerror = function (errorObj) {
    scbt_set_db_error_message(errorObj);
    return errorObj;
  };
  request.onblocked = function (blockedObj) {
    scbt_set_db_error_message(blockedObj);
    return blockedObj;
  };
  request.onupgradeneeded = function(upgradeObj) {
    if (!request.result) {
      scbt_set_db_error_message(upgradeObj); 
      return upgradeObj;
    }
    var store = request.result.createObjectStore('chat', {
      keyPath: 'id',
      autoIncrement: true,
    });

    store.createIndex('itemid', 'itemid', {unique: true});
    store.createIndex('timestamp', 'timestamp', {unique: false});
    store.createIndex('username', 'username', {unique: false});
    store.createIndex('message', 'message', {unique: false});
    store.createIndex('sub', 'sub', {unique: false});
    store.createIndex('moderator', 'moderator', {unique: false});
    store.createIndex('owner', 'owner', {unique: false});
    store.createIndex('donation', 'donation', {unique: false});
    store.createIndex('newSub', 'newSub', {unique: false});
    store.createIndex('verified', 'verified', {unique: false});
    store.createIndex('gifter', 'gifter', {unique: false});
    store.createIndex('founder', 'founder', {unique: false});
    store.createIndex('og', 'og', {unique: false});
    store.createIndex('staff', 'staff', {unique: false});
    store.createIndex('anevent', 'anevent', {unique: false});

    store.transaction.oncomplete = (completeObj) => {
      request.result.close();
      var obj = {};
      obj.anevent = 0;
      obj.donation = 0;
      obj.founder = 0;
      obj.gifter = 0;
      obj.itemid = '1111';
      obj.mention = 0;
      obj.message = new Date().toISOString().slice(0, 10);
      obj.moderator = 0;
      obj.newSub = 0;
      obj.og = 0;
      obj.owner = 0;
      obj.staff = 0;
      obj.sub = 0;
      obj.timestamp = '00:00AM';
      obj.username = window.scbtchannelid;
      obj.verified = 0;
      scbt_set_db_save_chat_obj(obj);
      return false;
    }
  };
}

// done
function scbt_set_db_save_chat_obj(obj) {

  var request = indexedDB.open(window.scbtDbName, 10);
  request.onsuccess = function(successObj) {
    var db = successObj.target.result;
    var transaction = db.transaction('chat', 'readwrite');
    transaction.oncomplete = function(completeObj) {
    };
    transaction.onabort = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    transaction.onerror = function(errorObj) {
      scbt_set_db_error_message(errorObj);
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
    var store = transaction.objectStore('chat');
    store.add(obj).onsuccess = function(addObj) {
      scbt_helper_chat_listen();
      db = request = obj = successObj = completeObj = errorObj = addObj = null; return false;
    };
  };
}


// done
function scbt_get_str_dbname(startSaving) {
  if (window.scbtDbName) {
    return window.scbtDbName;
  } else {
    
    var videoEl = scbt_get_arr_video_elem();
    var chatboxEl = scbt_get_arr_chatbox_elem();
    if (
      (videoEl.length > 0) && 
      (chatboxEl.length > 0) && 
      window.scbtserviceid && window.scbtchannelid && window.scbtvideoid
    ){
      
      chrome.storage.sync.get('scbtfeature4', function (option) {
        if (option) {
          if (option.scbtfeature4 === true) {
            window.scbtOptions.scbtfeature4 = true;
            window.scbtDbName = 'savedchat' + '&' + window.scbtserviceid + '&' + window.scbtchannelid + '&' + window.scbtvideoid;
            window.scbtDbNameToSearch = window.scbtDbName;
            scbt_set_db_for_saving(window.scbtDbName, startSaving);
            return window.scbtDbName;
          }
        }
      });

    } else { 
      return false;
    }
  }
}




// ************* CSV export/import functions
// done
function scbt_get_csv_file_from_str(str) {
  if (str) {
    var csv_mime_type = 'text/csv';
    return new Blob([str], {type: csv_mime_type});
  }
}


function scbt_helper_csv_download(blob, filename) {
  if (blob && filename) {
    var a = document.createElement('a');
    a.setAttribute('download', filename);
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.click();
    URL.revokeObjectURL(url);
  }
  blob = null; filename = null; a = null; url = null; return false;
}


function scbt_helper_csv_import_chat_log_from_chatarr(filename, chatArr) {
  scbt_helper_toast('Status: starting to import chat');
  window.scbtSearchingMessageIdsArr = [];
  if (filename && chatArr) { } else { setTimeout(function(){ scbt_helper_toast('Error: chat not found to import'); }, 2700); return false; }

  var fileNameArr = filename.split('-chatlog');
  fileNameArr = fileNameArr[0];
  var fileNamePartsArr = fileNameArr.split('&');
  var one = fileNamePartsArr[0];    // savedchat
  var two = fileNamePartsArr[1];    // kick
  var three = fileNamePartsArr[2];  // streamer
  var four = fileNamePartsArr[3];   // abc123
  // var five = fileNamePartsArr[4];  // 2021-11-12
  var dbName = one + '&' + two + '&' + three + '&' + four;
    
  if (chatArr.length > 1) {
    var chatObj = {};
    var chatObjArr = [];
    chatArr = chatArr.slice(1);
    var arrl = chatArr.length;
    for (var i = 0; i < arrl; i++) {
      if (chatArr[i][1]) {
        chatArr[i] = chatArr[i].slice(1);
        chatObj.message = chatArr[i][0];
        chatObj.itemid = chatArr[i][1];
        chatObj.timestamp = chatArr[i][2];
        chatObj.username = chatArr[i][3];
        chatObj.sub = Number(chatArr[i][4]);
        chatObj.moderator = Number(chatArr[i][5]);
        chatObj.owner = Number(chatArr[i][6]);
        chatObj.donation = Number(chatArr[i][7]);
        chatObj.newSub = Number(chatArr[i][8]);
        chatObj.verified = Number(chatArr[i][9]);
        chatObj.gifter = Number(chatArr[i][10]);
        chatObj.founder = Number(chatArr[i][11]);
        chatObj.og = Number(chatArr[i][12]);
        chatObj.staff = Number(chatArr[i][13]);
        chatObj.anevent = Number(chatArr[i][14]);
        chatObjArr.push(chatObj);
        chatObj = {};
      }
    }

    scbt_helper_save_bulk_chat_from_dbName_arr(dbName, chatObjArr);
    return false;
  }
  
}


function scbt_helper_csv_parse_chat_log(data) {
  var chatLineArr = [];
  if (data) {
    var newLinebrk = data.split("\n");
    var arrl = newLinebrk.length;
    for (var i = 0; i < arrl; i++) {
      chatLineArr.push(newLinebrk[i].split(','));
    }

    scbt_helper_csv_import_chat_log_from_chatarr(window.scbtFileName, chatLineArr);
  }
  data = chatLineArr = newLinebrk = arrl = null; return false;
}


function scbt_add_listener_for_uploading_chatlog(e) {
  window.scbtChatLogRef.addEventListener('change', function(e2) {
    if (this.files && this.files[0]) {
      var myFile = this.files[0];
      if (myFile.name.substring(myFile.name.length - 11) != 'chatlog.csv') {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( (myFile.size < 8) || (myFile.size > 100000000) ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      if ( myFile.type != 'text/csv' ) {
        setTimeout(function(){ scbt_helper_toast('Error: file not supported to import'); return false; }, 2700);
      }
      window.scbtFileName = myFile.name;
      var reader = new FileReader();
      reader.addEventListener('load', function(e3) {
        var csvdata = e3.target.result;
        scbt_helper_csv_parse_chat_log(csvdata);
      });
      reader.readAsBinaryString(myFile);
    }
  });
}


// ************** Voice functions
function scbt_helper_chat_speak(str) {
  if (str) {
      var strMatch = str.toLowerCase().trim();
      var arr = window.scbtOptions.scbtfeature12.split(',');
      var arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var str2 = arr[i];
        var str2Match = str2.toLowerCase().trim();
        if ( strMatch.includes(str2Match) ) {
          if ( window.scbtSpokenWordsArr.includes(str) ) {  } else {
            window.scbtSpokenWordsArr.push(str);
            var synth = window.speechSynthesis;
            var voices = synth.getVoices();
            var utterance = new SpeechSynthesisUtterance(t);
            utterance.voice = voices[0];
            synth.speak(utterance);
            utterance.addEventListener('start', e => {
              console.log('speak start of ' + str);
            });
            utterance.addEventListener('end', e => {
              console.log('speak end of ' + str);
              str = strMatch = arr = arrl = i = str2 = strMatch = synth = voices = null; return false;
            });
          }
        }
      }
  }
}

function scbt_user_turn_off_voice_commands() {
  window.recognition = null;
  window.SpeechRecognition = null;
  window.SpeechGrammarList = null;
  window.SpeechRecognitionEvent = null;
  return false;
}


function scbt_user_turn_on_voice_commands() {
      window.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
      // var recognition = new SpeechRecognition();
      window.recognition.continuous = true;
      window.recognition.lang = 'en-US';
      window.recognition.interimResults = false;
      window.recognition.maxAlternatives = 1;
      window.recognition.start();

      window.recognition.onresult = function(e) {
        if (e) {
          var str = e.results[e.results.length - 1][0].transcript;
          if (str) {
            str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
            str = str.trim();
            str = str.toLowerCase();
            
            if (str == 'computer toggle chat') {
              scbt_user_command1();
              return false;
            }
            if (str == 'computer search chat') {
              scbt_user_command2();
              return false;
            }
            if (str == 'computer search all chat') {
              scbt_user_command4();
              return false;
            }
            if (str == 'computer chat top') {
              scbt_user_chat_up_to_top();
              return false;
            }
            if (str == 'computer chat bottom') {
              scbt_user_chat_down_to_bottom();
              return false;
            }
          }
        }
      }

      window.recognition.onspeechend = function(e) {
        // console.log('onspeechend speech');
        window.recognition.stop();
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
      }

      window.recognition.onnomatch = function(e) {
        // console.log('onnomatch speech');
      }

      window.recognition.onerror = function(e) {
        // console.log('on speech error');
        // console.log(e);
        sctb_turn_off_voice_commands();
        sctb_turn_on_voice_commands();
        return false;
      }
}



// ************** API functions
function scbt_helper_get_sexual_json() {
  var url = chrome.runtime.getURL('./sexualterms.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'sexualterms') );
}

function scbt_helper_get_profanity_json() {
  var url = chrome.runtime.getURL('./profanity.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'profanity') );
}

function scbt_helper_get_political_json() {
  var url = chrome.runtime.getURL('./political.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'political') );
}

function scbt_helper_get_negative_json() {
  var url = chrome.runtime.getURL('./negative.json');
  fetch(url)
  .then((response) => response.json())
  .then((json) => scbt_helper_save_word_list(json, 'negative') );
}

function scbt_helper_save_word_list(json, listType) {
  if (listType == 'sexualterms') {
    window.scbtOptions.sexualterms = json;
    if (window.scbtOptions.sexualterms && typeof window.scbtOptions.sexualterms == 'object') {
        Object.entries(window.scbtOptions.sexualterms).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'profanity') {
    window.scbtOptions.profanity = json;
    if (window.scbtOptions.profanity && typeof window.scbtOptions.profanity == 'object') {
      Object.entries(window.scbtOptions.profanity).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'political') {
    window.scbtOptions.political = json;
    if (window.scbtOptions.political && typeof window.scbtOptions.political == 'object') {
      Object.entries(window.scbtOptions.political).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  if (listType == 'negative') {
    window.scbtOptions.negative = json;
    if (window.scbtOptions.negative && typeof window.scbtOptions.negative == 'object') {
      Object.entries(window.scbtOptions.negative).forEach((entry) => {
        window.scbtBlockedWordsArr.push(entry[1]);
      });
    }
  }
  var json = listType = entry = null; return false;
}


async function scbt_user_search_for_saved_chat() {
  var str = localStorage.getItem(window.location.href);
  if (str) {
    var dbExists = await scbt_get_binary_if_db_exists(str);
    console.log('dbExists for localstorage is: ' + dbExists);
    if (dbExists === true) {
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      e.srcElement.dataset.dbname = str;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }
  }

  var str = 'savedchat' + '&' + scbt_get_str_serviceid() + '&' + scbt_get_str_channelid() + '&' + scbt_get_str_videoid();
  var dbExists = await scbt_get_binary_if_db_exists(str);
  if (dbExists === true) {
    var e = {};
    e.srcElement = {};
    e.srcElement.dataset = {};
    e.srcElement.dataset.dbname = str;
  }

  var str = scbt_get_str_serviceid();
  var str2 = scbt_get_str_channelid();
  var str3 = scbt_get_str_videoid();
  scbt_helper_load_chat_replay_from_api(str, str2, str3);
  return false;
}


function scbt_helper_load_chat_replay_from_api(serviceid, channelid, videoid) {
  fetch('https://www.streameranalytics.com/v1/api/' + serviceid + '/' + channelid + '/upload/list.json',
  {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
  })
  .then(function(res){ if (res.ok) { return res.json(); } else { return Promise.reject(res.status); } })
  .then(function(resp){ 
  if ( (resp == null || resp.length === 0) || (isNaN(resp) == false) ) { console.log('api error1'); console.log( resp ); } else {
    if (resp == 'error') {
      console.log('api error2'); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
    } else {

      if (typeof resp === 'object') {
        if (resp.data) {
          var arr = resp.data;
          var arrl = arr.length;
          for (var i = 0; i < arrl; i++) {
            if (arr[i].videoid) {
              if (arr[i].videoid == videoid) {
                scbt_helper_get_chat_for_replay_from_api(serviceid, channelid, videoid, arr[i].chatlog);
                serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
              }
            }
          }
        }
      } else {
        console.log('api error3'); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
      }

      }
    }
  })
  .catch(err => {
     console.log('api error4'); serviceid = channelid = videoid = res = arr = arrl = arr2 = resp = null; return false;
  });
}


function scbt_helper_get_chat_for_replay_from_api(serviceid, channelid, videoid, chatlog) {
   var response = fetch('https://www.streameranalytics.com/v1/api/' + serviceid + '/' + channelid + '/upload/uploads/' + chatlog)
    .then(response => response.text())
    .then(v => Papa.parse(v))
    .catch(err => console.log(err))
    response.then(v => scbt_helper_populate_chat_for_replay(v))
  return false;
}


function scbt_helper_populate_chat_for_replay(resp) {
  if (typeof resp === 'object') {
    if (resp.data) {
      var chatArr = resp.data;

      if (window.scbtMobileIs === true) {
        window.scbtSideMenuRef.classList.add('scbt-fl');
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
      }
      window.scbtOptionsMenuRef.classList.remove('scbt-bl');
      window.scbtChatWrapperRef.classList.add('scbt-bl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
      // window.scbtChatContentRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');  
      window.scbtSearchBarActiveIs = true;

      window.scbtChatContentRef.innerHTML = '';
      window.scbtChatARef.textContent = 'Saved Chat From ' + chatArr[1][4] + ' on ' + chatArr[1][1];
      window.scbtChatBRef.textContent = '';
      // chatObjs = scbt_get_arr_sortedtimes_from_arr(chatObjs);
    
      [].forEach.call(chatArr, function(chatLine) {
        var theHTML = scbt_helper_build_chat_line_from_arr(chatLine);
        window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
      });
      setTimeout(function() {
        scbt_add_listener_for_username_insert_into_search();
        scbt_add_listener_for_click_timestamp_go_to_video();
        scbt_user_chat_down_to_bottom();
      }, 2000);
    }
  }

  return false;
}


function scbt_helper_get_menu(app, element, thefile, firstTime) {
    var elemArr = document.body.getElementsByClassName(element);
    if (elemArr[0]) { return false }

    var url = chrome.runtime.getURL(thefile);
    fetch(url)
    .then((response) => response.text())
    .then((html) => {

      app.insertAdjacentHTML('afterbegin', html );
      var elemArr = [];

      if (element == 'scbtSideMenu') {
        
        elemArr = document.body.getElementsByClassName('scbtSideMenu');
        if (elemArr[0]) { 
          window.scbtSideMenuRef = elemArr[0];
        }

        elemArr = document.body.getElementsByClassName('scbtChatToggleMenu');
        if (elemArr[0]) { 
          window.scbtChatToggleMenuRef = elemArr[0];
        }

        elemArr = document.body.getElementsByClassName('scbt0');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chat_filter_menu); }

        elemArr = document.body.getElementsByClassName('scbt2');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_options_menu); }

        elemArr = document.body.getElementsByClassName('scbt4');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt5');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt6');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt7');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt8');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt9');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt10');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_non_bot); }

        elemArr = document.body.getElementsByClassName('scbt11');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt12');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_toggle_chats); }

        elemArr = document.body.getElementsByClassName('scbt13');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_text_only); }

        elemArr = document.body.getElementsByClassName('scbt14');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_up_to_top); }

        elemArr = document.body.getElementsByClassName('scbt15');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_down_to_bottom); }

        elemArr = document.body.getElementsByClassName('scbt16');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_full_screen_width); }

        elemArr = document.body.getElementsByClassName('scbt17');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_full_screen_video_height_chat); }

        elemArr = document.body.getElementsByClassName('scbt20');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_chat_font_size); }

        elemArr = document.body.getElementsByClassName('scbt22');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbt23');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbt24');
        if (elemArr[0]) {  elemArr[0].addEventListener('click', scbt_user_search_for_saved_chat); }

        return window.scbtSideMenuRef;
      } // if (element == 'scbtSideMenu') {


      if (element == 'scbtChatWrapper') {
        elemArr = document.body.getElementsByClassName('scbtChatWrapper');
        if (elemArr[0]) { window.scbtChatWrapperRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtCloseButton');
        if (elemArr[0]) { window.scbtCloseButtonRef = elemArr[0]; window.scbtCloseButtonRef.addEventListener('click', scbt_user_search_chat_toggle); }

        elemArr = document.body.getElementsByClassName('scbtChatA');
        if (elemArr[0]) { window.scbtChatARef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatB');
        if (elemArr[0]) { window.scbtChatBRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatTitle');
        if (elemArr[0]) { window.scbtChatTitleRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtChatContent');
        if (elemArr[0]) { window.scbtChatContentRef = elemArr[0]; }
        
        return window.scbtChatWrapperRef;
      }

      if (element == 'scbtChatMenu') {
        elemArr = document.body.getElementsByClassName('scbtChatMenu');
        if (elemArr[0]) { window.scbtChatMenuRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
        if (elemArr[0]) { window.scbtChatSearchInputTextRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatSearchStartsWithButton');
        if (elemArr[0]) { window.scbtChatSearchStartsWithButtonRef = elemArr[0]; window.scbtChatSearchStartsWithButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchUserButton');
        if (elemArr[0]) { window.scbtChatSearchUserButtonRef = elemArr[0]; window.scbtChatSearchUserButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchKeywordButton');
        if (elemArr[0]) { window.scbtChatSearchKeywordButtonRef = elemArr[0]; window.scbtChatSearchKeywordButtonRef.addEventListener('click', scbt_user_search_saved_chat); }

        elemArr = document.body.getElementsByClassName('scbtChatSearchEventsButton');
        if (elemArr[0]) { window.scbtChatSearchEventsButtonRef = elemArr[0]; window.scbtChatSearchEventsButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        
        elemArr = document.body.getElementsByClassName('scbtChatSearchFullButton');
        if (elemArr[0]) { window.scbtChatSearchFullButtonRef = elemArr[0]; window.scbtChatSearchFullButtonRef.addEventListener('click', scbt_user_search_saved_chat); }
        return window.scbtChatMenuRef;
      }


      if (element == 'scbtOptionsMenu') {
        
        elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
        if (elemArr[0]) { window.scbtOptionsMenuRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousTitle');
        if (elemArr[0]) { window.scbtChatPreviousTitleRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousWrapper');
        if (elemArr[0]) { window.scbtChatPreviousWrapperRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtOptionsTitle');
        if (elemArr[0]) { window.scbtOptionsTitleRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtOptionsWrapper');
        if (elemArr[0]) { window.scbtOptionsWrapperRef = elemArr[0]; }
        
        elemArr = document.body.getElementsByClassName('scbtChatLog');
        if (elemArr[0]) { window.scbtChatLogRef = elemArr[0]; }

        elemArr = document.body.getElementsByClassName('scbtChatPreviousContent');
        if (elemArr[0]) { window.scbtChatPreviousContentRef = elemArr[0]; }
        
        elem3Arr = document.body.getElementsByClassName('scbt2');
        if (elem3Arr[0]) { elem3Arr[0].classList.add('lawngreen'); }

        scbt_user_toggle_chat_menu();
        setTimeout(function() {
          if (elem3Arr[0]) { elem3Arr[0].classList.remove('lawngreen'); }
          scbt_user_toggle_chat_menu();
        }, 2500);

        scbt_helper_save_options();
        scbt_helper_get_options(firstTime);
        scbt_add_listener_for_uploading_chatlog();
        scbt_add_listener_for_options_menu();
        
        elemArr = elem2Arr = arrl = elem2 = i = xx = app = element = thefile = firstTime = html = null;
        return window.scbtOptionsMenuRef;
      } // if (element == 'scbtOptionsMenu') {

      }).catch((error) => {
        console.log('error');
        console.error(error);
        return true;
      });
} // end scbt_helper_get_menu





// *************** Build functions
// done
function scbt_helper_build_chat_line_from_obj(chatObj, chatObjFirst) {
  var classString = scbt_get_str_for_chat_classes_from_obj(chatObj);
  if (chatObjFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span>" + chatObjFirst.username + ' stream on ' + chatObjFirst.message + "<br><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatObj.timestamp + "</span> : <span class='scbt-chat-username'>" + chatObj.username + "</span> <b class='scbt-chat-message'>" +  chatObj.message + "</b></p>";
  }
  return theHTML;
}


function scbt_helper_build_chat_line_from_arr(chatArr, chatArrFirst) {
  var classString = scbt_get_str_for_chat_classes_from_arr(chatArr);
  if (chatArrFirst) {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span>" + chatArrFirst[3] + ' stream on ' + chatArrFirst[3] + "<br><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  } else {
    var theHTML = "<p class='scbt-chat-line " + classString + "'><span class='scbt-chat-timestamp'>" + chatArr[3] + "</span> : <span class='scbt-chat-username'>" + chatArr[4] + "</span> <b class='scbt-chat-message'>" +  chatArr[1] + "</b></p>";
  }
  return theHTML;
}


// done
function scbt_helper_build_list_of_saved_stream_chat_by_arr(arr) {
  var arrl = arr.length;
  for (var i = 0; i < arrl; i++) {
    var dbName = 'savedchat' + '&' + arr[i].serviceid + '&' + arr[i].channelid + '&' + arr[i].videoid;
    var theHTML = "<p>";
    theHTML = theHTML + "<span class='az2' data-serviceid='" + arr[i].serviceid + "' data-videoid='" + arr[i].videoid + "' data-channelid='" + arr[i].channelid + "'>" + arr[i].channelid + "</span> on ";
    theHTML = theHTML + arr[i].serviceid + " :<br>";
    theHTML = theHTML + "<span class='az3' data-dbname='" + dbName + "'>" + arr[i].videoid + "</span><br>";
    theHTML = theHTML + "<span class='az4' data-dbname='" + dbName + "'>💾</span><br>";
    theHTML = theHTML + "<span class='az5' data-dbname='" + dbName + "'>🗑️</span><br>";
    theHTML = theHTML + "<span class='az6' data-dbname='" + dbName + "'>🎯</span><br>";
    theHTML = theHTML + "</p>";
    window.scbtChatPreviousContentRef.insertAdjacentHTML('beforeend', theHTML);
  }
  arr = i = theHTML = null; return false;
}


function scbt_make_toast() {
  var elemArr = document.body.getElementsByClassName('scbtSnackbar');
  var body = document.getElementsByTagName('body');
  if (body[0]) {
    body = body[0];
  }
  if (elemArr[0]) { } else {
    var theHTML = '<div id="scbtSnackbar" class="scbtSnackbar"></div><div id="scbtLoading"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 44 44" stroke="#fff"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg></div>';
    body.insertAdjacentHTML('afterbegin', theHTML);
    window.scbtSnackbarRef = document.body.getElementsByClassName('scbtSnackbar')[0];
    setTimeout(function(){ scbt_helper_toast('Status: building menus'); }, 500);
  }
  elemArr = null; theHTML = null; return body;
}


// *************** commands/keybinds functions
function scbt_user_command1() {
  scbt_user_theatre_mode();
  return false; 
}

function scbt_user_command2() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  setTimeout(function() {
    if (window.scbtSearchBarActiveIs === true) {
      var e = {};
      e.target = {};
      e.target.id = 'scbtChatSearchFullButton';
      e.delay = 1;
      scbt_user_search_saved_chat(e);
    }
    e = null; return false;
  }, 2000);
}

function scbt_user_command3() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt22';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}

function scbt_user_command4() {
  if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
    window.scbtSideMenuRef.classList.remove('scbt-bl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  var e = {};
  e.target = {};
  e.target.id = 'scbt23';
  scbt_user_search_chat_toggle(e);
  e = null; return false;
}


function scbt_helper_keybind_close() {
  var elemArr = document.body.getElementsByClassName('scbt-options-wrapper');
  [].forEach.call(elemArr, function(elem) {
    elem.classList.remove('scbt-bl');
  });
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatInputRef.focus();
  elemArr = elem = null; return false;
}


function scbt_helper_options_turn_on_keybinds() {
  window.addEventListener('keydown', function(e) {

    if ( (e.keyCode == '16') && (e.altKey === true) )  {
      console.log('you pressed shift + Alt to toggle the main menu');
      e.preventDefault();
      if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
        window.scbtSideMenuRef.classList.remove('scbt-bl');
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtSideMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }

    // scbtChatToggleMenu
    if ( (e.keyCode == '90') && (e.altKey === true) )  {
      console.log('you pressed Z + Alt to toggle the scbtChatToggleMenu');
      e.preventDefault();
      if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtChatToggleMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt4')[0].focus();
        return false;
      }
    }

    // scbtOptionsMenuRef
    if ( (e.keyCode == '88') && (e.altKey === true) )  {
      console.log('you pressed Z + Alt to toggle the options menu');
      e.preventDefault();
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.getElementsByClassName('scbt0')[0].focus();
        return false;
      }
    }


    if ( (e.keyCode == '67') && (e.altKey === true) )  {
      console.log('you pressed X + Alt to toggle the options menu bring up hide menu');
      e.preventDefault();
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsHideTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsHideWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbthidden1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '86') && (e.altKey === true) )  {
      console.log('you pressed C + Alt to toggle the options menu bring up feature menu');
      e.preventDefault();
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsFeaturesTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsFeaturesWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          document.body.querySelectorAll('#scbtfeature1')[0].focus();
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '66') && (e.altKey === true) )  {
      console.log('you pressed V + Alt to toggle the options menu bring up save menu');
      e.preventDefault();
      if (window.scbtOptionsMenuRef.classList.contains('scbt-bl') ) {
        scbt_helper_keybind_close();
        window.scbtChatInputRef.focus();
        return false;
      } else {
        window.scbtOptionsMenuRef.classList.add('scbt-bl');
        document.body.querySelectorAll('#scbtOptionsSavedTitle')[0].click();
        setTimeout(function() {
          document.body.querySelectorAll('#scbtOptionsSavedWrapper')[0].scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
          return false;
        }, 1500);
      }
    }


    if ( (e.keyCode == '81') && (e.altKey === true) )  {
      console.log('you pressed Q + Alt to toggle Broadcaster Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('owner');
      return false;
    }
    if ( (e.keyCode == '87') && (e.altKey === true) )  {
      console.log('you pressed W + Alt to toggle Moderator Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('moderator');
      return false;
    }
    if ( (e.keyCode == '69') && (e.altKey === true) )  {
      console.log('you pressed E + Alt to toggle Sub Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('sub');
      return false;
    }
    if ( (e.keyCode == '82') && (e.altKey === true) )  {
      console.log('you pressed R + Alt to toggle Sub + Moderator Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('mod_sub');
      return false;
    }
    if ( (e.keyCode == '84') && (e.altKey === true) )  {
      console.log('you pressed T + Alt to toggle VIP Only');
      e.preventDefault();
      scbt_user_toggle_chats('vip');
      return false;
    }
    if ( (e.keyCode == '89') && (e.altKey === true) )  {
      console.log('you pressed Y + Alt to toggle Donation Chats Only');
      e.preventDefault();
      scbt_user_toggle_chats('donation');
      return false;
    }
    if ( (e.keyCode == '85') && (e.altKey === true) )  {
      console.log('you pressed U + Alt to toggle Mention Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('mention');
      return false;
    }
    if ( (e.keyCode == '73') && (e.altKey === true) )  {
      console.log('you pressed I + Alt to toggle Hashtag Messages Only');
      e.preventDefault();
      scbt_user_toggle_chats('hashtag');
      return false;
    }
    if ( (e.keyCode == '79') && (e.altKey === true) )  {
      console.log('you pressed O + Alt to toggle OG Messages Only'); 
      e.preventDefault();
      scbt_user_toggle_chats('og');
      return false;
    }
    if ( (e.keyCode == '80') && (e.altKey === true) )  {
      console.log('you pressed P + Alt to toggle text only chat');  // scbt13
      e.preventDefault();
      scbt_user_chat_text_only();
      return false;
    }
    if ( (e.keyCode == '219') && (e.altKey === true) )  {
      console.log('you pressed [ + Alt to  View Top of Chat'); // scbt14
      e.preventDefault();
      scbt_user_chat_up_to_top();
      return false;
    }
    if ( (e.keyCode == '221') && (e.altKey === true) )  {
      console.log('you pressed ] + Alt to  View Bottom of Chat'); // scbt15
      e.preventDefault();
      scbt_user_chat_down_to_bottom();
      return false;
    }
    if ( (e.keyCode == '220') && (e.altKey === true) )  {
      console.log('you pressed  + Alt to  Change Chat Font Size'); // scbt20
      e.preventDefault();
      scbt_user_chat_font_size();
      return false;
    }
    e = null; return false;
  });
} // end helper_turn_on_keybinds_from_options



// ****************** GET FUNCTIONS THAT RETURN A VALUE
// done 
function scbt_get_str_for_search() {
  var str = '';
  str = window.scbtChatSearchInputTextRef.value;
  if (str) {
    str = str.replace(/[^a-zA-Z0-9_\-@\s]/g, '');
    str = str.trim();
  }
  return str;
}

// done
function scbt_get_str_for_chat_classes_from_obj(obj) {
  var str = '';
  if (obj.sub === 1) {
    str = str + ' sub ';
  }
  if (obj.moderator === 1) {
    str = str + ' moderator ';
  }
  if (obj.owner === 1) {
    str = str + ' owner ';
  }
  if (obj.donation === 1) {
    str = str + ' donation ';
  }
  if (obj.newSub === 1) {
    str = str + ' newSub ';
  }
  if (obj.verified === 1) {
    str = str + ' verified vip ';
  }
  if (obj.gifter === 1) {
    str = str + ' gifter ';
  }
  if (obj.founder === 1) {
    str = str + ' founder ';
  }
  if (obj.og === 1) {
    str = str + ' og ';
  }
  if (obj.staff === 1) {
    str = str + ' staff ';
  }
  if (obj.anevent === 1) {
    str = str + ' anevent ';
  }
  obj = null; return str;
}

// done
function scbt_get_str_for_chat_classes_from_arr(arr) {
  var str = '';
  if (arr) {
    if (arr[5] == 1) {
      str = str + ' sub ';
    }
    if (arr[6] == 1) {
      str = str + ' moderator ';
    }
    if (arr[7] == 1) {
      str = str + ' owner ';
    }
    if (arr[8] == 1) {
      str = str + ' donation ';
    }
    if (arr[9] == 1) {
      str = str + ' newSub ';
    }
    if (arr[10] == 1) {
      str = str + ' verified vip ';
    }
    if (arr[11] == 1) {
      str = str + ' gifter ';
    }
    if (arr[12] == 1) {
      str = str + ' founder ';
    }
    if (arr[13] == 1) {
      str = str + ' og ';
    }
    if (arr[14] == 1) {
      str = str + ' staff ';
    }
    if (arr[15] == 1) {
      str = str + ' anevent ';
    }
  }
  arr = null; return str;
}

// done
function scbt_get_obj_cleaned_message_from_obj(obj) {
  if (obj && obj.message) {
    obj.message = obj.message.toLowerCase();
    obj.message = obj.message.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.message = obj.message.replace(/,/g, ' ');
    obj.message = obj.message.replaceAll("’", "");
    obj.message = obj.message.trim();
    if (obj.message.charAt(0) == '!') {
      obj.isBot = 1;
    }
  }
  return obj;
}

// done
function scbt_get_obj_cleaned_username_from_obj(obj) {
  if (obj && obj.username) {
    obj.username = obj.username.toLowerCase();
    obj.username = obj.username.replace(/\/‘’‚“”„"`~«´<>/g, '');
    obj.username = obj.username.replace(/,/g, ' ');
    obj.username = obj.username.replace(/:/g, '');
    obj.username = obj.username.trim();
    if ( ( obj.username.indexOf('bot') > -1 ) || ( obj.username == 'streamelements') || ( obj.username == 'streamlabs') || ( obj.username == 'tifa lockhart') ) {
      obj.isBot = 1;
    }
  }
  return obj;
}


function scbt_get_str_serviceid() {
  if (window.scbtserviceid != null) { return window.scbtserviceid; }
  var str = window.location.hostname;
  if (str) {
    str = str.replace('www.', '');
    str = str.replace('.com', '');
    str = str.replace('.tv', '');
    str = str.replace('m.', '');  
  }
  window.scbtserviceid = str; str = null; return window.scbtserviceid;
}


// done
function scbt_get_arr_video_elem() {
  var elemArr = document.body.getElementsByTagName('video');
  return elemArr;
}


// done
function scbt_get_arr_sortedtimes_from_arr(arr) {
  if (!arr) {
    return false;
  }
  if (!arr[1]) {
    return arr;
  }
  if (!arr[1].timestamp) {
    return arr;
  }
  if (typeof arr[1].timestamp === 'number') {
    return arr;
  }
  if (arr[1].timestamp.indexOf(':') < 0) {
    return arr;
  }
  return arr.sort(function (a, b) {
    if (parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]) === 0) {
      return parseInt(a.timestamp.split(':')[1]) - parseInt(b.timestamp.split(':')[1]);
    } else {
      return parseInt(a.timestamp.split(':')[0]) - parseInt(b.timestamp.split(':')[0]);
    }
  })
}


// done
function scbt_get_str_seconds_from_hour_minute_time(str) {
  str = str.replace('@', '');
  str = str.replace('.', '');
  str = str.trim();
  var p = str.split(':');
  var seconds = 0;
  var m = 1;
  while (p.length > 0) {
      seconds += m * parseInt(p.pop(), 10);
      m *= 60;
  }
  str = null; p = null; m = null;
  return seconds;
}


// done
function scbt_get_binary_role_from_chat_message(elem, parameter) {
  var toReturn = 0;

  if (parameter == 'sub') {
    if ( 
      (elem.classList.contains('sub')) || 
      (elem.querySelector('img[alt="Subscriber"]')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(0.784314%,27.843137%,11.372549%);fill-opacity:1;']")) || 
      (elem.querySelector('[data-v-9200dfef]') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'moderator') {
    if ( 
      (elem.classList.contains('moderator')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(40%,78.431373%,100%);fill-opacity:1;']")) ||
      (elem.querySelector('[data-v-c644053e]') )
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'founder') {
    if ( 
      (elem.classList.contains('founder')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(100%,68.235294%,0%);fill-opacity:1;']")) ||
      (elem.querySelector('[data-v-8bcf93d3]'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'verified') {
    if ( 
      (elem.classList.contains('verified')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(22.745098%,82.745098%,1.960784%);fill-opacity:1;']") ) ||
      (elem.querySelector("svg path[fill='#00d0ff']")) || 
      (elem.querySelector('[data-v-09641b1e]')) || 
      (elem.querySelector('[data-v-592f5460]')) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'og') {
    if ( 
      (elem.classList.contains('og')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(100%,27.058824%,27.058824%);fill-opacity:1;']")) || 
      (elem.querySelector('[data-v-ff0bb21a]'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'owner') {
    if ( 
      (elem.classList.contains('owner')) || 
      (elem.querySelector("svg g#surface1 path[style='stroke:none;fill-rule:nonzero;fill:rgb(63.921569%,30.196078%,100%);fill-opacity:1;']")) || 
      (elem.querySelector('[data-v-11d1cc91]'))
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'staff') {
    if ( 
      (elem.classList.contains('staff')) || 
      (elem.querySelector("svg g#surface1 path[d='M 8 14 L 5 11 L 7 5 L 9 5 L 11 11 Z M 8 14 ']")) || 
      (elem.querySelector('[data-v-9200dfef]')) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  if (parameter == 'gifter') {
    if ( 
       (elem.classList.contains('gifter')) || 
       (elem.querySelector("g[clip-path='url(#clip0_301_17830)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17825)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17820)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17815)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17810)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17805)']")) ||
       (elem.querySelector("g[clip-path='url(#clip0_301_17800)']")) || 
       (elem.querySelector('[data-v-fa8cab30]')) 
    ) {
      toReturn = 1;
      elem = null; parameter = null; return toReturn;
    }
  }

  elem = null; parameter = null; return toReturn;
}


// done
function scbt_get_str_military_hours_minutes_from_timestamp(timestamp) {
  timestamp = timestamp.trim(); // 10:01AM
  if (timestamp) {
    if (timestamp.indexOf('AM') > -1) {
      timestamp = timestamp.replace('AM', '');
    } else {
      timestamp = timestamp.replace('PM', '');
      var arr = timestamp.split(':');
      var hours = parseInt(arr[0]);
      hours = hours + 12;
      timestamp = hours + ':' + arr[1];
    }
  }
  arr = hours = null; return timestamp;
}


// done
function scbt_get_number_seconds_difference_from_two_timestamps(startTime, timeToCompare) {
  var diff = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
  var diff2 = Math.floor((diff/1000)/60);
  var seconds = diff2 * 60;
  diff = diff2 = null; return seconds;
}


// done
function scbt_get_arr_from_dbname_string(dbName) {
  var arr = [];
  if (typeof dbName === 'string') {
    var arr = dbName.split('&');
  }
  return arr;
}


function scbt_get_obj_filter_blocked_links_from_obj(obj, elem) {
  var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    if ( (elemArr[0].textContent.indexOf('http') > -1 ) || (elemArr[0].textContent.indexOf('.com') > -1 ) || (elemArr[0].textContent.indexOf('xxx') > -1 ) || (elemArr[0].textContent.indexOf('www.') > -1 ) ) {
      elemArr[0].textContent = '---';
      obj.message = '---';
    }
  }
  elemArr = elem = null; return obj;
}


// I do not want to see these words in chat. Comma separated list. Example: rat,mouse,vermin 
function scbt_get_obj_filter_blocked_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  // get blocked words selected by user
  if (window.scbtBlockedWordsArr.length > 0) {
    arr = window.scbtBlockedWordsArr;
  }
  if (obj.anevent == 1) {
    return obj;
  }
  
  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = elemArr[0].textContent;
    tMatch = tOriginal.toLowerCase().trim();
    arr2 = window.scbtOptions.scbthidden7.split(',');
    fullArr = arr.concat(arr2);
    arrl = fullArr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = fullArr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch.includes(t2Match) ) {
          var regexp = new RegExp(t2Match, 'gi');
          var cleaned = tOriginal.replace(regexp, ' xxx ');
          elemArr[0].textContent = cleaned;
          obj.message = cleaned;
          regexp = null; cleaned = null; 
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these words in chat in big letters. Comma separated list. Example: fun,happy
function scbt_get_obj_filter_highlighted_words_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.message;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted7.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        var t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch.includes(t2Match) ) {
            elemArr[0].style.setProperty('font-size', '3rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');  
          }
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = null; return obj;
}


// Highlight these users chats in big letters. Comma separated list. Example: johnny,sally
function scbt_get_obj_filter_vip_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;
  var elem2Arr = [];

  elemArr = elem.getElementsByClassName('chat-entry-username');
  if (elemArr[0] && elemArr[0].textContent) {
    tOriginal = obj.username;
    if (tOriginal) {
      tMatch = tOriginal.toLowerCase().trim();
      arr = window.scbtOptions.scbthighlighted6.split(',');
      arrl = arr.length;
      for (var i = 0; i < arrl; i++) {
        t2Original = arr[i];
        if (t2Original) {
          t2Match = t2Original.toLowerCase().trim();
          if ( tMatch == t2Match) {
            elemArr[0].classList.add('vip');
            obj.isHighlighted = window.scbtOptions.scbthighlighted5;
            elemArr[0].style.setProperty('font-size', '3rem', 'important');
            elemArr[0].style.setProperty('line-height', '1', 'important');
            
            elem2Arr = scbt_get_arr_message_elems_from_parent_element(elem);
            if (elem2Arr[0]) {
              elem2Arr[0].style.setProperty('font-size', '3rem', 'important');
              elem2Arr[0].style.setProperty('line-height', '1', 'important');
            }
          } // if ( tMatch == t2Match)
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


// I do not want to see these user chats. Comma separated list. Example: john,mary,bigfoot
function scbt_get_obj_filter_blocked_users_from_obj(obj, elem) {
  var arr = [];
  var arr2 = [];
  var tOriginal = '';
  var tMatch = '';
  var t2Original = '';
  var t2Match = '';
  var elemArr = [];
  var fullArr = [];
  var arrl = 0;

  var tOriginal = obj.username;
  if (tOriginal) {
    tMatch = tOriginal.toLowerCase().trim();
    arr = window.scbtOptions.scbthidden8.split(',');
    arrl = arr.length;
    for (var i = 0; i < arrl; i++) {
      t2Original = arr[i];
      if (t2Original) {
        t2Match = t2Original.toLowerCase().trim();
        if ( tMatch == t2Match) {
          obj.isHidden = 1;
        }
      }
    }
  }
  elem = arr = arr2 = tOriginal = tMatch = t2Original = t2Match = elemArr = fullArr = arrl = elem2Arr = null; return obj;
}


function scbt_helper_chat_make_decisions(obj, elem) {
  if (window.scbtOptions.scbtmuted5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbtmuted6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isMuted = 1;
    }
  }
  if (window.scbtOptions.scbthidden5 === true) {
    if (elem.classList.contains('follow') ) {
       obj.isHidden = 1;
    }
  }
  if (window.scbtOptions.scbthidden6 === true) {
    if (elem.classList.contains('user-notice-line') ) {
       obj.isHidden = 1;
    }
  }

  if (window.scbtOptions.scbttheme6 === true) {
    var imgElemArr = elem.getElementsByTagName('img');
    [].forEach.call(imgElemArr, function(imgElm) {
      imgElm.style.display = 'none';
    });
    var iElemArr = elem.getElementsByTagName('i');
    [].forEach.call(iElemArr, function(iElem) {
      iElem.style.display = 'none';
    });
    var svgElemArr = elem.getElementsByTagName('svg');
    [].forEach.call(svgElemArr, function(svgElem) {
      svgElem.style.display = 'none';
    });
  }
  
  // Highlight sub messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted1 != '#ffffff') {
      if (obj.sub === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted1;
      }
  }

  // Highlight gifter messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted11 != '#ffffff') {
    if (obj.gifter === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted11;
    }
  }

  // Highlight VIP messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted5 != '#ffffff') {
    if (elem.classList.contains('vip')) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted5;
    }
  }

  // Highlight founder messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted8 != '#ffffff') {
    if (obj.founder === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted8;
    }
  }

  // Highlight OG messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted9 != '#ffffff') {
    if (obj.og === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted9;
    }
  }

  // Highlight owner messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted10 != '#ffffff') {
    if (obj.owner === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted10;
    }
  }
  
  // Highlight moderator messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted2 != '#ffffff') {
      if (obj.moderator === 1) {
        obj.isHighlighted = window.scbtOptions.scbthighlighted2;
      }
  }
  // Mute owner/streamer messages in chat in dim text 
  if (window.scbtOptions.scbtmuted2 === true) {
      if (obj.owner === 1) {
        obj.isMuted = 1;
      }
  }
  // Hide owner/streamer messages in chat
  if (window.scbtOptions.scbthidden2 === true) {
      if (obj.owner === 1) {
        obj.isHidden = 1;
      }
  }

  if ( (obj.owner === 1) || (obj.moderator === 1) || (obj.sub === 1) || (obj.newSub === 1) || (obj.verified === 1) ) { } else {
    // scbtmuted4 Mute non moderator/sub messages in chat
    if (window.scbtOptions.scbtmuted1 === true) {
      obj.isMuted = 1;
    }
    // scbthidden4 Hide non moderator/sub messages in chat
    if (window.scbtOptions.scbthidden1 === true) {
      obj.isHidden = 1;
    }
  }
    
  // scbtmuted3 Mute bot messages
  if (window.scbtOptions.scbtmuted4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isMuted = 1;
      }
    }
  }
    
  // scbthidden3 Hide bot  messages
  if (window.scbtOptions.scbthidden4 === true) {
    if (obj.username && obj.message) {
      if (obj.isBot === 1) {
        obj.isHidden = 1;
      }
    }
  }

  // Highlight mention messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted3 != '#ffffff') {
    if (obj.mention === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted3;
    }
  }
  // Highlight hashtag messages in chat in this hex colour 
  if (window.scbtOptions.scbthighlighted4 != '#ffffff') {
    if (obj.hashtag === 1) {
      obj.isHighlighted = window.scbtOptions.scbthighlighted4;
    }
  }
  // Mute @ mention messages in chat in dim text 
  if (window.scbtOptions.scbtmuted3 === true) {
    if (obj.mention === 1) {
      obj.isMuted = 1;
    }
  }
  // Hide @ mention messages in chat 
  if (window.scbtOptions.scbthidden3 === true) {
    if (obj.mention === 1) {
      obj.isHidden = 1;
    }
  }

  return obj;
} // end scbt_helper_chat_make_decisions





// ****************** OTHER FUNCTIONS 
// scbt_handler_ functions are click handlers caused by user interaction
// ********************* set click handlers functions

function scbt_add_listener_for_at_mention_menu() {
  setTimeout(function() {
    window.scbtCloseMentionButtonRef.addEventListener('click', scbt_user_chat_close_mention_menu);
    window.scbtChatInputRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
    window.scbtChatSearchInputTextRef.addEventListener('input', scbt_handler_for_chat_mention_menu);
  }, 2000);
  return false;
}


function scbt_remove_listener_for_at_mention_menu() {
  setTimeout(function() {
    window.scbtCloseMentionButtonRef.removeEventListener('click', scbt_user_chat_close_mention_menu);
    window.scbtChatInputRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
    window.scbtChatSearchInputTextRef.removeEventListener('input', scbt_handler_for_chat_mention_menu);
  }, 2000);
  return false;
}


function scbt_add_listener_for_press_chat_to_mention_menu() {
  var elemArr = scbt_get_arr_chats();
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.classList.add('scbt-clickable'); }
  });
  setTimeout(function() {
    var elemArr2 = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr2, function(elem2) {
      if (elem2) { elem2.addEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
    elemArr = null; elem = null; elemArr2 = null; elem2 = null; return false;
  }, 2000);
}


function scbt_remove_listener_for_press_chat_to_mention_menu() {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('scbt-clickable');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.removeEventListener('click', scbt_handler_for_mention_menu_click, false); }
    });
  }, 1000);
  return false;
}


function scbt_add_listener_for_username_insert_into_search() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-username');
  [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_handler_click_username_insert_into_search); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_click_timestamp_go_to_video() {
  var elemArr = document.body.getElementsByClassName('scbt-chat-timestamp');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_click_timestamp_go_to_video); }
  });
  elemArr = elem = null; return false;
}


function scbt_add_listener_for_saved_chat_from_streams(e) {
  setTimeout(function() {
    var elemArr = document.body.getElementsByClassName('az2');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_go_to_stream); }
    });
    elemArr = document.body.getElementsByClassName('az3');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_load_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az4');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_export_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az5');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_delete_by_videoid); }
    });
    elemArr = document.body.getElementsByClassName('az6');
    [].forEach.call(elemArr, function(elem) {
      if (elem) { elem.addEventListener('click', scbt_user_chat_mark_by_videoid); }
    });
    e = elem = elemArr = arrl = null; return false;
  }, 2000);
}


function scbt_add_listener_for_options_menu() {
  var elemArr = document.body.getElementsByClassName('scbtSortByServiceID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_serviceid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChannelID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_channelid); }

  elemArr = document.body.getElementsByClassName('scbtSortByVideoID');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_videoid); }

  elemArr = document.body.getElementsByClassName('scbtSortByChan');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_handler_sort_saved_streams_by_current); }

  elemArr = document.body.getElementsByClassName('scbttwelveOptions');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_helper_toggle_options_wrapper); }

  elemArr = document.body.getElementsByClassName('scbt-options-title');
  [].forEach.call(elemArr, function(elem) {
    if (elem) { elem.addEventListener('click', scbt_handler_for_options_menu, false); }
  });

  elemArr = document.body.getElementsByClassName('scbtRecentClipsButton');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_user_load_recent_followed_clips); }

  elemArr = document.body.getElementsByClassName('scbtRecentStreamsButton');
  if (elemArr[0]) { elemArr[0].addEventListener('click', scbt_user_load_recent_followed_streams); }

  return false;
}


function scbt_handler_for_options_menu(e) {
  if (e.target.id == 'scbtOptionsSavedTitle') {
    if (document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.remove('scbt-bl');
      document.body.getElementsByClassName('scbtChatPreviousContent')[0].innerHTML = '';
    } else {
      document.body.getElementsByClassName('scbtOptionsSavedWrapper')[0].classList.add('scbt-bl');
      scbt_get_arr_of_all_dbnames();
    }
  } 

  else if (e.target.id == 'scbtOptionsImportTitle') {
    if (document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.contains('scbt-bl') ) {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.remove('scbt-bl');
    } else {
      document.body.getElementsByClassName('scbtOptionsImportWrapper')[0].classList.add('scbt-bl');
    }
  }

  else {
    var elem = e.target.nextElementSibling;
    if (elem) {
      if (elem.classList.contains('scbt-bl') ) {
        elem.classList.remove('scbt-bl');
      } else {
        elem.classList.add('scbt-bl');
      }
    }
  }
}


function scbt_handler_for_chat_mention_menu_keystrokes(e) {
  if (e.key == 'ArrowUp')  {
    e.preventDefault();
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var previousElm = parentElm.previousSibling;
        if (previousElm) {
          var previousElm1 = previousElm.getElementsByTagName('button');
          if (previousElm1[0]) {
            previousElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'ArrowDown')  {
    e.preventDefault();
    var selectedElem = document.activeElement;
    if (selectedElem) {
      var parentElm = selectedElem.parentElement;
      if (parentElm) {
        var nextElm = parentElm.nextSibling;
        if (nextElm) {
          var nextElm1 = nextElm.getElementsByTagName('button');
          if (nextElm1[0]) {
            nextElm1[0].focus();
          }
        }
      }
    }
    return false;
  }

  if (e.key == 'Escape')  {
    e.preventDefault();
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);  
    scbt_user_chat_close_mention_menu('');
    return false;
  }

  if (e.key == 'Enter')  {
    e.preventDefault();
    window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var selectedElem = document.activeElement;
    var str = '';
    if (selectedElem) {
      str = selectedElem.textContent;
    }
    scbt_user_chat_close_mention_menu(str);
    return false;
  }
};


function scbt_handler_for_chat_mention_menu_usernames(e) {
  e.preventDefault();
  window.document.removeEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
  scbt_user_chat_close_mention_menu(e.target.textContent);
  return false;
};      


function scbt_handler_for_chat_mention_menu(e) {
  if (e.data == '@') {
    scbt_get_usernames_for_mention_menu();
    window.scbtMentionMenuRef.classList.add('scbt-bl');
    window.document.addEventListener('keydown', scbt_handler_for_chat_mention_menu_keystrokes);
    var elemArr = document.body.getElementsByClassName('scbtusername1');
    if (elemArr[0]) {
      elemArr[0].focus();
    }
    elemArr = null;

    var elemArr = document.body.getElementsByClassName('scbtusername');
    [].forEach.call(elemArr, function(elem) {
      if (elem) {
        elem.addEventListener('click', scbt_handler_for_chat_mention_menu_usernames);
      }
    });
  }
  return false;
}


function scbt_handler_for_mention_menu_click(e) {
    e.preventDefault();
    var elem = this.previousElementSibling;
    window.scbtChatInputRef.value = '@' + elem.textContent + ' ';
    window.scbtChatSearchInputTextRef.value = '@' + elem.textContent + ' ';
    return false;
    /*
    e.preventDefault();
    var el = this.parentElement;
    if (el) {
      var elel = el.parentElement;
      if (elel) {
        var un = elel.querySelector('.chat-entry-username');
        if (un) {
          window.scbtChatInputRef.value = '@' + un.textContent + ' ';
          window.scbtChatInputRef.textContent = '@' + un.textContent + ' ';
          window.scbtChatInputRef.focus();
          window.scbtChatSearchInputTextRef.value = '@' + un.textContent + ' ';
          return false;
        }
      }
    }
*/
};


// done
function scbt_handler_sort_saved_streams_by_serviceid(e) {
  if (e) {
    e.preventDefault();
  }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.serviceid.toLowerCase() > b.serviceid.toLowerCase()) ? 1 : ((b.serviceid.toLowerCase() > a.serviceid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}

// done
function scbt_handler_sort_saved_streams_by_channelid(e) {
  if (e) {
    e.preventDefault();
  }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.channelid.toLowerCase() > b.channelid.toLowerCase()) ? 1 : ((b.channelid.toLowerCase() > a.channelid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}

// done
function scbt_handler_sort_saved_streams_by_videoid(e) {
  if (e) {
    e.preventDefault();
  }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));
  scbt_helper_build_list_of_saved_stream_chat_by_arr(window.scbtSavedStreamsArr);
  scbt_add_listener_for_saved_chat_from_streams(window.scbtSavedStreamsArr);
  e = a = b = null; return false;
}

// done
function scbt_handler_sort_saved_streams_by_current(e) {
  if (e) {
    e.preventDefault();
  }
  window.scbtChatPreviousContentRef.innerHTML = '';
  window.scbtSavedStreamsArr.sort((a,b) => (a.videoid.toLowerCase() > b.videoid.toLowerCase()) ? 1 : ((b.videoid.toLowerCase() > a.videoid.toLowerCase()) ? -1 : 0));

  var arrl = window.scbtSavedStreamsArr.length;
  var arr = [];

  for (var i = 0; i < arrl; i++) {
    if (window.scbtSavedStreamsArr[i].channelid == window.scbtchannelid) {
      arr.unshift(window.scbtSavedStreamsArr[i]);
    } else {
      arr.push(window.scbtSavedStreamsArr[i]);
    }
  }
  scbt_helper_build_list_of_saved_stream_chat_by_arr(arr);
  scbt_add_listener_for_saved_chat_from_streams(arr);
  e = a = b = i = arrl = arr = null; return false;
}


function scbt_handler_click_username_insert_into_search(e) {
  if (e) {
    e.preventDefault();
    if (e.target) {
      if (e.target.textContent) {
        var elemArr = document.body.getElementsByClassName('scbtChatSearchInputText');
        if (elemArr[0]) {
          elemArr[0].value = e.target.textContent;
        }
        elemArr = null; e = null;
      }
    }
  }
  return false;
}


function scbt_helper_chat_listen() {
  if (window.scbtOptions.observer) { return false; }
  targetNode = scbt_get_arr_chatbox_elem(); // 
  if (targetNode[0]) {
    var config = { childList: true,
                 attributes: false,
                 characterData: false,
                 subtree: false,
                 attributeOldValue: false,
                 characterDataOldValue: false 
               };
    var callback = function(mutationsList, observer) {
      for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              if (mutation.addedNodes) {
                var arrl = mutation.addedNodes.length;
                for (var i=0; i < arrl; i++) { 
                  scbt_helper_process_chat_line(mutation.addedNodes[i], true); // here
                }
              }  // if (mutation.addedNodes) {
            }   // end if (mutation.type === 'childList') {      
       } // end for(const mutation of mutationsList) {
    };  // end var callback = function(mutationsList, observer) {

    if (window.scbtOptions) {
      window.scbtOptions.observer = new MutationObserver(callback);
      window.scbtOptions.observer.observe(targetNode[0], config);
    }
  }
  return false;
}


function scbt_helper_chat_blur(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.border = '1px dotted ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_on(elem) {
  elem.style.paddingLeft = '.5rem';
  elem.style.paddingRight = '.5rem';
  elem.style.border = '2px solid ' + window.scbtOptions.scbtBorderColor;
}

function scbt_helper_chat_off(elem) {
  elem.style.paddingLeft = 'initial';
  elem.style.paddingRight = 'initial';
  elem.style.border = '0px';
}

function scbt_helper_chat_set_to_hide(elem) {
  elem.style.opacity = 0;
  return false;
}

function scbt_helper_chat_set_to_highlight(elem, color) {
  elem.style.setProperty('border-left', '2px solid ' + color, 'important');
  elem.style.setProperty('border-right', '2px solid ' + color, 'important');
  return false;
}

function scbt_helper_chat_set_to_mute(elem) {
  elem.style.opacity = '.3';
  return false;
}

function scbt_helper_chat_set_to_show(elem) {
  elem.style.opacity = '1';
  return false;
}

function scbt_helper_copy_text_to_clipboard(str) {
  var toShare = window.location.href;
  if (typeof str == 'string') {
    toShare = str;
  }
  navigator.clipboard.writeText(toShare).then(function() {
    setTimeout(function(){ scbt_helper_toast('copied to clipboard'); str = toShare = null; return false; }, 500);
  }, function(err) {
    alert(err);
    console.error(err);
    str = toShare = null; return false;
  });
}


function scbt_helper_comments_set_up() {
  window.scbtVODCommentsLoadedIs = true;
  var elemArr = document.body.querySelectorAll('#video-comments');
  if (elemArr[0]) {
    var commentElemArr = elemArr[0].querySelectorAll('.comment-item .comment-text');
    [].forEach.call(commentElemArr, function(commentElem) {
      if (commentElem.textContent) {
        var arr = commentElem.textContent.split(' ');
        var arrl = arr.length;
        for (var i=0; i < arrl; i++) {
          var str = arr[i];
          if (str) {
            str = str.trim();  
          }
          var isTimeHas = /:\d\d/.test(str);
          if (isTimeHas === true) {
            var seconds = scbt_get_str_seconds_from_hour_minute_time(str);
            commentElem.setAttribute('data-seconds', seconds);
            commentElem.addEventListener('click', scbt_helper_go_to_timestamp_in_video);
            commentElem.style.cursor = 'pointer';
          }
        }
      }
    });
  }
  return false;
}


function scbt_helper_go_to_timestamp_in_video(e) {
  window.scbtVODLoadedIs = true;
  var seconds = e;
  if (e) {
    if (e.target) {
      if (e.target.dataset) {
        if (e.target.dataset.seconds) {
         seconds = e.target.dataset.seconds;
        }
      }
    }
  }
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    if (videoEl[0].readyState > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      videoEl[0].currentTime = Number(seconds);
      videoEl[0].play();
      videoEl = null;
    }
  }
  return false;
}


function scbt_helper_do_coming_soon_message() {
  scbt_helper_toast('Status: Coming soon in later versions in 2023');
  return false;
}


function scbt_helper_share_native_disabled(e) { 
  if (e) {
    if (navigator.share) { } else {
      e.classList.add('disabled');
    }
  }
  e = null; return false;
}


function scbt_helper_toast(theText) {
  window.scbtSnackbarRef.textContent = theText;
  window.scbtSnackbarRef.className = 'show';
  setTimeout(function(){ window.scbtSnackbarRef.className = window.scbtSnackbarRef.className.replace('show', ''); }, 2500);
  return false;
}


// put cursor into chat box to type via keybind
function scbt_user_chat_focus(e) {
  window.scbtChatInputRef.focus();
  e = null; return false;
}


function scbt_helper_toggle_options_wrapper(e) {
  var elemArr = document.body.getElementsByClassName('scbttwelveOptionsWrapper');
  if (elemArr[0]) {
    if (elemArr[0].classList.contains('scbt-bl') ) {
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }
  elemArr = null; return false;
}





function scbt_helper_is_element_visible(el) {
  var rect     = el.getBoundingClientRect();
  var vWidth   = window.innerWidth || document.documentElement.clientWidth;
  var vHeight  = window.innerHeight || document.documentElement.clientHeight;
  var efp      = function(x, y) { return document.elementFromPoint(x, y) };     
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
    return false;
  }
  return (
        el.contains(efp(rect.left,  rect.top))
    ||  el.contains(efp(rect.right, rect.top))
    ||  el.contains(efp(rect.right, rect.bottom))
    ||  el.contains(efp(rect.left,  rect.bottom))
  );
}


function scbt_helper_process_chat_line(elem, currentChatLine) {
  var obj = {};
  obj.isHighlighted = 0;
  obj.isMuted = 0;
  obj.isHidden = 0;
  obj.isBot = 0;
  obj.hashtag = 0;
  obj.mention = 0;

  obj.anevent = 0;
  obj.donation = 0;
  obj.founder = 0;
  obj.gifter = 0;
  obj.moderator = 0;
  obj.newSub = 0;
  obj.og = 0;
  obj.owner = 0;
  obj.staff = 0;
  obj.sub = 0;
  obj.timestamp = '00:02AM';
  obj.verified = 0;

  obj = scbt_helper_chat_clean(obj, elem);

  if (window.scbtOptions.scbthidden9) {
    obj = scbt_get_obj_filter_blocked_links_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden7) {
    obj = scbt_get_obj_filter_blocked_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted7) {
    obj = scbt_get_obj_filter_highlighted_words_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthighlighted6) {
    obj = scbt_get_obj_filter_vip_users_from_obj(obj, elem);
  }
  if (window.scbtOptions.scbthidden8) {
    obj = scbt_get_obj_filter_blocked_users_from_obj(obj, elem);
  }

  obj = scbt_helper_chat_make_decisions(obj, elem);

  if (obj.isHighlighted != 0) {
    scbt_helper_chat_set_to_highlight(elem, obj.isHighlighted);
  }
  if (obj.isMuted === 1) {
    scbt_helper_chat_set_to_mute(elem);
  }
  if (obj.isHidden === 1) {
    scbt_helper_chat_set_to_hide(elem);
  }

  // click on message to mention in chat (for mobile) HERE
  if (window.scbtOptions.scbtfeature11 === true) {
    var elemArr = scbt_get_arr_message_elems_from_parent_element(elem);
    if (elemArr[0]) {
      elemArr[0].addEventListener('click', scbt_handler_for_mention_menu_click, false);  
      elemArr = null;
    }
  }

  // speak out loud chat with keywords
  if (window.scbtOptions.scbtfeature12 && window.scbtOptions.scbtfeature12 != '' && currentChatLine === true) {
    scbt_helper_chat_speak(obj.message);
  }

  // console.log('because we are saving? ' + window.scbtOptions.scbtfeature4 + ' ' + currentChatLine + '  going to save this chat line: ' + obj.username + ' MMM ' + obj.message + ' ' + obj.isBot + ' to DBNAME ' + window.scbtDbName);
  // console.log(obj);
  // return false;

  if (window.scbtDbName) { } else { scbt_set_db_error_message('scbt_helper_process_chat_line'); elem = currentChatLine = obj = null; return false; }
  if (obj.isBot > 0) {  elem = currentChatLine = obj = null; return false; }
  if ( (obj.itemid) && (obj.username) && (obj.message) ) { } else { elem = currentChatLine = obj = null; return false; }

  if ( (window.scbtOptions.scbtfeature4 === true) && (currentChatLine === true) && window.scbtDbName && obj ) {
    delete obj.isHighlighted;
    delete obj.isMuted;
    delete obj.isHidden;
    delete obj.isBot;
    delete obj.hashtag;
    delete obj.mention;
    try {
      scbt_set_db_save_chat_obj(obj);
      elem = currentChatLine = obj = null; return false;
    } catch (errorx) {
      console.log('save error ');
      console.log(errorx);
      elem = currentChatLine = obj = null; return false;
    }
  } 
}


function scbt_set_chat_parameter(parameter, visibility) {
  var str = '';
  
  if (parameter == 'owner') {
    if (visibility == 1) {
      str = ' - broadcaster chats -';
    }
    if (visibility == 2) {
      str = ' - non broadcaster chats -';
    }
  }

  if (parameter == 'moderator') {
    if (visibility == 1) {
      str = ' - mod chats -';
    }
    if (visibility == 2) {
      str = ' - non mod chats -';
    }
  }

  if (parameter == 'sub') {
    if (visibility == 1) {
      str = ' - sub chats -';
    }
    if (visibility == 2) {
      str = ' - non sub chats -';
    }
  }

  if (parameter == 'newSub') {
    if (visibility == 1) {
      str = ' - new sub chats -';
    }
    if (visibility == 2) {
      str = ' - non new sub events -';
    }
  }

  if (parameter == 'mod_sub') {
    if (visibility == 1) {
      str = ' - sub+mod chats -';
    }
    if (visibility == 2) {
      str = ' - non sub+mod chats -';
    }
  }

  if ( (parameter == 'vip') || (parameter == 'verified') ) {
    if (visibility == 1) {
      str = ' - vip/verified chats -';
    }
    if (visibility == 2) {
      str = ' - non vip/verified chats -';
    }
  }

  if (parameter == 'donation') {
    if (visibility == 1) {
      str = ' - donation chats -';
    }
    if (visibility == 2) {
      str = ' - non donation chats -';
    }
  }
  
  if (parameter == 'mention') {
    if (visibility == 1) {
      str = ' - mention chats -';
    }
    if (visibility == 2) {
      str = ' - non mention chats -';
    }
  }

  if (parameter == 'hashtag') {
    if (visibility == 1) {
      str = ' - hashtag chats -';
    }
    if (visibility == 2) {
      str = ' - non hashtag chats -';
    }
  }

  parameter = null; visibility = null; return str;
}


function scbt_user_chat_load_by_videoid(e) {
  if (!e) { return false; }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.dbname) { return false; }
  
  scbt_helper_build_chat_by_dbname_string(e.srcElement.dataset.dbname);

  if (window.scbtMobileIs === true) {
    window.scbtSideMenuRef.classList.add('scbt-fl');
  } else {
    window.scbtSideMenuRef.classList.add('scbt-bl');
  }
  window.scbtOptionsMenuRef.classList.remove('scbt-bl');
  window.scbtChatWrapperRef.classList.add('scbt-bl');
  window.scbtChatTitleRef.classList.add('scbt-bl');
  // window.scbtChatContentRef.classList.add('scbt-bl');
  window.scbtChatMenuRef.classList.add('scbt-fl');  
  window.scbtSearchBarActiveIs = true;
  return false;
}


function scbt_user_chat_close_mention_menu(username) {
  if (!username.target) {
      if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
          var str = window.scbtChatSearchInputTextRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatSearchInputTextRef.value = '@' + username + ' ';
          }
          window.scbtChatSearchInputTextRef.focus();
      } else {
          var str = window.scbtChatInputRef.value;
          if (str.indexOf(username) == -1) {
            window.scbtChatInputRef.value = str + username + ' ';
          }
          window.scbtChatInputRef.focus();
      }
  }
  window.scbtMentionMenuRef.classList.remove('scbt-bl');
  username = str = null; return false;
}


// view stream in full screen mode
function scbt_full_screen_video() {
  var videoEl = scbt_get_arr_video_elem();
  if (videoEl[0]) {
    videoEl[0].requestFullscreen();
  }
  videoEl = null; return false;
}


function scbt_user_go_to_stream(e) {
  if (!e) { return false; }
  if (!e.srcElement) { return false; }
  if (!e.srcElement.dataset) { return false; }
  if (!e.srcElement.dataset.channelid) { return false; }

  var str = e.target.dataset.channelid;  
  if (e.target.dataset.serviceid == 'rumble') {
    str = str.replace(/ /g, '');
    str = str.replace(/_+/g, '');
    window.open('https://rumble.com/c/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'kick') {
    window.open('https://kick.com/' + str,'_blank');
  }
  if (e.target.dataset.serviceid == 'twitch') {
    window.open('https://twitch.tv/' + str, '_blank');
  }
  if (e.target.dataset.serviceID == 'youtube') {
    str = str.replace(/ /g, '+');
    window.open('https://www.youtube.com/results?search_query=' + str,'_blank');
  }
  e = null; str = null; return false;
}


function scbt_user_search_chat_toggle(e) {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 

  var str = 'abcxyz';
  if (e) {
    if (e.target) {
      str = e.target.id;
    }
  }

  if ( (window.scbtvideoid && window.scbtDbName) || (window.scbtDbNameToSearch != null) || (window.scbtMobileIs === true) || (str == 'scbtCloseButton') ) { } else { scbt_helper_toast('You can only search a stream chat on a livestream. Please find an active livestream.'); return false; }
  
  if (e) {
    if (e.target) {
      if (e.target.id == 'scbt22') {
        window.scbtSearchChat = 'current';
        window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
      }
      if (e.target.id == 'scbt23') {
        window.scbtSearchChat = 'previous';
        window.scbtChatSearchStartsWithButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchUserButtonRef.classList.add('scbt-multiple');
        window.scbtChatSearchKeywordButtonRef.classList.add('scbt-multiple');

        if (window.scbtChatMenuRef.classList.contains('scbt-fl') ) {
          return false;
        }

      }
    }
  }

  // opening
  if (window.scbtSearchBarActiveIs === false) {
    window.scbtChatContentRef.innerHTML = '';
    if (window.scbtSearchChat == 'current') {
      window.scbtChatARef.textContent = 'Search this stream chat';
    } else {
      window.scbtChatARef.textContent = 'Search previous stream chat';
    }
    if (window.scbtMobileIs === true) {
      window.scbtSideMenuRef.classList.add('scbt-fl');
    }
    
    window.scbtChatMenuRef.classList.add('scbt-fl');
    window.scbtChatWrapperRef.classList.add('scbt-bl');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.focus();
    window.scbtSearchBarActiveIs = true;
    return false;
  }

  // closing
  if (window.scbtSearchBarActiveIs === true) {
    window.scbtChatContentRef.innerHTML = '';
    window.scbtChatARef.textContent = '';
    window.scbtChatBRef.textContent = '';
    if (window.scbtMobileIs === true) { 
      window.scbtSideMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
    }
    window.scbtChatMenuRef.classList.remove('scbt-fl');
    window.scbtChatWrapperRef.classList.remove('scbt-bl');
    window.scbtChatSearchStartsWithButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchUserButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchKeywordButtonRef.classList.remove('scbt-multiple');
    window.scbtChatSearchInputTextRef.value = '';
    window.scbtChatSearchInputTextRef.blur();
    window.scbtSearchBarActiveIs = false;
    window.scbtDbNameToSearch = window.scbtDbName;
    return false;
  }

}


function scbt_user_search_chat_by_keyword(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchKeywordButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_by_user(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchUserButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_by_events(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchEventsButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}

function scbt_user_search_chat_full(e) {
scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchFullButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_search_chat_starts_with(e) {
  scbt_user_search_chat_toggle(e);
  var e = {};
  e.target = {};
  e.target.id = 'scbtChatSearchStartsWithButton';
  scbt_user_search_saved_chat(e);
  e = null; return false;
}


function scbt_user_toggle_chat_filter_menu() {
  if (!window.scbtDbNameToSearch) { scbt_helper_toast( ' No active stream or VOD chat '); return false; } 
  if (window.scbtMobileIs === true) {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtChatToggleMenuRef.classList.contains('scbt-bl') ) {
      window.scbtChatToggleMenuRef.classList.remove('scbt-bl');
      window.scbtChatToggleMenuRef.classList.remove('scbt-fl');
      window.scbtChatTitleRef.classList.remove('scbt-bl');
    } else {
      window.scbtChatToggleMenuRef.classList.add('scbt-bl');
      window.scbtChatToggleMenuRef.classList.add('scbt-fl');
      window.scbtChatTitleRef.classList.add('scbt-bl');
    }
  }
  return false;
}


function scbt_user_toggle_chat_menu() {
  var elemArr = [];

  if (window.scbtDbName || window.scbtDbNameToSearch) {
    
  } else {

  }

  if (window.scbtMobileIs === true) {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      // window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      // window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  } else {
    if (window.scbtSideMenuRef.classList.contains('scbt-bl') ) {
      window.scbtSideMenuRef.classList.remove('scbt-bl');
      window.scbtChatMenuRef.classList.remove('scbt-fl');
    } else {
      window.scbtSideMenuRef.classList.add('scbt-bl');
      window.scbtChatMenuRef.classList.add('scbt-fl');
    }
  }
  return false;
}


function scbt_user_toggle_options_menu(e) {
  if (e) {
    e.preventDefault();
    if (e.target) {
      if (e.target.id == 'scbt2') {
        if (e.target.classList.contains('focused') ) {
          e.target.classList.remove('focused');
        } else {
          e.target.classList.add('focused');
        }
      } 
    }
  }

  var elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
  if (elemArr[0]) {
    if (elemArr[0].className.match('scbt-bl') ) { 
      elemArr[0].classList.remove('scbt-bl');
    } else {
      elemArr[0].classList.add('scbt-bl');
    }
  }

  document.body.scrollTop = document.documentElement.scrollTop = 0;
  e = elemArr = null; return false;
}

function scbt_handler_click_timestamp_go_to_video(e) {
  if (e) {
    if (e.target) {
      if (e.target.textContent) {
        var timeToCompare = '1:00';
        var startTime = '1:00';
        var startTimeEl = document.body.getElementsByClassName('scbt-chat-timestamp');
        if (startTimeEl[2]) {
          startTime = startTimeEl[2].textContent; // 10:01AM
          startTime = scbt_get_str_military_hours_minutes_from_timestamp(startTime);
        }
        timeToCompare = scbt_get_str_military_hours_minutes_from_timestamp(e.target.textContent);
        var diff = Math.abs(new Date('2011/11/11 ' + startTime) - new Date('2011/11/11 ' + timeToCompare));
        var diff2 = Math.floor((diff/1000)/60);
        var seconds = diff2 * 60;
        scbt_helper_go_to_timestamp_in_video(seconds);
      }
    }
  }
  return false;
}





function scbt_set_db_error_message(error) {
  console.error('Error: getting and displaying saved chat failed or blocked for db: ' + window.scbtDbName);
  if (error) {
    console.error(error);
    if (typeof error === 'string') {
      console.log(error);
    }
    if (error.target) {
      if (error.target.transaction) {
        if (error.target.transaction.error) {
          console.log('typeof error.target.transaction.error');
          console.log(typeof error.target.transaction.error);
          console.log(error.target.transaction.error);
          if (error.target.transaction.error.message) {
            console.log('typeof error.target.transaction.error.message');
            console.log(typeof error.target.transaction.error.message);
            console.log(error.target.transaction.error.message);
          }
          if (error.target.transaction.error.message.indexOf('uniqueness requirements') > -1) {
            console.log('no unique id cannot be saved');
          }
        } 
      } 
    }
  }
}

// done
function scbt_set_vod_length() {
  // duration is 30449.461 SECONDS, minutes is: 507,  seconds is: 29.46099999999933
  var elemArr = scbt_get_arr_video_elem();
  if (elemArr[0]) {
    if (elemArr[0].readyState > 0) {
      window.scbtVODSecondsTotal = parseInt(elemArr[0].duration);
      window.scbtVODMinutesLong = parseInt(elemArr[0].duration / 60, 10);
      window.scbtVODSecondsLong = parseInt(elemArr[0].duration % 60);
    }
  }
  elemArr = null; return false;
}
























































































































// DIFFERENT FUNCTIONS - these functions are different bewtween extentions

// done
function scbt_get_arr_chats() {
  if (window.scbtVODIs) {
    var elemArr = document.body.getElementsByClassName('.video-chat__message');
  } else {
    // var elemArr = document.body.querySelectorAll('.text-fragment, .mention-fragment, .user-notice-line, .chat-line__message--cheer-amount');
    var elemArr = document.body.querySelectorAll('.chat-line__message, .user-notice-line, .chat-line__message--cheer-amount');
  }
  return elemArr;
}

// done
function scbt_get_str_videoid() {
  var str = new Date().toISOString().slice(0, 10) + '-' + window.scbtchannelid;
  return str;
}

// done
function scbt_get_str_channelid() {
  var channelid = window.location.pathname.substr(1);
  return channelid;
}

// done
function scbt_get_arr_chatbox_elem() {
  if (window.scbtVODIs) {
    var elemArr = document.body.querySelectorAll('.video-chat__message-list-wrapper ul');
  } else {
    var elemArr = document.body.getElementsByClassName('chat-scrollable-area__message-container');
  }
  return elemArr;
}

function scbt_helper_chat_clean(obj, elem) {
  console.log('doing scbt_helper_chat_clean 1');
  console.log(obj);
  console.log(elem);
  var elemArr = [];
  var str = null;
  var stampArr = new Date().toLocaleTimeString().replace(/ /g, '').split(':'); // = 11:34:03AM  ['12', '11', '42PM']
  var timestamp = stampArr[0] + ':' + stampArr[1] + stampArr[2].slice(2);

  if (elem.classList.contains('user-notice-line') ) {
    obj.newSub = 1;
    obj.timestamp = timestamp;
    obj.anevent = 1;
  }

  var imgElemArr = elemArr[0].getElementsByTagName('img');
  [].forEach.call(imgElemArr, function(imgElm) {
    var a = imgElm.getAttribute('alt').toLowerCase();
    if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) ) {
      obj.sub = 1;
    }
    if (a.indexOf('moderator') > -1) {
      obj.moderator = 1;
    }
    if (a.indexOf('broadcaster') > -1) {
      obj.owner = 1;
    }
    if (a.indexOf('cheer') > -1) {
      obj.donation = 1;
      obj.anevent = 1;
    }
    if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
      obj.verified = 1;
    }
  });

  obj = scbt_helper_chat_get_username(obj, elem);
  obj = scbt_get_obj_cleaned_username_from_obj(obj);

  obj = scbt_helper_chat_get_message(obj, elem);
  obj = scbt_get_obj_cleaned_message_from_obj(obj);

  if (obj.timestamp) { } else {
    obj.timestamp = timestamp;
  }

  if ( (obj.timestamp) && (obj.username) && (obj.message) ) {
    var str = obj.message.substring(0,33);
    str = str.replace(/[^a-zA-Z0-9_\-@\s]/g,'');
    obj.itemid = obj.username + str;
  }
  special = stampArr = str = elemArr = elemArr2 = elemArr3 = timestamp = imgs = alt = imgElm = imgElemArr = itemId = a = elem = null; return obj;
} // end scbt_helper_chat_clean


function scbt_helper_build_all_menus() {
  var elemArr = [];

  elemArr = document.body.getElementsByClassName('scbtSideMenu');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtSideMenu', 'side_menu_twitch.html', false);
    })();
  }
  
  elemArr = document.body.getElementsByClassName('chat-wysiwyg-input__editor');
  if (elemArr[0]) { window.scbtChatInputRef = x[0]; }
  
  elemArr = document.body.getElementsByClassName('scbtChatWrapper');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtChatWrapper', 'wrappers_menu.html', false);
    })();
   }  

  elemArr = document.body.getElementsByClassName('scbtChatMenu');
  if (elemArr[0]) { } else { 
    (async () => {
      await scbt_helper_get_menu(window.scbtXRef, 'scbtChatMenu', 'chat_menu.html', false);
    })();
  }

  elemArr = document.body.getElementsByClassName('scbtOptionsMenu');
  if (elemArr[0]) { } else { 
     (async () => {
        await scbt_helper_get_menu(window.scbtXRef, 'scbtOptionsMenu', 'options_menu.html', false);
        scbt_helper_toast( window.scbtserviceid + ' PurplePeopleMeeter loaded, RUNNING version: ' + chrome.runtime.getManifest().version);
        console.log(' PurplePeopleMeeter loaded, RUNNING version: ' + chrome.runtime.getManifest().version);
        var elemArr2 = document.body.getElementsByClassName('scbtToggleButton2');
        if (elemArr2[0]) { elemArr2[0].addEventListener('click', scbt_user_toggle_chat_menu); }
        elemArr = null; elemArr2 = null; return false;
     })();
  }
}


function scbt_helper_chat_auto_show(obj) {
  window.scbtSearchChat = 'current';
  window.scbtChatARef.textContent = 'Search this stream chat';
  window.scbtChatMenuRef.classList.add('scbt-fl');

  window.scbtChatWrapperRef.classList.add('scbt-bl');
  window.scbtChatSearchInputTextRef.value = '';
  window.scbtChatSearchInputTextRef.focus();
  window.isdoSearch = 1;

  setTimeout(function() { 
    var classString = scbt_get_str_for_chat_classes_from_obj(obj);
    var theHTML = "<p class='" + classString + "'><span>" + obj.timestamp + " : <span class='author-name'>" + obj.username + "</span> </span><b>" + obj.message + "</b></p>";
    window.scbtChatContentRef.insertAdjacentHTML('beforeend', theHTML);
    scbt_user_chat_down_to_bottom();
    scbt_helper_click_username_insert_into_search();
    return false;
  }, 1500);
}


function scbt_helper_apply_css_from_option(obj) {
  var css = '';
  if (typeof obj == 'object') {
    // Background of chat bubble in this hex colour. Use black #000 for transparent bubble.
    if (obj.a == 'scbttheme1') {
      if (window.scbtVODIs) {
        if (obj.b == '#ffffff' || obj.b == '') {
          css = css + ' .video-chat__message-list-wrapper { background-color: initial !important; } .scbtChatWrapper { background-color: initial; } ';
        }
        if (obj.b == '#000000') {
          css = css + ' .video-chat__message-list-wrapper { background-color: transparent !important; } .scbtChatWrapper { background-color: transparent; } ';
        }  
        if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
          css = css + ' .video-chat__message-list-wrapper { background-color:' + obj.b + ' !important;} .scbtChatWrapper { background-color:' + obj.b + '; } '; 
        }
      } else {
        if (obj.b == '#ffffff' || obj.b == '') {
          css = css + ' .chat-scrollable-area__message-container { background-color: initial !important; } .scbtChatWrapper { background-color: initial; } ';
        }
        if (obj.b == '#000000') {
          css = css + ' .chat-scrollable-area__message-container { background-color: transparent !important; } .scbtChatWrapper { background-color: transparent; } ';
        }  
        if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
          css = css + ' .chat-scrollable-area__message-container { background-color:' + obj.b + ' !important;} .scbtChatWrapper { background-color:' + obj.b + '; } '; 
        }
      }
    }


    // User names in chat in this hex colour 
    if (obj.a == 'scbttheme2') {
      if (obj.b == '#ffffff') {
        if (window.scbtVODIs) {
          css = css + '.video-chat__message-author, .pinned-chat__pinned-by { color: unset !important; } .scbt-chat-username { color: unset } ';
        } else {
          css = css + '.chat-author__display-name, .pinned-chat__pinned-by { color: unset !important; } .scbt-chat-username { color: ' + obj.b + ' ; } ';
        }
      }
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        if (window.scbtVODIs) {
          css = css + '.video-chat__message-author, .pinned-chat__pinned-by { color:' + obj.b + ' !important; } ';
        } else {
          css = css + '.chat-author__display-name, .pinned-chat__pinned-by { color:' + obj.b + ' !important; } ';
        }
      }
    }


    // Highlighted chat text in this hex colour
    if (obj.a == 'scbttheme3') {
      if (obj.b != '#ffffff') {
        window.scbtOptions.scbtBorderColor = obj.b;
      } else {
        window.scbtOptions.scbtBorderColor = '#ff0000';
      }
    }

    // Text in chat in this hex colour
    if (obj.a == 'scbttheme4') {
      if (obj.b == '#ffffff') {
        css = css + ' .text-fragment, .mention-fragment { color: unset !important; text-shadow: 0px; } .scbt-chat-message { color: unset; text-shadow: 0px; } ';
      }
      if (obj.b == '#000000') {
        css = css + ' .text-fragment, .mention-fragment { color: #111111 !important; text-shadow: 0.5px 0.5px silver; } .scbt-chat-message { color: #111111; text-shadow: 0.5px 0.5px silver; } ';
      }  
      if ( (obj.b != '#ffffff') && (obj.b != '#000000') ) {
        css = css + ' .text-fragment, .mention-fragment { color:' + obj.b + ' !important; text-shadow: 0.5px 0.5px darkslategrey; } .scbt-chat-message { color:' + obj.b + ' ; text-shadow: 0.5px 0.5px darkslategrey; } ';
      }
    }

    // Chat font size should be this times of normal, try 1.25
    if (obj.a == 'scbttheme5') {
      if (obj.b > 0) {
        var x = obj.b + 'rem';
        if (window.scbtVODIs) {
          css = css + ' .video-chat__message-list-wrapper { font-size: ' + x + '; line-height: ' + obj.b  + '; } .scbt-chat-message { font-size: ' + t + '; line-height: ' + obj.b  + '; } ';
        } else {
          css = css + ' .chat-scrollable-area__message-container { font-size: ' + x + '; line-height: ' + obj.b  + '; } .scbt-chat-message { font-size: ' + t + '; line-height: ' + obj.b  + '; } ';
        }
      } else {
        if (window.scbtVODIs) {
          css = css + ' .video-chat__message-list-wrapper { font-size: initial; line-height: unset; } .scbt-chat-message { font-size: initial; line-height: unset; } ';
        } else {
          css = css + ' .chat-scrollable-area__message-container { font-size: initial; line-height: unset; } .scbt-chat-message { font-size: initial; line-height: unset; } ';
        }
      }
    }


    // Text only
    if (obj.a == 'scbttheme6') {
      if (obj.b === true) {
        css = css + ' .text-fragment img, .text-fragment svg, .text-fragment i, .mention-fragment img, .mention-fragment svg, .mention-fragment i, .chat-line__message-container img, .chat-line__message-container svg, .video-chat__message-author, .pinned-chat__pinned-by, .chat-author__display-name { visibility: hidden !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: hidden; } ';
      } else {
        css = css + ' .text-fragment img, .text-fragment svg, .text-fragment i, .mention-fragment img, .mention-fragment svg, .mention-fragment i, .chat-line__message-container img, .chat-line__message-container svg, .video-chat__message-author, .pinned-chat__pinned-by, .chat-author__display-name { visibility: visible !important; } .scbt-chat-username, .scbt-chat-timestamp { visibility: visible; } ';
      }      
    }


    // Left handed screen. Flip screen so video is on the right and chat is on the left. 
    if (obj.a == 'scbtfeature7') {
      if (obj.b === true) {    
        if (window.scbtVODIs) {
          css = css + ' .video-chat__message-list-wrapper { display: flex; flex-direction: row-reverse; } .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
        } else {
          css = css + ' .chat-scrollable-area__message-container { display: flex; flex-direction: row-reverse; } .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
        }
      } else {
        if (window.scbtVODIs) {
          css = css + ' .video-chat__message-list-wrapper { display: block; flex-direction: initial; }  .scbtChatWrapper { display: block; } ';
        } else {
          css = css + ' .chat-scrollable-area__message-container { display: block; flex-direction: initial; }  .scbtChatWrapper { display: block; } ';
        }
      }
    }

    // Upside down chat screen. Newest chat is on the top, oldest chat is on the bottom 
    if (obj.a == 'scbtfeature8') {
      if (obj.b === true) {
        
        if (window.scbtVODIs) {
          css = css + ' .video-chat__message-list-wrapper { flex-direction: column-reverse; } .scbtChatWrapper { display: flex; flex-direction: row-reverse; } ';
        } else {
          css = css + ' .chat-scrollable-area__message-container { flex-direction: column-reverse; } .scbtChatWrapper { display: block; flex-direction: initial; } ';
        }

      } else {
        if (window.scbtVODIs) {
          css = css + '.video-chat__message-list-wrapper { flex-direction: column; } .scbtChatWrapper { display: flex; flex-direction: column-reverse; } ';
        } else {
          css = css + '.chat-scrollable-area__message-container { flex-direction: column; } .scbtChatWrapper { display: block; flex-direction: initial; } ';
        }
      }

    }

    
    // mouseover
    if (obj.a == 'scbtfeature9') {
      if (obj.b === true) {
          
          if (window.scbtVODIs) {
            css = css + '.video-chat__message-list-wrapper { font-size: initial; line-height: unset; } .scbtChatWrapper { display: flex; flex-direction: column-reverse; } ';
          } else {
            css = css + '.chat-scrollable-area__message-container:hover { font-size: 175% !important; } .scbtChatWrapper { display: block; flex-direction: initial; } ';
          }

        } else {
          if (window.scbtVODIs) {
            css = css + '.video-chat__message-list-wrapper { font-size: initial !important; } .scbtChatWrapper { font-size: 175%; } ';
          } else {
            css = css + '.chat-scrollable-area__message-container:hover { font-size: initial !important; } .scbtChatWrapper { font-size: initial; }  ';
          }

      }
    }
    
  }

  if (css != '') {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }
  obj = null; css = null; a = null; head = null; style = null; return false;
}


function scbt_user_chat_down_to_bottom() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = window.scbtChatWrapperRef.scrollHeight - window.scbtChatWrapperRef.clientHeight;
    return false;
  } else {
    var elemArr = document.body.querySelectorAll('chat-history-list')
    if (elemArr[0]) {
      elemArr[0].scrollTop = elemArr[0].scrollHeight - elemArr[0].clientHeight;
    }
  }
  elemArr = null; return false;
}


function scbt_user_chat_font_size() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
  } else {
    var elemArr = scbt_get_arr_message_elems_from_parent_element(document.body);
  }

  if (window.scbtFontUp < 6) {
    if (window.scbtFontSize == 'initial') {
      window.scbtFontSize = 1;
    }
    if (window.scbtHeightSize == 'initial') {
      window.scbtHeightSize = 'auto'; 
    }
    window.scbtFontSize = window.scbtFontSize - -.25;
    var str = window.scbtFontSize + 'em';
    window.scbtFontUp = window.scbtFontUp - -1;
  } else {
    window.scbtFontSize = 'initial';
    var str = 'initial';
    window.scbtHeightSize = 'initial';
    var str2 = 'initial';
    window.scbtFontUp = 1;
  }

  [].forEach.call(elemArr, function(elem) {
      elem.style.setProperty('font-size', str, 'important');
      elem.style.height = str2;
  });
  str = str2 = elem = elemArr = null; return false;
}


function scbt_user_chat_full_screen_width() {
  if (window.scbtFullScreenWidthIs === false) {
    var elemArr = document.body.querySelectorAll("[data-a-target='right-column__toggle-collapse-btn']");
    if (elemArr[0]) {
      elemArr[0].click();  
    }
    var elemArr = document.body.getElementsByClassName('side-nav');
    if (elemArr[0]) {
      elemArr[0].style.display = 'none';
    }
    window.isdoFullScreenWidth = 1;
    elemArr = null; return false;
  }

  if (window.scbtFullScreenWidthIs === true) {
    var elemArr = document.body.querySelectorAll("[data-a-target='right-column__toggle-collapse-btn']");
    if (elemArr[0]) {
      elemArr[0].click();  
    }
    var elemArr = document.body.getElementsByClassName('side-nav');
    if (elemArr[0]) {
       elemArr[0].style.display = 'block';
    }
    window.isdoFullScreenWidth = 0;
    elemArr = null; return false;
  }
}


function scbt_user_chat_non_bot() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
  } else {
      var elemArr = document.body.getElementsByClassName('va-vod-chat');
      if (elemArr[0]) {
        var elemArr = document.body.getElementsByClassName('video-chat__message');
      } else {
        var elemArr = document.body.querySelectorAll('.chat-line-message-body, .chat-line__message');  
      }

      var toSearchFor = '.text-fragment';
      var toSearchFor2 = '.chat-author__display-name';

      if (window.scbtNonBotChatShow === 1) {
          window.scbtChatBRef.textContent = ' - non bot chats -';
          
          [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            var m = elem.querySelector(toSearchFor);
            if (m) {
              var um = m.textContent;
              if (um) {
                if (um.indexOf('!') == '0') {
                  elem.style.opacity = '.25';
                }
              }
            }
            var arr = elem.querySelectorAll(toSearchFor2);
            [].forEach.call(arr, function(username) {
              if (username) {
                var u = username.textContent;
                if (u) {
                  u = u.toLowerCase();
                  if ( ( t.indexOf('bot') > -1 ) || ( t == 'streamelements') || ( t == 'streamlabs') ) {
                    elem.style.opacity = '.25';
                  }
                }
              }
            });
          });

        window.scbtNonBotChatShow = 2;
        elemArr = elem2Arr = str = elem = null; return false;
      }

      if (window.scbtNonBotChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 1;
          elem.parentElement.style.opacity = 1;
        });
        window.scbtNonBotChatShow = 1;
        elemArr = elem2Arr = str = elem = null; return false;
      }

    }
}


function scbt_user_chat_text_only() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('span');

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'none';
        });
        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) { 
        window.scbtChatBRef.textContent = ' - non text only chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.display = 'inline-block';
            scbt_helper_chat_blur(elem);
        });
        window.scbtTextOnlyChatShow = 3;
        elemArr = elem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'inline-block';
          scbt_helper_chat_off(elem);
        });
        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      
      var elem2Arr = document.body.getElementsByClassName('va-vod-chat');
      if (elem2Arr[0]) {
        var elemArr = document.body.getElementsByClassName('video-chat__message');
      } else {
        var elemArr = document.body.querySelectorAll('.chat-line-message-body, .chat-line__message, .user-notice-line');  
      }
      var toSearchFor = '.chat-line__username';

      if (window.scbtTextOnlyChatShow === 1) {
        window.scbtChatBRef.textContent = ' - text only chats -';

        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'hidden';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'hidden';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'hidden';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'hidden';
          });
        });

        window.scbtTextOnlyChatShow = 2;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = null; return false;
      }

      if (window.scbtTextOnlyChatShow === 2) {
        window.scbtChatBRef.textContent = '';
        
        [].forEach.call(elemArr, function(elem) {
          var elem2Arr = scbt_get_arr_username_elems_from_parent_element(elem);
          if (elem2Arr[0]) {
            elem2Arr[0].style.visibility = 'visible';
          }
          var imgElemArr = elem.getElementsByTagName('img');
          [].forEach.call(imgElemArr, function(imgElm) {
            imgElm.style.visibility = 'visible';
          });
          var iElemArr = elem.getElementsByTagName('i');
          [].forEach.call(iElemArr, function(iElem) {
            iElem.style.visibility = 'visible';
          });
          var svgElemArr = elem.getElementsByTagName('svg');
          [].forEach.call(svgElemArr, function(svgElem) {
            svgElem.style.visibility = 'visible';
          });
        });

        window.scbtTextOnlyChatShow = 1;
        elemArr = elem = elem2Arr = imgElemArr = imgElm = iElemArr = iElem = svgElemArr = svgElem = null; return false;
      } //if (window.scbtTextOnlyChatShow === 2)
    }
}


function scbt_user_chat_up_to_top() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
    window.scbtChatWrapperRef.scrollTop = 0;
  } else {
    var elemArr = document.body.querySelectorAll('#chat-history-list')
    if (elemArr[0]) {
      elemArr[0].scroll({top:0,behavior:'smooth'});
      elemArr[0].animate({ scrollTop: 0 }, 100);
      elemArr[0].scrollTop = 0;
    }
  }
  elemArr = null; return false;
}


function scbt_full_screen_video_height_chat() {
  if (window.scbtFullScreenHeightIs === false) {
    var elemArr = document.body.getElementsByClassName('sidebar');
    if (elemArr[0]) {
      elemArr[0].style.position = 'absolute';
      elemArr[0].style.top = '0px';
      elemArr[0].style.right = '20px';
      elemArr[0].style.zIndex = '10000';
      elemArr[0].style.height = '99vh';
      elemArr[0].style.marginTop = '-3rem';
    }
    var elemArr = document.body.getElementsByClassName('chat--height');
    if (elemArr[0]) {
      elemArr[0].style.height = '90vh';
    }
    window.scbtFullScreenHeightIs = true;
    scbt_user_chat_down_to_bottom();
    elemArr = null; return false;
  }

  if (window.scbtFullScreenHeightIs === true) {
    var elemArr = document.body.getElementsByClassName('sidebar');
    if (elemArr[0]) {
      elemArr[0].style.position = 'relative';
      elemArr[0].style.right = 'initial';
      elemArr[0].style.top = 'initial';
      elemArr[0].style.zIndex = 'initial';
      elemArr[0].style.height = 'initial';
      elemArr[0].style.marginTop = 'initial';
    }
    var elemArr = document.body.getElementsByClassName('chat--height');
    if (elemArr[0]) {
      elemArr[0].style.height = '90vh';
    }
    window.scbtFullScreenHeightIs = false;
    scbt_user_chat_down_to_bottom();
    elemArr = null; return false;
  }
}


// view stream in theatre mode
function scbt_user_theatre_mode() {
 var elemArr = document.body.querySelectorAll('.toggle-visibility__right-column button');
  if (elemArr[0]) {
    elemArr[0].click();
  }
  elemArr = null; return false;
}


function scbt_user_toggle_chats(e) {

  var parameter = '';
  if (e) {
    if (typeof e == 'string') {
      parameter = e;
    } else {
      e.preventDefault();
      if (e.target) {
        if (e.target.id) {
          switch ( e.target.id ) {
            case 'scbt4':
              parameter = 'owner';
              break;
            case 'scbt5':
              parameter = 'moderator';
              break;
            case 'scbt6':
               parameter = 'sub';
              break;
            case 'scbt7':
              parameter = 'mod_sub';
              break;
            case 'scbt8':
              parameter = 'vip';
              break;
            case 'scbt9':
              parameter = 'donation';
              break;
            case 'scbt11':
              parameter = 'mention';
              break;
            case 'scbt12':
              parameter = 'hashtag';
              break;
            case 'scbt29':
              parameter = 'newSub';
              break;
          } // end switch
        } // if e target id
      }   // e target
    }     // if e is not a string 

  }       // if e

  if (parameter) {
    
    if (parameter == 'vip') {
      parameter = 'verified';
    }
    // saved chat 
    if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');
      
      if (window.scbtVisibilityChatShow === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              scbt_helper_chat_on(elem);
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
          }
        });
        window.scbtVisibilityChatShow = 2; 
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 2) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibilityChatShow);
        [].forEach.call(elemArr, function(elem) {
          if (parameter == 'mod_sub') {
            if ( (elem.classList.contains('sub')) || (elem.classList.contains('moderator')) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else if ( (parameter == 'mention') || (parameter == 'hashtag') ) {
            var elem2Arr = elem.getElementsByTagName('b');
            if (elem2Arr[0]) { var str = elem2Arr[0].textContent; } else { var str = elem.textContent; }
            if ( ((parameter == 'mention') && (str.indexOf('@') > -1) ) || ((parameter == 'hashtag') && ( str.indexOf('#') > -1) ) ) {  
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          } else {
            if (elem.classList.contains(parameter) ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
          }
        });
        window.scbtVisibilityChatShow = 3;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      // live chat
    } else {
      if (window.scbtMobileIs === true) {
        var elemArr = document.body.querySelectorAll('main div div ul li, .user-notice-line');
        var toSearchFor = '.chat-badge';
      }
      if (window.scbtMobileIs != true) {
        var elem2Arr = document.body.getElementsByClassName('va-vod-chat');
        if (elem2Arr[0]) {
          var elemArr = document.body.querySelectorAll('.video-chat__message-list-wrapper li .vod-message');
        } else {
          var elemArr = document.body.querySelectorAll('.chat-line__message, .user-notice-line');          
        }
        toSearchFor = '.chat-badge';
      }

      if (window.scbtVisibilityChatShow === 1) {
        
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibility);
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;

          if (parameter == 'owner') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'moderator') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if (a.indexOf('moderator') > -1) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mod_sub') {
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('moderator') > -1) || (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1)  ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if ( (parameter == 'vip') || (parameter == 'verified') ) {
            if (elem.classList.contains('vip') ) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
            var imgElemArr = elem.getElementsByTagName('img');
            [].forEach.call(imgElemArr, function(imgElem) {
              var alt = imgElem.getAttribute('alt');
              if (alt) {
                var a = alt.toLowerCase();
                if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            });
          }
          if (parameter == 'mention') {
              var t = elem.textContent;
              if (t) {
                if ( t.indexOf('@') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
          }
          if (parameter == 'hashtag') {
              var t = elem.textContent;
              if (t) {
                if ( t.indexOf('#') > -1 ) {
                  scbt_helper_chat_on(elem);
                  elem.style.opacity = 1;
                }
              }
            }
          if (parameter == 'donation') {
            var elem3Arr = elem.getElementsByClassName('chat-line__message--cheer-amount');
            if (elem3Arr[0]) {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          }

      });
      window.scbtVisibility = 1;
      parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
    }


      if (window.scbtVisibility === 1) {
        window.scbtChatBRef.textContent = scbt_set_chat_parameter(parameter, window.scbtVisibility);
        [].forEach.call(elems, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            
            if (parameter == 'owner') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('broadcaster') > -1) || (a.indexOf('owner') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'sub') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'moderator') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if (a.indexOf('moderator') > -1) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'mod_sub') {
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('moderator') > -1) || (a.indexOf('subscriber') > -1) || (a.indexOf('founder') > -1) || (a.indexOf('gifter') > -1)  ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
             if ( (parameter == 'vip') || (parameter == 'verified') ) {
              if (elem.classList.contains('vip') ) {
                elem.style.opacity = 0;
              }
              var imgElemArr = elem.getElementsByTagName('img');
              [].forEach.call(imgElemArr, function(imgElem) {
                var alt = imgElem.getAttribute('alt');
                if (alt) {
                  var a = alt.toLowerCase();
                  if ( (a.indexOf('vip') > -1) || (a.indexOf('verified') > -1) ) {
                    elem.style.opacity = 0;
                  }
                }
              });
            }
            if (parameter == 'mention') {
                var t = elem.textContent;
                if (t) {
                  if ( t.indexOf('@') > -1 ) {
                    elem.style.opacity = 0;
                  }
                }
            }
            if (parameter == 'hashtag') {
                var t = elem.textContent;
                if (t) {
                  if ( t.indexOf('#') > -1 ) {
                    elem.style.opacity = 0;
                  }
                }
              }
            if (parameter == 'donation') {
              var elem3Arr = elem.getElementsByClassName('chat-line__message--cheer-amount');
              if (elem3Arr[0]) {
                elem.style.opacity = 0;
              }
            }

          });
          window.scbtVisibility = 2;
          parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }

      if (window.scbtVisibilityChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVisibilityChatShow = 1;
        parameter = str = a = alt = elemArr = elem = elem2Arr = elem2 = toSearchFor = arr = null; return false;
      }
    }

  } else {
    // TODO: no parameter
  }

  return false;
}


function scbt_user_toggle_sub_event_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtSubChatShow === 1) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtSubChatShow = 2;
        elemArr = elem = null; return false;
      }

      if (window.scbtSubChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elemArr, function(elem) {
            if (elem.classList.contains('newSub') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtSubChatShow = 3;
        elemArr = elem = null; return false;
      }


      if (window.scbtSubChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtSubChatShow = 1;
        elemArr = elem = null; return false;
      }

    } else {
      var elemArr = scbt_get_arr_chats();

      if (window.isdoSubs === 0) {
        window.scbtChatBRef.textContent = ' - new sub events -';
        [].forEach.call(elems, function(elem) {
          elem.style.opacity = 0;
          if (elem.classList.contains('bg-secondary') ) {
            elem.style.opacity = 1;
          }            
        });
        window.isdoSubs = 1;
        x = null; elems = null; div = null; return false;
      }

      if (window.isdoSubs === 1) {
        window.scbtChatBRef.textContent = ' - non sub events -';
        [].forEach.call(elems, function(elem) {
            elem.style.opacity = 1;
            if (elem.classList.contains('bg-secondary') ) {
              elem.style.opacity = 0;
            }            
        });
        window.isdoSubs = 2;
        x = null; elems = null; div = null; return false;
      }

      if (window.isdoSubs === 2) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elems, function(elem) {
          elem.style.opacity = 1;
        });
        window.isdoSubs = 0;
        x = null; elems = null; div = null; return false;
      }
  }
  return false;
}


function scbt_user_toggle_verified_chats() {
  if (window.scbtChatWrapperRef.classList.contains('scbt-bl') ) {
      var elemArr = window.scbtChatWrapperRef.getElementsByTagName('p');

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'block';
            } else {
              elem.style.display = 'none';
            }
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            if ( elem.classList.contains('verified') || elem.classList.contains('vip') ) {
              elem.style.display = 'none';
            } else {
              elem.style.display = 'block';
              scbt_helper_chat_blur(elem);
            }
        });
        window.scbtVerifiedChatShow = 3;
        elemArr = null; elem = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          elem.style.display = 'block';
          scbt_helper_chat_off(elem);
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem = null; return false;
      }

    } else {
      var elemArr = scbt_get_arr_chats();

      if (window.scbtVerifiedChatShow === 1) {
        window.scbtChatBRef.textContent = ' - VIP chats -';
        [].forEach.call(elemArr, function(elem) {
          elem.style.opacity = 0;
          var elem2Arr = elem.querySelectorAll('.badge');
          [].forEach.call(elem2Arr, function(elem2) {
            var t = elem2.textContent;
            if (t == 'VIP') {
              scbt_helper_chat_on(elem);
              elem.style.opacity = 1;
            }
          });            
        });
        window.scbtVerifiedChatShow = 2;
        elemArr = null; elem2Arr = null; elem = null; t = null; return false;
      }

      if (window.scbtVerifiedChatShow === 2) {
        window.scbtChatBRef.textContent = ' - non VIP chats -';
        [].forEach.call(elemArr, function(elem) {
            elem.style.opacity = 1;
            scbt_helper_chat_blur(elem);
            var elem2Arr = elem.querySelectorAll('.badge');
            [].forEach.call(elem2Arr, function(elem2) {
              var t = elem2.textContent;
              if (t == 'VIP') {
                elem.style.opacity = 0;
              }
            });            
          });
          window.scbtVerifiedChatShow = 3;
          elemArr = null; elem2Arr = null; elem = null; t = null; return false;
      }

      if (window.scbtVerifiedChatShow === 3) {
        window.scbtChatBRef.textContent = '';
        [].forEach.call(elemArr, function(elem) {
          scbt_helper_chat_off(elem);
          elem.style.opacity = 1;
        });
        window.scbtVerifiedChatShow = 1;
        elemArr = null; elem2Arr = null; elem = null; t = null; return false;
      }
    }
  return false;
}


async function scbt_user_search_for_saved_chat() {
  console.log('doing scbt_user_search_for_saved_chat: ' + window.scbtVODIs);
  // savedchat&rumble&LOL_Games&v3048x4-mortal-kombat-1-ps5-raw-gameplay-60fps
  // https://stackoverflow.com/questions/17468963/check-if-indexeddb-database-exists
  // https://esprima.org/demo/validate.html
  // scbt_get_all_chat_print();

  // savedchat & kick & megamikedrummer & 2023-07-11-megamikedrummer
  // savedchat & twitch & megamikedrummer & 2023-07-11-megamikedrummer
  // savedchat & rumble & Geeks__Gamers & v2zekko-mission-impossible-set-to-demolish-indiana-jones-sound-of-freedom-woke-melt
  // savedchat & youtube & Vara_Dark__Dark_Titan_Media & x9PUFGu_Ups

  // VOD
  // https://kick.com/video/f5c7fddc-99d7-40be-af4c-ea9492864cf4
  // https://www.twitch.tv/videos/1834866270?filter=archives&sort=time
  // https://rumble.com/v2fu7n2-my-first-stream-on-rumble.html
  // https://www.youtube.com/watch?v=Gz3Dzhr4n9g

  // LIVE
  // https://kick.com/streamer
  // https://twitch.tv/streamer
  // https://rumble.com/v2fu7n2-my-first-stream-on-rumble.html
  // https://www.youtube.com/watch?v=Gz3Dzhr4n9g  

  // try get chat match from localstorage
  // localStorage.setItem('https://www.youtube.com/watch?v=Gz3Dzhr4n9g', 'savedchat & kick & megamikedrummer & 2023-07-11-megamikedrummer');

  // localStorage.setItem('https://rumble.com/v30vn4c-bitcoin-backed-currency-is-a-terrible-idea.html', 'savedchat&kick&mmamallamaface&2023-07-11-mmamallamaface');

  // try get chat match from URL

  // try get match from API



  console.log(window.location.href);

  var t = localStorage.getItem(window.location.href); // null
  console.log('localstorage is: ' + t);

  if (t) {
    var dbExists = await scbt_get_binary_if_db_exists(t);
    console.log('dbExists is: ');
    console.log(dbExists);
    if (dbExists === true) {
      // load the database
      console.log('loading database from localStorage');
      var e = {};
      e.srcElement = {};
      e.srcElement.dataset = {};
      // var dbNamePartsArr = x.split('&');
      // if (dbNamePartsArr[1] && dbNamePartsArr[2] && dbNamePartsArr[3]) {
      //  e.srcElement.dataset.serviceid = dbNamePartsArr[1];    // kick
      //  e.srcElement.dataset.channelid = dbNamePartsArr[2];  // streamer
      //  e.srcElement.dataset.videoid = dbNamePartsArr[3];   // abc123
      e.srcElement.dataset.dbname = t;
      scbt_user_chat_load_by_videoid(e);
      return false;
    }
  }


  return false;
}









function scbt_start_setup() {
    if (window.scbtFontUp) {  } else {
      body.insertAdjacentHTML('afterbegin', "<div id='scbtX' class='scbtX'> <button id='scbtToggleButton2' class='scbtToggleButton2 icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'><div></div><div></div><div></div></button>  <button id='scbtToggleButton' class='scbtToggleButton icon-button topbar-menu-button-avatar-button' aria-label='Click Me' aria-haspopup='false'>⚙</button></div>");
      window.scbtXRef = document.body.getElementsByClassName('scbtX')[0];
      scbt_get_str_dbname();
      window.scbtIsLoaded = false;
      window.scbtHeightSize = 1;
      window.scbtFontSize = 1;
      window.scbtStreamList = [];
      window.scbtgmSpoken = [];
      window.scbtAnnotations = [];
      window.scbtYTComments = [];
      window.arrayOfIds = [];
      window.scbtOptions = {};
      window.scbtOptions.scbtBorderColor = '#ff0000';
      window.scbtelems = document.body.querySelectorAll('.abc123');
      window.scbtToSearchFor = '.abc123';
      window.scbtKeybindsOn = false;
      window.scbtVoiceOn = false;
      window.scbtApiKeyOn = false;
      window.scbtAPICopyOn = false;
      window.scbtSingleUserOn = false;
      window.scbtClearAPI = false;
      window.scbtAutoSavingOn = false;
      window.scbtAutoShowingOn = false;
      window.scbtVODIs = false;
      window.scbtFontUp = 1;

      if ( window.hasOwnProperty('scbtArrayOfIds') ) {  } else { window.scbtArrayOfIds = []; }
      if ( window.hasOwnProperty('scbtUniqueMessageIds') ) {  } else { window.scbtUniqueMessageIds = []; }
      if ( window.hasOwnProperty('scbtBlockedWords') ) {  } else { window.scbtBlockedWords = []; }

      setTimeout(function() {
        window.scbtMentionMenuRef = window.scbtXRef;
        window.scbtCloseMentionButtonRef = window.scbtXRef;

        window.scbtChatInputRef = window.scbtXRef;
        window.scbtChatSettingsMenuRef = window.scbtXRef;
        window.scbtChatWrapperLiveRef = window.scbtXRef;
        window.scbtSideMenuRef = window.scbtXRef;
        
        window.scbtChatWrapperRef = window.scbtXRef;
        window.scbtChatARef = window.scbtXRef;
        window.scbtChatBRef = window.scbtXRef;
        window.scbtCloseButtonRef = window.scbtXRef;
        window.scbtChatContentRef = window.scbtXRef;
        
        window.scbtChatMenuRef = window.scbtXRef;
        window.scbtChatSearchInputTextRef = window.scbtXRef;
        window.scbtChatSearchStartsWithButtonRef = window.scbtXRef;
        window.scbtChatSearchUserButtonRef = window.scbtXRef;
        window.scbtChatSearchKeywordButtonRef = window.scbtXRef;
        window.scbtChatSearchFullButtonRef = window.scbtXRef;

        window.scbtChatPreviousTitleRef = window.scbtXRef;
        window.scbtChatPreviousWrapperRef = window.scbtXRef;
        window.scbtOptionsTitleRef = window.scbtXRef;
        window.scbtOptionsWrapperRef = window.scbtXRef;

        window.scbtChatLogRef = window.scbtXRef;
        window.scbtChatPreviousContentRef = window.scbtXRef;
        window.scbtvideo6Ref = window.scbtXRef;
        window.scbtvideo7Ref = window.scbtXRef;
        window.scbtSocialMediaShareOptionsRef = window.scbtXRef;
        window.scbtSocialMediaShareCustomOptionsRef = window.scbtXRef;
        window.scbtSubmitButtonRef = window.scbtXRef;
        window.scbtStatusRef = window.scbtXRef;
        window.scbtCancelOptionsMenuRef = window.scbtXRef;

        window.scbtA = window.scbtXRef;
        window.scbtB = window.scbtXRef;
        window.scbtC = window.scbtXRef;
        
        window.scbtHighlightsMenuRef = window.scbtXRef;
        window.scbtKeyboardContainerRef = window.scbtXRef;
        scbt_helper_options_set_up();
      }, 6000);
    }
}



chrome.runtime.onMessage.addListener(
  function(request, sender, goCapture) {
    
    console.log(request);

    if (typeof request.message === 'object') {

    }

    if (request.message === 'clicked' || request.message === 'purplepeoplemeeterchatloaded') {
      scbt_start_setup();
    }

    if (window.scbtKeybindsOn === true) {
      if (request.message === 'purplepeoplemeetercommand1') {
        scbt_user_command1();
      }
      if (request.message === 'purplepeoplemeetercommand2') {
        scbt_user_command2();
      }
      if (request.message === 'purplepeoplemeetercommand3') {
        scbt_user_command3();
      }
      if (request.message === 'purplepeoplemeetercommand4') {
        scbt_user_command4();
      }
    }
});