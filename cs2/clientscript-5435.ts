//
function script5435(int0: number, int1: number): void {
    var int2 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int3 = -1;
    var string2 = "";
    var int4 = 0;
    if ((varbitplayer_3658 == 0)) {
        IF_SETHIDE(true, comp(1173, 103));  // dom_endurance:checkbox_selected_layer
        IF_SETHIDE(false, comp(1173, 104));  // dom_endurance:checkbox_deselected_layer
    } else {
        IF_SETHIDE(false, comp(1173, 103));  // dom_endurance:checkbox_selected_layer
        IF_SETHIDE(true, comp(1173, 104));  // dom_endurance:checkbox_deselected_layer
    };
    if ((varbitplayer_3797 == 0)) {
        IF_SETHIDE(true, comp(1173, 169));  // dom_endurance:checkbox_selected_layer_1
        IF_SETHIDE(false, comp(1173, 170));  // dom_endurance:checkbox_deselected_layer_1
    } else {
        IF_SETHIDE(false, comp(1173, 169));  // dom_endurance:checkbox_selected_layer_1
        IF_SETHIDE(true, comp(1173, 170));  // dom_endurance:checkbox_deselected_layer_1
    };
    if ((varbitplayer_3798 == 0)) {
        IF_SETHIDE(true, comp(1173, 172));  // dom_endurance:checkbox_selected_layer_2
        IF_SETHIDE(false, comp(1173, 173));  // dom_endurance:checkbox_deselected_layer_2
    } else {
        IF_SETHIDE(false, comp(1173, 172));  // dom_endurance:checkbox_selected_layer_2
        IF_SETHIDE(true, comp(1173, 173));  // dom_endurance:checkbox_deselected_layer_2
    };
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1173, 29));  // dom_endurance:current_points
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1173, 33));  // dom_endurance:death_points
    } else {
        IF_SETTEXT("0", comp(1173, 33));  // dom_endurance:death_points
    };
    varclient_2 = 0;
    SOUND_VORBIS_VOLUME(8099 as vorbis, 1, 0, 255);
    if ((int1 == 0)) {
        varclient_1678 = (1 + RANDOM(60));
        varclient_1679 = 30;
        varclient_1677 = int0;
        IF_SETHIDE(true, comp(1173, 54));  // dom_endurance:bottom_info_layer
        IF_SETONTIMER(callback(script5436), comp(1173, 8));  // dom_endurance:background_1
    } else {
        varclient_1677 = int0;
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
        IF_SETTEXT(string0, comp(1173, 25));  // dom_endurance:boss_assignment_name
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1173, 52));  // dom_endurance:boss_info_text
        script5475(`${string1}<br><br>${string2}`, 76873780, 76873779, 76873778);
        IF_SETGRAPHIC(int3, comp(1173, 6));  // dom_endurance:boss_graphic
        int4 = MIN(1000000, script5459(2));
        IF_SETTEXT(inttostring(int4, 10), comp(1173, 31));  // dom_endurance:next_floor_points
    };
    return;
}