//
function script7703(int0: int): int {
    if ((varclient_4168 == 0)) {
        switch (int0) {
            case 0: {
                return varbitplayer_1967;
            }
            case 1: {
                return varbitplayer_1966;
            }
            case 2: {
                return varbitplayer_1965;
            }
            case 3: {
                return varbitplayer_2016;
            }
            case 4: {
                return varbitplayer_2015;
            }
            case 5: {
                return varbitplayer_2007;
            }
            case 6: {
                return varbitplayer_2006;
            }
            case 7: {
                return varbitplayer_2005;
            }
            case 8: {
                return varbitplayer_53230;
            }
            case 9: {
                return varbitplayer_53241;
            }
        };
    } else {
        return TESTBIT(varclient_4168, int0);
    };
    return 0;
}