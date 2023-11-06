
mylib = {
    $CALCEY: {
        calcey: function (x, y) {
            return x + y;
        }
    },
    printey: function () {
        Module.print('hello from lib1');
        Module.print('1 + 2 = ', CALCEY.calcey(1, 2));
    }

};

autoAddDeps(mylib, '$CALCEY');
addToLibrary(mylib);
