//
function script9726(int0: graphic, int1: component, int2: int, string0: string): void {
    if ((int2 == -1)) {
        stack(int0);
        stack(int1);
        IF_SETGRAPHIC();
    } else if ((CC_FIND(int1, int2) == 1)) {
        CC_SETGRAPHIC(int0);
    };
    script3877(string0, int1, int2);
    return;
}