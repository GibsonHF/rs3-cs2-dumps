//
function script12115(int0: dbrow): unknown_int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    if (((dbrow_getfield(int0, 549216, 0) == false) && (script4148() == true))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 549264, 0) == false) && (script248() == 1))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 549232, 0) == false) && (PLAYERMEMBER() == false))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 549248, 0) == false) && (PLAYERMEMBER() == true))) {
        return 0;
    };
    if (((dbrow_getfield(int0, 549280, 0) == true) && (script12961(int0) == true))) {
        return 0;
    };
    var int1 = dbrow_getfield(int0, 549296, 0);
    var int2 = dbrow_getfield(int0, 549312, 0);
    if (((varplayer_3079 < int1) || (varplayer_3079 > int2))) {
        return 0;
    };
    var int3 = 0;
    var int4 = 0;
    if (((dbrow_getfield(int0, 549152, 0) > 0) && (int0 != 6677 as dbrow))) {
        int4 = (dbrow_getfield(int0, 549152, 0) * 1440);
        int3 = script11174();
        if ((((int3 + int4) + varplayer_10435) > 1314000)) {
            return 0;
        };
    };
    var int5 = -1 as struct;
    var int6 = -1 as dbrow;
    switch (int0) {
        case 7895: {
            if ((script17912() == 1)) {
                return 1;
            };
            return 0;
        }
        case 7896: {
            if (((script17912() == 1) && (script17911(7904 as dbrow) == 1))) {
                return 1;
            };
            return 0;
        }
        case 7898:
        case 7899:
        case 7900:
        case 7901: {
            if ((script17913(int0) == 1)) {
                return 1;
            };
            return 0;
        }
        case 7903:
        case 7904:
        case 7905: {
            if ((script17911(int0) == 1)) {
                return 1;
            };
            return 0;
        }
        case 4132:
        case 4133:
        case 4134: {
            if ((script246(script3608()) != 1)) {
                return 0;
            };
            if (((int0 == 4132 as dbrow) && (script3616() == true))) {
                return 0;
            };
            return 1;
        }
        case 4147:
        case 4148:
        case 4149: {
            if ((script15757() == 1)) {
                return 0;
            };
            return 1;
        }
        case 4150: {
            return 0;
        }
        case 4163:
        case 4164:
        case 4165: {
            int5 = script14441();
            if (((int5 != -1 as struct) && (struct_getparam(int5, 4284) == 1))) {
                return 1;
            };
            int6 = script15143();
            if ((int6 != -1 as dbrow)) {
                return 1;
            };
            return 0;
        }
        case 4167: {
            return 0;
        }
        case 4166: {
            return 0;
        }
        case 7722: {
            if ((script11568() == false)) {
                return 0;
            };
            break;
        }
        case 4123: {
            return script16038();
        }
        case 4495: {
            return script16079(varbitplayer_34085, varbitplayer_50401, 4495 as dbrow);
        }
        case 4496: {
            return script16079(varbitplayer_50216, varbitplayer_50400, 4496 as dbrow);
        }
        case 4598: {
            return script4576();
        }
        case 4842: {
            return script16079(varbitplayer_34085, varbitplayer_50401, 4842 as dbrow);
        }
        case 7003: {
            if (((varplayer_3079 >= dbrow_getfield(12788 as dbrow, 549296, 0)) && (varplayer_3079 <= dbrow_getfield(12788 as dbrow, 549312, 0)))) {
                return 0;
            };
            if ((varbitplayer_52327 == 1)) {
                return 0;
            };
            return 1;
        }
        case 12788: {
            if ((varbitplayer_52327 == 1)) {
                return 0;
            };
            return 1;
        }
        case 7005: {
            if ((script10881(6218 as struct) == 0)) {
                return 1;
            };
            return 0;
        }
        case 7006: {
            if ((script10881(45277 as struct) == 0)) {
                return 1;
            };
            return 0;
        }
        case 13597: {
            if ((script18945() == 1)) {
                return 0;
            };
            return 1;
        }
        case 13598: {
            if ((varbitplayer_3067 == 1)) {
                return 0;
            };
            return 1;
        }
        case 12789:
        case 12790:
        case 12791:
        case 12792: {
            if ((varbitplayer_24930 == 1)) {
                return 0;
            };
            return 1;
        }
        case 12986: {
            if ((varbitplayer_56859 == 1)) {
                return 0;
            };
            return 1;
        }
        case 13284: {
            return script18801();
        }
        case 13285: {
            if ((varbitplayer_55297 == 1)) {
                return 0;
            };
            return 1;
        }
        case 14693: {
            if ((varplayer_12017 == 0)) {
                return 0;
            };
            if ((varbitplayer_57013 == 1)) {
                return 0;
            };
            return 1;
        }
        case 6677: {
            return script2102();
        }
        case 14799: {
            if ((varbitplayer_60074 == 1)) {
                return 0;
            };
            return 1;
        }
        case 4151:
        case 12763: {
            if ((script20055() == 1)) {
                return 0;
            };
            return 1;
        }
    };
    return 1;
}