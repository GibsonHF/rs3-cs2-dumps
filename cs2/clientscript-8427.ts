//
function script8427(int0: number): [number, number, number] {
    if ((int0 == -1)) {
        return [-1, -1, -1];
    };
    var int1 = struct_getparam(int0, 2806);
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    switch (int1) {
        case 8: {
            switch (int0) {
                case 47129: {
                    int3 = 95682561;
                    int2 = 95027203;
                    break;
                }
                case 14665: {
                    int3 = 95158273;
                    int2 = 95420417;
                    break;
                }
                case 14726: {
                    int3 = 95748097;
                    if ((script6431() == 1)) {
                        int2 = 25952257;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = 123469825;
                    break;
                }
            };
            break;
        }
        case 1:
        case 2: {
            int3 = 95682561;
            int2 = 95027203;
            break;
        }
        case 3: {
            int3 = 95158273;
            int2 = 95420417;
            break;
        }
        case 4:
        case 27: {
            switch (struct_getparam(int0, 2880)) {
                case 5: {
                    int3 = 95748097;
                    if ((script6431() == 1)) {
                        int2 = 25952257;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = 123469825;
                    break;
                }
                case 0: {
                    int3 = 95748097;
                    if ((script6431() == 1)) {
                        int2 = 27525121;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = 123535361;
                    break;
                }
                case 1:
                case 4: {
                    int3 = 95748097;
                    if ((script6431() == 1)) {
                        int2 = 31653889;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = 123666433;
                    break;
                }
                case 2: {
                    int3 = 95748097;
                    if ((script6431() == 1)) {
                        int2 = 31588353;
                    } else {
                        int2 = 95617025;
                    };
                    int4 = 123600897;
                    break;
                }
            };
            break;
        }
        case 29: {
            int3 = 79888385;
            int2 = 79101953;
            if ((struct_getparam(int0, 5542) == 11)) {
                if ((script6431() == 1)) {
                    int2 = 79364097;
                };
                int4 = 79953921;
            } else {
                if ((script6431() == 1)) {
                    int2 = 79560705;
                };
                int4 = 80019457;
            };
            break;
        }
        case 5: {
            int3 = 123404289;
            if ((script6431() == 1)) {
                int2 = 23789569;
            } else {
                int2 = 123207681;
            };
            int4 = 94961665;
            break;
        }
        case 6: {
            int3 = 123404289;
            if ((script6431() == 1)) {
                int2 = 19464193;
            } else {
                int2 = 123207681;
            };
            int4 = 123338753;
            break;
        }
    };
    return [int2, int3, int4];
}