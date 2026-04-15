//
function script4832(int0: component, int1: int): void {
    script4834(int0);
    if ((CC_FIND(int0, int1) == 1)) {
        if ((CC_GETGRAPHIC() == 6009 as graphic)) {
            switch (varbitplayer_6981) {
                case 1: {
                    switch (int0) {
                        case 82444749:
                        case 82444672:
                        case 82444589: {
                            varbitplayer_6990 = (1 + int1);
                            break;
                        }
                        case 82444737:
                        case 82444658:
                        case 82444573: {
                            varbitplayer_6991 = (1 + int1);
                            break;
                        }
                        case 82444725:
                        case 82444644:
                        case 82444557: {
                            varbitplayer_6992 = (1 + int1);
                            break;
                        }
                    };
                    break;
                }
                case 2: {
                    switch (int0) {
                        case 82444749:
                        case 82444672:
                        case 82444589: {
                            varbitplayer_6999 = (1 + int1);
                            break;
                        }
                        case 82444737:
                        case 82444658:
                        case 82444573: {
                            varbitplayer_7000 = (1 + int1);
                            break;
                        }
                        case 82444725:
                        case 82444644:
                        case 82444557: {
                            varbitplayer_7001 = (1 + int1);
                            break;
                        }
                    };
                    break;
                }
                case 3: {
                    switch (int0) {
                        case 82444749:
                        case 82444672:
                        case 82444589: {
                            varbitplayer_7008 = (1 + int1);
                            break;
                        }
                        case 82444737:
                        case 82444658:
                        case 82444573: {
                            varbitplayer_7009 = (1 + int1);
                            break;
                        }
                        case 82444725:
                        case 82444644:
                        case 82444557: {
                            varbitplayer_7010 = (1 + int1);
                            break;
                        }
                    };
                    break;
                }
            };
            CC_SETGRAPHIC(6004 as graphic);
        } else {
            script4834(int0);
        };
    };
    script4838();
    script4810();
    script4840();
    script4814();
    return;
}