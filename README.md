# Broken Version of Map-App From React 2024 Course

I'm having a weird problem getting fetch to work with the `nominatim.openstreetmap.org` site.  When I submit the LocationSearch's form, I consistently get the error:

> 11:56:07.439
> XHRGET
> https://nominatim.openstreetmap.org/search?q=New York&format=geojson&addressdetails=1&layer=address&limit=5
> 
> 11:56:07.440 error thrown:  TypeError: NetworkError when attempting to fetch resource. search.ts:15:13

Tried all kinds of things.  So far:

* If I try my full URL in the browser, it works in Firefox, returning me reasonable JSON.
* If I use Stephen's zip archive of the project and run it locally, everything works.
* If I swap in Stephen's version of search.ts, I fail with the same error as I showed above.
* If I use Stephen's version of package.json and package-lock.json, I get the same error as above.
* I've tried using axios instead of fetch; I get the same kind of error, with a huge stack crawl from axios that isn't diagnostic.

I've diverged from the exact project (I tend to try things myself before I watch a video, but I don't see why I get the "TypeError: NetworkError"

Any ideas as to how to debug this, much welcome.
