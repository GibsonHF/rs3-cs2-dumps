//[proc,clan_flag_highlight]
function script4325(int0: number, int1: number, int2: number): void {
    var int3 = 0;
    while ((int3 < int2)) {
        if ((CC_FIND(int1, int3) == 1)) {
            CC_SETGRAPHIC(6036);
        };
        int3 = (int3 + 1);
    };
    if ((CC_FIND(int1, int0) == 1)) {
        CC_SETGRAPHIC(6039);
    };
    return;
}