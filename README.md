![Hello!](/logo.png)
*Manually typing out citation templates for newspapers? Just because the newspaper is from 1890 doesn't mean your editing process has to be.*

This software is a [Greasemonkey](https://en.wikipedia.org/wiki/Greasemonkey) extension adding features to [Newspapers.com](https://newspapers.com), which work for subscribers as well as free users. It gives you a few very powerful tools on the search page, as well as for individual clippings. In my opinion, if you use Newspapers.com to write Wikipedia articles and you don't use this script, you're wasting your time on this planet. 

PressPass can be configured for five different citation styles: the English Wikipedia's [{{cite news}}](https://en.wikipedia.org/wiki/Template:Cite_news) template, [MLA](https://www.mla.org/MLA-Style) [9th Edition](https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_changes_9th_edition.html), [APA](https://apastyle.apa.org/) [7th Edition](https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/apa_changes_7th_edition.html), [Chicago](https://www.chicagomanualofstyle.org/tools_citationguide.html), and [BiBTeX](http://www.bibtex.org/).

Here is what it does, and how to make it do those things.

## Table of contents
**[Search page tools](#search-page)**
> [Autoclick and autoscroll](#auto)

> [Select all / none](#select)

> [Generate citations](#cites)

> [Auto-open in new tab](#new-tab)

**[Individual newspages](#individual-newspages)**
> [Generate citations](#individual-newspages)

**[Clippings](#clippings)**

**[Settings and configuration](#settings-and-configuration)**
> [Citation styles](#citation-styles)

> [{{cite news}} customization](#customization-of-wikipedia-citations)

**[Installation](#installation)**
> [Firefox](#firefox)

> [Chrome](#chrome)

> [Microsoft Edge](#microsoft-edge)

> [Safari](#safari)

> [Opera](#opera)

> [Brave](#brave)

> [Brave](#brave)

**[Shortcomings and things to watch out for](#shortcomings-and-things-to-watch-out-for)**


## Search page
![A screenshot of the search-page menu.](/demo1.png)
There are several buttons added to the search bar at the top of the page, which I will explain going from left to right.

### "Auto"
Search results, by default, show 20 entries per page, with a "show more results" button at the bottom. Seeing all of them means you have to scroll down manually, click the button, wait for more entries to appear, then scroll down again and click it again, and repeat until they're all on the page -- *or does it?*

#### Autoclick
Does this for you. Click to turn it on or off -- it will turn red to show it's active (as it is in this screenshot). Keep in mind that the maximum it will show no matter what is 1,000 entries; if you want to go through more than that, you should use a date cutoff or refine your search terms.

#### Autoscroll
When you scroll down a large results page, you may notice that it takes a while for the preview images to load. Walking away from the computer for a few minutes doesn't help either: it only loads preview images for the section of the page you're currently viewing. However, with PressPass, you can simply enable autoscroll, go have a cigarette, and come back to fully loaded image previews. Be sure to turn it off before you try to actually do anything.

*If you are a "computer whiz", you can change the timeout values in the script to make it go faster or slower. The line you want is "``window.scrollBy(0,15);``" -- increasing this makes it faster, and decreasing this makes it slower.)*

### "Select"
PressPass adds, on the left of the screen, a little checkbox next to each article. These checkboxes are used for two things: generating citations and opening pages in new tabs.

#### Select all and select none
These do exactly what they say. Make sure to avoid clicking these if you have a bunch of carefully-selected checkboxes, since it *really will* "select all" or "select none", undoing everything you just did.

### "Cites"
Personally, I prefer to generate these from the clippings page (since I can get specific links to headlines that way, and I generate clipping for all my citations at any rate). However, you can do it from the search page if you want. Select all the checkboxes for articles you want to cite, and click "generate": below the bottom of the page, source code for all the citations you selected will appear.

The "clear" button will take them away and allow you to regenerate them (if you make a mistake and want to select/deselect articles, for example).

### "New tab"
If you want to make clippings for each individual article (or read more than just the small preview), you will need to open them in a new tab or window. This is a pain in the neck -- sometimes you've got fifty articles and you want to read them all. In that case, save yourself some time and click the button. Since trying to open fifty tabs at once will cause all hell to break loose, it waits a little bit in between (it only opens one per second). Once you click this, there'll be a confirmation window: after that there's no going back unless you close the original search page. Don't open a thousand links at once unless you're *really* sure it's a good idea.
### "Links"
This button will toggle between whether search result links go to the **image** or **newspage** for that result.
#### Image
If you're a subscriber, this is probably what you want: these give you the scan of that newspaper (which allows you to read it as it was printed, and most importantly, take clippings).
#### Newspage
If you do not have a subscription, you should go to these pages instead: they are formatted differently from the image pages, and will provide you with an [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) scan of the article's text, *even if you don't have an account on the site*. This can also be useful if you want to use a blockquote from a newspaper. Take caution, however. Especially on older newspapers, OCR can be total gibberish, or worse: seemingly accurate, but with messed-up numbers and names!

## Individual newspages

This is the simplest feature of the program to use, but in my opinion, it is the best and most useful. While it's possible to generate citations from the search page, these are worse: they don't have specific clipping links, and they don't have article titles (since this information is impossible to get without going to the newspage). Using PressPass to generate clipping citations allows you to fix both of these problems with virtually no effort. All you do is generate a clipping. If you type out the headline as the name of the clipping, this is a lot easier, but it works either way (you just have to manually type the headline into the citation).

Then you click "**copy**" from the social media sharing popup (if you've disabled this, you have to re-enable it). This will automatically copy the formatted citation.


It's easy as hell:

![A screenshot of the newspage page, while making a clipping.](/demo2.jpg)
Open the page (using the "image" link setting). It will look like this. You may have to scrounge around and figure out which specific part of the page is the article you want: then click the "clip" button.
![A screenshot of the newspage page, while making a clipping.](/demo3.jpg)
Drag the rectangle around and size it to fit over your article. Type in the headline as the clipping title (you can type in anything you want, of course, but this greatly reduces the amount of work you have to do).
![A screenshot of the newspage page, while making a clipping.](/demo4.jpg)
By default, this social media sharing popup window is enabled whenever you make a clipping. You probably disabled it because it's annoying -- but you're about to see how based it can be.
![A screenshot of the newspage page, while making a clipping.](/demo5.jpg)
When you click the "copy" button, it will generate a properly formatted citation, with the clipping URL automatically included, and put that in your clipboard. It will also show it in the sharing box, so you can check to see if you messed up.

## Clippings

This one is automatic. Whenever you view a page for an individual clipping, a citation will be automatically generated in the lower right sidebar, below the clipping information. It will use whatever settings are specified; if you want to change these, click the "PressPass settings" button and change them. The citation on the page will update automatically.

![A screenshot of the clipping page.](/demo-clippingpage.jpg)

## Settings and configuration
The software's behavior when generating citations can be changed from the settings menu, as seen below (accessible on both search pages and clipping pages).

![A screenshot of the settings menu, from the clipping page.](/demo6.jpg)

### Citation styles

PressPass can be configured for five different citation styles: the English Wikipedia's [{{cite news}}](https://en.wikipedia.org/wiki/Template:Cite_news) template, [MLA](https://www.mla.org/MLA-Style) [9th Edition](https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_changes_9th_edition.html), [APA](https://apastyle.apa.org/) [7th Edition](https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/apa_changes_7th_edition.html), [Chicago](https://www.chicagomanualofstyle.org/tools_citationguide.html), and [BiBTeX](http://www.bibtex.org/).

Note that, with academic formats that include *italics*, the plain text that ends up in your clipboard will likely not work in text processors. For MLA, APA and Chicago citations, you will need to manually copy the text that appears *above* the "copy" box in the share window to retain the formatting.

> **EN.WP**: ``<ref name="ArizonaRepublic 1978-02-25 p7">{{Cite news|url=https://www.newspapers.com/clip/88492222/dems-in-disarray/|date=1978-02-25|page=7|title=Dems In Disarray|newspaper=Arizona Republic|location=Phoenix, Arizona|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Sat -->``

> **MLA9**: “Dems In Disarray.” *Arizona Republic*, 25 Feb. 1978, https://www.newspapers.com/clip/88492222/dems-in-disarray/. Accessed 7 Nov. 2021.

> **APA7**: Newspapers.com. (1978, February 25). *Dems in Disarray*. Arizona Republic. Retrieved November 7, 2021, from https://www.newspapers.com/clip/88492222/dems-in-disarray/.

> **Chicago**: “Dems in Disarray.” *Arizona Republic*. February 25, 1978. https://www.newspapers.com/clip/88492222/dems-in-disarray/.

> **BiBTeX**: ``@article{Dems-in-Disarray-1978, title = {Dems in Disarray} url = {https://www.newspapers.com/clip/88492222/dems-in-disarray/}, journal = {Arizona Republic}, publisher = {Newspapers.com}, year = {1978}, month = {Feb}, day = {25} }``


### Customization of Wikipedia citations
By default, citations are generated using Wikipedia citation templates, which (unlike the other styles) permit for a variety of customization. All Wikipedia citations contain an access URL, page number, newspaper name, location, and publication date. Other parameters are optional. Date format, and ref tag name style, can be customized.

#### Date format
This is fairly self-explanatory: citation templates can handle several date formats, as listed in [MOS:DATE](https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Dates,_months,_and_years). It should be noted that, if you are worried about clashing with other templates, transcluding the [{{use dmy dates}}](https://en.wikipedia.org/wiki/Template:Use_dmy_dates) or [{{use mdy dates}}](https://en.wikipedia.org/wiki/Template:Use_mdy_dates) template at the top of an article will automatically cause all Citation Style 1 templates to show dates in the respective format. <!--[Jonesey95](https://en.wikipedia.org/w/index.php?title=Help_talk:Citation_Style_1&diff=1051164713&oldid=1051164075)-->The default date format is the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) international standard, ``YYYY-MM-DD``. Examples of the other valid formats are given in the settings menu. 

#### Optional parameters
By default, all of these are enabled; they are not strictly required, and can be removed if you want. ``access-date`` will include the date that the source was last accessed (and the citation was generated). ``via`` will include the platform used to access the source (i.e. newspapers.com).

"Weekday" will include an HTML note indicating which day of the week the newspaper was published on. This is not a part of the citation template, but is available for convenience in writing articles: in a tacit acknowledgement of their ephemeral relevance and planned obsolescence as artifacts of [Spectacle](https://en.wikipedia.org/wiki/Spectacle_&28critical_theory%29), newspapers have been saying stuff happened "last Thursday" for several hundred years, and it is often useful to know the specific day some event happened.

#### Spacing
Citation templates, in articles, will function the same way regardless of how much spacing is in the source code. While they are typically written out on one line, they don't *need* to be, and are often split across multiple lines to be easily edited, or spaced out for readability. There are four options here; note that, as with the formatted text in academic citations, these will need to be manually copied from the text above the "copy" box in the share window to work properly.

Examples of source code generated from the four available settings can be seen below.
**Single-line unspaced:**
> ``<ref name="Arizona Republic 1978-02-25 p7">{{Cite news|url=https://www.newspapers.com/clip/88492222/dems-in-disarray/|date=1978-02-25|page=7|title=Dems in Disarray|newspaper=Arizona Republic|location=Phoenix, Arizona|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Sat -->``

**Single-line spaced:**
> ``<ref name="Arizona Republic 1978-02-25 p7">{{Cite news  | url         = https://www.newspapers.com/clip/88492198/dems-in-disarray/  | date        = 1978-02-25  | page        = 7  | title       = Dems In Disarray  | newspaper   = Arizona Republic  | location    = Phoenix, Arizona  | via         = Newspapers.com  | access-date = 2021-11-07}}</ref><!-- Sat -->``

**Multiple-line unspaced:**
> ``<ref name="Arizona Republic 1978-02-25 p7">{{Cite news``

> ``|url=https://www.newspapers.com/clip/88492198/dems-in-disarray/``

> ``|date=1978-02-25``

> ``|page=7``

> ``|title=Dems In Disarray``

> ``|newspaper=Arizona Republic``

> ``|location=Phoenix, Arizona``

> ``|via=Newspapers.com``

> ``|access-date=2021-11-07``

> ``}}</ref><!-- Sat -->``

**Multiple-line spaced:**

> ``<ref name="Arizona Republic 1978-02-25 p7">{{Cite news``

> ``  | url         = https://www.newspapers.com/clip/88492198/dems-in-disarray/``

> ``  | date        = 1978-02-25``

> ``  | page        = 7``

> ``  | title       = Dems In Disarray``

> ``  | newspaper   = Arizona Republic``

> ``  | location    = Phoenix, Arizona``

> ``  | via         = Newspapers.com``

> ``  | access-date = 2021-11-07``

> ``}}</ref><!-- Sat -->``

#### Ref name style
This is fairly self-explanatory. Some people prefer short ref names that don't clutter up article text, whereas some people prefer long ref names that easily distinguish one source from another. Styles 1 through 4 abbreviate the name of the publication (to 4, 6, 10 and 15 characters respectively); Style 5 includes the full name of the publication (no matter how long it is).

## Installation
PressPass is a browser script, which means that it should run fine whether you are on Micro$oft Windows, OS X, GNU/Linux, FreeBSD, OpenIndiana Hipster, or whatever.

### Firefox
Installing PressPass requires the wonderful open-source software "[Greasemonkey](https://en.wikipedia.org/wiki/Greasemonkey)", an add-on which can be installed from Mozilla's website [here](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/).

After you have installed GreaseMonkey, create a new userscript from the Greasemonkey menu, like this:

![A screenshot of the Greasemonkey menu, with "new userscript" highlighted.](/demo7.png)

Then, you will be taken to a page that looks like this:

![A screenshot of a blank new Greasemonkey script.](/demo8.png)

The raw source code for this script can be found [here](https://raw.githubusercontent.com/jp-x-g/PressPass/main/PressPass.js). Copy all of that, and paste it into the blank userscript (replacing the placeholder text that's already there). Congratulations, you has a PressPass.

### Chrome
For Chrome, there is a closed-source application called "[Tampermonkey](https://en.wikipedia.org/wiki/Tampermonkey)", which serves the same purpose as Greasemonkey, and can be installed from the Chrome web store [here](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en). When testing this, I was unable to get it to work; some more research may be needed.

### Microsoft Edge
It looks like there is a version of Tampermonkey for Edge [here](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)-->, although I don't know anything about it.

### Safari
I hear there is something called "GreaseKit", but I don't know much about Safari.

### Opera
There's supposed to be a Tampermonkey extension for Opera. Who knows.

### Brave
Apparently, all Chrome extensions work in Brave, which means you can install Tampermonkey in it. Some more information about adding extensions to Brave can be found [here](https://support.brave.com/hc/en-us/articles/360017909112-How-can-I-add-extensions-to-Brave-).

## Shortcomings and things to watch out for
### Author names
The names of authors are often not included in newspaper articles, and they are not encoded into Newspapers.com metadata. Accordingly, there is no way to include them in automatically-generated citations; they must be typed in manually if they are to be included at all.
### Julian-Gregorian date ambiguity
As [Jc3s5h](https://en.wikipedia.org/wiki/User:Jc3s5h) pointed out, Wikipedia's Citation Style 1 does not accept YYYY-MM-DD dates in the Julian calendar. Detailed information about the [Julian-Gregorian transition period](https://en.wikipedia.org/wiki/Old_Style_and_New_Style_dates) is far beyond the scope of this documentation, but suffice it to say that very old publications may require some special care to be cited properly. The *Pennsylvania Gazette*, for example, is available on Newspapers.com between 1728 and 1752, during which time British colonies in North America used Old Style Julian dates. Here be dragons!
### Mass citation generation
While it is possible to generate large amounts of citations from the search page, many of the results on any given newspaper search are likely to be irrelevant or unnecessary, so please be mindful when doing so and avoid [refbombing](https://en.wikipedia.org/wiki/Wikipedia:Citation_overkill). The mass-generation abilities of this software are intended to be an adjunct to manual review of the sources, not a weapon to induce blunt-force trauma. Before adding a newspaper citation to a Wikipedia article, review it and ensure that its content is both relevant and significant to the text it supports in the article. Adding large quantities of low-quality citations (especially ones that haven't been individually reviewed) is a nuisance, and is often considered disruptive.