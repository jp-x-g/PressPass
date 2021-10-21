This software is a [Greasemonkey](https://en.wikipedia.org/wiki/Greasemonkey) extension, which adds a few features to [Newspapers.com](https://newspapers.com), which work for subscribers as well as free users. It gives you a few very powerful abilities on the search page, as well as for individual clippings. In my opinion, if you use Newspapers.com to write Wikipedia articles and you don't use this script, you're wasting your time on this planet.

An overview of all its features is below.

# Search page
![A screenshot of the search-page menu.](/demo1.png)
There are several buttons added to the search bar at the top of the page, which I will explain going from left to right.

## Autoclick and autoscroll
Search results, by default, show 20 entries per page, with a "show more results" button at the bottom. Seeing all of them means you have to scroll down manually, click the button, wait for more entries to appear, then scroll down again and click it again, and repeat until they're all on the page -- *or does it?*

### Autoclick
Does this for you. Click to turn it on or off -- it will turn red to show it's active (as it is in this screenshot). Keep in mind that the maximum it will show no matter what is 1,000 entries; if you want to go through more than that, you should use a date cutoff or refine your search terms.

### Autoscroll
When you scroll down a large results page, you may notice that it takes a while for the preview images to load. Walking away from the computer for a few minutes doesn't help either: it only loads preview images for the section of the page you're currently viewing. However, with PressPass, you can simply enable autoscroll, go have a cigarette, and come back to fully loaded image previews. Be sure to turn it off before you try to actually do anything.

*If you are a "computer whiz", you can change the timeout values in the script to make it go faster or slower. The line you want is "``window.scrollBy(0,15);``" -- increasing this makes it faster, and decreasing this makes it slower.)*

## Checkboxes
PressPass adds, on the left of the screen, a little checkbox next to each article. These checkboxes are used for two things: generating citations and opening pages in new tabs.

### Select all and select none
These do exactly what they say. Make sure you do not click these if you have a bunch of carefully-selected results.

## Cites
Personally, I prefer to generate these from the clippings page (since I can get specific links to headlines that way, and I generate clipping for all my citations at any rate). However, you can do it from the search page if you want. Select all the checkboxes for articles you want to cite, and click "generate": below the bottom of the page, source code for all the citations you selected will appear.

The "clear" button will take them away and allow you to regenerate them (if you make a mistake and want to select/deselect articles, for example).

