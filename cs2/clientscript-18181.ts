//
function script18181(int0: number, int1: number): number {
    var int2 = 0;
    var int3 = -1;
    var int4 = AND(int1, 62);
    MES_TYPED(99, 0, `Category: ${inttostring(int1, 10)} ${inttostring(int4, 10)}`);
    while ((int2 <= 7)) {
        if ((TESTBIT(int4, int2) == 0)) {
            int3 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667728, int2, 3, 0));
        };
        var int0 = script18180(int0, int3);
        int2 = (int2 + 1);
    };
    return int0;
}