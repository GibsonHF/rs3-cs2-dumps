//
function script7195(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
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