# js-capi
This repo is a mini tutorial on using the JavaScript C API in Emscripten on nested JS libraries. 

to run:
- install emscripten
- **make**
- **python -m http.server**

the outline:
- main.cpp calls printey -> calcey -> multey, implemented in JS
- the emscripten compiler is used to link in these two functions (using addToLibrary in the js and --js-library at compile time)
- the emscripten compiler produces web assembly, javascript, and html to run the program in a browser

helpful links:
- https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#implement-a-c-api-in-javascript

