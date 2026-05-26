//
function script18005(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1 as struct;
    var int4 = -1;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    [int2, int3, int4, int5, int6, int7] = script17884(int0);
    var int8 = 80412686;
    var int9 = 80412689;
    var int10 = -1;
    IF_SETHIDE(1, int8);
    IF_SETHIDE(1, int9);
    CC_DELETEALL(int9);
    switch (int1) {
        case 1: {
            script2994(int9, 0, 0, 0, 1, 1, 200, 200, 0, 0, 8606);
            IF_SETHIDE(0, int9);
            break;
        }
        default: {
            switch (int6) {
                case 3: {
                    script2994(int9, 0, 0, 0, 1, 1, 200, 200, 0, 0, 10095);
                    IF_SETHIDE(0, int9);
                    break;
                }
                case 4: {
                    script2994(int9, 0, 0, 0, 1, 1, 160, 160, 0, 0, 8747);
                    IF_SETHIDE(0, int9);
                    break;
                }
                case 5: {
                    script2994(int9, 0, 0, 0, 1, 1, 160, 160, 0, 0, script18008(256));
                    IF_SETHIDE(0, int9);
                    break;
                }
                case 6: {
                    script2994(int9, 0, 0, 0, 1, 1, 160, 160, 0, 0, 10106);
                    IF_SETHIDE(0, int9);
                    break;
                }
                default: {
                    if (((int3 == -1 as struct) && (int2 != -1))) {
                        int3 = item_getparam(int2, 4414);
                    };
                    if ((int3 != -1 as struct)) {
                        int10 = struct_getparam(int3, 2531);
                        switch (int10) {
                            case 3: {
                                script2994(int9, 0, 0, 0, 1, 1, 160, 160, 0, 0, 8681);
                                IF_SETHIDE(0, int9);
                                break;
                            }
                            default: {
                                if ((int10 != 2)) {
                                    script18007(7885, int3);
                                } else {
                                    script9525(80412769, 3, -1);
                                };
                                IF_SETHIDE(0, int8);
                                break;
                            }
                        };
                    } else if ((int2 != -1)) {
                        if ((int2 == 55781)) {
                            script17927();
                            script2994(int9, 0, 0, 0, 1, 1, 200, 200, 0, 0, 8772);
                        } else {
                            script17949(int9, 0, 0, 0, 1, 1, 160, 160, 0, 0, int2, int5);
                        };
                        IF_SETHIDE(0, int9);
                    };
                    break;
                }
            };
            break;
        }
    };
    return;
}