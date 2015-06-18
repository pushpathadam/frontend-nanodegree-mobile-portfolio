Looks like tech has bypassed some instructions from the 1st class. about using an actual mobile device instead of relying on page speed insights.

# Part 1
PageSpeedInsights optimized versions of image, Javascript and CSS resources
https://developers.google.com/speed/docs/insights/about

## fonts & stylesheets load time for minified files
opensans 52ms
style.css 311ms
print.css 203ms


https://developers.google.com/products/
https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en
https://developers.google.com/fonts/docs/getting_started


http://www.filamentgroup.com/lab/font-loading.html
http://premium.wpmudev.org/blog/why-trying-to-get-95-on-google-pagespeed-insights-will-drive-you-mad/

pizzeria 115x75 3kb -> ok for smallest phone, sucks above breakpoint 480px .. manually shrink to 480x360 with progressive compression to 10kb

profilepic.jpg 70x70 5kb

## Renderblocking Javasript
src async analytics.js
make it https too

Issue with inconsistency between renders and PageSpeedInsights preview
1. google api works but is slower
2. hardcoded is faster but pulls in a default system font on the preview

Internet research:
false alarm- http://stackoverflow.com/questions/22011139/google-fonts-are-not-rendering-on-google-chrome
css workaround
body {
    -webkit-animation-delay: 0.1s;
    -webkit-animation-name: fontfix;
    -webkit-animation-duration: 0.1s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-timing-function: linear;
}

@-webkit-keyframes fontfix {
    from { opacity: 1; }
    to   { opacity: 1; }
}

# Part 2
Gulp vs Grunt ..awesome workflows
http://www.smashingmagazine.com/2014/06/11/building-with-gulp/
http://stackoverflow.com/questions/26273358/gulp-minify-all-css-files-to-a-single-file

Guide
https://github.com/JohnUdacity/grunt-workflow-guide
