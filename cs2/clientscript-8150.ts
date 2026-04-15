//
function script8150(int0: unknown_int): void {
    var int1 = 0;
    var int2 = -1 as struct;
    int2 = script10405(int1);
    if ((int0 == 1)) {
        while ((int1 <= 46)) {
            if (((int2 != -1 as struct) && ((struct_getparam(int2, 4278) == false) || (script6431() == false)))) {
                script8844(1, script8825(21, int1), comp(1431, 5), int1);
            };
            int2 = script10405(++int1);
        };
    } else {
        while ((int1 <= 46)) {
            if (((int2 != -1 as struct) && (CC_FIND(comp(1431, 5), int1) == 1))) {
                CC_SETOPKEY(1, 0, 0, -1, 0, -1, 0, -1, 0, -1, 0);
            };
            int2 = script10405(++int1);
        };
    };
    return;
}