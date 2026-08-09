//
function script16221(int0: number, int1: number, int2: number, int3: number, int4: number): void {
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
    stack(16221);
    stack(int0);
    stack(int1);
    stack(int2);
    stack(int3);
    var int4 = (int4 - 1);
    stack(int4);
    IF_SETONTIMER("iiiii", int0);
    return;
}