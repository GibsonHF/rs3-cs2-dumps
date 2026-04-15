//
function script17090(int0: component, int1: component, int2: component, int3: int, int4: int, int5: int, string0: string): int {
    if (((int5 == 0) || (varbitplayer_28117 == 1))) {
        IF_SETHIDE(true, int0);
        return int3;
    };
    var int6 = script17091(int1, int2, string0);
    var int7 = MAX(1, (int4 / 39));
    var int8 = (int5 / int7);
    if ((MODULO(int5, int7) > 0)) {
        int8 = (int8 + 1);
    };
    var int9 = ((int6 + 32) + ((int8 - 1) * 39));
    IF_SETHIDE(false, int0);
    IF_SETSIZE(0, int9, 1, 0, int0);
    IF_SETPOSITION(0, int3, 0, 0, int0);
    return (((int3 + int9) + 5) + 5);
}