//
function script8765(): void {
    if ((varbitplayer_20711 > 0)) {
        IF_SETHIDE(0, 16121882);
        CC_DELETEALL(16121862);
        CC_CREATE(16121862, 5, 0);
        if ((varbitplayer_20711 > 3)) {
            CC_SETPOSITION(0, 16, 1, 0);
            CC_SETSIZE(48, 48, 0, 0);
        } else {
            CC_SETPOSITION(0, 24, 1, 0);
            CC_SETSIZE(36, 32, 0, 0);
        };
        switch (varbitplayer_20711) {
            case 1: {
                if ((PLAYERMEMBER() == 0)) {
                    CC_SETOBJECT(29933, 1);
                } else {
                    CC_SETOBJECT(29934, 1);
                };
                break;
            }
            case 2: {
                if ((PLAYERMEMBER() == 0)) {
                    CC_SETOBJECT(29934, 1);
                } else {
                    CC_SETOBJECT(29935, 1);
                };
                break;
            }
            case 3: {
                CC_SETOBJECT(29929, 1);
                IF_SETTEXT("Claim", 16121905);
                break;
            }
            case 4: {
                CC_SETGRAPHIC(20536);
                IF_SETTEXT("Claim", 16121905);
                break;
            }
            case 5: {
                CC_SETGRAPHIC(11744);
                IF_SETTEXT("Claim", 16121905);
                break;
            }
        };
    } else {
        CC_DELETEALL(16121862);
        IF_SETHIDE(1, 16121882);
    };
    return;
}