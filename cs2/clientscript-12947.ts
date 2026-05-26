//
function script12947(): void {
    var int0 = script14441();
    IF_SETTEXT(struct_getparam(int0, 6210), comp(1807, 46));
    IF_SETTEXT(struct_getparam(int0, 6211), comp(1807, 47));
    var int1 = -1 as dbrow;
    var int2 = 5;
    var int3 = 0;
    var int4 = 4;
    var int5 = 0;
    var int6 = -1 as struct;
    var int7 = 0;
    var int8 = 0;
    while ((int3 < int4)) {
        stack(61440);
        stack(int3);
        DB_FIND(0);
        dbrow_findnext();
        int1 = stack();
        if (((int1 != -1) && (((DATE_RUNEDAY() >= dbrow_getfield(int1, 61456, 0)) && (DATE_RUNEDAY() <= dbrow_getfield(int1, 61472, 0))) || (strcmp(dbrow_getfield(int1, 61584, 0), "") != 0)))) {
            int5 = (int5 + 1);
        };
        int3 = (int3 + 1);
    };
    int3 = 0;
    int7 = (((int5 - 1) / 2) + 1);
    var string0 = "";
    int8 = script5276(int5, int7);
    var int9 = ((IF_GETHEIGHT(comp(1807, 26)) - (int2 * (int7 - 1))) / int7);
    var int10 = ((IF_GETWIDTH(comp(1807, 26)) - (int2 * (int8 - 1))) / int8);
    var int11 = 0;
    var int12 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int13 = false;
    var int14 = comp(-1, 65535);
    while ((int3 < int4)) {
        stack(61440);
        stack(int3);
        DB_FIND(0);
        dbrow_findnext();
        int1 = stack();
        if ((int1 != -1)) {
            int6 = enum_getvalue(0, 73, 11923 as cs2enum, int3);
            int14 = struct_getparam(int6, 6222);
            if ((((DATE_RUNEDAY() >= dbrow_getfield(int1, 61456, 0)) && (DATE_RUNEDAY() <= dbrow_getfield(int1, 61472, 0))) || (strcmp(dbrow_getfield(int1, 61584, 0), "") != 0))) {
                IF_SETHIDE(false, struct_getparam(int6, 6214));
                IF_SETSIZE(int10, int9, 0, 0, struct_getparam(int6, 6214));
                int11 = (int12 / int8);
                if ((MODULO(int12, 2) == 0)) {
                    IF_SETPOSITION(0, ((int11 * int9) + (int11 * int2)), 0, 0, struct_getparam(int6, 6214));
                } else {
                    IF_SETPOSITION(0, ((int11 * int9) + (int11 * int2)), 2, 0, struct_getparam(int6, 6214));
                };
                if (((DATE_RUNEDAY() >= dbrow_getfield(int1, 61456, 0)) && (DATE_RUNEDAY() <= dbrow_getfield(int1, 61472, 0)))) {
                    IF_SETTEXT(dbrow_getfield(int1, 61488, 0), struct_getparam(int6, 6215));
                    string3 = dbrow_getfield(int1, 61504, 0);
                    switch (MAP_LANG()) {
                        case 1: {
                            stack(dbrow_getfield(int1, 61536, 0));
                            [string1, string2, int13] = stack();
                            break;
                        }
                        case 2: {
                            stack(dbrow_getfield(int1, 61552, 0));
                            [string1, string2, int13] = stack();
                            break;
                        }
                        case 3: {
                            stack(dbrow_getfield(int1, 61568, 0));
                            [string1, string2, int13] = stack();
                            break;
                        }
                    };
                    if ((strcmp(string1, "") == 0)) {
                        stack(dbrow_getfield(int1, 61520, 0));
                        [string1, string2, int13] = stack();
                    };
                    if ((strcmp(string1, "") == 0)) {
                        IF_SETHIDE(true, struct_getparam(int6, 6227));
                        IF_SETSIZE(IF_GETWIDTH(int14), 35, 0, 1, int14);
                    } else {
                        IF_SETOP(1, "Open in Browser", struct_getparam(int6, 6227));
                    };
                } else {
                    string3 = dbrow_getfield(int1, 61584, 0);
                    IF_SETHIDE(true, struct_getparam(int6, 6227));
                    IF_SETSIZE(IF_GETWIDTH(int14), 35, 0, 1, int14);
                };
                IF_SETTEXT(string3, struct_getparam(int6, 6216));
                if (((script7593(string3, IF_GETWIDTH(struct_getparam(int6, 6216)), IF_GETFONTMETRICS(struct_getparam(int6, 6216)), 0) + 10) > IF_GETHEIGHT(int14))) {
                    IF_SETSIZE(35, IF_GETHEIGHT(int14), 1, 0, int14);
                    IF_SETHIDE(false, struct_getparam(int6, 6223));
                    IF_SETSCROLLSIZE(IF_GETWIDTH(int14), (script7593(string3, IF_GETWIDTH(struct_getparam(int6, 6216)), IF_GETFONTMETRICS(struct_getparam(int6, 6216)), 0) + 10), struct_getparam(int6, 6222));
                    script7791(struct_getparam(int6, 6223), int14);
                };
                int12 = (int12 + 1);
            };
        };
        int3 = (int3 + 1);
    };
    return;
}