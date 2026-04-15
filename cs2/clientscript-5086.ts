//
function script5086(int0: component, int1: int, int2: unknown_int): void {
    if ((int1 == varclient_160)) {
        var int2 = 255;
    };
    var int3 = (int1 * 10);
    if ((CC_FIND(int0, int3) == 1)) {
        if ((int2 == 255)) {
            CC_SETONTIMER(callback());
            if ((CC_FIND[1](int0, (int3 + 4)) == 1)) {
                CC_SETTRANS[1](255);
            };
            if ((CC_FIND[1](int0, (int3 + 6)) == 1)) {
                CC_SETTRANS[1](255);
            };
            if ((CC_FIND[1](int0, (int3 + 8)) == 1)) {
                CC_SETTRANS[1](255);
            };
        } else {
            CC_SETONTIMER(callback(script5087, -2147483645, -2147483643, int2));
            script5088(int0, int2);
        };
    };
    return;
}