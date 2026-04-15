//
function script11858(int0: int, int1: int, int2: int, int3: int, int4: component, int5: component): void {
    var int6 = IF_GETWIDTH(int4);
    var int7 = (int2 - int6);
    if ((int7 < 0)) {
        int7 = (int7 * -1);
    };
    var int8 = 1;
    var int9 = SCALE(int6, int2, 100);
    if ((int9 < 70)) {
        int8 = MIN(3, int7);
    } else if ((int9 < 90)) {
        int8 = MIN(2, int7);
    };
    var int10 = 0;
    if ((int6 < int2)) {
        int10 = (int6 + int8);
    } else {
        int10 = (int6 - int8);
    };
    int10 = MAX(1, MIN(int2, int10));
    IF_SETSIZE(int10, 19, 0, 0, int4);
    var int11 = 1;
    var int12 = 0;
    while ((int11 <= 10)) {
        int12 = (int3 * int11);
        if (((int6 < int12) && (int10 >= int12))) {
            script11885(int0, int1, int11, int4);
        };
        int11 = (int11 + 1);
    };
    if ((int6 == int2)) {
        IF_SETONTIMER(callback(), int5);
        return;
    };
    return;
}