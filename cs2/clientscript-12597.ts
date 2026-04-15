//
function script12597(int0: component, int1: component, int2: component, int3: component): void {
    if (((((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535))) || (int2 == comp(-1, 65535))) || (int3 == comp(-1, 65535)))) {
        return;
    };
    var int4 = -1;
    if ((IF_GETHIDE(int1) == false)) {
        if ((IF_FIND(int0) == 1)) {
            CC_SETONSCROLLWHEEL(callback(script36, int1, int3, -2147483646));
        };
    } else if (((IF_GETHIDE(int2) == false) && (IF_FIND(int0) == 1))) {
        CC_SETONSCROLLWHEEL(callback(script1701, int2, int3, -2147483646));
    };
    return;
}