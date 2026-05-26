//
function script8562(int0: number): void {
    if (((MAP_MEMBERS() == 0) && (struct_getparam(int0, 2809) == 1))) {
        CC_SETGRAPHIC(-1);
        return;
    };
    if ((struct_getparam(int0, 5315) == 1)) {
        if ((script20177() == 0)) {
            CC_SETGRAPHIC(-1);
        } else {
            CC_SETGRAPHIC(14710);
        };
        return;
    };
    switch (int0) {
        case 35360: {
            if ((varbitplayer_34890 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 35361: {
            if ((varbitplayer_34891 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 35362: {
            if ((varbitplayer_34892 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 14574: {
            if ((varbitplayer_2369 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 14570:
        case 14571:
        case 14569:
        case 14568:
        case 48368: {
            if ((varbitplayer_11319 != 8)) {
                CC_SETGRAPHIC(-1);
            } else {
                if (((int0 == 48368) && (varbitplayer_53590 == 0))) {
                    CC_SETGRAPHIC(-1);
                    return;
                };
                if (((int0 == 14568) && (STAT_BASE(1) < 65))) {
                    CC_SETGRAPHIC(-1);
                    return;
                };
                if ((STAT_BASE(1) < 70)) {
                    CC_SETGRAPHIC(-1);
                    return;
                };
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48361:
        case 48362:
        case 48363: {
            if ((varbitplayer_53588 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48365:
        case 48366:
        case 48367: {
            if ((varbitplayer_53589 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48370: {
            if ((varbitplayer_53591 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48371: {
            if ((varbitplayer_53592 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48373: {
            if ((varbitplayer_53593 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48374: {
            if ((varbitplayer_53594 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48375: {
            if ((varbitplayer_53595 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
        case 48376: {
            if ((varbitplayer_53596 == 0)) {
                CC_SETGRAPHIC(-1);
            } else {
                CC_SETGRAPHIC(14710);
            };
            break;
        }
    };
    if ((script13380(int0) == 0)) {
        CC_SETGRAPHIC(-1);
    } else {
        CC_SETGRAPHIC(14710);
    };
    return;
}