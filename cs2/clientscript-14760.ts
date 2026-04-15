//
function script14760(int0: component, int1: int, int2: int, int3: int, int4: int, int5: obj, int6: obj, int7: obj, int8: obj, int9: int, string0: string, string1: string, string2: string, string3: string, string4: string): int {
    var int10 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int10 = 28 as fontmetrics;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        var int2 = script14758(int0, int1, int2, int3, string0, int9);
    };
    var int11 = 30;
    var int12 = 5;
    var int13 = MIN(int4, 4);
    var int14 = -1 as obj;
    var string5 = "";
    var int15 = 0;
    while ((++int15 <= int13)) {
        switch (int15) {
            case 1: {
                int14 = int5;
                string5 = string1;
                break;
            }
            case 2: {
                int14 = int6;
                string5 = string2;
                break;
            }
            case 3: {
                int14 = int7;
                string5 = string3;
                break;
            }
            case 4: {
                int14 = int8;
                string5 = string4;
                break;
            }
        };
        if ((int14 != -1 as obj)) {
            script10410(int0, comp(-1, 65535), 28575 as struct, int1, int2, (int11 + 2), (int11 + 2), 0, false, "");
            if (((int15 == 4) && (int4 > 4))) {
                script7924(int0, IF_GETNEXTSUBID(int0), int11, int11, (int1 + 1), (int2 + 1), 18945 as graphic, false, false, false, 0);
            } else {
                script6197(int0, int11, int11, (int1 + 2), (int2 + 2), int14, -1);
            };
            var int1 = (int1 + ((int11 + 2) + int12));
        };
    };
    var int16 = 0;
    if (((int13 == 1) && (int14 != -1 as obj))) {
        int16 = ((int3 - (int11 + 2)) - int12);
        script152(int0, int16, (int11 + 2), int1, int2, int10, string5, int9);
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8584 as cs2enum, int10));
    };
    int2 = (int2 + ((int11 + 2) + 2));
    return int2;
}