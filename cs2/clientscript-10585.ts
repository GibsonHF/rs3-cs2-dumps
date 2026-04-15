//
function script10585(int0: component, int1: unknown_int, int2: unknown_int): void {
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    var int3 = MIN(IF_GETWIDTH(int0), IF_GETHEIGHT(int0));
    CC_SETGRAPHIC(18967 as graphic);
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTRANS(255);
    cc_setparam(3994, 255);
    CC_SET2DANGLE(((0 - 1872) * MODULO(CLIENTCLOCK(), (65536 / 1872))));
    CC_SETONTIMER(callback(script9526, -2147483645));
    return;
}