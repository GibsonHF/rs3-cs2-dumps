//
function script12611(int0: component): struct {
    script12610();
    var int1 = -1 as struct;
    var int2 = int0;
    while ((IF_GETLAYER(int2) != comp(-1, 65535))) {
        int2 = IF_GETLAYER(int2);
    };
    if ((IF_FIND(int2) == 1)) {
        int1 = cc_getparam(5769);
    };
    if ((int1 != -1 as struct)) {
        return int1;
    };
    int2 = IF_GETPARENTLAYER(int2);
    if (((int2 != comp(-1, 65535)) && (IF_FIND(int2) == 1))) {
        int1 = cc_getparam(5769);
    };
    return int1;
}