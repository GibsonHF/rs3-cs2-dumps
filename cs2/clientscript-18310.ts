//
function script18310(int0: obj, int1: int): void {
    if (((OC_CATEGORY(int0) == 91 as category) && ((int1 > 4000) || (int1 < 0)))) {
        script12478(`Attempted to set quantity of oc_debugname to ${inttostring(int1, 10)}. Absolute max is ${inttostring(4000, 10)}.`);
        var int1 = script12377(int1, 4000, 0);
    };
    if (((OC_CATEGORY(int0) == 4449 as category) && ((int1 > 2147483647) || (int1 < 0)))) {
        script12478(`Attempted to set quantity of oc_debugname to ${inttostring(int1, 10)}. Absolute max is ${inttostring(2147483647, 10)}.`);
        int1 = script12377(int1, 2147483647, 0);
    };
    switch (int0) {
        case 436: {
            varbitplayer_43188 = int1;
            break;
        }
        case 438: {
            varbitplayer_43190 = int1;
            break;
        }
        case 440: {
            varbitplayer_43192 = int1;
            break;
        }
        case 453: {
            varbitplayer_43194 = int1;
            break;
        }
        case 442: {
            varbitplayer_43196 = int1;
            break;
        }
        case 447: {
            varbitplayer_43198 = int1;
            break;
        }
        case 449: {
            varbitplayer_43200 = int1;
            break;
        }
        case 44820: {
            varbitplayer_43202 = int1;
            break;
        }
        case 444: {
            varbitplayer_43204 = int1;
            break;
        }
        case 451: {
            varbitplayer_43206 = int1;
            break;
        }
        case 44822: {
            varbitplayer_43208 = int1;
            break;
        }
        case 44824: {
            varbitplayer_43210 = int1;
            break;
        }
        case 44826: {
            varbitplayer_43212 = int1;
            break;
        }
        case 44828: {
            varbitplayer_43214 = int1;
            break;
        }
        case 21778: {
            varbitplayer_43216 = int1;
            break;
        }
        case 44830: {
            varbitplayer_43218 = int1;
            break;
        }
        case 44832: {
            varbitplayer_43220 = int1;
            break;
        }
        case 57175: {
            varbitplayer_55880 = int1;
            break;
        }
        case 57177: {
            varbitplayer_55883 = int1;
            break;
        }
        case 57179: {
            varbitplayer_55886 = int1;
            break;
        }
        case 57181: {
            varbitplayer_55889 = int1;
            break;
        }
        case 57183: {
            varbitplayer_55892 = int1;
            break;
        }
        case 57185: {
            varbitplayer_55895 = int1;
            break;
        }
        case 57187: {
            varbitplayer_55898 = int1;
            break;
        }
        case 57189: {
            varbitplayer_55901 = int1;
            break;
        }
        case 57191: {
            varbitplayer_55904 = int1;
            break;
        }
        case 57193: {
            varbitplayer_55907 = int1;
            break;
        }
        case 59207: {
            varbitplayer_58113 = int1;
            break;
        }
        case 44799: {
            varplayer_11514 = int1;
            break;
        }
        case 44800: {
            varplayer_11515 = int1;
            break;
        }
        case 44801: {
            varplayer_11516 = int1;
            break;
        }
        case 44804: {
            varplayer_11517 = int1;
            break;
        }
        case 44802: {
            varplayer_11518 = int1;
            break;
        }
        case 44803: {
            varplayer_11519 = int1;
            break;
        }
        case 44805: {
            varplayer_11520 = int1;
            break;
        }
        case 44807: {
            varplayer_11521 = int1;
            break;
        }
        case 44808: {
            varplayer_11522 = int1;
            break;
        }
        case 44806: {
            varplayer_11523 = int1;
            break;
        }
        case 44809: {
            varplayer_11524 = int1;
            break;
        }
        case 44810: {
            varplayer_11525 = int1;
            break;
        }
        case 44811: {
            varplayer_11526 = int1;
            break;
        }
        case 44812: {
            varplayer_11527 = int1;
            break;
        }
        case 44813: {
            varplayer_11528 = int1;
            break;
        }
        case 44814: {
            varplayer_11529 = int1;
            break;
        }
        case 44815: {
            varplayer_11530 = int1;
            break;
        }
        case 57174: {
            varplayer_11809 = int1;
            break;
        }
        case 59209: {
            varplayer_12234 = int1;
            break;
        }
        default: {
            script12478(`Attempt to setvar on invalid stone spirit or ore oc_debugname.`);
            break;
        }
    };
    return;
}