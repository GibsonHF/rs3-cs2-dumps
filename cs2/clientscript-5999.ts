//
function script5999(int0: number, int1: number, int2: number, int3: number, string0: string): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    var int4 = (MODULO(int0, 8) + (int1 * 8));
    var int5 = -1 as graphic;
    var int6 = -1 as obj;
    var int7 = -1;
    var int8 = -1;
    var string1 = "";
    var int9 = 32;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    switch (int2) {
        case 0: {
            int5 = 2831 as graphic;
            string1 = "Starting room";
            break;
        }
        case 1: {
            int5 = 2833 as graphic;
            string1 = "Boss room";
            break;
        }
        case 2: {
            int6 = enum_getvalue(0, 33, 3008 as cs2enum, int3);
            int9 = 24;
            int10 = 5;
            int11 = 2;
            string1 = OC_NAME(int6);
            if ((script8152(int6) == 1)) {
                int12 = 1;
            };
            break;
        }
        case 3: {
            int5 = enum_getvalue(0, 23, 371 as cs2enum, int3);
            string1 = enum_getvalue(0, 36, 108 as cs2enum, int3);
            int9 = 16;
            int10 = 8;
            int11 = 8;
            break;
        }
        case 5: {
            int9 = 20;
            int6 = 17489 as obj;
            string1 = string0;
            var string0 = "";
            int10 = 6;
            int11 = 5;
            int4 = 64;
            break;
        }
        case 6: {
            int9 = 20;
            int6 = 29468 as obj;
            string1 = string0;
            string0 = "";
            int10 = 6;
            int11 = 5;
            int4 = 65;
            break;
        }
        case 7: {
            int9 = 20;
            int6 = 18829 as obj;
            string1 = string0;
            string0 = "";
            int10 = 6;
            int11 = 5;
            int4 = 66;
            break;
        }
        case 4: {
            int9 = 11;
            string1 = string0;
            string0 = "";
            int4 = (67 + int3);
            switch (int3) {
                case 1: {
                    int5 = 2825 as graphic;
                    int10 = 6;
                    int11 = 20;
                    break;
                }
                case 2: {
                    int5 = 2826 as graphic;
                    int10 = 20;
                    int11 = 20;
                    break;
                }
                case 3: {
                    int5 = 2827 as graphic;
                    int10 = 13;
                    int11 = 13;
                    break;
                }
                case 4: {
                    int5 = 2828 as graphic;
                    int10 = 6;
                    int11 = 6;
                    break;
                }
                case 5: {
                    int5 = 2829 as graphic;
                    int10 = 20;
                    int11 = 6;
                    break;
                }
            };
            break;
        }
    };
    script8023(61734920, int4, 1, ((int0 * 32) + int10), ((int1 * 32) + int11), 0, 2, int9, int9, 0, 0, int5);
    if ((int6 != -1 as obj)) {
        CC_SETOBJECT_NONUM(int6, 1);
        if ((int12 == 1)) {
            CC_SETOUTLINE(2);
        };
    };
    if ((script6431() == 1)) {
        CC_SETTRANS(130);
    };
    if ((strcmp(string0, "") != 0)) {
        script15947(61734920, int4, 2, ((int0 * 32) + 4), ((int1 * 32) + 14), 0, 2, 24, 14, 0, 0, 2196, string0);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(16777215);
        string0 = `${enum_getvalue(0, 36, 108 as cs2enum, int3)} ${string0}`;
    };
    if ((strcmp(string1, "") != 0)) {
        CC_SETONMOUSEREPEAT(callback(script3282, -2147483645, -2147483643, 61734922, string1));
        CC_SETONMOUSELEAVE(callback(script40, 61734922));
    };
    return;
}