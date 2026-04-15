//
function script8322(int0: int, int1: boolean, int2: graphic): void {
    var int3 = script10405(int0);
    if ((int3 == -1 as struct)) {
        return;
    };
    var int4 = struct_getparam(int3, 3512);
    if ((int4 != comp(-1, 65535))) {
        IF_SETHIDE(int1, int4);
        if ((CC_FIND(int4, 9) == 1)) {
            CC_SETGRAPHIC(int2);
        };
    };
    return;
}