//
function script8818(int0: int, int1: unknown_int): void {
    if ((varclient_2850 <= 0)) {
        return;
    };
    if ((script8815(int0) == 0)) {
        switch (int0) {
            case 13: {
                if ((script9666() == 1)) {
                    return;
                };
                script8212(varclient_2850, varclient_2851, -1, -1);
                script8820(0);
                break;
            }
            case 82:
            case 86:
            case 81: {
                break;
            }
            case -1: {
                if ((((CHAR_ISPRINTABLE(int1) == 1) || (int1 == -1)) && (int1 != 96))) {
                    script8210("Key not currently supported. Please enter a new one.", -1, -1);
                };
                break;
            }
            default: {
                script8210("Invalid key. Please enter a new one.", -1, -1);
                break;
            }
        };
        return;
    };
    var int2 = 8;
    if ((KEYHELD_CTRL() == true)) {
        int2 = 1;
    } else if ((KEYHELD_ALT() == true)) {
        int2 = 2;
    } else if ((KEYHELD_SHIFT() == true)) {
        int2 = 4;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = -1;
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(7691 as cs2enum);
    while ((int6 < int7)) {
        int4 = enum_getvalue(0, 0, 7691 as cs2enum, int6);
        int5 = script8824(int4, int0, int2);
        if ((int5 != -1)) {
            int6 = int7;
        } else {
            int6 = (int6 + 1);
        };
    };
    var string0 = "";
    [int3, string0] = script8823(varclient_2850, varclient_2851, int0, int2);
    if ((int3 == 0)) {
        if ((strcmp(string0, "") == 0)) {
            string0 = "Key bind failed. Please try again later.";
        };
        script8210(string0, -1, -1);
        return;
    };
    if ((int5 != -1)) {
        if (((varclient_2850 != int4) || (varclient_2851 != int5))) {
            script8823(int4, int5, 255, 0);
        } else {
            int4 = -1;
            int5 = -1;
        };
    };
    script8212(varclient_2850, varclient_2851, int4, int5);
    script8820(0);
    return;
}