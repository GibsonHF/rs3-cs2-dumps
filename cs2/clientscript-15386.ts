//
function script15386(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = comp(-1, 65535);
    var int4 = 0;
    var int5 = comp(-1, 65535);
    while ((int2 < 9)) {
        switch (int1) {
            case 1: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 26);
                        int3 = comp(579, 23);
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 24);
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 25);
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 30);
                        int3 = comp(579, 27);
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 28);
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 29);
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 34);
                        int3 = comp(579, 31);
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 32);
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 33);
                        break;
                    }
                };
                break;
            }
            case 2: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 14);
                        int3 = comp(579, 11);
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 12);
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 13);
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 18);
                        int3 = comp(579, 15);
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 16);
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 17);
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 22);
                        int3 = comp(579, 19);
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 20);
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 21);
                        break;
                    }
                };
                break;
            }
            case 3: {
                switch (int2) {
                    case 0: {
                        int5 = comp(579, 39);
                        int3 = comp(579, 36);
                        break;
                    }
                    case 1: {
                        int3 = comp(579, 37);
                        break;
                    }
                    case 2: {
                        int3 = comp(579, 38);
                        break;
                    }
                    case 3: {
                        int5 = comp(579, 44);
                        int3 = comp(579, 41);
                        break;
                    }
                    case 4: {
                        int3 = comp(579, 42);
                        break;
                    }
                    case 5: {
                        int3 = comp(579, 43);
                        break;
                    }
                    case 6: {
                        int5 = comp(579, 49);
                        int3 = comp(579, 46);
                        break;
                    }
                    case 7: {
                        int3 = comp(579, 47);
                        break;
                    }
                    case 8: {
                        int3 = comp(579, 48);
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
                            IF_SETHIDE(true, int5);
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