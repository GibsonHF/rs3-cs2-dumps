//
function script11809(int0: struct): [component, component] {
    if ((int0 == -1 as struct)) {
        return [comp(-1, 65535), comp(-1, 65535)];
    };
    switch (struct_getparam(int0, 2806)) {
        case 8: {
            switch (int0) {
                case 47129: {
                    return [comp(1460, 2), comp(-1, 65535)];
                }
                case 14665: {
                    return [comp(1452, 2), comp(-1, 65535)];
                }
                case 14726: {
                    return [comp(1461, 2), comp(1884, 2)];
                }
            };
            break;
        }
        case 1:
        case 2: {
            return [comp(1460, 2), comp(-1, 65535)];
        }
        case 3: {
            return [comp(1452, 2), comp(-1, 65535)];
        }
        case 4:
        case 27:
        case 28: {
            switch (struct_getparam(int0, 2880)) {
                case 5: {
                    return [comp(1461, 2), comp(1884, 2)];
                }
                case 0: {
                    return [comp(1461, 2), comp(1885, 2)];
                }
                case 1:
                case 4: {
                    return [comp(1461, 2), comp(1887, 2)];
                }
                case 2: {
                    return [comp(1461, 2), comp(1886, 2)];
                }
            };
            break;
        }
        case 29: {
            if ((struct_getparam(int0, 5542) == 11)) {
                return [comp(1219, 2), comp(1220, 2)];
            };
            return [comp(1219, 2), comp(1221, 2)];
        }
        case 5: {
            return [comp(1883, 2), comp(1449, 2)];
        }
        case 6: {
            return [comp(1883, 2), comp(1882, 2)];
        }
    };
    return [comp(-1, 65535), comp(-1, 65535)];
}