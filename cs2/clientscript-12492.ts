//
function script12492(int0: int, int1: int, int2: component, int3: component): void {
    var int4 = IF_GETWIDTH(int2);
    var int5 = (int0 - int4);
    if ((int5 < 0)) {
        int5 = (int5 * -1);
    };
    var int6 = 1;
    var int7 = SCALE(int4, int0, 100);
    if ((int7 < 70)) {
        int6 = MIN(3, int5);
    } else if ((int7 < 90)) {
        int6 = MIN(2, int5);
    };
    var int8 = 0;
    if ((int4 < int0)) {
        int8 = (int4 + int6);
    } else {
        int8 = (int4 - int6);
    };
    int8 = MAX(1, MIN(int0, int8));
    IF_SETSIZE(int8, 19, 0, 0, int2);
    var int9 = 1;
    var int10 = 0;
    while ((int9 <= 6)) {
        int10 = (int1 * int9);
        if (((int4 < int10) && (int8 >= int10))) {
            script12493(int9, int2);
        };
        int9 = (int9 + 1);
    };
    if ((int4 == int0)) {
        IF_SETONTIMER(callback(), int3);
        return;
    };
    return;
}