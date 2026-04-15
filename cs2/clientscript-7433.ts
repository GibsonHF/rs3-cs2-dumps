//
function script7433(int0: int, int1: unknown_int, int2: unknown_int): void {
    var int0 = script7435(int1, int0);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    var int6 = 0;
    var int7 = comp(-1, 65535);
    var string0 = "";
    var int8 = 0;
    [int3, int4, int5, int6, int7, string0, int8] = script7434(int1);
    IF_SETTEXT(`${string0} <col=ffffff>${TOSTRING_LOCALISED(int0, 1)}</col>`, int7);
    var int9 = (int0 - int5);
    var int10 = (int6 - int5);
    var int11 = (IF_GETWIDTH(int3) - IF_GETWIDTH(int4));
    IF_SETPOSITION(SCALE(int9, int10, int11), 0, 0, 1, int4);
    return;
}