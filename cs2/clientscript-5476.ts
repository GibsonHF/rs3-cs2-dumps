//
function script5476(int0: int, int1: unknown_int): void {
    var int2 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int3 = -1 as graphic;
    var string2 = "";
    var int4 = 0;
    if ((varbitplayer_3658 == 0)) {
        IF_SETHIDE(true, comp(1163, 102));
        IF_SETHIDE(false, comp(1163, 103));
    } else {
        IF_SETHIDE(false, comp(1163, 102));
        IF_SETHIDE(true, comp(1163, 103));
    };
    if ((varbitplayer_3797 == 0)) {
        IF_SETHIDE(true, comp(1163, 177));
        IF_SETHIDE(false, comp(1163, 178));
    } else {
        IF_SETHIDE(false, comp(1163, 177));
        IF_SETHIDE(true, comp(1163, 178));
    };
    if ((varbitplayer_3798 == 0)) {
        IF_SETHIDE(true, comp(1163, 179));
        IF_SETHIDE(false, comp(1163, 180));
    } else {
        IF_SETHIDE(false, comp(1163, 179));
        IF_SETHIDE(true, comp(1163, 180));
    };
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), comp(1163, 33));
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring((varbitplayer_3661 / 3), 10), comp(1163, 37));
    } else {
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 37));
    };
    varclient_2 = 0;
    SOUND_VORBIS_VOLUME(8099 as vorbis, 1, 0, 255);
    if ((int1 == 0)) {
        IF_SETTEXT("1", comp(1163, 49));
        varclient_1678 = (1 + RANDOM(60));
        varclient_1679 = 30;
        varclient_1677 = int0;
        IF_SETHIDE(true, comp(1163, 88));
        IF_SETONTIMER(callback(script5477), comp(1163, 44));
    } else {
        varclient_1677 = int0;
        IF_SETTEXT(inttostring(varbitplayer_3655, 10), comp(1163, 49));
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
        IF_SETTEXT(string0, comp(1163, 87));
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1163, 39));
        script5475(`${string1}<br><br>${string2}`, comp(1163, 39), comp(1163, 42), comp(1163, 41));
        stack(int3);
        stack(76218392);
        IF_SETGRAPHIC();
        int4 = MIN(1000000, script5459(1));
        IF_SETTEXT(inttostring(int4, 10), 76218403);
    };
    return;
}