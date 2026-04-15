//
function script3563(int0: int, int1: int, int2: achievement): graphic {
    var int3 = -1 as struct;
    var int4 = -1 as quest;
    switch (int0) {
        case 2: {
            return script3561(ACHIEVEMENT_REQSTATE(int2));
        }
        case 1: {
            int4 = enum_getvalue(0, 3, 2252 as cs2enum, int1);
            if ((int4 != -1 as quest)) {
                if ((script2193(int4) == 2)) {
                    return script3561(-2);
                };
                if ((script2125(int4) == 0)) {
                    return script3561(-1);
                };
                return -1 as graphic;
            };
            return -1 as graphic;
        }
        case 3: {
            int3 = enum_getvalue(0, 73, 12251 as cs2enum, int1);
            if ((int3 != -1 as struct)) {
                return script3561(script13280(int3));
            };
            return -1 as graphic;
        }
        case 4: {
            int3 = script16319(int1);
            if ((((int3 != -1 as struct) && (script16442(int1) >= struct_getparam(int3, 2235))) && (script18262(script16500(int1)) == 1))) {
                return script3561(-2);
            };
            return -1 as graphic;
        }
        case 5: {
            return enum_getvalue(0, 23, 8548 as cs2enum, int1);
        }
        case 6: {
            int3 = enum_getvalue(0, 73, 6452 as cs2enum, int1);
            if ((int3 != -1 as struct)) {
                return struct_getparam(int3, 1271);
            };
            return -1 as graphic;
        }
        case 7: {
            if (((varplayer_185 > 0) && (varplayer_183 == 0))) {
                return script3561(-2);
            };
            return -1 as graphic;
        }
        case 8: {
            break;
        }
        default: {
            return -1 as graphic;
        }
    };
    if (((varbitplayer_22901 > 0) && (varbitplayer_22902 == 0))) {
        return script3561(-2);
    };
    return -1 as graphic;
}