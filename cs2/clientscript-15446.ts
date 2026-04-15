//
function script15446(int0: component, int1: component): unknown_int {
    var int2 = IF_GETPARENTLAYER(int0);
    var int3 = 0;
    while ((int2 != comp(-1, 65535))) {
        int3 = (int3 + 1);
        if ((int2 == int1)) {
            return 0;
        };
        int2 = IF_GETPARENTLAYER(int2);
    };
    return 1;
}