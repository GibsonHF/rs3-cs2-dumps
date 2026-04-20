//
function script7800(int0: unknown_int): void {
    var int1 = script8071();
    var int2 = script18936();
    var int3 = comp(-1, 65535);
    var int4 = -1;
    if ((IF_HASSUBMODAL(int1, 1188 as interface) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5593, -2147483640, -2147483639), comp(1188, 1));
        } else {
            IF_SETONKEY(callback(), comp(1188, 1));
        };
    } else if ((IF_HASSUBMODAL(int2, 387 as interface) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5177, -2147483640, -2147483639), comp(387, 0));
        } else {
            IF_SETONKEY(callback(), comp(387, 0));
        };
    } else if ((IF_HASSUBMODAL(int1, 1193 as interface) == 1)) {
        if ((int0 == 1)) {
            IF_SETONKEY(callback(script5583, -2147483640, -2147483639), comp(1193, 1));
        } else {
            IF_SETONKEY(callback(), comp(1193, 1));
        };
    } else {
        if ((IF_HASSUBMODAL(int1, 1184 as interface) == 1)) {
            int3 = comp(1184, 15);
            int4 = 77594638;
        } else if ((IF_HASSUBMODAL(int1, 1186 as interface) == 1)) {
            int3 = comp(1186, 8);
            int4 = 77725703;
        } else if ((IF_HASSUBMODAL(int1, 835 as interface) == 1)) {
            int3 = comp(835, 8);
            int4 = 54722566;
        } else if ((IF_HASSUBMODAL(int1, 1189 as interface) == 1)) {
            int3 = comp(1189, 19);
            int4 = 77922322;
        } else if ((IF_HASSUBMODAL(int1, 1191 as interface) == 1)) {
            int3 = comp(1191, 15);
            int4 = 78053390;
        } else if ((IF_HASSUBMODAL(int1, 1187 as interface) == 1)) {
            int3 = comp(1187, 20);
            int4 = 77791251;
        } else if ((IF_HASSUBOVERLAY(int1, 1192 as overlayinterface) == 1)) {
            int3 = comp(1192, 15);
            int4 = 78118926;
        } else if ((IF_HASSUBMODAL(int2, 327 as interface) == 1)) {
            int3 = comp(327, 6);
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