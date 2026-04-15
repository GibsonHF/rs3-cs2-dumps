//
function script1640(int0: component, int1: unknown_int, int2: component): void {
    var int3 = -1;
    var int4 = 3;
    CC_DELETEALL(int0);
    if ((varclient_6500 == 0)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, (int4 + 4), 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(struct_getparam(varplayer_8157, 7493));
        CC_SETTEXTALIGN(1, 1, 0);
    } else {
        while ((++int3 < varclient_6500)) {
            CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
            CC_SETSIZE(0, 24, 1, 0);
            CC_SETPOSITION(0, int4, 0, 0);
            if ((MODULO(int3, 2) == 0)) {
                script10010(28680 as struct);
            } else {
                script10010(28679 as struct);
            };
            CC_SETFILL(1);
            int4 = (int4 + 24);
        };
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 9, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(3));
        CC_SETTEXT(varclient_6499);
        CC_SETTEXTALIGN(1, 0, 0);
    };
    IF_SETSCROLLSIZE(0, int4, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    if ((int4 <= IF_GETHEIGHT(int0))) {
        CC_DELETEALL(int2);
        IF_SETHIDE(true, int2);
        return;
    };
    IF_SETHIDE(false, int2);
    script31(int2, int0, 798 as graphic, 795 as graphic, 796 as graphic, 797 as graphic, 793 as graphic, 794 as graphic);
    return;
}