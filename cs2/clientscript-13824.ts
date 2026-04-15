//
function script13824(): void {
    if (((varbitplayer_42094 == 1) || (script6431() == true))) {
        IF_SETONTIMER(callback(), comp(1477, 881));
        return;
    };
    var int0 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    stack(unk11105());
    [int0, string1, string0, string2] = stack();
    varclient_6363 = 0;
    switch (int0) {
        case 4:
        case 3:
        case 2:
        case 7: {
            if ((varclient_6347 != int0)) {
                script5487(1);
            };
            varclient_6363 = 1;
            break;
        }
        case 1: {
            if ((varclient_1691 == -1 as obj)) {
                if ((varclient_1688 == true)) {
                    script5487(1);
                };
                return;
            };
            break;
        }
        default: {
            if ((varclient_1688 == true)) {
                script5487(1);
            };
            return;
        }
    };
    varclient_6347 = int0;
    var int1 = 0;
    var int2 = 0;
    [int1, int2] = unk11051();
    var int3 = 0;
    var string3 = "";
    var string4 = "";
    stack(unk11104());
    [int3, string4, string3] = stack();
    if (((int3 == 1) && (int1 < 2))) {
        string0 = string4;
        string1 = `-> ${string3}`;
        string2 = "";
        int0 = -1;
    };
    if (((strcmp(string0, varclient_2252) != 0) || (strcmp(string1, varclient_6361) != 0))) {
        varclient_2252 = string0;
        varclient_6361 = string1;
        script5487(0);
    } else if ((int0 == 1)) {
        if ((MODULO(CLIENTCLOCK(), 50) != 0)) {
            script5489();
            return;
        };
    } else if ((int0 != 4)) {
        script5489();
        return;
    };
    var string5 = string1;
    if ((STRING_LENGTH(string0) > 0)) {
        if ((STRING_LENGTH(string2) > 0)) {
            string5 = `${string5} ${string0} ${string2}`;
        } else {
            string5 = `${string5} ${string0}`;
        };
    };
    switch (int0) {
        case 4: {
            if ((unk11103() == 1)) {
                if ((((varclient_173 <= 0) && (varbitplayer_3028 == 0)) && ((strcmp(string1, "Attack") == 0) || (npc_getparam(unk11077(), 9321) == 1)))) {
                    if ((unk11102() == 0)) {
                        script8876(REMOVETAGS(string0), npc_getparam(unk11077(), 2848), npc_getparam(unk11077(), 26));
                        script7234(string5);
                    } else {
                        script8880();
                    };
                } else {
                    script8880();
                    script7234(string5);
                };
            } else {
                script8880();
                script7234(string5);
            };
            break;
        }
        case 3:
        case 2: {
            script7234(string5);
            break;
        }
        case 7: {
            script7234(string5);
            break;
        }
        case 1: {
            if ((varclient_1691 != -1 as obj)) {
                script7234(string5);
            } else {
                script5487(1);
            };
            break;
        }
        default: {
            if ((varclient_1688 == true)) {
                script5487(1);
            };
            break;
        }
    };
    return;
}