//[proc,loginscreen_setactivemenu_full]
function script3239(int0: number, int1: number): void {
    var int2 = script2948();
    if ((int1 == 0)) {
        if ((((int2 == -3) || (int2 == 21)) || (int2 == 1))) {
            return;
        };
    };
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
    varclient_175 = CLIENTCLOCK();
    varclient_1 = 0;
    if ((((varclient_1090 != 3) && (varclient_1090 != 4)) && (varclient_1090 != 19))) {
        varclient_1091 = varclient_1090;
        IF_SETONOP(callback(script1173, varclient_1091), comp(882, 12));
    };
    IF_SETHIDE(true, comp(744, 257));
    IF_SETHIDE(true, comp(744, 249));
    IF_SETHIDE(true, comp(744, 90));
    IF_SETHIDE(true, comp(744, 359));
    IF_CLOSESUBCLIENT(comp(744, 359));
    IF_SETHIDE(true, comp(744, 270));
    IF_SETHIDE(true, comp(744, 208));
    IF_SETHIDE(true, comp(744, 196));
    IF_SETONRESIZE(callback(), comp(744, 196));
    IF_SETONRESIZE(callback(), comp(882, 1));
    IF_SETHIDE(true, comp(744, 198));
    if ((IF_FIND(comp(744, 205)) == 1)) {
        CC_SETONBUTTONCLICK(callback());
    };
    if ((IF_FIND(comp(744, 206)) == 1)) {
        CC_SETONBUTTONCLICK(callback());
    };
    var int3 = 0;
    var int4 = 0;
    var string0 = "";
    var int5 = 26;
    if ((((int0 != 3) && (int0 != 4)) && (int0 != 19))) {
        IF_SETHIDE(true, comp(744, 63));
        IF_SETHIDE(true, comp(744, 72));
    };
    script15686();
    IF_SETONKEY(callback(), comp(744, 27));
    switch (int0) {
        case 8:
        case 13:
        case 4:
        case 3:
        case 14:
        case 19:
        case 18:
        case 15: {
            IF_SETONKEY(callback(script1221, -2147483640, -2147483639), comp(744, 27));
            break;
        }
    };
    if (((int0 != 18) && (int0 != 0))) {
        IF_SETHIDE(false, comp(744, 39));
    };
    switch (int0) {
        case 20: {
            script19989();
            break;
        }
        case 21: {
            script4732();
            break;
        }
        case 12: {
            script15676();
            script15651(12);
            script12352();
            IF_SETHIDE(false, comp(744, 257));
            break;
        }
        case 18: {
            script15651(18);
            IF_SETSIZE(0, 0, 1, 1, comp(744, 29));
            IF_SETHIDE(true, comp(744, 39));
            IF_SETHIDE(false, comp(744, 197));
            IF_SETHIDE(false, comp(744, 270));
            break;
        }
        case 0: {
            IF_SETSIZE(0, 0, 1, 1, comp(744, 29));
            IF_SETHIDE(true, comp(744, 39));
            script3385();
            IF_SETHIDE(false, comp(744, 359));
            break;
        }
        case 8: {
            script15676();
            script15643();
            varclient_547 = 0;
            IF_SETONCLICK(callback(script2944), comp(744, 139));
            script15687(8);
            varclient_1089 = -1;
            if ((script13749() == 0)) {
                script2940(int0);
            };
            script3230();
            break;
        }
        case 16: {
            SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
            script15676();
            if ((varclient_1100 == 1409)) {
                script7841();
            } else {
                IF_SETHIDE(false, comp(744, 63));
            };
            script15644();
            varclient_547 = 0;
            script15651(16);
            script15687(16);
            varclient_1089 = -1;
            script3230();
            break;
        }
        case 17: {
            script15676();
            script15687(17);
            script15651(17);
            IF_OPENSUBCLIENT(comp(744, 172), 724);
            varclient_1089 = -1;
            varclient_547 = 0;
            script15246();
            script3230();
            break;
        }
        case 9: {
            script15676();
            varclient_2576 = varclient_2555;
            varclient_2577 = varclient_2559;
            varclient_2555 = "";
            varclient_2559 = "";
            varclient_4192 = "";
            varclient_4193 = 0;
            script2945();
            break;
        }
        case 13: {
            script15676();
            script15651(13);
            script15687(13);
            if ((script13749() == 0)) {
                IF_SETTEXT("Welcome!", comp(744, 84));
            } else {
                IF_SETTEXT("Welcome back!", comp(744, 84));
            };
            if ((STRING_LENGTH(SSO_DISPLAYNAME()) == 0)) {
                IF_SETTEXT("", comp(744, 85));
            } else {
                IF_SETTEXT(`You are currently signed in as:<br><col=ffffff>${SSO_DISPLAYNAME()}</col>`, comp(744, 85));
            };
            break;
        }
        case 3: {
            SOUND_VORBIS_VOLUME(7200 as vorbis, 1, 0, 180);
            script15651(3);
            script15655();
            break;
        }
        case 4: {
            SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
            script15651(4);
            IF_OPENSUBCLIENT(comp(744, 196), 882);
            script2595(0);
            IF_SETHIDE(false, comp(744, 196));
            break;
        }
        case 7: {
            script15651(108);
            IF_SETHIDE(false, comp(744, 198));
            break;
        }
        case 14: {
            script15676();
            script15651(14);
            script15687(14);
            if ((script13749() == 0)) {
                script2940(114);
            };
            break;
        }
        case 15: {
            script15676();
            IF_SETHIDE(false, comp(744, 319));
            script15651(15);
            if ((script13749() == 0)) {
                script2940(113);
            };
            break;
        }
        case 19: {
            script15651(19);
            IF_SETHIDE(false, comp(744, 246));
            break;
        }
    };
    if ((int0 != 7)) {
        varclient_1090 = int0;
    };
    switch (int0) {
        case 3:
        case 4:
        case 14:
        case 15:
        case 19:
        case 18: {
            script9790(0);
            break;
        }
        default: {
            script9790(1);
            break;
        }
    };
    return;
}