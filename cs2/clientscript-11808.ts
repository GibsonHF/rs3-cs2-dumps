//
function script11808(int0: struct): [int, int] {
    if ((int0 == -1 as struct)) {
        return [-1, -1];
    };
    switch (struct_getparam(int0, 2806)) {
        case 8: {
            switch (int0) {
                case 47129: {
                    return [6, -1];
                }
                case 14665: {
                    return [7, -1];
                }
                case 14726: {
                    return [33, 5];
                }
            };
            break;
        }
        case 1:
        case 2: {
            return [6, -1];
        }
        case 3: {
            return [7, -1];
        }
        case 4: {
            switch (struct_getparam(int0, 2880)) {
                case 0: {
                    return [34, 5];
                }
                case 1: {
                    return [35, 5];
                }
                case 2: {
                    return [36, 5];
                }
                case 5: {
                    return [33, 5];
                }
            };
            return [5, 5];
        }
        case 29: {
            switch (struct_getparam(int0, 5542)) {
                case 11: {
                    return [43, 42];
                }
            };
            return [44, 42];
        }
        case 5: {
            return [39, 8];
        }
        case 6: {
            return [40, 8];
        }
        case 27: {
            return [36, 5];
        }
    };
    return [-1, -1];
}