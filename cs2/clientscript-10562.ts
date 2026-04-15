//
function script10562(int0: component, int1: unknown_int): void {
    var int2 = 0;
    switch (int1) {
        case 1: {
            int2 = varbitplayer_24912;
            break;
        }
        case 2: {
            int2 = varbitplayer_24913;
            break;
        }
        case 3: {
            int2 = varbitplayer_24914;
            break;
        }
        default: {
            return;
        }
    };
    if ((int2 == 20)) {
        script10558(int0);
        return;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(36, 32, 0, 0);
    CC_SETOBJECT(enum_getvalue(0, 33, 9199 as cs2enum, int2), -1);
    CC_SETOP(1, "Remove");
    CC_SETONOP(callback());
    return;
}