//
function script12109(int0: component, int1: int, int2: graphic, string0: string): void {
    script8800(string0, int0, int1);
    if ((int1 >= 0)) {
        if ((CC_FIND(int0, int1) == 1)) {
            CC_SETGRAPHIC(int2);
        };
    } else {
        stack(int2);
        stack(int0);
        IF_SETGRAPHIC();
    };
    return;
}