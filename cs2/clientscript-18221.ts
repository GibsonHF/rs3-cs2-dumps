//
function script18221(): void {
    var int0 = 88015012;
    var int1 = 88015014;
    var int2 = 88015016;
    var int3 = 88015015;
    var int4 = 88015003;
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int5 = 0;
    script13310(88015013, 88014998, 51, 8000);
    IF_SETTEXT(`${inttostring((varbitplayer_50528 / struct_getparam(47781, 4926)), 10)}/${inttostring(((struct_getparam(47781, 6142) * struct_getparam(47781, 6144)) / struct_getparam(47781, 4926)), 10)}`, 88015054);
    if ((varbitplayer_52723 == 1)) {
        IF_SETTEXT("Progress", 88015004);
    } else {
        IF_SETTEXT("Weekly<br>Progress", 88015004);
    };
    script13990(int4, -1, 7254);
    if ((script6431() == 0)) {
        while ((int5 < 3)) {
            if ((CC_FIND(int4, int5) == 1)) {
                CC_DELETE();
            };
            int5 = (int5 + 1);
        };
    } else {
        IF_SETPOSITION(0, 151, 0, 0, 88015003);
        IF_SETSIZE(0, 86, 1, 0, 88015003);
    };
    script7925(int1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 7, 1, 0);
    script7925(int2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 7, 1, 0);
    int5 = 0;
    while ((++int5 <= 7)) {
        IF_CREATENESTED(0, int5, 0, 0, 0, int1);
        CC_SETSIZE(16384, 16384, 2, 2);
        script18223(int1, int5, (int5 - 1), 1, 3);
        IF_CREATENESTED(0, int5, 0, 0, 0, int2);
        CC_SETSIZE(16384, 16384, 2, 2);
        script18223(int2, int5, (int5 - 1), 0, 2);
    };
    IF_SETONVARTRANSMIT(callback(script18220, 10297, 10298, 2), 88014878);
    IF_SETHIDE(PLAYERMEMBER(), 88015018);
    script18222(88015019);
    IF_SETPOSITION((6 + STRINGWIDTH(IF_GETTEXT(88015050), 168)), 4, 2, 0, 88015049);
    return;
}