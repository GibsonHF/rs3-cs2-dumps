//
function script16710(int0: component, int1: int, int2: int, int3: int, int4: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        if ((int4 <= 0)) {
            if ((int3 == 100)) {
                var int2 = -1;
            } else if ((int3 == 0)) {
                int2 = 1;
            };
            var int3 = script12377((int3 + (int2 * 24)), 0, 100);
            if ((int3 == 100)) {
                CC_SETTRANS(255);
                switch (CC_GETGRAPHIC()) {
                    case 20497: {
                        CC_SETGRAPHIC(20499 as graphic);
                        break;
                    }
                    case 20498: {
                        CC_SETGRAPHIC(20500 as graphic);
                        break;
                    }
                    case 20499: {
                        CC_SETGRAPHIC(20521 as graphic);
                        break;
                    }
                    case 20500: {
                        CC_SETGRAPHIC(20525 as graphic);
                        break;
                    }
                    case 20521: {
                        CC_SETGRAPHIC(20526 as graphic);
                        break;
                    }
                    case 20525: {
                        CC_SETGRAPHIC(20527 as graphic);
                        break;
                    }
                    case 20526: {
                        CC_SETGRAPHIC(20497 as graphic);
                        break;
                    }
                    case 20527: {
                        CC_SETGRAPHIC(20498 as graphic);
                        var int4 = 80;
                        break;
                    }
                    case 33760: {
                        CC_SETGRAPHIC(33762 as graphic);
                        break;
                    }
                    case 33761: {
                        CC_SETGRAPHIC(33763 as graphic);
                        break;
                    }
                    case 33762: {
                        CC_SETGRAPHIC(33764 as graphic);
                        break;
                    }
                    case 33763: {
                        CC_SETGRAPHIC(33765 as graphic);
                        break;
                    }
                    case 33764: {
                        CC_SETGRAPHIC(33766 as graphic);
                        break;
                    }
                    case 33765: {
                        CC_SETGRAPHIC(33767 as graphic);
                        break;
                    }
                    case 33766: {
                        CC_SETGRAPHIC(33760 as graphic);
                        break;
                    }
                    case 33767: {
                        CC_SETGRAPHIC(33761 as graphic);
                        int4 = 80;
                        break;
                    }
                };
            } else if ((int3 == 0)) {
                if (((CC_GETGRAPHIC() == 20497 as graphic) || (CC_GETGRAPHIC() == 33760 as graphic))) {
                    int4 = 80;
                    CC_SETTRANS(255);
                } else {
                    CC_SETTRANS(0);
                };
            };
        } else if (((--int4 <= 0) && ((CC_GETGRAPHIC() == 20497 as graphic) || (CC_GETGRAPHIC() == 33760 as graphic)))) {
            CC_SETTRANS(0);
        };
        CC_SETONTIMER(callback(script16710, int0, int1, int2, int3, int4));
    };
    return;
}