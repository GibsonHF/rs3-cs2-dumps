//
function script18213(int0: unknown_int, int1: int): unknown_int {
    var int2 = -1;
    var int3 = AND(int1, 268435454);
    var int4 = 0;
    while ((int4 <= 26)) {
        if ((TESTBIT(int3, int4) == 0)) {
            int2 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667760, int4, 3, 0));
        };
        var int0 = script18210(int0, int2);
        int4 = (int4 + 1);
    };
    return int0;
}