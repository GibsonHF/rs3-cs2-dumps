//
function script4508(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = 0;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    [int8, int9, int10] = script6195(int2);
    if ((int8 != -1)) {
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