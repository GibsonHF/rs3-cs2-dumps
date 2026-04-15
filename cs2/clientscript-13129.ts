//
function script13129(int0: component, int1: cs2enum, int2: int, int3: int): [unknown_int, string, string, string, graphic, int, int, int] {
    var int4 = -1 as struct;
    switch (int0) {
        case 104071216:
        case 110166094: {
            if ((script11494(int1, int2) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 124125189:
        case 124190726: {
            int4 = enum_getvalue(0, 73, script8221(), int2);
            if ((script13589(int4) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 93913114: {
            if ((script12542(int2) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 96665657: {
            if ((script12542(int2) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 71827517: {
            if ((int2 == 126)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 99156092:
        case 21233712: {
            if ((script1258(int1, int2) == 0)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 56229904: {
            if ((script15864(int3, int1, int2) == 0)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 56229898: {
            if (((int2 == 46) && (script19316() == false))) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
    };
    switch (int1) {
        case 10322:
        case 15426: {
            if ((script11806(-1 as struct, int2) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 13443:
        case 15423: {
            if ((script8035(int2, int3) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 15424: {
            if ((int2 > 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            if ((script8035(int2, int3) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 15425: {
            if ((script11805(int2) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            if ((script8035(int2, int3) == 1)) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
        case 866: {
            if (((int2 == 0) && (script6431() == true))) {
                return [0, "", "", "", -1 as graphic, -1, -1, -1];
            };
            break;
        }
    };
    var int5 = 1;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var int6 = -1 as graphic;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = 26 as fontmetrics;
    var int11 = script10495(3);
    var int12 = -1 as struct;
    switch (int1) {
        case 12197:
        case 12199: {
            [int5, string0, int6, int7, int8, int9] = script13200(int1, int2);
            string2 = string0;
            break;
        }
        case 12198: {
            [string0, int6] = script13196(int2);
            string2 = string0;
            break;
        }
        case 12244: {
            [string0, int6] = script13191(int0, int2);
            string2 = string0;
            break;
        }
        case 12237: {
            string0 = script13226(int2);
            string2 = string0;
            break;
        }
        case 9665: {
            string0 = enum_getvalue(0, 36, int1, int2);
            string2 = enum_getvalue(0, 36, 12193 as cs2enum, int2);
            if ((strcmp(string2, "") == 0)) {
                string2 = string0;
            };
            switch (int2) {
                case 0: {
                    string1 = inttostring(varbitplayer_17635, 10);
                    break;
                }
                case 1: {
                    string1 = inttostring(varbitplayer_17636, 10);
                    break;
                }
                case 2: {
                    string1 = inttostring(varbitplayer_17637, 10);
                    break;
                }
            };
            break;
        }
        case 10375: {
            string0 = enum_getvalue(0, 36, int1, int2);
            string2 = enum_getvalue(0, 36, 12165 as cs2enum, int2);
            if ((strcmp(string2, "") == 0)) {
                string2 = string0;
            };
            break;
        }
        case 13254: {
            string0 = script2693(int2);
            break;
        }
        case 13933: {
            [string0, int6, int9] = script4484(int2);
            string2 = string0;
            break;
        }
        case 8657: {
            if (((int2 == 0) && (int0 == comp(517, 222)))) {
                string0 = "- Remove Name -";
            } else {
                string0 = enum_getvalue(0, 36, int1, int2);
                string2 = string0;
            };
            break;
        }
        case 7711: {
            string0 = script453(enum_getvalue(0, 0, 7710 as cs2enum, int2), 1, 1, 0);
            string2 = string0;
            break;
        }
        case 10780: {
            string0 = script453(enum_getvalue(0, 0, 10781 as cs2enum, int2), 1, 1, 0);
            string2 = string0;
            break;
        }
        case 10322:
        case 15425:
        case 15426: {
            string0 = script16005(int1, int2);
            string2 = string0;
            break;
        }
        case 16965:
        case 16966: {
            if ((enum_getvalue(0, 0, int1, int2) != -1)) {
                string0 = enum_getvalue(0, 36, 9286 as cs2enum, int2);
                int9 = (1 - script9284(int0, int2));
            };
            string2 = string0;
            break;
        }
        default: {
            if ((enum_hasoutput(26, 15492 as cs2enum, int1) == 1)) {
                [int10, int11] = script10433(0);
                string0 = script13575(struct_getparam(enum_getvalue(0, 73, int1, int2), 8073), IF_GETWIDTH(int0), int10, 1);
                int12 = enum_getvalue(0, 73, script8221(), int2);
                if ((int12 != -1 as struct)) {
                    string2 = struct_getparam(int12, 6969);
                };
            } else {
                string0 = enum_getvalue(0, 36, int1, int2);
                string2 = string0;
            };
            break;
        }
    };
    if ((STRING_LENGTH(string0) == 0)) {
        int5 = 0;
    };
    return [int5, string0, string1, string2, int6, int7, int8, int9];
}