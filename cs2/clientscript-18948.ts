//
function script18948(int0: unknown_int): [int, unknown_int] {
    var int1 = script10403(int0);
    var int2 = script10402(int0);
    if ((int2 == -1 as cs2enum)) {
        return [0, 1];
    };
    var int3 = enum_getvalue(0, 0, int2, int1);
    if ((((int2 == 6054 as cs2enum) && (varbitplayer_22875 == 1)) && (int1 == 0))) {
        int3 = 16777060;
    };
    var int4 = 1;
    if ((int3 == -1)) {
        int3 = 0;
        int4 = 0;
    };
    return [int3, int4];
}