//
function script15023(int0: number, int1: number, int2: number, string0: string, string1: string): void {
    IF_SETHIDE(false, comp(105, 142));
    if ((((int2 == 1) && (int1 == 11948)) && (script1190() == 0))) {
        return;
    };
    script11624(6881423, 6881424, int1, 0, 0, 0, 1);
    if ((CC_FIND(comp(105, 144), 0) == 1)) {
        CC_SETOP(1, string1);
        CC_SETONOP(callback(script15022, int1, int0, string1, string0, -2147483644));
    };
    switch (MAP_LANG()) {
        case 2: {
            script8844(1, 41, 0, 6881424, 0);
            break;
        }
        case 1: {
            script8844(1, 56, 0, 6881424, 0);
            break;
        }
        default: {
            script8844(1, 51, 0, 6881424, 0);
            break;
        }
    };
    return;
}