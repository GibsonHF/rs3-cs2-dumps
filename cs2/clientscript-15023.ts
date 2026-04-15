//
function script15023(int0: unknown_int, int1: struct, int2: unknown_int, string0: unknown_string, string1: string): void {
    IF_SETHIDE(false, comp(105, 217));
    if ((((int2 == 1) && (int1 == 11948 as struct)) && (script1190() == 0))) {
        return;
    };
    script11624(comp(105, 218), comp(105, 219), int1, 0, 0, 0, 1);
    if ((CC_FIND(comp(105, 219), 0) == 1)) {
        CC_SETOP(1, string1);
        CC_SETONOP(callback(script15022, int1, int0, string1, string0, -2147483644));
    };
    switch (MAP_LANG()) {
        case 2: {
            script8844(1, 41, 0, comp(105, 219), 0);
            break;
        }
        case 1: {
            script8844(1, 56, 0, comp(105, 219), 0);
            break;
        }
        default: {
            script8844(1, 51, 0, comp(105, 219), 0);
            break;
        }
    };
    return;
}