//
function script17267(int0: obj, int1: obj): bas {
    var int2 = item_getparam(int0, 686);
    var int3 = 2699 as bas;
    if ((int0 != -1 as obj)) {
        if ((int2 != -1 as struct)) {
            int3 = struct_getparam(int2, 2954);
        };
        if (((item_getparam(int0, 2810) == 1) && (item_getparam(int0, 2954) != -1 as bas))) {
            int3 = item_getparam(int0, 2954);
        };
    };
    int2 = item_getparam(int1, 686);
    if ((int1 != -1 as obj)) {
        if ((int2 != -1 as struct)) {
            int3 = struct_getparam(int2, 2954);
        };
        if ((((item_getparam(int1, 2810) == 1) && (item_getparam(int1, 5371) == 1)) && (item_getparam(int1, 2954) != -1 as bas))) {
            int3 = item_getparam(int1, 2954);
        };
        if (((item_getparam(int0, 2810) == 1) && (item_getparam(int0, 2954) != -1 as bas))) {
            int3 = item_getparam(int0, 2954);
        };
    };
    if ((GENDER() == 1)) {
        switch (int3) {
            case 2698: {
                int3 = 2703 as bas;
                break;
            }
            case 2695: {
                int3 = 2704 as bas;
                break;
            }
            case 2696: {
                int3 = 2705 as bas;
                break;
            }
            case 2697: {
                int3 = 2706 as bas;
                break;
            }
            case 2699: {
                int3 = 2702 as bas;
                break;
            }
            case 2700: {
                int3 = 2707 as bas;
                break;
            }
            case 2701: {
                int3 = 2708 as bas;
                break;
            }
            case 4840: {
                int3 = 4841 as bas;
                break;
            }
            case 4842: {
                int3 = 4850 as bas;
                break;
            }
            case 4843: {
                int3 = 4852 as bas;
                break;
            }
            case 4844: {
                int3 = 4851 as bas;
                break;
            }
            case 4845: {
                int3 = 4853 as bas;
                break;
            }
            case 4846: {
                int3 = 4854 as bas;
                break;
            }
            case 4847: {
                int3 = 4855 as bas;
                break;
            }
            case 4848: {
                int3 = 4856 as bas;
                break;
            }
            case 4849: {
                int3 = 4857 as bas;
                break;
            }
        };
    };
    return int3;
}