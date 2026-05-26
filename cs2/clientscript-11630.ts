//
function script11630(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number): void {
    if ((int1 == -1 as struct)) {
        return;
    };
    var int8 = struct_getparam(int1, 4405);
    if ((int8 != -1 as struct)) {
        var int1 = int8;
    };
    var int9 = script9984(int1, int2);
    if ((int9 == -1 as struct)) {
        int9 = int1;
    };
    if ((int9 == -1 as struct)) {
        return;
    };
    script11633(int0, int9, int3, int4, int5);
    var int10 = int3;
    while ((int10 <= int4)) {
        if ((CC_FIND(int0, int10) == 1)) {
            script11628(int1, int2, int3, int4, int5, int6, int7);
        };
        int10 = (int10 + 1);
    };
    return;
}