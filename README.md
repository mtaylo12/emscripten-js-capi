# js-capi
This repo is a mini tutorial on using the JavaScript C API in Emscripten. 

to run:
- install emscripten
- **make**
- **python -m http.server**

the outline:
- main.cpp calls printey -> calcey -> multey, implemented in JS
- the emscripten compiler is used to link in these two functions (using addToLibrary in the js and --js-library at compile time)
- the emscripten compiler produces web assembly, javascript, and html to run the program in a browser

overview:
- example of basic nested JS libraries being used in cpp with emscripten
