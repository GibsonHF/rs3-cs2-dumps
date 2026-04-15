//[proc,draughts_inv_update]
function script1279(int0: component, int1: inv, int2: int, int3: int): void {
    CC_DELETEALL(int0);
    var int4 = 0;
    var int5 = 0;
    int4 = ((IF_GETWIDTH(int0) - (36 * int2)) / (int2 - 1));
    int5 = ((IF_GETHEIGHT(int0) - (32 * int3)) / (int3 - 1));
    var int6 = 0;
    while ((int6 <= (int2 * int3))) {
        CC_CREATE(int0, 5, int6);
        CC_SETSIZE(36, 32, 0, 0);
        CC_SETPOSITION(((36 + int4) * MODULO(int6, int2)), ((int6 / int2) * (32 + int5)), 0, 0);
        script1280(int1, int6, int0, int6);
        int6 = (int6 + 1);
    };
    return;
}