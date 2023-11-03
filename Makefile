EMCC_FLAGS= --js-library "printey.js" --js-library "calcey.js"

all:
	emcc main.cpp $(EMCC_FLAGS) -o main.html --shell-file html_template/shell_minimal.html

clean:
	rm main.html main.js main.data main.wasm
