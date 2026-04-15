//
function script7195(int0: int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int, int9: int): void {
    if ((CAM2_GETCONTROLMODE() != 1)) {
        return;
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    [int10, int11, int12] = GET_MOUSEBUTTONS();
    if ((((int10 == 0) && (int11 == 0)) && (int12 == 0))) {
        return;
    };
    if (((CLIENTCLOCK() - int9) > 5)) {
        var [int7, int8] = [int0, int1];
    };
    var int13 = MAX(MIN(varclient_171, 20), -20);
    var int5 = (int5 + ((int0 - int7) * int13));
    var int6 = (int6 - ((int1 - int8) * int13));
    script7192(int2, int3, int4, int5, int6, int0, int1, CLIENTCLOCK());
    return;
}