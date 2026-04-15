//
function script5118(int0: component): void {
    varclient_777 = -1;
    var string0 = "";
    var int1 = 0;
    var int2 = 0;
    var int3 = (126 + 1);
    while ((int2 <= int3)) {
        CC_CREATE(comp(1119, 9), 3, IF_GETNEXTSUBID(comp(1119, 9)));
        CC_SETSIZE(0, 14, 1, 0);
        CC_SETPOSITION(0, int1, 1, 0);
        CC_SETTRANS(255);
        CC_CREATE[1](comp(1119, 9), 5, IF_GETNEXTSUBID(comp(1119, 9)));
        CC_SETSIZE[1](12, 12, 0, 0);
        CC_SETPOSITION[1](5, (int1 + 1), 0, 0);
        string0 = enum_getvalue(0, 36, 3725 as cs2enum, int2);
        if ((STRING_LENGTH(string0) > 0)) {
            CC_CREATE[1](comp(1119, 9), 4, IF_GETNEXTSUBID(comp(1119, 9)));
            CC_SETSIZE[1](22, 14, 1, 0);
            CC_SETPOSITION[1](0, int1, 2, 0);
            CC_SETTEXTALIGN[1](0, 1, 0);
            CC_SETTEXTFONT[1](66 as fontmetrics);
            CC_SETTEXTSHADOW[1](true);
            CC_SETTEXT[1](string0);
            CC_SETOP(1, string0);
            CC_SETONOP(callback(script5119, int2));
            int1 = (int1 + CC_GETHEIGHT());
        } else {
            CC_SETHIDE(true);
            CC_SETHIDE[1](true);
            CC_CREATE[1](comp(1119, 9), 4, IF_GETNEXTSUBID(comp(1119, 9)));
            CC_SETHIDE[1](true);
        };
        int2 = (int2 + 1);
    };
    if ((int1 > IF_GETHEIGHT(comp(1119, 9)))) {
        IF_SETSCROLLSIZE(0, int1, comp(1119, 9));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1119, 9));
    };
    IF_SETSCROLLPOS(0, 0, comp(1119, 9));
    script31(comp(1119, 10), comp(1119, 9), 6507 as graphic, 6504 as graphic, 6505 as graphic, 6506 as graphic, 6499 as graphic, 6498 as graphic);
    script5121();
    IF_SETONVARTRANSMIT(callback(script5120, 1995, 1), int0);
    script5124();
    IF_SETONVARCTRANSMIT(callback(script5123, 696, 1), int0);
    return;
}