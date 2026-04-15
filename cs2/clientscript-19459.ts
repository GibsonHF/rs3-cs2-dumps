//
function script19459(int0: component, int1: int, int2: int, int3: int, int4: graphic, int5: int, int6: int, int7: int, int8: graphic, int9: int, string0: string, string1: string, string2: string, string3: string, string4: string, string5: string, string6: string): void {
    var int10 = 0;
    var int11 = 20;
    var string7 = "";
    var string8 = "";
    var int12 = 4367 as dbrow;
    if ((int9 != -1)) {
        int12 = 14485 as dbrow;
    };
    script15938(int0, int1, int10++, 0, 0, 0, 0, 0, 0, 1, 1);
    if ((strcmp(string0, "-") != 0)) {
        string7 = `${string0} has ${string5} skill total.`;
        string8 = `${string0} has ${string6} quest points.`;
        script19409(int1, int3, int5, string0, 1);
    };
    script16109(int1, int10++, 0, 0, 0, 0, 0, 0, 1, 1, int1, 0);
    script10033(int1, int10++, 0, 0, 0, 0, 0, 0, 1, 1, int12);
    script10028(int1, int10++, 0, 0, 1, 0, 4, 0, 1, 1, 0, 4);
    script7918(int1, int10++, 0, 0, 0, 1, int11, int11, 0, 0, int4);
    script3537(string2);
    script10485(int1, int10++, 0, 0, 0, 1, 144, 0, 0, 1, 2100 as dbrow, string0);
    CC_SETMAXLINES(1);
    script3537(string1);
    script15937(int1, int10++, 0, 0, 0, 1, 110, 0, 0, 1);
    script7918(int1, int10++, 0, 0, 0, 1, int6, 12, 0, 0, int8);
    script3537(string4);
    script10485(int1, int10++, 0, 0, 2, 1, (int6 + 4), 0, 1, 1, 2100 as dbrow, string3);
    CC_SETCOLOUR(int7);
    CC_SETMAXLINES(1);
    script3537(string4);
    CC_GETDYNAMICLAYER();
    CC_GETDYNAMICLAYER();
    switch (int9) {
        case 50: {
            script7858(int1, int9, 0, 0, 0, 1, 136, 30, 0, 0, 4476 as dbrow, "Vote");
            CC_SETOP(1, "Vote");
            break;
        }
        case 51: {
            script7858(int1, int9, 0, 0, 0, 1, 136, 30, 0, 0, 4476 as dbrow, "Cancel Vote");
            CC_SETOP(1, "Cancel Vote");
            break;
        }
        case 52: {
            script7858(int1, int9, 0, 0, 0, 1, 136, 30, 0, 0, 4476 as dbrow, "Vote");
            script7872(false, 1, false, false);
            break;
        }
        default: {
            script19462(int1, int10, string5, string6, string7, string8);
            break;
        }
    };
    return;
}