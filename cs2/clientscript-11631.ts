//
function script11631(int0: component, int1: struct, int2: struct, int3: int, int4: int, int5: unknown_int, int6: int, int7: int): void {
    var int8 = 0;
    var int9 = 0;
    var int10 = GET_MOUSEX();
    var int11 = GET_MOUSEY();
    if ((CC_FIND(int0, int3) == 1)) {
        if ((int6 == -1)) {
            var int6 = CC_GETWIDTH();
        };
        if ((int7 == -1)) {
            var int7 = CC_GETHEIGHT();
        };
        int8 = script6355();
        int9 = script6356();
        if (((((int10 >= int8) && (int11 >= int9)) && (int10 < (int8 + int6))) && (int11 < (int9 + int7)))) {
            var int1 = int2;
        };
    };
    script11633(int0, int1, int3, int4, int5);
    return;
}