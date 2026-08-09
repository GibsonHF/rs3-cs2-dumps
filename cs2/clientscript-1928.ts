//
function script1928(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = script1931(int2, int3);
    var string0 = "";
    stack(int0);
    stack(5);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETGRAPHIC(2383 as graphic);
    stack(int0);
    stack(4);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETSIZE(20, 55, 1, 0);
    CC_SETPOSITION(0, 10, 1, 0);
    CC_SETTEXTFONT(58 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(struct_getparam(int4, 7505));
    CC_SETCOLOUR(script10495(0));
    stack(int0);
    stack(4);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETSIZE(20, 100, 1, 0);
    CC_SETPOSITION(0, 70, 1, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXT(struct_getparam(int4, 7506));
    CC_SETCOLOUR(16777215);
    stack(int0);
    stack(5);
    stack(int6);
    int6 = (int6 + 1);
    CC_CREATE();
    CC_SETSIZE(200, 200, 0, 0);
    CC_SETPOSITION(2, 179, 1, 0);
    CC_SETGRAPHIC(struct_getparam(int4, 7508));
    if ((varbitplayer_42072 == 1)) {
        stack(int0);
        stack(4);
        stack(int6);
        int6 = (int6 + 1);
        CC_CREATE();
        CC_SETSIZE(30, 50, 1, 0);
        CC_SETPOSITION(0, 378, 1, 0);
        CC_SETTEXTFONT(56 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 20);
        CC_SETTEXT(script4583(int9, `Includes ${inttostring(int9, 10)} unlock`, `Includes ${inttostring(int9, 10)} unlocks`));
        CC_SETCOLOUR(16777215);
        if ((int9 > 0)) {
            CC_SETHIDE(false);
        } else {
            CC_SETHIDE(true);
        };
        int8 = MAX(0, (int9 * 25));
        if ((int8 == 0)) {
            string0 = "Owned";
        } else {
            string0 = inttostring(int8, 10);
        };
        if (((int9 <= 0) || (int8 > (varplayer_1297 - varbitplayer_42073)))) {
            int5 = 1;
        };
        script13980(int0, int1, 41397, 22, 405, 187, 0, 0, string0);
        CC_FIND(int1, 0);
        CC_SETHIDE(int5);
        int6 = IF_GETNEXTSUBID(int0);
        stack(int0);
        stack(5);
        stack(int6);
        int6 = (int6 + 1);
        CC_CREATE();
        CC_SETSIZE(187, 65, 0, 0);
        CC_SETPOSITION(22, 405, 0, 0);
        CC_SETGRAPHIC(2239 as graphic);
    };
    return;
}