//
function script9282(int0: component, int1: int): void {
    var int2 = -1;
    while ((++int2 <= int1)) {
        if ((CC_FIND(int0, (int2 + 1000)) == 1)) {
            CC_DELETE();
        };
    };
    return;
}