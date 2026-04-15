//
function script18436(int0: struct, int1: obj): int {
    if ((script18435(int0) == 1)) {
        return 0;
    };
    var int2 = 0;
    switch (int1) {
        case 556: {
            int2 = struct_getparam(int0, 2898);
            break;
        }
        case 558: {
            int2 = struct_getparam(int0, 2902);
            break;
        }
        case 555: {
            int2 = struct_getparam(int0, 2900);
            break;
        }
        case 557: {
            int2 = struct_getparam(int0, 2899);
            break;
        }
        case 554: {
            int2 = struct_getparam(int0, 2901);
            break;
        }
        case 559: {
            int2 = struct_getparam(int0, 2903);
            break;
        }
        case 564: {
            int2 = struct_getparam(int0, 2910);
            break;
        }
        case 562: {
            int2 = struct_getparam(int0, 2904);
            break;
        }
        case 9075: {
            int2 = struct_getparam(int0, 2908);
            break;
        }
        case 561: {
            int2 = struct_getparam(int0, 2909);
            break;
        }
        case 563: {
            int2 = struct_getparam(int0, 2911);
            break;
        }
        case 560: {
            int2 = struct_getparam(int0, 2905);
            break;
        }
        case 565: {
            int2 = struct_getparam(int0, 2906);
            break;
        }
        case 566: {
            int2 = struct_getparam(int0, 2907);
            break;
        }
        case 58450: {
            int2 = struct_getparam(int0, 9235);
            break;
        }
        case 21773: {
            int2 = struct_getparam(int0, 2912);
            break;
        }
        case 55337: {
            int2 = struct_getparam(int0, 8891);
            break;
        }
        case 55338: {
            int2 = struct_getparam(int0, 8892);
            break;
        }
        case 55339: {
            int2 = struct_getparam(int0, 8893);
            break;
        }
        case 55340: {
            int2 = struct_getparam(int0, 8894);
            break;
        }
        default: {
            script12478(`rune object passed through is not referenced - please add it if this was intentional. obj: ${OC_NAME(int1)}`);
            break;
        }
    };
    return int2;
}