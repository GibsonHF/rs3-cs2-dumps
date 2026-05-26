//
function script15820(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, string0: string, string1: string, string2: string, string3: string): void {
    var int9 = -1 as graphic;
    var int10 = 0;
    var int11 = -1 as dbrow;
    var string4 = "";
    var string5 = "";
    switch (varbitplayer_51273) {
        case 1: {
            if ((int0 != -1 as dbrow)) {
                if ((DB_GETROWTABLE(int0) == 122)) {
                    if ((STRING_LENGTH(string0) == 0)) {
                        var string0 = dbrow_getfield(int0, 499824, 0);
                    };
                    if (((dbrow_getfield(int0, 499936, 0) == 1) && ((script248() == 1) || (varbitplayer_51791 == 3)))) {
                        var string1 = script14145(string1, "Warning", `You will not be able to use Treasure Hunter Keys until competitive mode is over. ${script16827()}`);
                    };
                    unk11081(string1, dbrow_getfield(int0, 499840, 0), dbrow_getfield(int0, 499856, 0), int7);
                    string1 = script14145(stack(), script11623(stack()));
                    stack(string1);
                    stack(int0);
                    stack(499872);
                    stack(0);
                    dbrow_getfield();
                    stack(int0);
                    stack(499888);
                    stack(0);
                    dbrow_getfield();
                    string1 = script14145(stack());
                    stack(string1);
                    stack("You currently own:");
                    stack(int0);
                    stack(499936);
                    stack(0);
                    dbrow_getfield();
                    string1 = script14145(stack(), script14241(stack()));
                    IF_SETONOP(callback(script15743, string3), 58392603);
                };
                IF_SETHIDE(1, 58392605);
                IF_SETTEXT(string2, 58392604);
            };
            break;
        }
        case 0: {
            var [int3, int4, int9, int9, int11] = dbrow_getfield(4168 as dbrow, 552960, int1);
            if ((int3 != -1 as struct)) {
                if (((int6 == -1) || (int6 == 0))) {
                    var int6 = struct_getparam(int3, 2531);
                };
                string1 = struct_getparam(int3, 8969);
                string1 = script14145(string1, "", script16022(int3, int6));
                if ((struct_getparam(int3, 8665) == 0)) {
                    string1 = script14145(string1, "", script15527(int3, int6));
                };
                if ((int1 != -1)) {
                    string1 = script14145(string1, "Membership Benefits:", script16579(int3, int1));
                    var string2 = script12689(int1);
                };
            };
            script11538(14158 as graphic, string2);
            break;
        }
        case 2: {
            if ((int3 != -1 as struct)) {
                if (((int6 == -1) || (int6 == 0))) {
                    int6 = struct_getparam(int3, 2531);
                };
                string1 = script14145(string1, "", script16022(int3, int6));
                if ((struct_getparam(int3, 8665) == 0)) {
                    string1 = script14145(string1, "", script15527(int3, int6));
                };
            };
            if ((int2 != -1 as struct)) {
                string1 = script14145(string1, "Membership Benefits:", script16579(int2, -1));
            };
            IF_SETSIZE(20, 20, 0, 0, 58392606);
            script11538(struct_getparam(varplayer_5148, 8661), string2);
            break;
        }
    };
    if ((((int3 != -1 as struct) && (int4 != -1 as struct)) && (STRING_LENGTH(string0) == 0))) {
        string0 = script11623(struct_getparam(int4, 2533), struct_getparam(int3, 2533));
    };
    IF_SETTEXT(string0, 58392589);
    IF_SETTEXT(string1, 58392593);
    script11539(int3, int6, int5, 1, int8);
    script16206(int0);
    var int12 = script15891(string1, IF_GETWIDTH(58392593), IF_GETFONTMETRICS(58392593), 0);
    if ((int12 >= IF_GETHEIGHT(58392592))) {
        IF_SETSCROLLSIZE(0, int12, 58392592);
        IF_SETHIDE(0, 58392591);
        script7791(58392591, 58392592);
    } else {
        IF_SETSCROLLSIZE(0, 0, 58392592);
        IF_SETHIDE(1, 58392591);
    };
    return;
}