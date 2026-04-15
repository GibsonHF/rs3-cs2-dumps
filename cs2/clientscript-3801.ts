//
function script3801(): void {
    var int0 = -1;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    CC_DELETEALL(comp(1253, 556));
    while ((++int0 < 10)) {
        [int1, int2, int3] = script3614(int0);
        IF_SETOBJECT(int1, int2, enum_getvalue(0, 9, 15864 as cs2enum, int0));
        stack(enum_getvalue(0, 23, 15866 as cs2enum, int3));
        stack(enum_getvalue(0, 9, 15865 as cs2enum, int0));
        IF_SETGRAPHIC();
        script3923(int0);
        CC_CREATE(82117164, 5, int0);
        stack(0);
        stack(9);
        stack(6179);
        stack(int0);
        enum_getvalue();
        script4407(stack(), 1, 202);
        stack(int1);
        stack(int2);
        stack(0);
        stack(9);
        stack(6179);
        stack(int0);
        enum_getvalue();
        script4119(stack());
    };
    IF_SETONOP(callback(script3803, -1, 1), comp(639, 27));
    IF_SETONOP(callback(script3803, -1, 2), 41877568);
    var int4 = 750;
    if ((varbitplayer_45647 == varplayer_3079)) {
        int4 = (int4 - (75 * (10 - script3613())));
        int4 = (int4 - (75 * varbitplayer_45659));
        IF_SETTEXT(inttostring(int4, 10), comp(639, 35));
    };
    if (((varplayer_3079 == 6552) || (varplayer_3079 == 6559))) {
        int4 = (int4 - (150 * (10 - script3613())));
    } else {
        int4 = (int4 - (75 * (10 - script3613())));
    };
    int4 = MAX(0, int4);
    if (((varbitplayer_45647 == varplayer_3079) && (int4 > 0))) {
        IF_SETTEXT(inttostring(int4, 10), comp(639, 35));
    } else {
        IF_SETTEXT("FREE", comp(639, 35));
    };
    IF_SETTEXT("Gone Adventuring", comp(1253, 41));
    IF_SETTEXTFONT(57 as fontmetrics, comp(1253, 41));
    IF_SETPOSITION(80, 16, 0, 0, comp(1253, 41));
    stack(1235);
    stack(82116648);
    IF_SETGRAPHIC();
    IF_SETPOSITION(40, 12, 0, 0, 82116648);
    return;
}