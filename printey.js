mylib = {
    printey__deps: ['$CALCEY'],
    printey: function () {
        Module.print('2*(1) + 3*(2) = ', CALCEY.calcey(1, 2));
    }

};

addToLibrary(mylib);
