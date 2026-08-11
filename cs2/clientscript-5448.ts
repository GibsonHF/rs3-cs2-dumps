//
function script5448(int0: number): void {
    var int1 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int2 = 0;
    var string2 = "";
    varclient_1681 = int0;
    script5441();
    int2 = (((varclient_1680 - 1) * 6) + int0);
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 28));  // dom_free:border_1
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 27));  // dom_free:border_2
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 26));  // dom_free:border_3
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 25));  // dom_free:border_4
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 24));  // dom_free:border_5
    IF_SETGRAPHIC(8430 as graphic, comp(1168, 23));  // dom_free:border_6
    if ((int0 == 1)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 28));  // dom_free:border_1
    } else if ((int0 == 2)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 27));  // dom_free:border_2
    } else if ((int0 == 3)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 26));  // dom_free:border_3
    } else if ((int0 == 4)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 25));  // dom_free:border_4
    } else if ((int0 == 5)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 24));  // dom_free:border_5
    } else if ((int0 == 6)) {
        IF_SETGRAPHIC(8433 as graphic, comp(1168, 23));  // dom_free:border_6
    };
    int1 = enum_getvalue(0, 73, 5213 as cs2enum, int2);
    string0 = struct_getparam(int1, 2095);
    string1 = struct_getparam(int1, 2184);
    if ((struct_getparam(int1, 2097) == 1)) {
        string2 = "<col=F5B241>Arena</col>: Single-way combat.";
    } else if ((struct_getparam(int1, 2097) == 2)) {
        string2 = "<col=F5B241>Arena</col>: Multi-way combat.";
    } else if ((struct_getparam(int1, 2097) == 3)) {
        string2 = "<col=F5B241>Arena</col>: Single-way combat with small blocking pillars.";
    } else if ((struct_getparam(int1, 2097) == 4)) {
        string2 = "<col=F5B241>Arena</col>: Multi-way combat with large blocking pillars.";
    } else if ((struct_getparam(int1, 2097) == 5)) {
        string2 = "<col=F5B241>Arena</col>: Multi-way combat with podiums";
    };
    IF_SETTEXT(string0, comp(1168, 2));  // dom_free:boss_name
    SOUND_VORBIS_VOLUME(8097 as vorbis, 1, 0, 180);
    if ((script5451(int2) == 0)) {
        if ((int2 == 1)) {
            IF_SETTEXT("You must win against this monster in Endurance or Special mode before you can fight it here.", comp(1168, 103));  // dom_free:boss_info_text
        } else if ((((((((int2 == 22) || (int2 == 10)) || (int2 == 6)) || (int2 == 34)) || (int2 == 23)) || (int2 == 11)) || (int2 == 39))) {
            IF_SETTEXT("You must win against this monster in Climber, Endurance or Special mode before you can fight it here.", comp(1168, 103));  // dom_free:boss_info_text
        } else {
            IF_SETTEXT("You must win against this monster in Climber or Endurance mode before you can fight it here.", comp(1168, 103));  // dom_free:boss_info_text
        };
    } else {
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1168, 103));  // dom_free:boss_info_text
    };
    script5475(string1, 76546151, 76546058, 76546061);
    return;
}