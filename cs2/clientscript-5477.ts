//
function script5477(): void {
    var int0 = enum_getvalue(0, 73, 5213 as cs2enum, varclient_1678);
    var string0 = struct_getparam(int0, 2095);
    var string1 = struct_getparam(int0, 2184);
    var int1 = struct_getparam(int0, 2101);
    var string2 = "";
    var int2 = 0;
    if ((MODULO(CLIENTCLOCK(), 4) == 0)) {
        if ((struct_getparam(int0, 2097) == 1)) {
            string2 = "<col=F5B241>Arena</col>: Single-way combat.";
        } else if ((struct_getparam(int0, 2097) == 2)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat.";
        } else if ((struct_getparam(int0, 2097) == 3)) {
            string2 = "<col=F5B241>Arena</col>: Single-way combat with small blocking pillars.";
        } else if ((struct_getparam(int0, 2097) == 4)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat with large blocking pillars.";
        } else if ((struct_getparam(int0, 2097) == 5)) {
            string2 = "<col=F5B241>Arena</col>: Multi-way combat with podiums and small blocking pillars";
        };
        IF_SETTEXT(string0, comp(1163, 87));  // dom_climber:boss_assignment_name
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));  // dom_climber:boss_info_text
        script5475(`${string1}<br><br>${string2}`, 76218407, 76218410, 76218409);
        IF_SETGRAPHIC(int1, comp(1163, 24));  // dom_climber:boss_graphic
        SOUND_VORBIS_VOLUME(8091 as vorbis, 1, 0, 255);
        varclient_1678 = (varclient_1678 + 1);
        if ((varclient_1678 > 60)) {
            varclient_1678 = 1;
        };
        varclient_1679 = (varclient_1679 - 1);
        if ((varclient_1679 < 1)) {
            int0 = enum_getvalue(0, 73, 5213, varclient_1677);
            string0 = struct_getparam(int0, 2095);
            string1 = struct_getparam(int0, 2184);
            int1 = struct_getparam(int0, 2101);
            if ((struct_getparam(int0, 2097) == 1)) {
                string2 = "<col=F5B241>Arena</col>: Single-way combat.";
            } else if ((struct_getparam(int0, 2097) == 2)) {
                string2 = "<col=F5B241>Arena</col>: Multiway-combat.";
            } else if ((struct_getparam(int0, 2097) == 3)) {
                string2 = "<col=F5B241>Arena</col>: Single-way combat with small blocking pillars.";
            } else if ((struct_getparam(int0, 2097) == 4)) {
                string2 = "<col=F5B241>Arena</col>: Multi-way combat with large blocking pillars.";
            } else if ((struct_getparam(int0, 2097) == 5)) {
                string2 = "<col=F5B241>Arena</col>: Multi-way combat with podiums and small blocking pillars";
            };
            IF_SETTEXT(string0, comp(1163, 87));  // dom_climber:boss_assignment_name
            IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));  // dom_climber:boss_info_text
            script5475(`${string1}<br><br>${string2}`, 76218407, 76218410, 76218409);
            IF_SETGRAPHIC(int1, comp(1163, 24));  // dom_climber:boss_graphic
            int2 = MIN(1000000, script5459(1));
            IF_SETTEXT(inttostring(int2, 10), comp(1163, 35));  // dom_climber:next_floor_points
            IF_SETONTIMER(callback(script5478), comp(1163, 44));  // dom_climber:background_1
            IF_SETHIDE(false, comp(1163, 88));  // dom_climber:bottom_info_layer
            varclient_1683 = -60;
            IF_SETPOSITION(0, varclient_1683, 1, 2, comp(1163, 88));  // dom_climber:bottom_info_layer
        };
    };
    return;
}