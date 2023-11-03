# js-capi

to run:
- install emscripten (see helpful links)
- **make**
- **python -m http.server**

the outline:
- main.cpp calls calcey and printey, implemented in JS
- the emscripten compiler is used to link in these two functions (using addToLibrary in the js and --js-library at compile time)
- the emscripten compiler produces web assembly, javascript, and html to run the program in a browser

the goal:
- what's the best way to call calcey from inside of printey?

the application:
- I have a similar project with an extensive javascript API (~4 functions implemented in JS and called in C, but those 4 functions rely on multiple JS modules)

the problem:
- I'm not sure if emscripten is built to support this...
- the only solution I see rn is to combine ALL the JS files I need into a single module to be included at compile time. this is messy and I dont like it.

helpful links:
- **emscripten c api**: https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#implement-a-c-api-in-javascript
- **installing emscripten**: https://emscripten.org/docs/getting_started/downloads.html
