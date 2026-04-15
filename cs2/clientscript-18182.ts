//
function script18182(int0: unknown_int, int1: int): unknown_int {
    var int2 = 0;
    var int3 = -1;
    var int4 = AND(int1, 1328831);
    MES_TYPED(99, 0, `Subcategory: ${inttostring(int1, 10)} ${inttostring(int4, 10)}`);
    int2 = 0;
    while ((int2 <= 21)) {
        if ((TESTBIT(int4, int2) == 0)) {
            int3 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667744, int2, 3, 0));
        };
        var int0 = script18180(int0, int3);
        int2 = (int2 + 1);
    };
    return int0;
}