//
function script18187(int0: unknown_int, int1: int): unknown_int {
    var int2 = 0;
    var int3 = -1;
    var int4 = AND(int1, 12858);
    MES_TYPED(99, 0, `Source: ${inttostring(int1, 10)} ${inttostring(int4, 10)}`);
    while ((int2 <= 13)) {
        if ((TESTBIT(int4, enum_getvalue(0, 0, 12188 as cs2enum, int2)) == 0)) {
            int3 = IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667776, int2, 3, 0));
        };
        var int0 = script18180(int0, int3);
        int2 = (int2 + 1);
    };
    return int0;
}