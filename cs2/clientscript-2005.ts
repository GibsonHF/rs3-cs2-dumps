//[proc,loginscreen_slider_click]
function script2005(int0: component, int1: component, int2: int, int3: unknown_int): void {
    if (((int2 >= IF_GETX(int1)) && (int2 <= (IF_GETX(int1) + IF_GETWIDTH(int1))))) {
        return;
    };
    var int4 = (IF_GETWIDTH(int0) - IF_GETWIDTH(int1));
    var int5 = (IF_GETWIDTH(int1) / 2);
    if ((int2 == -1)) {
        var int2 = IF_GETWIDTH(int0);
    };
    int2 = MAX((int2 - int5), 0);
    int2 = MIN(int2, int4);
    var int6 = 5;
    var int7 = MIN(SCALE(int2, int4, int6), (int6 - 1));
    switch (int3) {
        case 3: {
            CLIENTOPTION_SET(5, int7);
            script1185(int0, int1);
            break;
        }
    };
    script15657();
    return;
}