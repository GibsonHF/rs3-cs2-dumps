//
function script10121(int0: component, int1: unknown_int, int2: int, int3: component): void {
    var string0 = "";
    var int4 = 0;
    if ((int0 == comp(232, 87))) {
        varclient_4285 = IF_GETTEXT(int0);
        string0 = varclient_4285;
        int4 = varclient_4286;
    } else if ((int0 == comp(232, 93))) {
        string0 = varclient_4287;
        int4 = varclient_4288;
    } else if ((int0 == comp(232, 116))) {
        varclient_4289 = IF_GETTEXT(int0);
        string0 = varclient_4289;
        int4 = varclient_4290;
    };
    switch (int2) {
        case 84: {
            if ((int0 == comp(232, 93))) {
                script10116();
                return;
            };
            varbitclient_23065 = 2;
            script10119(1);
            return;
        }
        case 80: {
            if ((int0 == comp(232, 87))) {
                varbitclient_23065 = 2;
                script10119(1);
                return;
            };
            if ((int0 == comp(232, 93))) {
                varbitclient_23065 = 1;
                script10119(1);
                return;
            };
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if ((KEYHELD_SHIFT() == false)) {
                return;
            };
            int4 = script1553(int2, int4, string0);
            break;
        }
        case 13: {
            if ((script9666() == 1)) {
                return;
            };
            if ((STRING_LENGTH(string0) < 1)) {
                script8841(52, 0);
            } else {
                string0 = "";
                int4 = 0;
            };
            break;
        }
        default: {
            [string0, int4] = script802(int4, string0, 0, int2, int1);
            break;
        }
    };
    var int5 = 0;
    var int6 = 0;
    var string1 = "";
    var string2 = "";
    var int7 = 0;
    var int8 = comp(-1, 65535);
    if ((int0 == comp(232, 87))) {
        int8 = comp(232, 79);
        varclient_4286 = int4;
        varclient_4285 = string0;
        IF_SETPOSITION(script1551(varclient_4286, varclient_4285, 26 as fontmetrics, 6), IF_GETY(int3), 0, 0, int3);
        IF_SETTEXT(varclient_4285, int0);
        varbitclient_23065 = 1;
    } else if ((int0 == comp(232, 93))) {
        int8 = comp(232, 81);
        varclient_4288 = int4;
        varclient_4287 = string0;
        IF_SETPOSITION(script1551(varclient_4288, script2949(varclient_4287), 26 as fontmetrics, 6), IF_GETY(int3), 0, 0, int3);
        IF_SETTEXT(script2949(varclient_4287), int0);
        varbitclient_23065 = 2;
    } else if ((int0 == comp(232, 116))) {
        int8 = comp(232, 109);
        varclient_4290 = int4;
        varclient_4289 = string0;
        IF_SETPOSITION(script1551(varclient_4290, varclient_4289, 26 as fontmetrics, 6), IF_GETY(int3), 0, 0, int3);
        IF_SETTEXT(varclient_4289, int0);
        varbitclient_23065 = 3;
        IF_SETONMOUSEREPEAT(callback(script8799, string0, int0, -1), int0);
    };
    int5 = (IF_GETWIDTH(int8) - 11);
    int6 = STRING_LENGTH(string0);
    string1 = "";
    if ((int4 > 0)) {
        string1 = SUBSTRING(string0, 0, int4);
    };
    string2 = "";
    if ((int4 < int6)) {
        string2 = SUBSTRING(string0, int4, int6);
    };
    int7 = (STRINGWIDTH(string1, 26 as fontmetrics) - int5);
    IF_SETPOSITION(6, IF_GETY(int0), 0, 0, int0);
    IF_SETSIZE(MAX(STRINGWIDTH(string0, 26 as fontmetrics), int5), IF_GETHEIGHT(int0), 0, 0, int0);
    if ((int7 > 0)) {
        IF_SETPOSITION((IF_GETX(int0) - int7), IF_GETY(int0), 0, 0, int0);
        IF_SETPOSITION((IF_GETX(int3) - int7), IF_GETY(int3), 0, 0, int3);
    };
    return;
}