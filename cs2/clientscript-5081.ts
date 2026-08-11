//
function script5081(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    if (((varclient_1095 == false) || (varclient_1095 == false))) {
        script5085(int0);
        return;
    };
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 200);
    IF_SETHIDE(false, comp(1114, 22));  // clan_field_setup:dropdown_container
    varclient_160 = int1;
    var int7 = (int1 * 10);
    if ((CC_FIND(int0, int7) == 1)) {
        CC_SETONTIMER(callback());
    };
    if ((CC_FIND(int0, (int7 + 3)) == 1)) {
        CC_SETGRAPHIC(6138 as graphic);
    };
    if ((CC_FIND(int0, (int7 + 5)) == 1)) {
        CC_SETGRAPHIC(6137 as graphic);
    };
    if ((CC_FIND(int0, (int7 + 7)) == 1)) {
        CC_SETGRAPHIC(6139 as graphic);
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
    CC_DELETEALL(comp(1114, 26));  // clan_field_setup:dropdown_options
    var int8 = 0;
    while ((int8 < int3)) {
        CC_CREATE(comp(1114, 26), 3, IF_GETNEXTSUBID(comp(1114, 26)));  // clan_field_setup:dropdown_options
        CC_SETHIDE(true);
        int8 = (int8 + 1);
    };
    var int9 = script5089(int2);
    var int10 = 0;
    int8 = 0;
    while ((int8 < int4)) {
        if ((int9 != int8)) {
            CC_CREATE(comp(1114, 26), 4, IF_GETNEXTSUBID(comp(1114, 26)));  // clan_field_setup:dropdown_options
            CC_SETSIZE(0, 12, 1, 0);
            CC_SETPOSITION(0, int10, 0, 0);
            CC_SETTEXTFONT(66 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(14140279);
            CC_SETTEXTSHADOW(false);
            CC_SETTEXT(enum_getvalue(0, 36, int2, int8));
            CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 14140279));
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script5084, int0));
            int10 = (int10 + CC_GETHEIGHT());
        } else {
            CC_CREATE(comp(1114, 26), 3, IF_GETNEXTSUBID(comp(1114, 26)));  // clan_field_setup:dropdown_options
            CC_SETHIDE(true);
        };
        int8 = (int8 + 1);
    };
    IF_SETPARAM_INT(1476, int6, comp(1114, 23));  // clan_field_setup:dropdown
    IF_SETPARAM_INT(1477, int10, comp(1114, 23));  // clan_field_setup:dropdown
    IF_SETSCROLLSIZE(0, int10, comp(1114, 26));  // clan_field_setup:dropdown_options
    script5082(int0);
    if ((int4 > 4)) {
        script31(73007131, 73007130, 6507, 6504, 6505, 6506, 6499, 6498);
    } else {
        CC_DELETEALL(comp(1114, 27));  // clan_field_setup:dropdown_scrollbar
    };
    return;
}