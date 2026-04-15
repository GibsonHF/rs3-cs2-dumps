//
function script17266(int0: struct): boolean {
    var int1 = script3112();
    if (((varplayer_6601 < struct_getparam(int0, 6388)) || ((varplayer_6601 > struct_getparam(int0, 6389)) && (struct_getparam(int0, 6389) != 0)))) {
        return false;
    };
    if ((((struct_getparam(int0, 7491) == true) && (PLATFORMTYPE() != 0)) && (PLATFORMTYPE() != 5))) {
        return false;
    };
    if ((((struct_getparam(int0, 8846) == true) && (PLATFORMTYPE() != 3)) && (PLATFORMTYPE() != 2))) {
        return false;
    };
    if (((struct_getparam(int0, 8716) == true) && (PLATFORMTYPE() != 1))) {
        return false;
    };
    if ((((struct_getparam(int0, 8702) == false) && (script10946() == 1)) && (int1 == 1))) {
        return false;
    };
    if (((struct_getparam(int0, 8703) == true) && (int1 == 0))) {
        return false;
    };
    if (((struct_getparam(int0, 3292) != -1 as struct) && (script10881(struct_getparam(int0, 3292)) == 1))) {
        return false;
    };
    if ((((struct_getparam(int0, 1345) != -1) && (struct_getparam(int0, 1345) != 0)) && (script7073(struct_getparam(int0, 1345)) == 2))) {
        return false;
    };
    switch (int0) {
        case 44087: {
            if (((struct_getparam(int0, 4737) != -1 as dbrow) && ((script12115(struct_getparam(int0, 4737)) == 0) || (RANDOM(2) == 0)))) {
                return false;
            };
            break;
        }
        case 39677: {
            if (((((varbitplayer_31201 == 1) && (varbitplayer_31202 == 1)) && (varbitplayer_31203 == 1)) && (varbitplayer_31204 == 1))) {
                return false;
            };
            break;
        }
        case 39679: {
            if (((((varbitplayer_33770 == 1) && (varbitplayer_33771 == 1)) && (varbitplayer_33772 == 1)) && (varbitplayer_33773 == 1))) {
                return false;
            };
            break;
        }
        case 39685: {
            if ((((varbitplayer_32669 == 1) && (varbitplayer_32670 == 1)) && (varbitplayer_32671 == 1))) {
                return false;
            };
            break;
        }
        case 35237: {
            if (((DATE_MINUTES() <= (DATE_MINUTES_FROMRUNEDAY(8661) + 720)) || (DATE_MINUTES() >= (DATE_MINUTES_FROMRUNEDAY(8671) + 720)))) {
                return false;
            };
            if (((varbitplayer_45314 == 26) && (varplayer_9017 == 0))) {
                return false;
            };
            if ((RANDOM(2) == 0)) {
                return false;
            };
            break;
        }
        case 3448: {
            if ((RANDOM(4) == 0)) {
                return false;
            };
            break;
        }
        case 48967: {
            if (((varbitplayer_3067 == 1) && (script18945() == 1))) {
                return false;
            };
            break;
        }
        case 45627: {
            return script734(script18319());
        }
        case 45628:
        case 156:
        case 52419:
        case 6185:
        case 45626: {
            if ((script15757() == 1)) {
                return false;
            };
            break;
        }
        case 45623: {
            if (((varbitplayer_24930 == 1) && (varbitplayer_52327 == 1))) {
                return false;
            };
            break;
        }
        case 50245: {
            if ((varbitplayer_52956 == 1)) {
                return false;
            };
            break;
        }
        case 49299: {
            return script18317();
        }
        case 2945:
        case 2946: {
            if ((varbitplayer_57723 == 1)) {
                return false;
            };
            break;
        }
        case 52253:
        case 52254: {
            if ((varbitplayer_59835 == 1)) {
                return false;
            };
            break;
        }
        case 51414: {
            return script649();
        }
        case 52663: {
            if ((varbitplayer_52956 == 1)) {
                return false;
            };
            break;
        }
        case 153: {
            if ((PLAYERMEMBER() == true)) {
                return false;
            };
            break;
        }
    };
    return true;
}