## New tab
If you want to make clippings for each individual article (or read more than just the small preview), you will need to open them in a new tab or window. This is a pain in the neck -- sometimes you've got fifty articles and you want to read them all. In that case, save yourself some time and click the button. Since trying to open fifty tabs at once will cause all hell to break loose, it waits a little bit in between (it only opens one per second). Once you click this, there'll be a confirmation window: after that there's no going back unless you close the original search page. Don't open a thousand links at once unless you're *really* sure it's a good idea.
## Links
This button will toggle between whether search result links go to the **image** or **newspage** for that result.
### Image
If you're a subscriber, this is probably what you want: these give you the scan of that newspaper (which allows you to read it as it was printed, and most importantly, take clippings).
### Newspage
If you do not have a subscription, you should go to these pages instead: they are formatted differently from the image pages, and will provide you with an [OCR](https://en.wikipedia.org/wiki/Optical_character_recognition) scan of the article's text, *even if you don't have an account on the site*. This can also be useful if you want to use a blockquote from a newspaper. Take caution, however. Especially on older newspapers, OCR can be total gibberish, or worse: seemingly accurate, but with messed-up numbers and names!

# Individual newspages and clippings

This is the simplest feature of the program, but in my opinion, it is the best and most useful. While it's possible to generate citations from the search page, these are worse: they don't have specific clipping links, and they don't have article titles (since this information is impossible to get without going to the newspage). Using PressPass to generate clipping citations allows you to fix both of these problems with virtually no effort. All you do is generate a clipping. If you type out the headline as the name of the clipping, this is a lot easier, but it works either way (you just have to manually type the headline into the citation).

Then you click "**copy**" from the social media sharing popup (if you've disabled this, you have to re-enable it). This will automatically copy the formatted citation.


It's easy as hell:

![A screenshot of the newspage page, while making a clipping.](/demo2.jpg)
![A screenshot of the newspage page, while making a clipping.](/demo3.jpg)
![A screenshot of the newspage page, while making a clipping.](/demo4.jpg)
![A screenshot of the newspage page, while making a clipping.](/demo5.jpg)

# About generated citations

Citations are generated using the [{{cite newspaper}}](https://en.wikipedia.org/wiki/Template:Cite_newspaper) template. They contain an access URL, publication date, page number, newspaper name and location. They also contain an HTML note indicating which day of the week that was: in a tacit acknowledgement of their ephemeral relevance and planned obsolescence as artifacts of [https://en.wikipedia.org/wiki/Spectacle_&28critical_theory%29](Spectacle), newspapers have been saying stuff happened "last Thursday" for several hundred years.

For example, the following citations were generated automatically from [this search page](https://www.newspapers.com/search/#query=%22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc), with 48 results:
> ``<!-- Query: %22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc -->``

> ``<ref name="scrounge00001">{{cite newspaper|url=https://www.newspapers.com/image/517561363/?terms=%22peepee%20poopoo%22&match=1|date=1981-03-01|page=62|title=Page 62|newspaper=The South Bend Tribune|location=South Bend, Indiana}}</ref><!-- SUN --><!-- M:2 -->``

> ``<ref name="scrounge00002">{{cite newspaper|url=https://www.newspapers.com/image/172063371/?terms=%22peepee%20poopoo%22&match=1|date=1983-09-06|page=11|title=Page 11|newspaper=The Philadelphia Inquirer|location=Philadelphia, Pennsylvania}}</ref><!-- TUE --><!-- M:2 -->``

> ``(...)``

> ``<ref name="scrounge00045">{{cite newspaper|url=https://www.newspapers.com/image/243709955/?terms=%22peepee%20poopoo%22&match=1|date=2007-03-04|page=D01|title=Page D01|newspaper=Hartford Courant|location=Hartford, Connecticut}}</ref><!-- SUN -->``

> ``<ref name="scrounge00046">{{cite newspaper|url=https://www.newspapers.com/image/716648207/?terms=%22peepee%20poopoo%22&match=1|date=2007-08-10|page=17|title=Page 17|newspaper=The Rock Island Argus|location=Moline, Illinois}}</ref><!-- FRI --><!-- M:2 -->``

> ``<ref name="scrounge00047">{{cite newspaper|url=https://www.newspapers.com/image/716652545/?terms=%22peepee%20poopoo%22&match=1|date=2007-08-17|page=17|title=Page 17|newspaper=The Rock Island Argus|location=Moline, Illinois}}</ref><!-- FRI --><!-- M:2 -->``

> ``<ref name="scrounge00048">{{cite newspaper|url=https://www.newspapers.com/image/639884840/?terms=%22peepee%20poopoo%22&match=1|date=2013-07-14|page=45|title=Page 45|newspaper=Sunday News|location=Lancaster, Pennsylvania}}</ref><!-- SUN --><!-- M:2 -->``

> ``<!-- Citations generated by JPxG's PressPass Full Scrounge v1.0, 2021-10-01 -->``

After each citation template, there are embedded HTML notes specifying which day of the week the result is for (since newspaper articles tend to say "last Thursday" and the like quite often), as well as the number of mentions on the page if there's more than one.
For example, the March 4 2007 *Hartford Courant* only contained the query once, whereas the August 10 2007 *Rock Island Argus* after it contained the query twice.

Of course, many of the results on any given newspaper search are likely to be irrelevant or unnecessary; for this reason, it is recommended to individually go through each result and carefully select citations for your article.