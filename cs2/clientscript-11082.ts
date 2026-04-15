//
function script11082(int0: component, int1: int, int2: graphic, int3: unknown_int, int4: int): void {
    var int4 = (int4 + CLIENTCLOCK());
    if (((CC_FIND(int0, int1) == 1) || ((int1 == -1) && (IF_FIND(int0) == 1)))) {
        CC_SETGRAPHIC(int2);
        CC_SETONTIMER(callback(script1723, int0, int1, int3, int4));
    };
    return;
}