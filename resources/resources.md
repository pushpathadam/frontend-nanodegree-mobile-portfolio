Looks like tech has bypassed some instructions from the 1st class. about using an actual mobile device instead of relying on page speed insights.

Part 1 
PageSpeedInsights optimized versions of image, Javascript and CSS resources

fonts & stylesheets load time for minified files
opensans 52ms
style.css 311ms
print.css 203ms


https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en


pizzeria 115x75 3kb -> ok for smallest phone, sucks above breakpoint 480px .. manually shrink to 480x360 with progressive compression to 10kb

profilepic.jpg 70x70 5kb

Renderblocking Javasript 
src async analytics.js


Gulp vs Grunt ..awesome workflows
http://www.smashingmagazine.com/2014/06/11/building-with-gulp/
http://stackoverflow.com/questions/26273358/gulp-minify-all-css-files-to-a-single-file