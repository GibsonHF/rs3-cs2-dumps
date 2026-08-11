//
function script20898(int0: number): number {
    if ((STRING_LENGTH(varclient_6788) > 0)) {
        return 0;
    };
    if ((varbitplayer_19000 != 1)) {
        return 0;
    };
    if (((varplayer_13480 == -1) && (INV_SIZE(890 as inv) == INV_FREESPACE(890 as inv)))) {
        return 0;
    };
    IF_SETHIDE(true, comp(105, 224));  // stockmarket:offeritem_marketpriceicon ?
    CC_DELETEALL(comp(105, 229));  // stockmarket:box2 ?
    CC_DELETEALL(comp(105, 230));  // stockmarket:quantity_info ?
    IF_SETTEXT("", comp(105, 225));  // stockmarket:offertype_icon ?
    var int1 = 6881509;
    var int2 = 6881510;
    var int3 = 6881502;
    var int4 = 0;
    var int5 = 5;
    var int6 = 0;
    var int7 = IF_GETWIDTH(int3);
    var int8 = ((int7 - (4 * 5)) / 3);
    var int9 = 50;
    var int10 = ((50 / 2) - (32 / 2));
    var int11 = ((int8 - 36) - (5 * 2));
    if ((varplayer_13480 != -1)) {
        [int5, int6] = script20899(int1, int5, int6, int9, "Recent searches:");
        [int5, int6, int4] = script20900(int1, int2, int5, int6, int8, int9, varplayer_135, varplayer_13480, int10, int11, 1);
        [int5, int6, int4] = script20900(int1, int2, int5, int6, int8, int9, varplayer_135, varplayer_13481, int10, int11, 1);
        [int5, int6, int4] = script20900(int1, int2, int5, int6, int8, int9, varplayer_135, varplayer_13482, int10, int11, 1);
    };
    var int12 = 0;
    var int13 = INV_SIZE(890 as inv);
    if ((INV_FREESPACE(890 as inv) < int13)) {
        [int5, int6] = script20899(int1, int5, int6, int9, "Favourites:");
        while ((int12 < int13)) {
            [int5, int6, int4] = script20900(int1, int2, int5, int6, int8, int9, varplayer_135, INV_GETOBJ(890 as inv, int12), int10, int11, 2);
            int12 = (int12 + 1);
        };
    };
    var int14 = 0;
    stack(int2);
    stack(int14);
    int14 = (int14 + 1);
    while ((CC_FIND() == 1)) {
        CC_SETOBJECT_NONUM(cc_getparam(4677), 1);
    };
    if ((int5 > 5)) {
        int6 = ((int6 + int9) + 5);
    };
    varclient_6789 = int6;
    if ((int0 == 1)) {
        varclient_6790 = 0;
    } else {
        varclient_6790 = IF_GETSCROLLY(int3);
    };
    script11702(varclient_6789, varclient_6790);
    IF_SETONVARTRANSMIT(callback(script20897, 13480, 13481, 13482, 3), int3);
    return 1;
}