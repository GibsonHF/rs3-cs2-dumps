//
function script7800(int0: number): void {
    var int1 = script8071();
    var int2 = script18936();
    var int3 = -1;
    var int4 = -1;
    if ((IF_HASSUBMODAL(int1, 1188) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5593, -2147483640, -2147483639), 77856769);
        } else {
            IF_SETONKEY(callback(), 77856769);
        };
    } else if ((IF_HASSUBMODAL(int2, 387) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5177, -2147483640, -2147483639), 25362432);
        } else {
            IF_SETONKEY(callback(), 25362432);
        };
    } else if ((IF_HASSUBMODAL(int1, 1193) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5583, -2147483640, -2147483639), 78184449);
        } else {
            IF_SETONKEY(callback(), 78184449);
        };
    } else {
        if ((IF_HASSUBMODAL(int1, 1184) == 1)) {
            int3 = 77594639;
            int4 = 77594638;
        } else if ((IF_HASSUBMODAL(int1, 1186) == 1)) {
            int3 = 77725704;
            int4 = 77725703;
        } else if ((IF_HASSUBMODAL(int1, 835) == 1)) {
            int3 = 54722568;
            int4 = 54722566;
        } else if ((IF_HASSUBMODAL(int1, 1189) == 1)) {
            int3 = 77922324;
            int4 = 77922323;
        } else if ((IF_HASSUBMODAL(int1, 1191) == 1)) {
            int3 = 78053391;
            int4 = 78053390;
        } else if ((IF_HASSUBMODAL(int1, 1187) == 1)) {
            int3 = 77791252;
            int4 = 77791251;
        } else if ((IF_HASSUBOVERLAY(int1, 1192) == 1)) {
            int3 = 78118927;
            int4 = 78118926;
        } else if ((IF_HASSUBMODAL(int2, 327) == 1)) {
            int3 = 21430278;
            int4 = -1;
        } else {
            return;
        };
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5585, -2147483640, -2147483639, int3, int4), int3);
        } else {
            IF_SETONKEY(callback(), int3);
        };
    };
    return;
}