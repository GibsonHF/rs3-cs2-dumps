//
function script1930(int0: component, int1: component, int2: int, int3: unknown_int, int4: struct): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = script1931(int2, int3);
    int6 = (int6 + 1);
    CC_FIND(int0, int6++);
    CC_SETTEXT(struct_getparam(int4, 7505));
    CC_FIND(int0, int6++);
    CC_SETTEXT(struct_getparam(int4, 7506));
    CC_FIND(int0, int6++);
    CC_SETGRAPHIC(struct_getparam(int4, 7508));
    if ((varbitplayer_42072 == 1)) {
        CC_FIND(int0, int6++);
        CC_SETTEXT(script4583(int9, `Includes ${inttostring(int9, 10)} unlock`, `Includes ${inttostring(int9, 10)} unlocks`));
        if ((int9 > 0)) {
            CC_SETHIDE(false);
        } else {
            CC_SETHIDE(true);
        };
        int8 = MAX(0, (int9 * 25));
        CC_FIND(int0, (int6 + 3));
        if ((int8 == 0)) {
            CC_SETTEXT("Owned");
        } else {
            CC_SETTEXT(inttostring(int8, 10));
        };
        if (((int9 <= 0) || (int8 > (varplayer_1297 - varbitplayer_42073)))) {
            int5 = 1;
        };
        script13989(int0, 41397 as struct, int6, 0, 0, 0);
        CC_FIND(int1, 0);
        CC_SETHIDE(false);
    };
    return;
}