//
function script9366(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    var int9 = enum_getvalue(0, 26, 3689 as cs2enum, int3);
    if (((((int6 == 0) || (int5 == 0)) || (int3 == 0)) || (script4616(int1, int2) <= 0))) {
        return;
    };
    FROMDATE(int1);
    IF_SETTEXT(comp(701, 110));  // clan_noticeboard_broadcast:date_text
    IF_SETTEXT(script9365(), comp(701, 102));  // clan_noticeboard_broadcast:reltime_text
    IF_SETTEXT(enum_getvalue(0, 36, 3695, int2), 45940830);
    IF_SETTEXT(enum_getvalue(0, 36, 3687, int3), 45940806);
    if ((int9 != -1)) {
        if ((int4 > 0)) {
            IF_SETTEXT(enum_getvalue(0, 36, int9, int4), 45940798);
        } else {
            IF_SETTEXT("", comp(701, 62));  // clan_noticeboard_broadcast:subtype_text
        };
    } else {
        IF_SETTEXT("", comp(701, 62));  // clan_noticeboard_broadcast:subtype_text
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3696, int5), 45940814);
    if ((int6 >= 1)) {
        if ((int6 <= 200)) {
            IF_SETTEXT(inttostring(int6, 10), comp(701, 86));  // clan_noticeboard_broadcast:world_text
        } else if ((int6 == 201)) {
            IF_SETTEXT("N/A", comp(701, 86));  // clan_noticeboard_broadcast:world_text
        };
    } else if ((int6 == 201)) {
        IF_SETTEXT("N/A", comp(701, 86));  // clan_noticeboard_broadcast:world_text
    };
    IF_SETTEXT(enum_getvalue(0, 36, 3725, int7), 45940790);
    if ((varbitplayer_20998 == 1)) {
        IF_SETTEXT(`Broadcast will only be sent to ${enum_getvalue(0, 36, 3725, int7)}+`, comp(701, 46));  // clan_noticeboard_broadcast:ranklimit_text
    } else {
        IF_SETTEXT("Broadcast will be sent to the whole clan.", comp(701, 46));  // clan_noticeboard_broadcast:ranklimit_text
    };
    if ((int8 == 0)) {
        IF_SETTEXT("This event is not mandatory.", comp(701, 38));  // clan_noticeboard_broadcast:mandatory_text
    } else {
        IF_SETTEXT("This event is mandatory.", comp(701, 38));  // clan_noticeboard_broadcast:mandatory_text
    };
    script9369();
    script9374();
    IF_SETHIDE(true, comp(701, 7));  // clan_noticeboard_broadcast:showconfirm_disabled_layer
    return;
}