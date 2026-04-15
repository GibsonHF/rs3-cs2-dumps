//
function script6978(): void {
    script3915();
    script1646();
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    if ((varbitplayer_4323 > 0)) {
        return;
    };
    if (((varbitplayer_4321 == 1) && (varbitplayer_25803 == 1))) {
        return;
    };
    var int0 = script15513();
    var int1 = 0;
    switch (int0) {
        case 32100: {
            if ((varbitplayer_26873 >= 5)) {
                int1 = 1;
            };
            break;
        }
        case 30139: {
            if ((script830() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 38119: {
            if ((varbitplayer_29996 == 12)) {
                int1 = 1;
            };
            break;
        }
        case 39801: {
            if ((script16428() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 6216: {
            if ((varbitplayer_51127 == 0)) {
                int1 = 1;
            };
            break;
        }
        case 22606: {
            if ((script16513() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 3451: {
            if (((varbitplayer_22147 > 0) || (IF_GETHIDE(comp(485, 9)) == false))) {
                int1 = 1;
            };
            break;
        }
        case 32986:
        case 50263:
        case 2951: {
            if (((script19139(int0) == 1) || (script19149(int0) == 1))) {
                int1 = 1;
            };
            break;
        }
        case 46120: {
            if ((varbitplayer_51278 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 19622: {
            if (((script16682() == true) || (varbitplayer_51409 == 1))) {
                int1 = 1;
            };
            break;
        }
        case 46482: {
            if ((varbitplayer_52082 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 39853: {
            if ((script7851() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 46483: {
            if ((varbitplayer_52102 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 47035: {
            if ((varbitplayer_52292 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 46398: {
            if ((script443() == 8)) {
                int1 = 1;
            };
            break;
        }
        case 6879: {
            if ((script6396() != 0)) {
                int1 = 1;
            };
            break;
        }
        case 46396: {
            if ((varbitplayer_52889 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 47489: {
            if ((varbitplayer_54031 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 47942: {
            if ((varbitplayer_53022 == 0)) {
                int1 = 1;
            };
            break;
        }
        case 49116: {
            if ((varbitplayer_54754 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 21098: {
            if ((script6753() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 49941: {
            if ((script18991() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 50195: {
            if ((script19072() == 1)) {
                int1 = 1;
            };
            break;
        }
        case 50555: {
            if ((script19268() == 0)) {
                int1 = 1;
            };
            break;
        }
        case 51061: {
            if ((script19697() == 8)) {
                int1 = 1;
            };
            break;
        }
        case 51131: {
            if (((script19762() == 1) || (script19763() == 1))) {
                int1 = 1;
            };
            break;
        }
        case 51804: {
            if ((varbitplayer_58134 == 1)) {
                int1 = 1;
            };
            break;
        }
        case 52664: {
            script1296("You have no more keys to use.");
            int1 = 1;
            break;
        }
    };
    if (((script6950() > 0) || (int1 == 1))) {
        script6974();
        return;
    };
    IF_SETHIDE(true, comp(1253, 171));
    IF_SETHIDE(true, comp(1253, 265));
    IF_SETHIDE(false, comp(1253, 91));
    if ((int0 == 39853 as struct)) {
        varclient_7076 = false;
    } else {
        IF_SETHIDE(false, comp(1253, 8));
    };
    IF_SETHIDE(true, comp(1253, 69));
    IF_SETHIDE(true, comp(1253, 70));
    IF_SETHIDE(true, comp(1253, 72));
    IF_SETHIDE(false, comp(1253, 93));
    IF_SETHIDE(true, comp(1253, 89));
    script2622(comp(1253, 104), -269, 269, 260, 0);
    script2624(comp(1253, 100), 0, 255, 50, 0);
    script2624(comp(1253, 101), 100, 255, 50, 0);
    script2624(comp(1253, 102), 200, 0, 50, 0);
    var int2 = 0;
    if ((((int0 != -1 as struct) && (struct_getparam(int0, 8340) == true)) && (struct_getparam(int0, 8362) == true))) {
        int2 = -40;
    };
    IF_SETPOSITION(IF_GETX(comp(1253, 97)), int2, 0, 1, comp(1253, 97));
    IF_SETPOSITION(IF_GETX(comp(1253, 105)), int2, 0, 1, comp(1253, 105));
    IF_SETPOSITION(IF_GETX(comp(1253, 108)), int2, 0, 1, comp(1253, 108));
    script3904();
    script10877();
    varclient_4083 = 5;
    var int3 = (script4173() + script4174());
    var string0 = "";
    if ((int3 > 0)) {
        if ((int3 == 1)) {
            string0 = "You have 1 Bond available.";
        } else {
            string0 = `You have ${inttostring(int3, 10)} Bonds available.`;
        };
    } else {
        string0 = "You have no Bonds available.";
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1), 82116713);
    return;
}