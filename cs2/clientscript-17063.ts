//
function script17063(int0: int, string0: string): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = -1;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = script1886(1052);
    var int10 = script15709(1);
    [int5, int6] = script7775(1, string0, int0, -1n, -1, -1, -1, -1);
    if ((varclient_6403 != 0)) {
        script7773(string0, int1, int2, int0);
        return;
    };
    if ((script6431() == true)) {
        [int1, int2, int3, int4, int7, int8] = script8725(14, 1052);
        IF_SETPOSITION(int1, int2, int3, int4, int10);
    } else {
        [int1, int2, int7, int8] = script8717(1052);
        int1 = (((int7 / 2) + int1) - (int5 / 2));
        int2 = (((int8 / 2) + int2) - (int6 / 2));
        IF_SETPOSITION(int1, int2, 0, 0, int10);
    };
    return;
}