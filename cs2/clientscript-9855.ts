//
function script9855(int0: component, int1: int, int2: int, int3: int, int4: obj, int5: int, int6: int, int7: int, int8: int, int9: boolean): void {
    var int10 = int6;
    var int11 = MIN(6, int1);
    var int12 = 90;
    if ((int6 >= 6)) {
        int12 = (int12 * 2);
        int11 = (int1 - 6);
        int10 = (int6 - 6);
    };
    var int13 = (((504 - (int11 * 65)) - ((int11 - 1) * 15)) / 2);
    var int14 = (int13 + (int10 * (65 + 15)));
    var int15 = script3506(int2);
    var string0 = `${inttostring(int5, 10)}x ${OC_NAME(int4)}`;
    if ((int15 > varplayer_3079)) {
        string0 = strconcat(string0, `<br> Claimable on: ${script3507(int15)}`);
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(65, 65, 0, 0);
    CC_SETPOSITION(int14, int12, 0, 0);
    if ((int15 == varplayer_3079)) {
        CC_SETGRAPHIC(9867 as graphic);
    } else {
        CC_SETGRAPHIC(9868 as graphic);
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(20, 20, 0, 0);
    CC_SETPOSITION(int14, int12, 0, 0);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(57 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT(inttostring((int6 + 1), 10));
    if (((int9 == false) && (varbitplayer_20806 == 1))) {
        if ((int15 >= varplayer_3079)) {
            varbitplayer_47669 = (varbitplayer_47669 + 1);
        };
        return;
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    if ((int15 <= varplayer_3079)) {
        if ((script9961(int6) == 1)) {
            CC_SETGRAPHIC(9870 as graphic);
        } else {
            CC_SETGRAPHIC(9869 as graphic);
        };
        CC_SETSIZE(30, 30, 0, 0);
        CC_SETPOSITION((int14 + 18), (int12 + 18), 0, 0);
    };
    if (((int15 >= varplayer_3079) && (script9961(int6) != 1))) {
        CC_SETOBJECT(int4, int5);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int14 + 16), (int12 + 17), 0, 0);
        CC_SETOP(1, "Info");
        CC_SETOPCURSOR(1, 172);
        CC_SETONOP(callback(script7774, string0, -2147483645, -2147483643, 0));
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(30, 30, 0, 0);
    CC_SETPOSITION((int14 + 45), (int12 + 45), 0, 0);
    if ((((int8 != -1) && (int15 >= varplayer_3079)) && (script9961(int6) != 1))) {
        if ((varbitplayer_47670 >= int8)) {
            CC_SETGRAPHIC(33447 as graphic);
        } else if ((((int6 - int7) - varbitplayer_47669) >= int3)) {
            CC_SETGRAPHIC(9875 as graphic);
        };
    };
    return;
}