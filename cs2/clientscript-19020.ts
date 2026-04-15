//
function script19020(int0: component, int1: int, int2: struct, int3: cs2enum, int4: unknown_int): void {
    var int5 = (IF_GETNEXTSUBID(comp(1870, 4)) / ENUM_GETOUTPUTCOUNT(int3));
    var int6 = ((int1 - 2) / int5);
    if ((int6 == varbitplayer_43520)) {
        return;
    };
    if (((int4 == 0) && (CC_FIND(int0, int1) == 1))) {
        CC_SETGRAPHIC(-1 as graphic);
        return;
    };
    var int7 = -1 as graphic;
    var int8 = -1 as graphic;
    var int9 = -1 as graphic;
    [int7, int8, int9] = script19012(int2, enum_getvalue(0, 73, int3, varbitplayer_43520), 0);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int9);
    };
    return;
}