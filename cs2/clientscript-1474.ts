//
function script1474(int0: component, int1: graphic, int2: unknown_int): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETGRAPHIC(int1);
        CC_SETONTIMER(callback(script1475, int0, int2, 0));
    };
    return;
}