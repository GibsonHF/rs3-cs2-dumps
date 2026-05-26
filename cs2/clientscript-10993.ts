//
function script10993(int0: number): void {
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
    while ((int4 < ENUM_GETOUTPUTCOUNT(5960))) {
        if ((int4 == int0)) {
            script6465(varbitplayer_673, int4, 1);
        } else {
            script6465(varbitplayer_673, int4, 0);
        };
        int4 = (int4 + 1);
    };
    var int5 = 1;
    if ((int3 != comp(-1, 65535))) {
        SOUND_VORBIS_VOLUME(36961, 1, 0, 100);
        IF_SETHIDE(1, int3);
        script7494();
        script7491(int0, varbitplayer_678, 0, varclient_6786);
        int5 = 0;
        IF_SETHIDE(0, int3);
        if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 0) == 1))) {
            CC_SETGRAPHIC(19305);
        };
        script6470(int3);
        varclient_2699 = int0;
        IF_SETSCROLLPOS(0, 0, 85917866);
    };
    if ((varbitplayer_673 == 1)) {
        script6876(1);
    };
    if ((varbitplayer_673 == 2)) {
        script10653(0, int5);
        IF_SETHIDE(1, comp(1311, 27));
        IF_SETHIDE(1, comp(1311, 31));
        IF_SETHIDE(1, comp(1311, 35));
        IF_SETHIDE(1, comp(1311, 39));
        IF_SETHIDE(1, comp(1311, 43));
        IF_SETHIDE(1, comp(1311, 47));
        IF_SETHIDE(1, comp(1311, 51));
        IF_SETHIDE(1, comp(1311, 55));
        IF_SETHIDE(1, comp(1311, 59));
        IF_SETHIDE(1, comp(1311, 67));
        IF_SETHIDE(1, comp(1311, 71));
        IF_SETHIDE(1, comp(1311, 86));
        IF_SETHIDE(1, comp(1311, 90));
        IF_SETHIDE(1, comp(1311, 94));
        IF_SETGRAPHIC(24451, 85917724);
        IF_SETGRAPHIC(24453, 85917728);
        IF_SETGRAPHIC(24455, 85917732);
        IF_SETGRAPHIC(24457, 85917736);
        IF_SETGRAPHIC(24459, 85917740);
        IF_SETGRAPHIC(24461, 85917744);
        IF_SETGRAPHIC(24463, 85917748);
        IF_SETGRAPHIC(24465, 85917752);
        IF_SETGRAPHIC(24467, 85917756);
        IF_SETGRAPHIC(24469, 85917764);
        IF_SETGRAPHIC(24471, 85917768);
        IF_SETGRAPHIC(24473, 85917783);
        IF_SETGRAPHIC(24475, 85917787);
        IF_SETGRAPHIC(24477, 85917791);
        switch (varclient_2699) {
            case 0: {
                IF_SETGRAPHIC(24452, 85917724);
                IF_SETHIDE(0, comp(1311, 27));
                break;
            }
            case 1: {
                IF_SETGRAPHIC(24454, 85917728);
                IF_SETHIDE(0, comp(1311, 31));
                break;
            }
            case 2: {
                IF_SETGRAPHIC(24456, 85917732);
                IF_SETHIDE(0, comp(1311, 35));
                break;
            }
            case 3: {
                IF_SETGRAPHIC(24458, 85917736);
                IF_SETHIDE(0, comp(1311, 39));
                break;
            }
            case 4: {
                IF_SETGRAPHIC(24460, 85917740);
                IF_SETHIDE(0, comp(1311, 43));
                break;
            }
            case 5: {
                IF_SETGRAPHIC(24462, 85917744);
                IF_SETHIDE(0, comp(1311, 47));
                break;
            }
            case 7: {
                IF_SETGRAPHIC(24464, 85917748);
                IF_SETHIDE(0, comp(1311, 51));
                break;
            }
            case 9: {
                IF_SETGRAPHIC(24466, 85917752);
                IF_SETHIDE(0, comp(1311, 55));
                break;
            }
            case 10: {
                IF_SETGRAPHIC(24468, 85917756);
                IF_SETHIDE(0, comp(1311, 59));
                break;
            }
            case 14: {
                IF_SETGRAPHIC(24470, 85917764);
                IF_SETHIDE(0, comp(1311, 67));
                break;
            }
            case 18: {
                IF_SETGRAPHIC(24472, 85917768);
                IF_SETHIDE(0, comp(1311, 71));
                break;
            }
            case 20: {
                IF_SETGRAPHIC(24474, 85917783);
                IF_SETHIDE(0, comp(1311, 86));
                break;
            }
            case 19: {
                IF_SETGRAPHIC(24476, 85917787);
                IF_SETHIDE(0, comp(1311, 90));
                break;
            }
            case 21: {
                IF_SETGRAPHIC(24478, 85917791);
                IF_SETHIDE(0, comp(1311, 94));
                break;
            }
        };
        script6876(2);
    };
    return;
}