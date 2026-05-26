//
function script11809(int0: number): [number, number] {
    if ((int0 == -1)) {
        return [-1, -1];
    };
    switch (struct_getparam(int0, 2806)) {
        case 8: {
            switch (int0) {
                case 47129: {
                    return [95682562, -1];
                }
                case 14665: {
                    return [95158274, -1];
                }
                case 14726: {
                    return [95748098, 123469826];
                }
            };
            break;
        }
        case 1:
        case 2: {
            return [95682562, -1];
        }
        case 3: {
            return [95158274, -1];
        }
        case 4:
        case 27:
        case 28: {
            switch (struct_getparam(int0, 2880)) {
                case 5: {
                    return [95748098, 123469826];
                }
                case 0: {
                    return [95748098, 123535362];
                }
                case 1:
                case 4: {
                    return [95748098, 123666434];
                }
                case 2: {
                    return [95748098, 123600898];
                }
            };
            break;
        }
        case 29: {
            if ((struct_getparam(int0, 5542) == 11)) {
                return [79888386, 79953922];
            };
            return [79888386, 80019458];
        }
        case 5: {
            return [123404290, 94961666];
        }
        case 6: {
            return [123404290, 123338754];
        }
    };
    return [-1, -1];
}