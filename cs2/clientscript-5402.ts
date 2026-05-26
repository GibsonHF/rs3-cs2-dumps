//
function script5402(int0: number): void {
    var int1 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    IF_SETCOLOUR(16101953, 76677181);
    IF_SETCOLOUR(16101953, 76677182);
    IF_SETCOLOUR(16101953, 76677183);
    IF_SETCOLOUR(16101953, 76677184);
    IF_SETCOLOUR(16101953, 76677185);
    IF_SETCOLOUR(16101953, 76677186);
    IF_SETCOLOUR(16101953, 76677187);
    IF_SETCOLOUR(16101953, 76677188);
    IF_SETCOLOUR(16101953, 76677285);
    IF_SETCOLOUR(16101953, 76677364);
    switch (int0) {
        case 1: {
            IF_SETCOLOUR(16777215, 76677181);
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, 76677182);
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, 76677183);
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, 76677184);
            break;
        }
        case 5: {
            IF_SETCOLOUR(16777215, 76677185);
            break;
        }
        case 6: {
            IF_SETCOLOUR(16777215, 76677186);
            break;
        }
        case 7: {
            IF_SETCOLOUR(16777215, 76677187);
            break;
        }
        case 8: {
            IF_SETCOLOUR(16777215, 76677188);
            break;
        }
        case 9: {
            IF_SETCOLOUR(16777215, 76677285);
            break;
        }
        case 10: {
            IF_SETCOLOUR(16777215, 76677364);
            break;
        }
    };
    int1 = enum_getvalue(0, 73, 5332 as cs2enum, int0);
    if (((int1 == 7335 as struct) || (int1 == 7336 as struct))) {
        if ((CC_FIND(76677259, 0) == 0)) {
            CC_CREATE(76677259, 5, 0);
            CC_SETSIZE(274, 96, 0, 0);
            CC_SETPOSITION(4, 6, 0, 0);
            CC_SETGRAPHIC(9723);
        };
    } else if ((CC_FIND(76677259, 0) == 1)) {
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
    IF_SETTEXT(`${string1}<br><br>${string3}<br><br>${string2}`, 76677260);
    script5475(`${string1}<br><br>${string3}<br><br>${string2}`, 76677260, 76677259, 76677258);
    string0 = struct_getparam(int1, 2095);
    IF_SETTEXT(string0, 76677158);
    SOUND_VORBIS_VOLUME(8088, 1, 0, 255);
    return;
}