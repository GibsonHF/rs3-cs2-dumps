//
function script8427(int0: struct): [unknown_int, component, component] {
    if ((int0 == -1 as struct)) {
        return [-1, comp(-1, 65535), comp(-1, 65535)];
    };
    var int1 = struct_getparam(int0, 2806);
    var int2 = -1;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    switch (int1) {
        case 8: {
            switch (int0) {
                case 47129: {
                    int3 = comp(1460, 1);
                    int2 = 95027203;
                    break;
                }
                case 14665: {
                    int3 = comp(1452, 1);
                    int2 = 95420417;
                    break;
                }
                case 14726: {
                    int3 = comp(1461, 1);
                    if ((script6431() == true)) {
                        int2 = 25952257;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = comp(1884, 1);
                    break;
                }
            };
            break;
        }
        case 1:
        case 2: {
            int3 = comp(1460, 1);
            int2 = 95027203;
            break;
        }
        case 3: {
            int3 = comp(1452, 1);
            int2 = 95420417;
            break;
        }
        case 4:
        case 27: {
            switch (struct_getparam(int0, 2880)) {
                case 5: {
                    int3 = comp(1461, 1);
                    if ((script6431() == true)) {
                        int2 = 25952257;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = comp(1884, 1);
                    break;
                }
                case 0: {
                    int3 = comp(1461, 1);
                    if ((script6431() == true)) {
                        int2 = 27525121;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = comp(1885, 1);
                    break;
                }
                case 1:
                case 4: {
                    int3 = comp(1461, 1);
                    if ((script6431() == true)) {
                        int2 = 31653889;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = comp(1887, 1);
                    break;
                }
                case 2: {
                    int3 = comp(1461, 1);
                    if ((script6431() == true)) {
                        int2 = 31588353;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = comp(1886, 1);
                    break;
                }
            };
            break;
        }
        case 29: {
            int3 = comp(1219, 1);
            int2 = 79101953;
            if ((struct_getparam(int0, 5542) == 11)) {
                if ((script6431() == true)) {
                    int2 = 79364097;
                };
                int4 = comp(1220, 1);
            } else {
                if ((script6431() == true)) {
                    int2 = 79560705;
                };
                int4 = comp(1221, 1);
            };
            break;
        }
        case 5: {
            int3 = comp(1883, 1);
            if ((script6431() == true)) {
                int2 = 23789569;
            } else {
                int2 = 123207681;
            };
            int4 = comp(1449, 1);
            break;
        }
        case 6: {
            int3 = comp(1883, 1);
            if ((script6431() == true)) {
                int2 = 19464193;
            } else {
                int2 = 123207681;
            };
            int4 = comp(1882, 1);
            break;
        }
    };
    return [int2, int3, int4];
}