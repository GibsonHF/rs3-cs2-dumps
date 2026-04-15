//
function script3043(int0: component, int1: component): void {
    var int2 = (PARAWIDTH(IF_GETTEXT(int1), IF_GETWIDTH(int1), IF_GETFONTMETRICS(int1)) + 10);
    IF_SETSIZE((int2 + (2 * IF_GETX(int1))), 0, 1, 1, int0);
    CC_DELETEALL(int0);
    var int3 = 0;
    var int4 = 2;
    var int5 = 2;
    var int6 = (IF_GETWIDTH(int0) / 3);
    while ((int3 < 3)) {
        CC_CREATE(int0, 5, (int3 * int5));
        CC_SETGRAPHIC(18526 as graphic);
        CC_SETPOSITION((int3 * int6), 0, 0, 1);
        CC_SETSIZE(18, 18, 0, 0);
        CC_CREATE(int0, 4, ((int3 * int5) + 1));
        CC_SETPOSITION((((int3 * int6) + 18) + int4), 0, 0, 1);
        CC_SETSIZE(((int6 - 18) - (int4 * 2)), 0, 0, 1);
        CC_SETCOLOUR(11456736);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 0);
        switch (int3) {
            case 0: {
                CC_SETTEXT("Everybody");
                break;
            }
            case 1: {
                CC_SETTEXT("Friends");
                break;
            }
            case 2: {
                CC_SETTEXT("Nobody");
                break;
            }
        };
        int3 = (int3 + 1);
    };
    IF_SETONTIMER(callback(script3044, int0), int0);
    script3045();
    return;
}