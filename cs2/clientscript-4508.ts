//
function script4508(int0: unknown_int, int1: unknown_int, int2: int, int3: int, int4: int, int5: int, int6: int): void {
    var int7 = 0;
    var int8 = -1 as struct;
    var int9 = -1;
    var int10 = -1;
    [int8, int9, int10] = script6195(int2);
    if ((int8 != -1 as struct)) {
        if (((int4 == -1) && (int9 != -1))) {
            var int4 = int9;
        };
        if (((int5 == -1) && (int10 != -1))) {
            var int5 = int10;
        };
        script4490(int8, int4, int5, int3, 0, varbitclient_40727, 1, int2, int6);
        varbitclient_40727 = (varbitclient_40727 + 1);
        if ((varbitclient_40727 == 7)) {
        } else {
        };
        if ((varbitclient_40728 == 0)) {
            varbitclient_40728 = int2;
        };
    };
    return;
}