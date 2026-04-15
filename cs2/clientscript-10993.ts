//
function script10993(int0: int): void {
    if ((varclient_2699 == int0)) {
        return;
    };
    var int1 = enum_getvalue(0, 9, 5960 as cs2enum, int0);
    var int2 = comp(-1, 65535);
    if ((varclient_2699 != -1)) {
        int2 = enum_getvalue(0, 9, 5960 as cs2enum, varclient_2699);
    };
    var int3 = enum_getvalue(0, 9, 5961 as cs2enum, int0);
    var int4 = 0;
    while ((int4 < ENUM_GETOUTPUTCOUNT(5960 as cs2enum))) {
        if ((int4 == int0)) {
            script6465(varbitplayer_673, int4, 1);
        } else {
            script6465(varbitplayer_673, int4, 0);
        };
        int4 = (int4 + 1);
    };
    var int5 = 1;
    if ((int3 != comp(-1, 65535))) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        IF_SETHIDE(true, int3);
        script7494();
        script7491(int0, varbitplayer_678, 0, varclient_6786);
        int5 = 0;
        IF_SETHIDE(false, int3);
        if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 0) == 1))) {
            CC_SETGRAPHIC(19305 as graphic);
        };
        script6470(int3);
        varclient_2699 = int0;
        IF_SETSCROLLPOS(0, 0, comp(1311, 170));
    };
    if ((varbitplayer_673 == 1)) {
        script6876(1);
    };
    if ((varbitplayer_673 == 2)) {
        script10653(0, int5);
        IF_SETHIDE(true, comp(1311, 27));
        IF_SETHIDE(true, comp(1311, 31));
        IF_SETHIDE(true, comp(1311, 35));
        IF_SETHIDE(true, comp(1311, 39));
        IF_SETHIDE(true, comp(1311, 43));
        IF_SETHIDE(true, comp(1311, 47));
        IF_SETHIDE(true, comp(1311, 51));
        IF_SETHIDE(true, comp(1311, 55));
        IF_SETHIDE(true, comp(1311, 59));
        IF_SETHIDE(true, comp(1311, 67));
        IF_SETHIDE(true, comp(1311, 71));
        IF_SETHIDE(true, comp(1311, 86));
        IF_SETHIDE(true, comp(1311, 90));
        IF_SETHIDE(true, comp(1311, 94));
        stack(24451);
        stack(85917724);
        IF_SETGRAPHIC();
        stack(24453);
        stack(85917728);
        IF_SETGRAPHIC();
        stack(24455);
        stack(85917732);
        IF_SETGRAPHIC();
        stack(24457);
        stack(85917736);
        IF_SETGRAPHIC();
        stack(24459);
        stack(85917740);
        IF_SETGRAPHIC();
        stack(24461);
        stack(85917744);
        IF_SETGRAPHIC();
        stack(24463);
        stack(85917748);
        IF_SETGRAPHIC();
        stack(24465);
        stack(85917752);
        IF_SETGRAPHIC();
        stack(24467);
        stack(85917756);
        IF_SETGRAPHIC();
        stack(24469);
        stack(85917764);
        IF_SETGRAPHIC();
        stack(24471);
        stack(85917768);
        IF_SETGRAPHIC();
        stack(24473);
        stack(85917783);
        IF_SETGRAPHIC();
        stack(24475);
        stack(85917787);
        IF_SETGRAPHIC();
        stack(24477);
        stack(85917791);
        IF_SETGRAPHIC();
        switch (varclient_2699) {
            case 0: {
                stack(24452);
                stack(85917724);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917723);
                break;
            }
            case 1: {
                stack(24454);
                stack(85917728);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917727);
                break;
            }
            case 2: {
                stack(24456);
                stack(85917732);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917731);
                break;
            }
            case 3: {
                stack(24458);
                stack(85917736);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917735);
                break;
            }
            case 4: {
                stack(24460);
                stack(85917740);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917739);
                break;
            }
            case 5: {
                stack(24462);
                stack(85917744);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917743);
                break;
            }
            case 7: {
                stack(24464);
                stack(85917748);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917747);
                break;
            }
            case 9: {
                stack(24466);
                stack(85917752);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917751);
                break;
            }
            case 10: {
                stack(24468);
                stack(85917756);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917755);
                break;
            }
            case 14: {
                stack(24470);
                stack(85917764);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917763);
                break;
            }
            case 18: {
                stack(24472);
                stack(85917768);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917767);
                break;
            }
            case 20: {
                stack(24474);
                stack(85917783);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917782);
                break;
            }
            case 19: {
                stack(24476);
                stack(85917787);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917786);
                break;
            }
            case 21: {
                stack(24478);
                stack(85917791);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 85917790);
                break;
            }
        };
        script6876(2);
    };
    return;
}