//
function script19017(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = (IF_GETNEXTSUBID(122552324) / ENUM_GETOUTPUTCOUNT(int2));
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    [int7, int7, int7, int7, int8, int9] = script19013(int0);
    [int3, int4, int5] = script19012(int0, enum_getvalue(0, 73, int2, varbitplayer_43520), 0);
    if ((CC_FIND(122552324, (varbitplayer_43520 * int6)) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((((int4 != -1) || (int5 != -1)) && (CC_FIND(122552324, ((varbitplayer_43520 * int6) + 2)) == 1))) {
        CC_SETGRAPHIC(-1);
    };
    if (((int9 != -1) && (CC_FIND(122552324, ((varbitplayer_43520 * int6) + 3)) == 1))) {
        CC_SETGRAPHIC(int9);
    };
    [int3, int4, int5] = script19012(int0, enum_getvalue(0, 73, int2, varbitplayer_43520), 1);
    if ((CC_FIND(122552324, (int1 * int6)) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((((int4 != -1) || (int5 != -1)) && (CC_FIND(122552324, ((int1 * int6) + 2)) == 1))) {
        CC_SETGRAPHIC(int4);
    };
    if (((int8 != -1) && (CC_FIND(122552324, ((int1 * int6) + 3)) == 1))) {
        CC_SETGRAPHIC(int8);
    };
    script19018(int0, int1, int2);
    return;
}