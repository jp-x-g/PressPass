// ==UserScript==
// @name     PressPass FULL-SCROUNGE
// @version  1.5
// @grant    none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
// JPxG, 2021 September 9

//var load,execute,loadAndExecute;load=function(a,b,c){var d;d=document.createElement("script"),d.setAttribute("src",a),b!=null&&d.addEventListener("load",b),c!=null&&d.addEventListener("error",c),document.body.appendChild(d);return d},execute=function(a){var b,c;typeof a=="function"?b="("+a+")();":b=a,c=document.createElement("script"),c.textContent=b,document.body.appendChild(c);return c},loadAndExecute=function(a,b){return load(a,function(){return execute(b)})};

//loadAndExecute("//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js", function() {
//    $("#answer-6825715").css("border", ".5em solid black");
//});
// I have no idea what the hell this is, but I found it on Stack Overflow.

( function() {
  if (window.location.href.indexOf("newspapers.com/search/") >= 0){
    // If we're on a search page at newspapers.com
    //alert("Running a script, wow.");
    var newHTML         = document.createElement ('div');
    newHTML.innerHTML   = '             \
      <div id="gmSomeID">             \
        <p><center>\
        <button type="button" id="clickButton" class="clbutton">autoclick</button>\
         Select: <button type="button" id="saButton" class="sabutton">all</button>\
        <button type="button" id="snButton" class="snbutton">none</button>\
        Cites: <button type="button" id="scrapeButton" class="scbutton">generate</button>\
        <button type="button" id="clearButton" class="clbutton">clear</button>\
        </center></p>      \
      </div>                          \
      ';
    // Foolproof, but puts the buttons annoyingly at the very bottom of the page.
    //document.body.appendChild(newHTML);
    // This renders properly but is unclickable.
    document.getElementsByClassName("sticky-top")[0].appendChild(newHTML);
    document.getElementsByClassName("navbar")[0].appendChild(newHTML);
    document.getElementById("clickButton").addEventListener("click", autoClick);
    document.getElementById("saButton").addEventListener("click", checkAll);
    document.getElementById("snButton").addEventListener("click", uncheckAll);
    document.getElementById("scrapeButton").addEventListener("click", scrapeLinks); 
    document.getElementById("clearButton").addEventListener("click", clearLinks); 
    // Button HTML, and listener, for checkbox adding. Made unnecessary by the setInterval.
    // <button type="button" id="checksButton" class="ckbutton">add checkboxes</button>\
    // document.getElementById("checksButton").addEventListener("click", addBoxes); 
    var boxesID = setInterval(addBoxes, 500);
    function pauseBrowser(millis) {
      var date = Date.now();
      var curDate = null;
      do {
          curDate = Date.now();
      } while (curDate-date < millis);
    } // Function to set up everything for the script (will run when page is loaded).
    
    function autoClick() {
      var intervalID = setInterval(clickOnTheButton, 500);
    } // Function to click on the thing.
    function clickOnTheButton() {
      document.querySelector('.btn-block').click();
    } // Love to define an entire function to call from the setInterval which I'm defining as a variable inside another function
      // That's sarcasm, actually. I don't "love to" do this. But I have to.
      // called from the click listener, to execute one line of code.  
    
    function addBoxes() {
     var as = document.getElementsByClassName('search-record');
     var increment = 0;
     //alert("Starting");
     for(var asdf in as){    
        increment += 1;
        if (as[asdf].getElementsByClassName('czechbox').length != 0) {
          var useless = 0;
        }
        else {
        var boxHTML = document.createElement('div');
        boxHTML.innerHTML = '<input type="checkbox" id="czechbox" class="czechbox" name="czechbox' + increment + '" value="' + increment + '">';
        // Dummy string (just adds the text "hi"):
        //boxHTML.innerHTML = '<div id="czechbox" class="czechbox' + increment + '"><p>Hi</p></div>'
        //as[asdf].getElementsByClassName('h5')[0].getElementsByTagName('b')[0].appendChild(boxHTML);    
        // Appending the box HTML to the page number:
        //as[asdf].getElementsByClassName('text-uppercase')[0].appendChild(boxHTML);    
        // Append to the little newspaper icon.
        as[asdf].getElementsByClassName('icon-paper')[0].appendChild(boxHTML);    
        //alert(increment);
        } // If there isn't a checkbox already there.
     } // Iterate over all search-records.
    } // Function to add checkboxes (called automatically every so often).
    
    function checkAll() {
      // Get every box in the document.
      var bice = document.getElementsByClassName('czechbox');
      for (var asdf in bice){
        bice[asdf].checked = true;
      } // Iterate over each box.
    } // Function to check all checkboxes.
    
    function uncheckAll() {
      // Get every box in the document.
      var bice = document.getElementsByClassName('czechbox');
      for (var asdf in bice){
        bice[asdf].checked = false;
      } // Iterate over each box.
    } // Function to clear all checkboxes.
    
    function clearLinks() {
      // This is a really weird way to write this
      // But iterating over the whole array didn't work for some reason.
      // Whereas this does.
      if (document.getElementsByClassName("scrapedResults").length != 0){
        do {
         document.getElementsByClassName("scrapedResults")[0].remove();
        } while (document.getElementsByClassName("scrapedResults").length != 0);
      } // If there's a scrapedResults at all
    } // Function to clear all cites from the bottom.
    
    
    function scrapeLinks() {
      stringToPrint = ""
      var incrementor = 0;
      // This will get the whole "search-record", which includes the image to the left as well.
      // Seems to work perfectly fine either way, without having to rewrite any code.
      var as = document.getElementsByClassName('search-record');
      // This will just get "record-content", which includes only the stuff to the right of the image.
      // (It worked fine until I had to incorporate the checkboxes, which are in the left column.)
      //var as = document.getElementsByClassName('record-content');
      for(var asdf in as){
       try {
         incrementor += 1;
         //var stringy = String(as[asdf].innerHTML);
         var checked = String(as[asdf].getElementsByClassName('czechbox')[0].checked);
         if (checked == "true"){
          //as[asdf].getElementsByClassName('
          var aLink = String(as[asdf].querySelectorAll('a')[0].href);
          //alert(aLink);
          // This is the href for that entire whole block of stuff. We want it!
          var paper = String(as[asdf].getElementsByClassName('h5')[0].getElementsByTagName('b')[0].innerHTML);
          //alert(paper);
          // The name of the newspaper is h5.
          var aPage = String(as[asdf].getElementsByClassName('text-uppercase')[0].innerHTML);
          //alert(aPage);
          // The page number ("Page 69") is going to be the first element with the class name "text-uppercase".
          aPage = aPage.substring(aPage.indexOf("Page") + 4).trim();
          //alert(aPage);
          // Trim the "Paqe" from "Page 69" and remove trailing/leading spaces
          var aCity = String(as[asdf].getElementsByClassName('text-dark')[0].innerHTML);
          //alert(aCity);
          // This will look like: <span class="icon-news icon-location2 text-muted"></span> Concord, California
          aCity = aCity.substring(aCity.indexOf("</span>") + 7).trim();
          //alert(aCity);
          // Cut it off after the span tag ends.
          
          // Long, goofy bunch of code that tries to see if it says how many matches there were for the string.
          // If there are more than one, it adds them to a string as an edit note on that ref.
          // Otherwise, it makes that string nothing.
          var match = "XXX";
          try {
            match = String(as[asdf].getElementsByClassName('mt-auto')[0].innerHTML);
            if (match != "") {
              // It will be something like "<small>1 of 2 matches on this page.</small>"
              match = match.substring(match.indexOf("of ") + 3)
              match = match.substring(0, match.indexOf(" matches"))
              //alert("'" + match + "'");
            } else { match = "XXX"} // If it returns anything at all, else, store "XXX"
          } catch(error) {console.error(error)} // Catch error for if it hasn't loaded the "1 of 1 matches on this page" thing yet.
          if ((match == "XXX") || (match == "1") || (match == "")) {
            match = "";
          } else {match = "&lt;!-- M:" + match + " --&gt;";} // Make it a comment.
          // The above code makes an editnote to say how many matches there are (if it's more than 1).
          
          
          //alert(match);
          lastSpan = as[asdf].getElementsByTagName('span').length;
          var aDate = String(as[asdf].getElementsByTagName('span')[lastSpan - 1].innerHTML);
          // The date ("Sunday, October 07, 2007") is the third "span" in this block of HTML - unless there's that premium icon.
          // To avoid stupidity, we're going to just take the last span in the whole block, rather than "2" or "3".
            
            
          // Below, is a huge ugly chunk of code to format the date properly (YYYY-MM-DD).
          var aDay = "XXX";
          if (aDate.indexOf("Monday") != -1) { aDay = "MON"; };
          if (aDate.indexOf("Tuesday") != -1) { aDay = "TUE"; };
          if (aDate.indexOf("Wednesday") != -1) { aDay = "WED"; };
          if (aDate.indexOf("Thursday") != -1) { aDay = "THU"; };
          if (aDate.indexOf("Friday") != -1) { aDay = "FRI"; };
          if (aDate.indexOf("Saturday") != -1) { aDay = "SAT"; };
          if (aDate.indexOf("Sunday") != -1) { aDay = "SUN"; };
          // Store which day it was as a three-letter day name.
             aDate = aDate.replace("Monday, ", "");
            aDate = aDate.replace("Tuesday, ", "");
          aDate = aDate.replace("Wednesday, ", "");
           aDate = aDate.replace("Thursday, ", "");
             aDate = aDate.replace("Friday, ", "");
           aDate = aDate.replace("Saturday, ", "");
             aDate = aDate.replace("Sunday, ", "");
          // "Sunday, October 07, 2007" will not parse as a valid date, we have to make it just be the day.
          // After this, it will be "October 07, 2007".
            aDate = aDate.replace("January ", "01-");
           aDate = aDate.replace("February ", "02-");
              aDate = aDate.replace("March ", "03-");
              aDate = aDate.replace("April ", "04-");
                aDate = aDate.replace("May ", "05-");
               aDate = aDate.replace("June ", "06-");
               aDate = aDate.replace("July ", "07-");
             aDate = aDate.replace("August ", "08-");
          aDate = aDate.replace("September ", "09-");
            aDate = aDate.replace("October ", "10-");
           aDate = aDate.replace("November ", "11-");
           aDate = aDate.replace("December ", "12-");
          // Replace the months with digits.
          // After this, it will be "10-07, 2007".
          aDate = aDate.substring(aDate.length - 4) + "-" + aDate.substring(0, (aDate.length - 4))
          // Overly baroque way of moving the year to the front of the date.
          // After this, it will be "2007-10-07, ".
          aDate = aDate.replace(",","").trim();
          // After this, it will be "2007-10-07".
          //alert(aDate)
          let queryString = window.location.href.substring(window.location.href.indexOf("#query=") + 7)
          // The current URL, but only the part after the query string.
          // 

          // Now we are going to come up with a name for the ref titles.
          queryString = decodeURIComponent(queryString);
          // De-percent-encode the query.
          queryString = queryString.replace(/[^\x00-\x7F]/g, "");
          // Remove everything that isn't ASCII from the string.
          for(asdf of ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "[", "}", "]", "|", "\\", ":", ";", '"', "'", "<", ",", ">", ".", "?", "/"]){
            queryString = queryString.replaceAll(asdf, "");
          } // Strip out weird stuff that won't go into a ref template name.
          // Pad it out to be a little longer, and add a letter so the dreaded "integer reference name" issue does not come up.
          queryString = "n" + queryString + "0000000000";
          // Trim to ten characters.
          queryString = queryString.substr(0, 10);

          var citation = '&lt;ref name="' + queryString + ("00000" + incrementor).slice(-5) + '"&gt;'
          // Ref name: "scrounge" plus zero-padded five-digit ref identifier
          citation += '{{cite newspaper|url=' + aLink
          //citation += '{{cite newspaper|url=' 
          citation += '|date=' + aDate
          citation += '|page=' + aPage
          citation += '|title=Page ' + aPage
          citation += '|newspaper=' + paper;
          citation += '|location=' + aCity
          citation += '}}&lt;/ref&gt;'
          citation += '&lt;!-- ' + aDay + ' --&gt;'
          citation += match;
          //alert(citation);
          //          '  | publisher = "
          // Above is the prim-and-proper vertical cite style.
          // Maybe I will add an option to output this later.
          // For now? Who cares.
          
          //alert(citation);
          //alert(String(as[asdf].getElementsByTagName('span')));
          stringToPrint += "<br />\n" + citation;
          //alert(String(as[asdf].getElementsByTagName('span')));
         } // If the checkbox is checked.
         /*
         What we're getting from a "record-content" looks like this:
         <a href="/image/745226149/?terms=%22bradford%20island%22&amp;match=1" class="d-flex align-self-start flex-column">
         <h2 class="h5 mb-1"><b>Daily Transcript</b></h2>
          <p class="text-muted text-uppercase text-small mb-1">Page 6</p>
          <p class="ml-n1 text-dark mb-1" title="Location"><span class="icon-news icon-location2 text-muted"></span> Concord, California</p>
          <p class="ml-n1 mb-1 text-dark"><span class="news-date icon-news icon-cal text-muted mr-1"></span><span>Wednesday, January 06, 1960</span></p>
          <p class="text-muted mb-0 mt-auto"><small>1 of 1 matches on this page.</small></p></a>
         */
         //alert(String(as[asdf].href));
         // "undefined"
         //alert(String(as[asdf].innerHTML));
       } catch (error) {console.error(error)} // I hate javascript.
      } // For each entry in the whole array.
      //alert(namesToPrint);
      // The next block of code is some goofy stuff to generate edit-note comments for the source. Fairly baroque and pointless.
      let queryString = window.location.href.substring(window.location.href.indexOf("#query=") + 7)
      // The current URL, but only the part after the query string.
      stringToPrint = "&lt;!-- Query: " + queryString +" --&gt;<br/>\n" + stringToPrint
      let today = new Date().toISOString().slice(0, 10)
      stringToPrint += "<br/>\n&lt;!-- Citations generated by JPxG's PressPass Full Scrounge v1.5, " + today + " --&gt;"
      var stringHTML         = document.createElement ('div');
      stringHTML.innerHTML   = '<div id="scrapedResults" class="scrapedResults">' + stringToPrint + '</div>';
      document.body.appendChild(stringHTML);
      // This works, but freezes all Javascripts on the page (including loading of previews, etc).
      //document.body.innerHTML += stringToPrint;
    } // What to do when you clikc the freakin' button.
  } // End of what to do if it's a newspapers search page.
})(); // End of the line.