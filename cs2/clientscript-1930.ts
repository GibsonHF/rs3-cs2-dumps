//
function script1930(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = script1931(int2, int3);
    int6 = (int6 + 1);
    stack(int0);
    stack(int6);
    int6 = (int6 + 1);
    CC_FIND();
    CC_SETTEXT(struct_getparam(int4, 7505));
    stack(int0);
    stack(int6);
    int6 = (int6 + 1);
    CC_FIND();
    CC_SETTEXT(struct_getparam(int4, 7506));
    stack(int0);
    stack(int6);
    int6 = (int6 + 1);
    CC_FIND();
    CC_SETGRAPHIC(struct_getparam(int4, 7508));
    if ((varbitplayer_42072 == 1)) {
        stack(int0);
        stack(int6);
        int6 = (int6 + 1);
        CC_FIND();
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
        script13989(int0, 41397, int6, 0, 0, 0);
        CC_FIND(int1, 0);
        CC_SETHIDE(false);
    };
    return;
}