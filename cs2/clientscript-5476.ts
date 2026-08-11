//
function script5476(int0: number, int1: number): void {
    var int2 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int3 = -1;
    var string2 = "";
    var int4 = 0;
    if ((varbitplayer_3658 == 0)) {
        IF_SETHIDE(true, comp(1163, 102));  // dom_climber:checkbox_selected_layer
        IF_SETHIDE(false, comp(1163, 103));  // dom_climber:checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(1163, 102));  // dom_climber:checkbox_selected_layer
        IF_SETHIDE(true, comp(1163, 103));  // dom_climber:checkbox_deselected_layer
    };
    if ((varbitplayer_3797 == 0)) {
        IF_SETHIDE(true, comp(1163, 177));  // dom_climber:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1163, 178));  // dom_climber:checkbox_deselected_layer_1
    } else {
        IF_SETHIDE(false, comp(1163, 177));  // dom_climber:checkbox_selected_layer_1
        IF_SETHIDE(true, comp(1163, 178));  // dom_climber:checkbox_deselected_layer_1
    };
    if ((varbitplayer_3798 == 0)) {
        IF_SETHIDE(true, comp(1163, 179));  // dom_climber:checkbox_selected_layer_2
        IF_SETHIDE(false, comp(1163, 180));  // dom_climber:checkbox_deselected_layer_2
    } else {
        IF_SETHIDE(false, comp(1163, 179));  // dom_climber:checkbox_selected_layer_2
        IF_SETHIDE(true, comp(1163, 180));  // dom_climber:checkbox_deselected_layer_2
    };
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1163, 33));  // dom_climber:current_points
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring((varbitplayer_3661 / 3), 10), comp(1163, 37));  // dom_climber:death_points
    } else {
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 37));  // dom_climber:death_points
    };
    varclient_2 = 0;
    SOUND_VORBIS_VOLUME(8099 as vorbis, 1, 0, 255);
    if ((int1 == 0)) {
        IF_SETTEXT("1", comp(1163, 49));  // dom_climber:floor_text
        varclient_1678 = (1 + RANDOM(60));
        varclient_1679 = 30;
        varclient_1677 = int0;
        IF_SETHIDE(true, comp(1163, 88));  // dom_climber:bottom_info_layer
        IF_SETONTIMER(callback(script5477), comp(1163, 44));  // dom_climber:background_1
    } else {
        varclient_1677 = int0;
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 49));  // dom_climber:floor_text
        int2 = enum_getvalue(0, 73, 5213 as cs2enum, varclient_1677);
        string0 = struct_getparam(int2, 2095);
        string1 = struct_getparam(int2, 2184);
        int3 = struct_getparam(int2, 2101);
        if ((struct_getparam(int2, 2097) == 1)) {
            string2 = "<col=F5B241>Arena</col>: Single-way combat.";
        } else if ((struct_getparam(int2, 2097) == 2)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat.";
        } else if ((struct_getparam(int2, 2097) == 3)) {
            string2 = "<col=F5B241>Arena</col>: Single-way combat with small blocking pillars.";
        } else if ((struct_getparam(int2, 2097) == 4)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat with large blocking pillars.";
        } else if ((struct_getparam(int2, 2097) == 5)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat with podiums";
        };
        IF_SETTEXT(string0, comp(1163, 87));  // dom_climber:boss_assignment_name
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));  // dom_climber:boss_info_text
        script5475(`${string1}<br><br>${string2}`, 76218407, 76218410, 76218409);
        IF_SETGRAPHIC(int3, comp(1163, 24));  // dom_climber:boss_graphic
        int4 = MIN(1000000, script5459(1));
        IF_SETTEXT(inttostring(int4, 10), comp(1163, 35));  // dom_climber:next_floor_points
    };
    return;
}