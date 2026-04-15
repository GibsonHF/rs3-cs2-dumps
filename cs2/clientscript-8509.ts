//
function script8509(int0: int, int1: unknown_int): void {
    if ((varclient_2235 != comp(-1, 65535))) {
        if ((IF_GETHIDE(varclient_2235) == true)) {
            script7208("", comp(-1, 65535));
        } else if ((varclient_2873 == 11)) {
            return;
        };
    };
    var string0 = "";
    var int2 = varclient_2231;
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script8825(7, 0);
    if (((int2 == -1) && ((script16474(int4) == false) || (int0 != int3)))) {
        return;
    };
    if (((script8585(int2) == comp(-1, 65535)) || (IF_GETHIDE(script8585(int2)) == true))) {
        return;
    };
    if ((script11370() == 0)) {
        if ((int0 == 84)) {
            MES_TYPED(script8526(int2), 0, "Chat is not available until your Date of Birth is recorded. Please enter your DOB above.");
        };
        return;
    };
    if ((((varclient_2873 != 8) && (int0 != 84)) && ((script16474(int4) == false) || (int0 != int3)))) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 1;
    switch (int0) {
        case 9: {
            if ((script8627(int2) != -1 as chatphrase)) {
                script1052(script8629(int2), script8609(int2), script8627(int2), int2);
            };
            break;
        }
        case 10: {
            if (((varbitplayer_21242 == 0) && (script1036() != -1 as chatcat))) {
                script1051(0, "", int2);
            };
            break;
        }
        case 12: {
            int5 = 150;
            int6 = (CLIENTCLOCK() - script8673(int2));
            if ((int6 > 1500)) {
                script8676(int2, 0);
            };
            if ((script8675(int2) >= 7)) {
                int5 = 600;
            } else if ((script8675(int2) >= 5)) {
                int5 = 450;
            } else if ((script8675(int2) >= 3)) {
                int5 = 300;
            };
            if ((int6 >= int5)) {
                script8674(int2, CLIENTCLOCK());
                script8676(int2, (script8675(int2) + 1));
                if ((script8623(int2) != -1 as chatphrase)) {
                    script1069(int2);
                };
                return;
            };
            break;
        }
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103: {
            if (((KEYHELD_SHIFT() == true) && (script13749() == false))) {
                varclient_1028 = script1553(int0, varclient_1028, script8521(int2));
            };
            break;
        }
        case 13: {
            if ((varclient_1652 == true)) {
                varclient_1652 = false;
                script9666();
                script8517(int2);
                return;
            };
            if ((script9666() == 1)) {
                return;
            };
            if ((STRING_LENGTH(script8521(int2)) < 1)) {
                script8517(int2);
            } else {
                script8522(int2, "");
                varclient_1028 = 0;
                if ((script8853() > 1)) {
                    script9958(8, 0);
                };
            };
            break;
        }
        case 80: {
            script8511(int2);
            break;
        }
        case 84: {
            script15841(int2);
            break;
        }
        case 83: {
            int7 = script8519(script8521(int2));
            if ((int7 != -1)) {
                script8522(int2, "");
                script8514(int2, int7);
                if ((int7 == 18)) {
                    script8551(int7, 0);
                    script1558(int7, 0);
                };
                return;
            };
            script8510(int2, int0, int1);
            break;
        }
        default: {
            if (((script16474(int4) == true) && (int0 == int3))) {
                script8511(int2);
            } else {
                if (((script6431() == false) && (varclient_1652 == true))) {
                    varclient_1652 = false;
                    return;
                };
                if ((int2 == 18)) {
                    int8 = STRING_LENGTH(varclient_2483);
                };
                script8510(int2, int0, int1);
                if ((((int2 == 18) && (int8 == 0)) && (STRING_LENGTH(varclient_2483) > 0))) {
                    IF_SETHIDE(true, comp(137, 78));
                };
            };
            break;
        }
    };
    script1558(int2, 0);
    return;
}