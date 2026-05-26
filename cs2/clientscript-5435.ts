//
function script5435(int0: number, int1: number): void {
    var int2 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int3 = -1 as graphic;
    var string2 = "";
    var int4 = 0;
    if ((varbitplayer_3658 == 0)) {
        IF_SETHIDE(1, 76873831);
        IF_SETHIDE(0, 76873832);
    } else {
        IF_SETHIDE(0, 76873831);
        IF_SETHIDE(1, 76873832);
    };
    if ((varbitplayer_3797 == 0)) {
        IF_SETHIDE(1, 76873897);
        IF_SETHIDE(0, 76873898);
    } else {
        IF_SETHIDE(0, 76873897);
        IF_SETHIDE(1, 76873898);
    };
    if ((varbitplayer_3798 == 0)) {
        IF_SETHIDE(1, 76873900);
        IF_SETHIDE(0, 76873901);
    } else {
        IF_SETHIDE(0, 76873900);
        IF_SETHIDE(1, 76873901);
    };
    IF_SETTEXT(inttostring(varbitplayer_3661, 10), 76873757);
    if ((varbitplayer_3661 > 0)) {
        IF_SETTEXT(inttostring(varbitplayer_3661, 10), 76873761);
    } else {
        IF_SETTEXT("0", 76873761);
    };
    varclient_2 = 0;
    SOUND_VORBIS_VOLUME(8099, 1, 0, 255);
    if ((int1 == 0)) {
        varclient_1678 = (1 + RANDOM(60));
        varclient_1679 = 30;
        varclient_1677 = int0;
        IF_SETHIDE(1, 76873782);
        IF_SETONTIMER(callback(script5436), 76873736);
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
        IF_SETTEXT(string0, 76873753);
        IF_SETTEXT(`${string1}<br><br>${string2}`, 76873780);
        script5475(`${string1}<br><br>${string2}`, 76873780, 76873779, 76873778);
        IF_SETGRAPHIC(int3, 76873734);
        int4 = MIN(1000000, script5459(2));
        IF_SETTEXT(inttostring(int4, 10), 76873759);
    };
    return;
}