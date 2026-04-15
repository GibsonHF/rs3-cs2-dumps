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
        IF_SETTEXT(string0, comp(1163, 87));
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));
        script5475(`${string1}<br><br>${string2}`, comp(1163, 39), comp(1163, 42), comp(1163, 41));
        stack(int1);
        stack(76218392);
        IF_SETGRAPHIC();
        SOUND_VORBIS_VOLUME(8091, 1, 0, 255);
        varclient_1678 = (varclient_1678 + 1);
        if ((varclient_1678 > 60)) {
            varclient_1678 = 1;
        };
        varclient_1679 = (varclient_1679 - 1);
        if ((varclient_1679 < 1)) {
            int0 = enum_getvalue(0, 73, 5213 as cs2enum, varclient_1677);
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
            IF_SETTEXT(string0, comp(1163, 87));
            IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));
            script5475(`${string1}<br><br>${string2}`, comp(1163, 39), comp(1163, 42), comp(1163, 41));
            stack(int1);
            stack(76218392);
            IF_SETGRAPHIC();
            int2 = MIN(1000000, script5459(1));
            IF_SETTEXT(inttostring(int2, 10), 76218403);
            IF_SETONTIMER(callback(script5478), 76218412);
            IF_SETHIDE(0, 76218456);
            varclient_1683 = -60;
            IF_SETPOSITION(0, varclient_1683, 1, 2, 76218456);
        };
    };
    return;
}