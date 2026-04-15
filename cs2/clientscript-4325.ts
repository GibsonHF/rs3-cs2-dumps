//[proc,clan_flag_highlight]
function script4325(int0: int, int1: component, int2: int): void {
    var int3 = 0;
    while ((int3 < int2)) {
        if ((CC_FIND(int1, int3) == 1)) {
            CC_SETGRAPHIC(6036 as graphic);
        };
        int3 = (int3 + 1);
    };
    if ((CC_FIND(int1, int0) == 1)) {
        CC_SETGRAPHIC(6039 as graphic);
    };
    return;
}