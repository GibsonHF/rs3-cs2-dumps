//
function script18374(int0: obj): int {
    var int1 = item_getparam(int0, 2653);
    switch (int0) {
        case 58101: {
            if ((STAT(9 as stat) >= struct_getparam(28267, 2212))) {
                return (int1 + 15);
            };
            break;
        }
        case 58106: {
            if ((STAT(9 as stat) >= struct_getparam(28268, 2212))) {
                return (int1 + 15);
            };
            break;
        }
        case 58036: {
            if ((STAT(9 as stat) >= struct_getparam(28364, 2212))) {
                return (int1 + 15);
            };
            break;
        }
        case 58041: {
            if ((STAT(9 as stat) >= struct_getparam(28718, 2212))) {
                return (int1 + 15);
            };
            break;
        }
    };
    return int1;
}