//
function script13145(int0: component, int1: component): void {
    var int2 = IF_GETLAYER(int0);
    if (((int0 == comp(-1, 65535)) || (int2 == comp(-1, 65535)))) {
        return;
    };
    var int3 = -1;
    var int4 = -1 as dbrow;
    var int5 = -1;
    var int6 = -1 as bas;
    if ((IF_FIND(int1) == 1)) {
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        switch (IF_GETPARENTLAYER(int2)) {
            case 102105090: {
                IF_SETONVARTRANSMIT(callback(script10769, int0, int1, 5005, 1), int0);
                if ((varplayer_5005 != -1)) {
                    CC_SETMODELANIM(BAS_GETANIM_READY(varplayer_5005));
                } else {
                    CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
                };
                CC_SETMODELANGLE(0, 100, 0, 0, 0, 380);
                break;
            }
            case 120651779: {
                IF_SETONVARTRANSMIT(callback(script10769, int0, int1, 6867, 6868, 2), int0);
                if ((cc_getparam(6373) == 1)) {
                    CC_SETMODELANGLE(0, 80, 10, 200, 10, 850);
                    CC_SETMODELANIM(12287 as seq);
                } else {
                    script17271(varplayer_6867);
                    if ((varbitclient_35134 == 1)) {
                        CC_SETMODELANGLE(0, 100, 0, 200, 0, 240);
                    } else {
                        CC_SETMODELANGLE(0, 100, 0, 200, 0, 380);
                    };
                };
                if ((IF_FIND[1](int2) == 1)) {
                    cc_setparam[1](6374, 1);
                    if ((varbitclient_35134 == 1)) {
                        cc_setparam[1](6375, 1450);
                    } else {
                        cc_setparam[1](6375, 1000);
                    };
                    script10455(int2);
                };
                break;
            }
            case 120783100:
            case 120783101:
            case 120783102:
            case 120783103:
            case 120783104:
            case 120783105:
            case 120783106:
            case 120783107:
            case 96797583: {
                int4 = script18843(IF_GETPARENTLAYER(int2));
                if ((int4 != -1 as dbrow)) {
                    int6 = script19117(int4);
                };
                script17271(int6);
                if ((IF_FIND[1](int2) == 1)) {
                    cc_setparam[1](6374, 2);
                    cc_setparam[1](6375, 600);
                    script10455(int2);
                };
                break;
            }
            default: {
                switch (int2) {
                    case 58392594: {
                        if ((GENDER() == 1)) {
                            CC_SETMODELANIM(BAS_GETANIM_READY(2703 as bas));
                        } else {
                            CC_SETMODELANIM(BAS_GETANIM_READY(2698 as bas));
                        };
                        CC_SETMODELANGLE(0, 100, 0, 200, 0, 380);
                        break;
                    }
                    default: {
                        CC_SETMODELANIM(BAS_GETANIM_READY(1426 as bas));
                        CC_SETMODELANGLE(0, 100, 0, 0, 0, 380);
                        break;
                    }
                };
                break;
            }
        };
    };
    IF_SETDRAGGABLE(int2, -1, int0);
    IF_SETONDRAG(callback(script8479, int0, int1, -1), int0);
    IF_SETONDRAGCOMPLETE(callback(script8480, int0, int1, -1), int0);
    IF_SETMOUSEOVERCURSOR(189, int0);
    return;
}