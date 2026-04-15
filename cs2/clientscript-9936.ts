//
function script9936(int0: component, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    if ((CC_FIND(int1, 0) == 1)) {
        CC_SETTRANS(50);
        CC_CREATE(int0, 4, 0);
        CC_SETPOSITION(2, 2, 0, 0);
        if ((varbitplayer_38842 == 1)) {
            CC_SETTEXT("Unavailable on Mobile");
        } else {
            CC_SETTEXT("Unavailable in Classic Mode");
        };
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTFONT(27 as fontmetrics);
        int2 = PARAWIDTH(CC_GETTEXT(), (IF_GETWIDTH(int0) - 4), CC_GETFONTMETRICS());
        int3 = (13 * PARAHEIGHT(CC_GETTEXT(), (IF_GETWIDTH(int0) - 4), CC_GETFONTMETRICS()));
        CC_SETSIZE(2, int3, 1, 0);
        CC_CREATE[1](int0, 5, 1);
        CC_SETSIZE[1](64, 64, 0, 0);
        CC_SETGRAPHIC[1](18690 as graphic);
        if (((IF_GETWIDTH(int0) < 64) || (IF_GETHEIGHT(int0) < ((66 + int3) + CC_GETY())))) {
            CC_SETHIDE[1](true);
        } else {
            CC_SETPOSITION[1](0, (int3 + 2), 1, 0);
        };
    } else {
        IF_SETONTIMER(callback(script9936, int0, int1), int0);
    };
    return;
}