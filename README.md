This software is a [Greasemonkey](https://en.wikipedia.org/wiki/Greasemonkey) extension, which adds a few features to [Newspapers.com](https://newspapers.com), both for subscribers and free users.

Specifically, this is what it gives you:

- An "autoscroll" button at the bottom of the page, allowing you to see all results without clicking "Show more results" two hundred times.
- A "scrape links" button, which will automatically generate properly formatted Wikitext citation templates for every single result on the page.

For example, the following citations were generated automatically from [this search](https://www.newspapers.com/search/#query=%22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc), with 48 results:
> ``&lt;!-- Query: %22peepee+poopoo%22&sort=facet_year_month_day+asc%2C+score+desc --&gt;``
> ``<ref name="scrounge00001">{{cite newspaper|url=https://www.newspapers.com/image/517561363/?terms=%22peepee%20poopoo%22&match=1|date=1981-03-01|page=62|title=Page 62|newspaper=The South Bend Tribune|location=South Bend, Indiana}}</ref><!-- SUN --><!-- M:2 -->``
> ``<ref name="scrounge00002">{{cite newspaper|url=https://www.newspapers.com/image/172063371/?terms=%22peepee%20poopoo%22&match=1|date=1983-09-06|page=11|title=Page 11|newspaper=The Philadelphia Inquirer|location=Philadelphia, Pennsylvania}}</ref><!-- TUE --><!-- M:2 -->``
> ``<ref name="scrounge00003">{{cite newspaper|url=https://www.newspapers.com/image/578514941/?terms=%22peepee%20poopoo%22&match=1|date=1988-01-14|page=77|title=Page 77|newspaper=LA Weekly|location=Los Angeles, California}}</ref><!-- THU --><!-- M:2 -->``
> ``<ref name="scrounge00004">{{cite newspaper|url=https://www.newspapers.com/image/579232674/?terms=%22peepee%20poopoo%22&match=1|date=1988-02-18|page=95|title=Page 95|newspaper=LA Weekly|location=Los Angeles, California}}</ref><!-- THU --><!-- M:2 -->``
> ``(...)``
> ``<ref name="scrounge00045">{{cite newspaper|url=https://www.newspapers.com/image/243709955/?terms=%22peepee%20poopoo%22&match=1|date=2007-03-04|page=D01|title=Page D01|newspaper=Hartford Courant|location=Hartford, Connecticut}}</ref><!-- SUN -->``
> ``<ref name="scrounge00046">{{cite newspaper|url=https://www.newspapers.com/image/716648207/?terms=%22peepee%20poopoo%22&match=1|date=2007-08-10|page=17|title=Page 17|newspaper=The Rock Island Argus|location=Moline, Illinois}}</ref><!-- FRI --><!-- M:2 -->``
> ``<ref name="scrounge00047">{{cite newspaper|url=https://www.newspapers.com/image/716652545/?terms=%22peepee%20poopoo%22&match=1|date=2007-08-17|page=17|title=Page 17|newspaper=The Rock Island Argus|location=Moline, Illinois}}</ref><!-- FRI --><!-- M:2 -->``
> ``<ref name="scrounge00048">{{cite newspaper|url=https://www.newspapers.com/image/639884840/?terms=%22peepee%20poopoo%22&match=1|date=2013-07-14|page=45|title=Page 45|newspaper=Sunday News|location=Lancaster, Pennsylvania}}</ref><!-- SUN --><!-- M:2 -->``
> ``<!-- Citations generated by JPxG's PressPass Full Scrounge v1.0, 2021-10-01 -->``

After each citation template, there are embedded HTML notes specifying which day of the week the result is for (since newspaper articles tend to say "last Thursday" and the like quite often), as well as the number of mentions on the page if there's more than one.
For example, the March 4 2007 *Hartford Courant* only contained the query once, whereas the August 10 2007 *Rock Island Argus* after it contained the query twice.

Of course, many of the results on any given newspaper search are likely to be irrelevant or unnecessary; for this reason, it is recommended to individually go through each result and carefully select citations for your article.