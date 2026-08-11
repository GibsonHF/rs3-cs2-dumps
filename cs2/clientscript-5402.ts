//
function script5402(int0: number): void {
    var int1 = -1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    IF_SETCOLOUR(16101953, comp(1170, 61));  // dom_special:title_1
    IF_SETCOLOUR(16101953, comp(1170, 62));  // dom_special:title_2
    IF_SETCOLOUR(16101953, comp(1170, 63));  // dom_special:title_3
    IF_SETCOLOUR(16101953, comp(1170, 64));  // dom_special:title_4
    IF_SETCOLOUR(16101953, comp(1170, 65));  // dom_special:title_5
    IF_SETCOLOUR(16101953, comp(1170, 66));  // dom_special:title_6
    IF_SETCOLOUR(16101953, comp(1170, 67));  // dom_special:title_7
    IF_SETCOLOUR(16101953, comp(1170, 68));  // dom_special:title_8
    IF_SETCOLOUR(16101953, comp(1170, 165));  // dom_special:title_9
    IF_SETCOLOUR(16101953, comp(1170, 244));  // dom_special:title_10
    switch (int0) {
        case 1: {
            IF_SETCOLOUR(16777215, comp(1170, 61));  // dom_special:title_1
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, comp(1170, 62));  // dom_special:title_2
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, comp(1170, 63));  // dom_special:title_3
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, comp(1170, 64));  // dom_special:title_4
            break;
        }
        case 5: {
            IF_SETCOLOUR(16777215, comp(1170, 65));  // dom_special:title_5
            break;
        }
        case 6: {
            IF_SETCOLOUR(16777215, comp(1170, 66));  // dom_special:title_6
            break;
        }
        case 7: {
            IF_SETCOLOUR(16777215, comp(1170, 67));  // dom_special:title_7
            break;
        }
        case 8: {
            IF_SETCOLOUR(16777215, comp(1170, 68));  // dom_special:title_8
            break;
        }
        case 9: {
            IF_SETCOLOUR(16777215, comp(1170, 165));  // dom_special:title_9
            break;
        }
        case 10: {
            IF_SETCOLOUR(16777215, comp(1170, 244));  // dom_special:title_10
            break;
        }
    };
    int1 = enum_getvalue(0, 73, 5332 as cs2enum, int0);
    if (((int1 == 7335 as struct) || (int1 == 7336 as struct))) {
        if ((CC_FIND(comp(1170, 139), 0) == 0)) {  // dom_special:info_layer
            CC_CREATE(comp(1170, 139), 5, 0);  // dom_special:info_layer
            CC_SETSIZE(274, 96, 0, 0);
            CC_SETPOSITION(4, 6, 0, 0);
            CC_SETGRAPHIC(9723 as graphic);
        };
    } else if ((CC_FIND(comp(1170, 139), 0) == 1)) {  // dom_special:info_layer
        CC_DELETE();
    };
    string1 = struct_getparam(int1, 2184);
    string2 = `If you win you'll get a dominion factor of: <col=F5B241>${inttostring(enum_getvalue(0, 0, 5224, int0), 10)}</col>. You will get no dominion factor for dying.`;
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
    IF_SETTEXT(`${string1}<br><br>${string3}<br><br>${string2}`, comp(1170, 140));  // dom_special:boss_info_text
    script5475(`${string1}<br><br>${string3}<br><br>${string2}`, 76677260, 76677259, 76677258);
    string0 = struct_getparam(int1, 2095);
    IF_SETTEXT(string0, comp(1170, 38));  // dom_special:boss_assignment_name
    SOUND_VORBIS_VOLUME(8088 as vorbis, 1, 0, 255);
    return;
}