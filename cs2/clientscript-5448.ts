//
function script5448(int0: int): void {
    var int1 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var int2 = 0;
    var string2 = "";
    varclient_1681 = int0;
    script5441();
    int2 = (((varclient_1680 - 1) * 6) + int0);
    stack(8430);
    stack(76546076);
    IF_SETGRAPHIC();
    stack(8430);
    stack(76546075);
    IF_SETGRAPHIC();
    stack(8430);
    stack(76546074);
    IF_SETGRAPHIC();
    stack(8430);
    stack(76546073);
    IF_SETGRAPHIC();
    stack(8430);
    stack(76546072);
    IF_SETGRAPHIC();
    stack(8430);
    stack(76546071);
    IF_SETGRAPHIC();
    if ((int0 == 1)) {
        stack(8433);
        stack(76546076);
        IF_SETGRAPHIC();
    } else if ((int0 == 2)) {
        stack(8433);
        stack(76546075);
        IF_SETGRAPHIC();
    } else if ((int0 == 3)) {
        stack(8433);
        stack(76546074);
        IF_SETGRAPHIC();
    } else if ((int0 == 4)) {
        stack(8433);
        stack(76546073);
        IF_SETGRAPHIC();
    } else if ((int0 == 5)) {
        stack(8433);
        stack(76546072);
        IF_SETGRAPHIC();
    } else if ((int0 == 6)) {
        stack(8433);
        stack(76546071);
        IF_SETGRAPHIC();
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
    IF_SETTEXT(string0, comp(1168, 2));
    SOUND_VORBIS_VOLUME(8097 as vorbis, 1, 0, 180);
    if ((script5451(int2) == 0)) {
        if ((int2 == 1)) {
            IF_SETTEXT("You must win against this monster in Endurance or Special mode before you can fight it here.", comp(1168, 103));
        } else if ((((((((int2 == 22) || (int2 == 10)) || (int2 == 6)) || (int2 == 34)) || (int2 == 23)) || (int2 == 11)) || (int2 == 39))) {
            IF_SETTEXT("You must win against this monster in Climber, Endurance or Special mode before you can fight it here.", comp(1168, 103));
        } else {
            IF_SETTEXT("You must win against this monster in Climber or Endurance mode before you can fight it here.", comp(1168, 103));
        };
    } else {
        IF_SETTEXT(`${string1}<br><br>${string2}`, comp(1168, 103));
    };
    script5475(string1, comp(1168, 103), comp(1168, 10), comp(1168, 13));
    return;
}