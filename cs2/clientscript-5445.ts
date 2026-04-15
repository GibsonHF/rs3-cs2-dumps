//
function script5445(int0: int, int1: component, int2: component, int3: unknown_int, string0: string): void {
    CC_DELETEALL(int1);
    if ((int3 == 2)) {
        CC_CREATE(int1, 5, int0);
        CC_SETSIZE(88, 88, 0, 0);
        CC_SETPOSITION(1, 1, 0, 0);
        CC_SETGRAPHIC(8276 as graphic);
    };
    IF_SETTEXT(string0, int2);
    return;
}