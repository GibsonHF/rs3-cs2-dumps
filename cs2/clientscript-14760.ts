//
function script14760(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, string0: string, string1: string, string2: string, string3: string, string4: string): number {
    var int10 = 26 as fontmetrics;
    if ((script6431() == 1)) {
        int10 = 28 as fontmetrics;
    };
    if ((STRING_LENGTH(string0) > 0)) {
        var int2 = script14758(int0, int1, int2, int3, string0, int9);
    };
    var int11 = 30;
    var int12 = 5;
    var int13 = MIN(int4, 4);
    var int14 = -1;
    var string5 = "";
    var int15 = 0;
    int15 = (int15 + 1);
    while ((int15 <= int13)) {
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
        if ((int14 != -1)) {
            script10410(int0, -1, 28575, int1, int2, (int11 + 2), (int11 + 2), 0, 0, "");
            if ((int15 == 4)) {
                if ((int4 > 4)) {
                    script7924(int0, IF_GETNEXTSUBID(int0), int11, int11, (int1 + 1), (int2 + 1), 18945, 0, 0, 0, 0);
                } else {
                    script6197(int0, int11, int11, (int1 + 2), (int2 + 2), int14, -1);
                };
            } else {
                script6197(int0, int11, int11, (int1 + 2), (int2 + 2), int14, -1);
            };
            var int1 = (int1 + ((int11 + 2) + int12));
        };
    };
    var int16 = 0;
    if (((int13 == 1) && (int14 != -1))) {
        int16 = ((int3 - (int11 + 2)) - int12);
        script152(int0, int16, (int11 + 2), int1, int2, int10, string5, int9);
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8584 as cs2enum, int10));
    };
    int2 = (int2 + ((int11 + 2) + 2));
    return int2;
}