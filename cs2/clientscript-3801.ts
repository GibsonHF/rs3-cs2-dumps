//
function script3801(): void {
    var int0 = -1;
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    CC_DELETEALL(comp(1253, 556));  // wheel_of_fortune:fake_op
    int0 = (int0 + 1);
    while ((int0 < 10)) {
        [int1, int2, int3] = script3614(int0);
        IF_SETOBJECT(int1, int2, enum_getvalue(0, 9, 15864 as cs2enum, int0));
        IF_SETGRAPHIC(enum_getvalue(0, 23, 15866 as cs2enum, int3), enum_getvalue(0, 9, 15865 as cs2enum, int0));
        script3923(int0);
        CC_CREATE(comp(1253, 556), 5, int0);  // wheel_of_fortune:fake_op
        script4407(enum_getvalue(0, 9, 6179 as cs2enum, int0), 1, 202);
        script4119(int1, int2, enum_getvalue(0, 9, 6179 as cs2enum, int0));
    };
    IF_SETONOP(callback(script3803, -1, 1), comp(639, 27));  // trh166:claim_button
    IF_SETONOP(callback(script3803, -1, 2), comp(639, 64));  // trh166:warning_confirm_click
    var int4 = 750;
    if ((varbitplayer_45647 == varplayer_3079)) {
        int4 = (int4 - (75 * (10 - script3613())));
        int4 = (int4 - (75 * varbitplayer_45659));
        IF_SETTEXT(inttostring(int4, 10), comp(639, 35));  // trh166:refresh_button_label
    };
    if (((varplayer_3079 == 6552) || (varplayer_3079 == 6559))) {
        int4 = (int4 - (150 * (10 - script3613())));
    } else {
        int4 = (int4 - (75 * (10 - script3613())));
    };
    int4 = MAX(0, int4);
    if ((varbitplayer_45647 == varplayer_3079)) {
        if ((int4 > 0)) {
            IF_SETTEXT(inttostring(int4, 10), comp(639, 35));  // trh166:refresh_button_label
        } else {
            IF_SETTEXT("FREE", comp(639, 35));  // trh166:refresh_button_label
        };
    } else {
        IF_SETTEXT("FREE", comp(639, 35));  // trh166:refresh_button_label
    };
    IF_SETTEXT("Gone Adventuring", comp(1253, 41));  // wheel_of_fortune:title_text
    IF_SETTEXTFONT(57 as fontmetrics, comp(1253, 41));  // wheel_of_fortune:title_text
    IF_SETPOSITION(80, 16, 0, 0, comp(1253, 41));  // wheel_of_fortune:title_text
    IF_SETGRAPHIC(1235 as graphic, comp(1253, 40));  // wheel_of_fortune:frame_icon
    IF_SETPOSITION(40, 12, 0, 0, comp(1253, 40));  // wheel_of_fortune:frame_icon
    return;
}