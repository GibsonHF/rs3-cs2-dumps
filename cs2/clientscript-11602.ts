//
function script11602(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = -1;
    var int5 = -1;
    var long0 = -1n;
    var int6 = 5;
    var int7 = 0;
    var int8 = IF_GETWIDTH(int0);
    var string0 = "";
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    [int3, int4, int5, long0] = script11603(int2);
    while ((int3 != -1 as obj)) {
        script10410(int0, int1, 28547 as struct, 0, int7, int8, 39, int2, false, "");
        if ((CC_FIND(int1, int2) == 1)) {
            CC_SETOPBASE(`${script4033(int3)}${script18300(int3)}`);
            CC_SETOP(1, "Detailed repeat");
            CC_SETOP(2, "Immediate repeat");
        };
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(45, 39, 0, 0);
        CC_SETPOSITION(int6, int7, 0, 0);
        CC_SETMAXLINES(1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        switch (int4) {
            case 0: {
                CC_SETTEXT("Bought");
                break;
            }
            case 1: {
                CC_SETTEXT("Sold");
                break;
            }
        };
        script2731(int0, CC_GETID(), 3);
        int6 = (int6 + 45);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(225, 39, 1, 0);
        CC_SETPOSITION(int6, int7, 0, 0);
        CC_SETMAXLINES(2);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT(script18300(int3));
        script2731(int0, CC_GETID(), 3);
        int6 = (int8 - (125 + 50));
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION((int6 + 3), (int7 + 2), 0, 0);
        CC_SETOBJECT_ALWAYSNUM(int3, int5);
        CC_SETONMOUSEREPEAT(callback(script9564, int3, -2147483645, -2147483643));
        int6 = (int6 + 50);
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(125, 39, 0, 0);
        CC_SETPOSITION(int6, (int7 + 2), 0, 0);
        CC_SETMAXLINES(2);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(1, 1, 0);
        string0 = script17372(long0, 9, 1);
        if ((int5 > 1)) {
            string0 = `${string0}<br>${script17372(DIVIDE_LONG(long0, INT_TO_LONG(int5)), 9, 1)} each`;
        };
        CC_SETTEXT(string0);
        script2731(int0, CC_GETID(), 3);
        int6 = 5;
        int7 = (int7 + (39 + 5));
        [int3, int4, int5, long0] = script11603(++int2);
    };
    IF_SETSCROLLSIZE(int8, MAX(IF_GETHEIGHT(comp(1638, 9)), int7), comp(1638, 9));
    script7791(comp(1638, 5), comp(1638, 9));
    return;
}