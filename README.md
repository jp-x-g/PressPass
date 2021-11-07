*Manually typing out citation templates for newspapers? Just because the newspaper is from 1890 doesn't mean your editing process has to be.*

This software is a [Greasemonkey](https://en.wikipedia.org/wiki/Greasemonkey) extension adding features to [Newspapers.com](https://newspapers.com), which work for subscribers as well as free users. It gives you a few very powerful tools on the search page, as well as for individual clippings. In my opinion, if you use Newspapers.com to write Wikipedia articles and you don't use this script, you're wasting your time on this planet. 

Here is what it does, and how to make it do those things.

## Table of contents
[Search page tools](#search-page)

[Individual newspages and clippings](#individual-newspages-and-clippings)

[Information about generated citations](#about-generated-citations)

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

## Individual newspages and clippings

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

## Generating citations

PressPass can be configured for five different citation styles: the English Wikipedia's [{{cite news}}](https://en.wikipedia.org/wiki/Template:Cite_news) template, [MLA](https://www.mla.org/MLA-Style) [9th Edition](https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_changes_9th_edition.html), [APA](https://apastyle.apa.org/) [7th Edition](https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/apa_changes_7th_edition.html), [Chicago](https://www.chicagomanualofstyle.org/tools_citationguide.html), and [BiBTeX](http://www.bibtex.org/).

> **EN.WP**: ``<ref name="Arizona Republic 1978-02-25 p7">{{Cite news|url=https://www.newspapers.com/clip/88492222/dems-in-disarray/|date=1978-02-25|page=7|title=Dems In Disarray|newspaper=Arizona Republic|location=Phoenix, Arizona|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Sat -->``

> **MLA9**: “Dems In Disarray.” *Arizona Republic*, 25 Feb. 1978, https://www.newspapers.com/clip/88492222/dems-in-disarray/. Accessed 7 Nov. 2021.

> **APA7**: Newspapers.com. (1978, February 25). *Dems in Disarray*. Arizona Republic. Retrieved November 7, 2021, from https://www.newspapers.com/clip/88492222/dems-in-disarray/.

> **Chicago**: “Dems in Disarray.” *Arizona Republic*. February 25, 1978. https://www.newspapers.com/clip/88492222/dems-in-disarray/.

> **BiBTeX**: ``@article{Dems-in-Disarray-1978, title = {Dems in Disarray} url = {https://www.newspapers.com/clip/88492222/dems-in-disarray/}, journal = {Arizona Republic}, publisher = {Newspapers.com}, year = {1978}, month = {Feb}, day = {25} }``


Citations are generated, by default, using Wikipedia citation templates. These contain an access URL, page number, newspaper name, location, and publication date. They also include an HTML note indicating which day of the week that was (as, in a tacit acknowledgement of their ephemeral relevance and planned obsolescence as artifacts of [Spectacle](https://en.wikipedia.org/wiki/Spectacle_&28critical_theory%29), newspapers have been saying stuff happened "last Thursday" for several hundred years). 

For example, the following citations were generated automatically from [this search page](https://www.newspapers.com/search/#query=%22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc), with 48 results:

> ``<!-- Query: %22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc -->``

> ``<ref name="The South Bend Tribune 1981-03-01 p62">{{Cite news|url=https://www.newspapers.com/image/517561363/?terms=%22peepee%20poopoo%22&match=1|date=1981-03-01|page=62|title=Page 62|newspaper=The South Bend Tribune|location=South Bend, Indiana|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Sun -->``
> ``<ref name="The Philadelphia Inquirer 1983-09-06 p11">{{Cite news|url=https://www.newspapers.com/image/172063371/?terms=%22peepee%20poopoo%22&match=1|date=1983-09-06|page=11|title=Page 11|newspaper=The Philadelphia Inquirer|location=Philadelphia, ``Pennsylvania|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Tue -->
> ``(...)``
> ``<ref name="Newsday Suffolk Edition 2006-10-11 p69">{{Cite news|url=https://www.newspapers.com/image/729886778/?terms=%22peepee%20poopoo%22&match=1|date=2006-10-11|page=69|title=Page 69|newspaper=Newsday (Suffolk Edition)|location=Melville, New York|via=Newspapers.com|access-date=2021-11-07}}</ref><!-- Wed -->``
> ``<!-- Citations generated by JPxG's PressPass v2.1, 2021-11-07 -->``

Of course, many of the results on any given newspaper search are likely to be irrelevant or unnecessary; for this reason, it is recommended to individually go through each result and carefully select citations for your article.