//
function script5402(int0: int): void {
    var int1 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    IF_SETCOLOUR(16101953, comp(1170, 61));
    IF_SETCOLOUR(16101953, comp(1170, 62));
    IF_SETCOLOUR(16101953, comp(1170, 63));
    IF_SETCOLOUR(16101953, comp(1170, 64));
    IF_SETCOLOUR(16101953, comp(1170, 65));
    IF_SETCOLOUR(16101953, comp(1170, 66));
    IF_SETCOLOUR(16101953, comp(1170, 67));
    IF_SETCOLOUR(16101953, comp(1170, 68));
    IF_SETCOLOUR(16101953, comp(1170, 165));
    IF_SETCOLOUR(16101953, comp(1170, 244));
    switch (int0) {
        case 1: {
            IF_SETCOLOUR(16777215, comp(1170, 61));
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, comp(1170, 62));
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, comp(1170, 63));
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, comp(1170, 64));
            break;
        }
        case 5: {
            IF_SETCOLOUR(16777215, comp(1170, 65));
            break;
        }
        case 6: {
            IF_SETCOLOUR(16777215, comp(1170, 66));
            break;
        }
        case 7: {
            IF_SETCOLOUR(16777215, comp(1170, 67));
            break;
        }
        case 8: {
            IF_SETCOLOUR(16777215, comp(1170, 68));
            break;
        }
        case 9: {
            IF_SETCOLOUR(16777215, comp(1170, 165));
            break;
        }
        case 10: {
            IF_SETCOLOUR(16777215, comp(1170, 244));
            break;
        }
    };
    int1 = enum_getvalue(0, 73, 5332 as cs2enum, int0);
    if (((int1 == 7335 as struct) || (int1 == 7336 as struct))) {
        if ((CC_FIND(comp(1170, 139), 0) == 0)) {
            CC_CREATE(comp(1170, 139), 5, 0);
            CC_SETSIZE(274, 96, 0, 0);
            CC_SETPOSITION(4, 6, 0, 0);
            CC_SETGRAPHIC(9723 as graphic);
        };
    } else if ((CC_FIND(comp(1170, 139), 0) == 1)) {
        CC_DELETE();
    };
    string1 = struct_getparam(int1, 2184);
    string2 = `If you win you'll get a dominion factor of: <col=F5B241>${inttostring(enum_getvalue(0, 0, 5224 as cs2enum, int0), 10)}</col>. You will get no dominion factor for dying.`;
    if ((struct_getparam(int1, 2097) == 1)) {
        string3 = "<col=F5B241>Arena</col>: Single-way combat.";
    } else if ((struct_getparam(int1, 2097) == 2)) {
        string3 = "<col=F5B241>Arena</col>: Multi-way combat.";
    } else if ((struct_getparam(int1, 2097) == 3)) {
        string3 = "<col=F5B241>Arena</col>: Single-way combat with small blocking pillars.";
    } else if ((struct_getparam(int1, 2097) == 4)) {
        string3 = "<col=F5B241>Arena</col>: Multi-way combat with large blocking pillars.";
    } else if ((struct_getparam(int1, 2097) == 5)) {
        string3 = "<col=F5B241>Arena</col>: Multi-way combat with podiums and small blocking pillars";
    };
    IF_SETTEXT(`${string1}<br><br>${string3}<br><br>${string2}`, comp(1170, 140));
    script5475(`${string1}<br><br>${string3}<br><br>${string2}`, comp(1170, 140), comp(1170, 139), comp(1170, 138));
    string0 = struct_getparam(int1, 2095);
    IF_SETTEXT(string0, comp(1170, 38));
    SOUND_VORBIS_VOLUME(8088 as vorbis, 1, 0, 255);
    return;
}