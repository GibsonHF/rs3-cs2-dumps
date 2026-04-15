//
function script5444(int0: int): void {
    var int1 = -1 as struct;
    var int2 = -1 as struct;
    var int3 = -1 as struct;
    var int4 = -1 as struct;
    var int5 = -1 as struct;
    var int6 = -1 as struct;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var string5 = "";
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1 as graphic;
    var int14 = -1 as graphic;
    var int15 = -1 as graphic;
    var int16 = -1 as graphic;
    var int17 = -1 as graphic;
    var int18 = -1 as graphic;
    varclient_1681 = 0;
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
    IF_SETTEXT("Please select a monster.", 76546151);
    IF_SETTEXT("", 76546050);
    IF_SETCOLOUR(16101953, 76546125);
    IF_SETCOLOUR(16101953, 76546128);
    IF_SETCOLOUR(16101953, 76546130);
    IF_SETCOLOUR(16101953, 76546129);
    IF_SETCOLOUR(16101953, 76546131);
    IF_SETCOLOUR(16101953, 76546132);
    IF_SETCOLOUR(16101953, 76546133);
    IF_SETCOLOUR(16101953, 76546147);
    IF_SETCOLOUR(16101953, 76546417);
    IF_SETCOLOUR(16101953, 76546418);
    varclient_1680 = int0;
    switch (int0) {
        case 1: {
            IF_SETCOLOUR(16777215, comp(1168, 77));
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, comp(1168, 80));
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, comp(1168, 82));
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, comp(1168, 81));
            break;
        }
        case 5: {
            IF_SETCOLOUR(16777215, comp(1168, 83));
            break;
        }
        case 6: {
            IF_SETCOLOUR(16777215, comp(1168, 84));
            break;
        }
        case 7: {
            IF_SETCOLOUR(16777215, comp(1168, 85));
            break;
        }
        case 8: {
            IF_SETCOLOUR(16777215, comp(1168, 99));
            break;
        }
        case 9: {
            IF_SETCOLOUR(16777215, comp(1168, 369));
            break;
        }
        case 10: {
            IF_SETCOLOUR(16777215, comp(1168, 370));
            break;
        }
    };
    int7 = ((6 * (int0 - 1)) + 1);
    int8 = ((6 * (int0 - 1)) + 2);
    int9 = ((6 * (int0 - 1)) + 3);
    int10 = ((6 * (int0 - 1)) + 4);
    int11 = ((6 * (int0 - 1)) + 5);
    int12 = ((6 * (int0 - 1)) + 6);
    int1 = enum_getvalue(0, 73, 5213 as cs2enum, int7);
    int2 = enum_getvalue(0, 73, 5213 as cs2enum, int8);
    int3 = enum_getvalue(0, 73, 5213 as cs2enum, int9);
    int4 = enum_getvalue(0, 73, 5213 as cs2enum, int10);
    int5 = enum_getvalue(0, 73, 5213 as cs2enum, int11);
    int6 = enum_getvalue(0, 73, 5213 as cs2enum, int12);
    string0 = struct_getparam(int1, 2095);
    string1 = struct_getparam(int2, 2095);
    string2 = struct_getparam(int3, 2095);
    string3 = struct_getparam(int4, 2095);
    string4 = struct_getparam(int5, 2095);
    string5 = struct_getparam(int6, 2095);
    int13 = struct_getparam(int1, 2101);
    int14 = struct_getparam(int2, 2101);
    int15 = struct_getparam(int3, 2101);
    int16 = struct_getparam(int4, 2101);
    int17 = struct_getparam(int5, 2101);
    int18 = struct_getparam(int6, 2101);
    stack(int13);
    stack(76546065);
    IF_SETGRAPHIC();
    stack(int14);
    stack(76546066);
    IF_SETGRAPHIC();
    stack(int15);
    stack(76546067);
    IF_SETGRAPHIC();
    stack(int16);
    stack(76546068);
    IF_SETGRAPHIC();
    stack(int17);
    stack(76546069);
    IF_SETGRAPHIC();
    stack(int18);
    stack(76546070);
    IF_SETGRAPHIC();
    if ((script5451(int7) == 1)) {
        script5445(0, string0, comp(1168, 30), comp(1168, 31), 1);
    } else {
        script5445(0, string0, comp(1168, 30), comp(1168, 31), 2);
    };
    if ((script5451(int8) == 1)) {
        script5445(0, string1, comp(1168, 32), comp(1168, 33), 1);
    } else {
        script5445(0, string1, comp(1168, 32), comp(1168, 33), 2);
    };
    if ((script5451(int9) == 1)) {
        script5445(0, string2, comp(1168, 34), comp(1168, 35), 1);
    } else {
        script5445(0, string2, comp(1168, 34), comp(1168, 35), 2);
    };
    if ((script5451(int10) == 1)) {
        script5445(0, string3, comp(1168, 36), comp(1168, 37), 1);
    } else {
        script5445(0, string3, comp(1168, 36), comp(1168, 37), 2);
    };
    if ((script5451(int11) == 1)) {
        script5445(0, string4, comp(1168, 38), comp(1168, 39), 1);
    } else {
        script5445(0, string4, comp(1168, 38), comp(1168, 39), 2);
    };
    if ((script5451(int12) == 1)) {
        script5445(0, string5, comp(1168, 40), comp(1168, 41), 1);
    } else {
        script5445(0, string5, comp(1168, 40), comp(1168, 41), 2);
    };
    return;
}