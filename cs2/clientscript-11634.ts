//
function script11634(int0: unknown_int): void {
    var int1 = script11800(script11798(int0));
    if ((script10505(int1) == 0)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as obj;
    var int5 = 1;
    while ((int5 <= 14)) {
        [int2, int3, int4] = script11797(int1, int5);
        if ((int4 != -1 as obj)) {
            if ((OC_WEARPOS(int4) > -1)) {
                script6995(int0, int5, 0, 0, 0, -1);
            } else {
                script6997(script7974(int0, int5), int5, int4, 93, comp(-1, 65535), 0, 0, -1, -1, int2, int3, int0, 0);
            };
        };
        int5 = (int5 + 1);
    };
    return;
}