//
function script5081(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if (((varclient_1095 == false) || (varclient_1095 == false))) {
        script5085(int0);
        return;
    };
    SOUND_VORBIS_VOLUME(6185, 1, 0, 200);
    IF_SETHIDE(0, 73007126);
    varclient_160 = int1;
    var int7 = (int1 * 10);
    if ((CC_FIND(int0, int7) == 1)) {
        CC_SETONTIMER(callback());
    };
    if ((CC_FIND(int0, (int7 + 3)) == 1)) {
        CC_SETGRAPHIC(6138);
    };
    if ((CC_FIND(int0, (int7 + 5)) == 1)) {
        CC_SETGRAPHIC(6137);
    };
    if ((CC_FIND(int0, (int7 + 7)) == 1)) {
        CC_SETGRAPHIC(6139);
    };
    if ((CC_FIND(int0, (int7 + 4)) == 1)) {
        CC_SETTRANS(255);
    };
    if ((CC_FIND(int0, (int7 + 6)) == 1)) {
        CC_SETTRANS(255);
    };
    if ((CC_FIND(int0, (int7 + 8)) == 1)) {
        CC_SETTRANS(255);
    };
    CC_DELETEALL(73007130);
    var int8 = 0;
    while ((int8 < int3)) {
        CC_CREATE(73007130, 3, IF_GETNEXTSUBID(73007130));
        CC_SETHIDE(1);
        int8 = (int8 + 1);
    };
    var int9 = script5089(int2);
    var int10 = 0;
    int8 = 0;
    while ((int8 < int4)) {
        if ((int9 != int8)) {
            CC_CREATE(73007130, 4, IF_GETNEXTSUBID(73007130));
            CC_SETSIZE(0, 12, 1, 0);
            CC_SETPOSITION(0, int10, 0, 0);
            CC_SETTEXTFONT(66);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(14140279);
            CC_SETTEXTSHADOW(0);
            CC_SETTEXT(enum_getvalue(0, 36, int2, int8));
            CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 14140279));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script5084, int0));
            int10 = (int10 + CC_GETHEIGHT());
        } else {
            CC_CREATE(73007130, 3, IF_GETNEXTSUBID(73007130));
            CC_SETHIDE(1);
        };
        int8 = (int8 + 1);
    };
    IF_SETPARAM_INT(1476, int6, 73007127);
    IF_SETPARAM_INT(1477, int10, 73007127);
    IF_SETSCROLLSIZE(0, int10, 73007130);
    script5082(int0);
    if ((int4 > 4)) {
        script31(73007131, 73007130, 6507, 6504, 6505, 6506, 6499, 6498);
    } else {
        CC_DELETEALL(73007131);
    };
    return;
}