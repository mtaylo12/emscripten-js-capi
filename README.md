# js-capi

to run:
- make
- python -m http.server

the goal:
- what's the best way to call calcey from inside of printey?

the application:
- I have a similar project with an extensive javascript API (~4 functions implemented in JS and called in C, but those 4 functions rely on multiple JS modules)

the problem:
- I'm not sure if emscripten is built to support this...
- the only solution I see rn is to combine ALL the JS files I need into a single module to be included at compile time. this is messy and I dont like it.
