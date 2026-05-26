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
    IF_SETGRAPHIC(8430, 76546076);
    IF_SETGRAPHIC(8430, 76546075);
    IF_SETGRAPHIC(8430, 76546074);
    IF_SETGRAPHIC(8430, 76546073);
    IF_SETGRAPHIC(8430, 76546072);
    IF_SETGRAPHIC(8430, 76546071);
    if ((int0 == 1)) {
        IF_SETGRAPHIC(8433, 76546076);
    } else if ((int0 == 2)) {
        IF_SETGRAPHIC(8433, 76546075);
    } else if ((int0 == 3)) {
        IF_SETGRAPHIC(8433, 76546074);
    } else if ((int0 == 4)) {
        IF_SETGRAPHIC(8433, 76546073);
    } else if ((int0 == 5)) {
        IF_SETGRAPHIC(8433, 76546072);
    } else if ((int0 == 6)) {
        IF_SETGRAPHIC(8433, 76546071);
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
    IF_SETTEXT(string0, 76546050);
    SOUND_VORBIS_VOLUME(8097, 1, 0, 180);
    if ((script5451(int2) == 0)) {
        if ((int2 == 1)) {
            IF_SETTEXT("You must win against this monster in Endurance or Special mode before you can fight it here.", 76546151);
        } else if ((((((((int2 == 22) || (int2 == 10)) || (int2 == 6)) || (int2 == 34)) || (int2 == 23)) || (int2 == 11)) || (int2 == 39))) {
            IF_SETTEXT("You must win against this monster in Climber, Endurance or Special mode before you can fight it here.", 76546151);
        } else {
            IF_SETTEXT("You must win against this monster in Climber or Endurance mode before you can fight it here.", 76546151);
        };
    } else {
        IF_SETTEXT(`${string1}<br><br>${string2}`, 76546151);
    };
    script5475(string1, 76546151, 76546058, 76546061);
    return;
}