//
function script8439(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((CC_FIND(int0, 7) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    if ((CC_FIND(int0, 8) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    if ((CC_FIND(int0, 9) == 1)) {
        CC_SETGRAPHIC(int3);
    };
    if ((CC_FIND(int0, 10) == 1)) {
        CC_SETGRAPHIC(int4);
    };
    var int5 = 0;
    if ((CC_FIND(int0, 11) == 1)) {
        switch (int0) {
            case 123535367:
            case 123666439:
            case 123600903: {
                int5 = varbitplayer_44637;
                break;
            }
            case 95748103: {
                if ((varbitplayer_18791 == 0)) {
                    int5 = varbitplayer_27344;
                } else {
                    int5 = varbitplayer_44637;
                };
                break;
            }
            case 79888391: {
                if ((varbitplayer_53124 == 0)) {
                    int5 = varbitplayer_27344;
                } else {
                    int5 = varbitplayer_44637;
                };
                break;
            }
            case 80019463: {
                int5 = varbitplayer_44637;
                break;
            }
            default: {
                int5 = varbitplayer_27344;
                break;
            }
        };
        if ((int5 == 0)) {
            CC_SETGRAPHIC(24450);
        } else {
            CC_SETGRAPHIC(24446);
        };
    };
    return;
}