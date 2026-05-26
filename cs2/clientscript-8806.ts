//
function script8806(int0: number, int1: number, int2: number): void {
    if ((int1 == -1)) {
        IF_SETGRAPHIC(int2, int0);
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    script8808();
    return;
}