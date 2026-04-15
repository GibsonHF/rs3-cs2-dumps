//
function script10025(int0: obj, int1: int, int2: unknown_int, int3: unknown_int): void {
    switch (int2) {
        case 1: {
            CC_SETOBJECT_NONUM(int0, int1);
            break;
        }
        case 2: {
            CC_SETOBJECT_ALWAYSNUM(int0, int1);
            break;
        }
        case 3: {
            CC_SETOBJECT_HIGHRES(int0);
            return;
        }
        default: {
            CC_SETOBJECT(int0, int1);
            break;
        }
    };
    CC_SETOUTLINE(int3);
    return;
}