//
function script13204(int0: int, int1: int, int2: int, int3: int): void {
    var int4 = script13201(int0, int1, int2, int3);
    if ((int4 == -1)) {
        return;
    };
    if ((int4 == 1)) {
        int4 = 0;
    } else {
        int4 = 1;
    };
    switch (int0) {
        case 0: {
            switch (int1) {
                case 1: {
                    script13206(int1, int2, int4, 62);
                    break;
                }
                case 3: {
                    script13206(int1, int2, int4, 31);
                    break;
                }
                case 4: {
                    script13206(int1, int2, int4, 243);
                    break;
                }
                case 5: {
                    script13206(int1, int2, int4, 62);
                    break;
                }
                case 6: {
                    script13206(int1, int2, int4, 0);
                    break;
                }
                case 2: {
                    switch (int2) {
                        case 3: {
                            script13207(int3, int4, 262142);
                            break;
                        }
                        case 5: {
                            script13207(int3, int4, 268173312);
                            break;
                        }
                        case 99: {
                            script13207(0, int4, 268435454);
                            script13206(int1, int2, int4, 1328831);
                            break;
                        }
                        default: {
                            script13206(int1, int2, int4, 1328831);
                            break;
                        }
                    };
                    break;
                }
            };
            break;
        }
        case 1: {
            script13205(int0, int1, int4, script13250());
            break;
        }
        case 2: {
            script13205(int0, int1, int4, 12858);
            break;
        }
    };
    return;
}