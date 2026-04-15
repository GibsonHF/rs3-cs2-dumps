//
function script3911(int0: struct, int1: int): unknown_int {
    if ((int0 != -1 as struct)) {
        if (((varplayer_3079 < struct_getparam(int0, 8977)) || ((struct_getparam(int0, 8978) != -1) && (varplayer_3079 > struct_getparam(int0, 8978))))) {
            return 0;
        };
        switch (struct_getparam(int0, 2531)) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5: {
                if ((script6488(int0) == 1)) {
                    return 0;
                };
                break;
            }
        };
        switch (int0) {
            case 45727: {
                if ((varbitplayer_54970 == 1)) {
                    return 0;
                };
                if ((varplayer_11598 == true)) {
                    return 1;
                };
                return 0;
            }
            case 45312: {
                if ((((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5)) || ((varplayer_3079 >= struct_getparam(34493 as struct, 8977)) && (varplayer_3079 <= struct_getparam(34493 as struct, 8978))))) {
                    return 0;
                };
                break;
            }
            case 34493: {
                if (((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5))) {
                    return 0;
                };
                break;
            }
            case 45729: {
                return script4221(int0, int1);
            }
            case 45728: {
                if (((script6431() == true) || (varbitplayer_28983 == 0))) {
                    return 0;
                };
                break;
            }
            case 47412: {
                if ((script4148() == true)) {
                    return 0;
                };
                break;
            }
            case 46297: {
                return script11459();
            }
            case 47484: {
                if (((PLATFORMTYPE() == 1) || (varbitplayer_53104 == 1))) {
                    return 0;
                };
                if (((PLAYERMEMBER() == false) && (script18311() == true))) {
                    return 0;
                };
                break;
            }
            case 45624: {
                if (((PLATFORMTYPE() == 1) || (varbitplayer_53104 == 1))) {
                    return 0;
                };
                if ((PLAYERMEMBER() == true)) {
                    return 0;
                };
                if ((script18311() == false)) {
                    return 0;
                };
                break;
            }
            case 33967: {
                if ((varbitplayer_20806 == 1)) {
                    return 0;
                };
                if ((((varbitplayer_3067 == 1) && (script18945() == 1)) && (varbitplayer_60074 == 1))) {
                    return 0;
                };
                break;
            }
            case 49812: {
                if ((varbitplayer_20806 == 1)) {
                    return 0;
                };
                if ((varbitplayer_3067 == 0)) {
                    return 0;
                };
                break;
            }
            case 45625: {
                if (((varbitplayer_24930 == 1) && (varbitplayer_52327 == 1))) {
                    return 0;
                };
                break;
            }
            case 47197: {
                if ((((PLATFORMTYPE() != 0) && (PLATFORMTYPE() != 5)) || (script18319() == 0))) {
                    return 0;
                };
                break;
            }
            case 49250: {
                if ((varbitplayer_56859 == 1)) {
                    return 0;
                };
                break;
            }
            case 49309: {
                if ((script18317() == false)) {
                    return 0;
                };
                break;
            }
            case 49310: {
                if (((script18318() == 0) || (script13749() == false))) {
                    return 0;
                };
                break;
            }
            case 49588: {
                if ((varbitplayer_55297 == 0)) {
                    return 1;
                };
                return script18801();
            }
            case 50204: {
                if (((PLATFORMTYPE() == 1) || (varbitplayer_18798 == 1))) {
                    return 0;
                };
                return 1;
            }
            case 32650: {
                if ((varplayer_12017 == 0)) {
                    return 0;
                };
                if ((varbitplayer_20806 == 1)) {
                    return 0;
                };
                if ((varbitplayer_57013 == 1)) {
                    return 0;
                };
                break;
            }
            case 51189: {
                if ((varbitplayer_20806 == 1)) {
                    return 0;
                };
                if ((varbitplayer_60073 == 1)) {
                    return 0;
                };
                break;
            }
            case 51190: {
                if ((varbitplayer_20806 == 1)) {
                    return 0;
                };
                if ((varbitplayer_60074 == 1)) {
                    return 0;
                };
                break;
            }
            case 2960: {
                if (((PLATFORMTYPE() == 1) || (varbitplayer_57723 == 1))) {
                    return 0;
                };
                break;
            }
            case 52270: {
                if (((PLATFORMTYPE() == 1) || (varbitplayer_59835 == 1))) {
                    return 0;
                };
                break;
            }
            case 51464: {
                if ((script649() == false)) {
                    return 0;
                };
                return 1;
            }
            case 51829:
            case 51830:
            case 51831:
            case 51832:
            case 51833:
            case 51834: {
                if ((script4148() == true)) {
                    return 0;
                };
                break;
            }
        };
    };
    if ((TESTBIT(varplayer_10228, int1) == 1)) {
        return 0;
    };
    return 1;
}