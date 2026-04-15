//
function script3943(int0: component, int1: int): void {
    var int2 = 233;
    var int3 = 0;
    if ((IF_FIND(int0) == 1)) {
        [int2, int3] = script3874(int1);
        if ((CC_FINDBYCATEGORY(int0, int2, int3) == 1)) {
            CC_SETHIDE(true);
            CC_SETONTIMER(callback());
        };
    };
    return;
}