//
function script16221(int0: component, int1: component, int2: int, int3: int, int4: int): void {
    var int5 = IF_GETSCROLLX(int0);
    var int6 = (int5 - int2);
    if ((((int6 == 0) || (int2 < 0)) || (int2 > (IF_GETSCROLLWIDTH(int0) - int3)))) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    var int7 = 0;
    if ((int4 > 0)) {
        int7 = (ABS(int6) / int4);
    } else {
        int7 = ABS(int6);
    };
    var int8 = 0;
    if ((int6 < 0)) {
        int8 = (int5 + MIN(int7, ABS(int6)));
    } else {
        int8 = (int5 - MIN(int7, ABS(int6)));
    };
    IF_SETSCROLLPOS(int8, 0, int0);
    script1706(int1, int0, int8);
    IF_SETONTIMER(callback(script16221, int0, int1, int2, int3, --int4), int0);
    return;
}