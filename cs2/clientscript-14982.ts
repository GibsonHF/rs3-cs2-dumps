//
function script14982(int0: number, int1: number, int2: number, int3: number): void {
    CC_CLEAROPS();
    CC_SETGRAPHIC[1](18266);
    CC_SETPOSITION[1]((int2 - 1), ((int3 + 2) - 1), 0, 0);
    CC_SETPOSITION((int2 + 3), ((int3 + 2) + 1), 0, 0);
    CC_SETOBJECT_ALWAYSNUM(int0, int1);
    CC_SETONOP(callback(script1620, -2147483645, -2147483643, 100, 0, 8));
    CC_SETONMOUSELEAVE(callback(script5495, -1));
    return;
}