//
function script15386(int0: number, int1: number): void {
    var int2 = 0;
    var int3 = -1;
    var int4 = 0;
    var int5 = -1;
    while ((int2 < 9)) {
        switch (int1) {
            case 1: {
                switch (int2) {
                    case 0: {
                        int5 = 37945370;
                        int3 = 37945367;
                        break;
                    }
                    case 1: {
                        int3 = 37945368;
                        break;
                    }
                    case 2: {
                        int3 = 37945369;
                        break;
                    }
                    case 3: {
                        int5 = 37945374;
                        int3 = 37945371;
                        break;
                    }
                    case 4: {
                        int3 = 37945372;
                        break;
                    }
                    case 5: {
                        int3 = 37945373;
                        break;
                    }
                    case 6: {
                        int5 = 37945378;
                        int3 = 37945375;
                        break;
                    }
                    case 7: {
                        int3 = 37945376;
                        break;
                    }
                    case 8: {
                        int3 = 37945377;
                        break;
                    }
                };
                break;
            }
            case 2: {
                switch (int2) {
                    case 0: {
                        int5 = 37945358;
                        int3 = 37945355;
                        break;
                    }
                    case 1: {
                        int3 = 37945356;
                        break;
                    }
                    case 2: {
                        int3 = 37945357;
                        break;
                    }
                    case 3: {
                        int5 = 37945362;
                        int3 = 37945359;
                        break;
                    }
                    case 4: {
                        int3 = 37945360;
                        break;
                    }
                    case 5: {
                        int3 = 37945361;
                        break;
                    }
                    case 6: {
                        int5 = 37945366;
                        int3 = 37945363;
                        break;
                    }
                    case 7: {
                        int3 = 37945364;
                        break;
                    }
                    case 8: {
                        int3 = 37945365;
                        break;
                    }
                };
                break;
            }
            case 3: {
                switch (int2) {
                    case 0: {
                        int5 = 37945383;
                        int3 = 37945380;
                        break;
                    }
                    case 1: {
                        int3 = 37945381;
                        break;
                    }
                    case 2: {
                        int3 = 37945382;
                        break;
                    }
                    case 3: {
                        int5 = 37945388;
                        int3 = 37945385;
                        break;
                    }
                    case 4: {
                        int3 = 37945386;
                        break;
                    }
                    case 5: {
                        int3 = 37945387;
                        break;
                    }
                    case 6: {
                        int5 = 37945393;
                        int3 = 37945390;
                        break;
                    }
                    case 7: {
                        int3 = 37945391;
                        break;
                    }
                    case 8: {
                        int3 = 37945392;
                        break;
                    }
                };
                break;
            }
            default: {
                script12478(`Unhandled $page : ${inttostring(int1, 10)}`);
                return;
            }
        };
        int4 = (IF_GETNEXTSUBID(int3) - 1);
        while ((int4 >= 0)) {
            if ((CC_FIND(int3, int4) == 1)) {
                switch (int0) {
                    case 0: {
                        CC_SETTRANS(255);
                        CC_SETONTIMER(callback());
                        if ((int5 != -1)) {
                            IF_SETHIDE(1, int5);
                        };
                        break;
                    }
                    case 1: {
                        script7360(50, int5);
                        break;
                    }
                    case 2: {
                        script13322(50, int5);
                        break;
                    }
                    default: {
                        script12478(`Unhandled $fade_type : ${inttostring(int0, 10)}`);
                        return;
                    }
                };
            };
            int4 = (int4 - 1);
        };
        int2 = (int2 + 1);
    };
    return;
}