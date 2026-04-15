//
function script7604(int0: obj, int1: struct): unknown_int {
    if ((int0 == -1 as obj)) {
        return 1;
    };
    if ((script7608(int0) == int1)) {
        return 1;
    };
    if ((((item_getparam(int0, 686) == 14923 as struct) && (int1 == 14924 as struct)) || (((item_getparam(int0, 686) == 14924 as struct) && (int1 == 14923 as struct)) || (((item_getparam(int0, 686) == 14921 as struct) && (int1 == 14922 as struct)) || (((item_getparam(int0, 686) == 14922 as struct) && (int1 == 14921 as struct)) || (((item_getparam(int0, 686) == 14929 as struct) && (int1 == 14927 as struct)) || ((item_getparam(int0, 686) == 14927 as struct) && (int1 == 14929 as struct)))))))) {
        return 1;
    };
    return 0;
}