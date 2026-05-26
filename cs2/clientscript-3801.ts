//
function script3801(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    CC_DELETEALL(82117164);
    while ((++int0 < 10)) {
        [int1, int2, int3] = script3614(int0);
        IF_SETOBJECT(int1, int2, enum_getvalue(0, 9, 15864 as cs2enum, int0));
        IF_SETGRAPHIC(enum_getvalue(0, 23, 15866 as cs2enum, int3), enum_getvalue(0, 9, 15865 as cs2enum, int0));
        script3923(int0);
        CC_CREATE(82117164, 5, int0);
        script4407(enum_getvalue(0, 9, 6179 as cs2enum, int0), 1, 202);
        script4119(int1, int2, enum_getvalue(0, 9, 6179 as cs2enum, int0));
    };
    IF_SETONOP(callback(script3803, -1, 1), 41877531);
    IF_SETONOP(callback(script3803, -1, 2), 41877568);
    var int4 = 750;
    if ((varbitplayer_45647 == varplayer_3079)) {
        int4 = (int4 - (75 * (10 - script3613())));
        int4 = (int4 - (75 * varbitplayer_45659));
        IF_SETTEXT(inttostring(int4, 10), 41877539);
    };
    if (((varplayer_3079 == 6552) || (varplayer_3079 == 6559))) {
        int4 = (int4 - (150 * (10 - script3613())));
    } else {
        int4 = (int4 - (75 * (10 - script3613())));
    };
    int4 = MAX(0, int4);
    if (((varbitplayer_45647 == varplayer_3079) && (int4 > 0))) {
        IF_SETTEXT(inttostring(int4, 10), 41877539);
    } else {
        IF_SETTEXT("FREE", 41877539);
    };
    IF_SETTEXT("Gone Adventuring", 82116649);
    IF_SETTEXTFONT(57, 82116649);
    IF_SETPOSITION(80, 16, 0, 0, 82116649);
    IF_SETGRAPHIC(1235 as graphic, comp(1253, 40));
    IF_SETPOSITION(40, 12, 0, 0, 82116648);
    return;
}