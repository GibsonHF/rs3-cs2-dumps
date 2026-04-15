//
function script5088(int0: component, int1: unknown_int): void {
    var int2 = 0;
    if ((CC_FIND[1](int0, (CC_GETID() + 4)) == 1)) {
        int2 = CC_GETTRANS[1]();
        if ((int1 == 0)) {
            int2 = MAX((int2 - 22), 0);
            CC_SETTRANS[1](int2);
            if ((CC_FIND[1](int0, (CC_GETID() + 6)) == 1)) {
                CC_SETTRANS[1](int2);
            };
            if ((CC_FIND[1](int0, (CC_GETID() + 8)) == 1)) {
                CC_SETTRANS[1](int2);
            };
            if ((int2 <= 0)) {
                CC_SETONTIMER(callback());
            };
        } else {
            int2 = MIN((int2 + 22), 255);
            CC_SETTRANS[1](int2);
            if ((CC_FIND[1](int0, (CC_GETID() + 6)) == 1)) {
                CC_SETTRANS[1](int2);
            };
            if ((CC_FIND[1](int0, (CC_GETID() + 8)) == 1)) {
                CC_SETTRANS[1](int2);
            };
            if ((int2 >= 255)) {
                CC_SETONTIMER(callback());
            };
        };
    };
    return;
}