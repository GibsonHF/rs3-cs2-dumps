//
function script18183(int0: unknown_int, int1: int): unknown_int {
    var int2 = -1;
    var int3 = AND(int1, 268435454);
    MES_TYPED(99, 0, `Filter: ${inttostring(int1, 10)} ${inttostring(int3, 10)}`);
    var int4 = 0;
    while ((int4 <= 24)) {
        if ((TESTBIT(int3, int4) == 0)) {
            int2 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667760, int4, 3, 0));
        } else {
            MES_TYPED(99, 0, `    Filter: ${inttostring(int4, 10)}`);
        };
        var int0 = script18180(int0, int2);
        int4 = (int4 + 1);
    };
    return int0;
}