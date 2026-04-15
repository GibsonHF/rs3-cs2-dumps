//
function script8806(int0: component, int1: int, int2: graphic): void {
    if ((int1 == -1)) {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
    } else if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    script8808();
    return;
}