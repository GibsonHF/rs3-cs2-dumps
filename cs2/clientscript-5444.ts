//
function script5444(int0: number): void {
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
    IF_SETGRAPHIC(8430 as graphic, 76546076);
    IF_SETGRAPHIC(8430 as graphic, 76546075);
    IF_SETGRAPHIC(8430 as graphic, 76546074);
    IF_SETGRAPHIC(8430 as graphic, 76546073);
    IF_SETGRAPHIC(8430 as graphic, 76546072);
    IF_SETGRAPHIC(8430 as graphic, 76546071);
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
            IF_SETCOLOUR(16777215, 76546125);
            break;
        }
        case 2: {
            IF_SETCOLOUR(16777215, 76546128);
            break;
        }
        case 3: {
            IF_SETCOLOUR(16777215, 76546130);
            break;
        }
        case 4: {
            IF_SETCOLOUR(16777215, 76546129);
            break;
        }
        case 5: {
            IF_SETCOLOUR(16777215, 76546131);
            break;
        }
        case 6: {
            IF_SETCOLOUR(16777215, 76546132);
            break;
        }
        case 7: {
            IF_SETCOLOUR(16777215, 76546133);
            break;
        }
        case 8: {
            IF_SETCOLOUR(16777215, 76546147);
            break;
        }
        case 9: {
            IF_SETCOLOUR(16777215, 76546417);
            break;
        }
        case 10: {
            IF_SETCOLOUR(16777215, 76546418);
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
    IF_SETGRAPHIC(int13, 76546065);
    IF_SETGRAPHIC(int14, 76546066);
    IF_SETGRAPHIC(int15, 76546067);
    IF_SETGRAPHIC(int16, 76546068);
    IF_SETGRAPHIC(int17, 76546069);
    IF_SETGRAPHIC(int18, 76546070);
    if ((script5451(int7) == 1)) {
        script5445(0, string0, 76546078, 76546079, 1);
    } else {
        script5445(0, string0, 76546078, 76546079, 2);
    };
    if ((script5451(int8) == 1)) {
        script5445(0, string1, 76546080, 76546081, 1);
    } else {
        script5445(0, string1, 76546080, 76546081, 2);
    };
    if ((script5451(int9) == 1)) {
        script5445(0, string2, 76546082, 76546083, 1);
    } else {
        script5445(0, string2, 76546082, 76546083, 2);
    };
    if ((script5451(int10) == 1)) {
        script5445(0, string3, 76546084, 76546085, 1);
    } else {
        script5445(0, string3, 76546084, 76546085, 2);
    };
    if ((script5451(int11) == 1)) {
        script5445(0, string4, 76546086, 76546087, 1);
    } else {
        script5445(0, string4, 76546086, 76546087, 2);
    };
    if ((script5451(int12) == 1)) {
        script5445(0, string5, 76546088, 76546089, 1);
    } else {
        script5445(0, string5, 76546088, 76546089, 2);
    };
    return;
}