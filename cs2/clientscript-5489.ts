//
function script5489(): void {
    var int0 = 30;
    var int1 = 32;
    switch (unk11076()) {
        case 36:
        case 37:
        case 38:
        case 39:
        case 40: {
            int0 = 15;
            int1 = 22;
            break;
        }
    };
    var int2 = GET_MOUSEY();
    var int3 = GET_MOUSEX();
    var int4 = IF_GETWIDTH(comp(1477, 884));
    var int5 = IF_GETHEIGHT(comp(1477, 884));
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    [int6, int7, int8, int9] = script14244();
    var int10 = (int2 + int1);
    var int11 = int3;
    if (((int10 + int5) > int9)) {
        int10 = (int2 - (int5 + int1));
    };
    if (((int10 < int7) || (((int10 < int2) && ((int10 + int5) > int2)) || ((int10 >= int2) && ((int10 + int5) > int9))))) {
        int11 = (int3 - (int4 + int0));
        if ((int11 < int6)) {
            int11 = (int3 + int0);
        };
        int10 = (int2 - (int5 / 2));
        int10 = MIN(MAX(int10, int7), (int9 - int5));
    } else {
        int11 = (int3 - (int4 / 2));
        int11 = MIN(MAX(int11, int6), (int8 - int4));
    };
    IF_SETPOSITION(int11, (int10 + script20394(25)), 0, 0, comp(1477, 884));
    return;
}