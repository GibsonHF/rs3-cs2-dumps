//
function script793(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = int2;
    while ((int4 <= int3)) {
        if ((CC_FIND(int0, int4) == 1)) {
            CC_SETHIDE(int1);
        };
        int4 = (int4 + 1);
    };
    return;
}