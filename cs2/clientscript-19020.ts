//
function script19020(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = (IF_GETNEXTSUBID(122552324) / ENUM_GETOUTPUTCOUNT(int3));
    var int6 = ((int1 - 2) / int5);
    if ((int6 == varbitplayer_43520)) {
        return;
    };
    if (((int4 == 0) && (CC_FIND(int0, int1) == 1))) {
        CC_SETGRAPHIC(-1);
        return;
    };
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    [int7, int8, int9] = script19012(int2, enum_getvalue(0, 73, int3, varbitplayer_43520), 0);
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int9);
    };
    return;
}