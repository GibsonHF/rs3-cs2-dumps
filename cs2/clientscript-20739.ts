//
function script20739(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = GET_MOUSEX();
    if (((int3 == -1) && (CC_FIND(int0, int1) == 1))) {
        var int3 = (int5 - 10);
        CC_SETONDRAG(callback(script20739, -2147483645, -2147483643, int2, int5, 0));
        CC_SETONDRAGCOMPLETE(callback(script20739, -2147483645, -2147483643, int2, int5, 1));
    };
    var int6 = IF_GETWIDTH(comp(1512, 7));
    if ((int5 < int3)) {
        var int2 = (int2 - (int3 - int5));
    } else if ((int5 > int3)) {
        int2 = (int2 + (int5 - int3));
    } else {
        return;
    };
    var int7 = script20789(int2, 0, 0);
    if ((int6 != int7)) {
        varclient_8428 = int7;
        IF_SETONRESIZE(callback(script20741, int7), comp(1512, 9));
        IF_CALLONRESIZE(99090441);
    };
    if (((int4 == 1) && (CC_FIND(int0, int1) == 1))) {
        CC_SETONDRAG(callback(script20739, -2147483645, -2147483643, int7, -1, 0));
        CC_SETONDRAGCOMPLETE(callback(script20739, -2147483645, -2147483643, int7, -1, 1));
    };
    return;
}