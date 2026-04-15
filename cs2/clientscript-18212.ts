//
function script18212(int0: unknown_int, int1: int): unknown_int {
    var int2 = 0;
    var int3 = -1;
    var int4 = AND(int1, 1328831);
    int2 = 0;
    while ((int2 <= 21)) {
        if ((TESTBIT(int4, int2) == 0)) {
            int3 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667744, int2, 3, 0));
        };
        var int0 = script18210(int0, int3);
        int2 = (int2 + 1);
    };
    return int0;
}