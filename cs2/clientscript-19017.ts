//
function script19017(int0: struct, int1: int, int2: cs2enum): void {
    var int3 = -1 as graphic;
    var int4 = -1 as graphic;
    var int5 = -1 as graphic;
    var int6 = (IF_GETNEXTSUBID(comp(1870, 4)) / ENUM_GETOUTPUTCOUNT(int2));
    var int7 = -1;
    var int8 = -1 as graphic;
    var int9 = -1 as graphic;
    [int7, int7, int7, int7, int8, int9] = script19013(int0);
    [int3, int4, int5] = script19012(int0, enum_getvalue(0, 73, int2, varbitplayer_43520), 0);
    if ((CC_FIND(comp(1870, 4), (varbitplayer_43520 * int6)) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((((int4 != -1 as graphic) || (int5 != -1 as graphic)) && (CC_FIND(comp(1870, 4), ((varbitplayer_43520 * int6) + 2)) == 1))) {
        CC_SETGRAPHIC(-1 as graphic);
    };
    if (((int9 != -1 as graphic) && (CC_FIND(comp(1870, 4), ((varbitplayer_43520 * int6) + 3)) == 1))) {
        CC_SETGRAPHIC(int9);
    };
    [int3, int4, int5] = script19012(int0, enum_getvalue(0, 73, int2, varbitplayer_43520), 1);
    if ((CC_FIND(comp(1870, 4), (int1 * int6)) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((((int4 != -1 as graphic) || (int5 != -1 as graphic)) && (CC_FIND(comp(1870, 4), ((int1 * int6) + 2)) == 1))) {
        CC_SETGRAPHIC(int4);
    };
    if (((int8 != -1 as graphic) && (CC_FIND(comp(1870, 4), ((int1 * int6) + 3)) == 1))) {
        CC_SETGRAPHIC(int8);
    };
    script19018(int0, int1, int2);
    return;
}