//
function script12109(int0: number, int1: number, int2: number, string0: string): void {
    script8800(string0, int0, int1);
    if ((int1 >= 0)) {
        if ((CC_FIND(int0, int1) == 1)) {
            CC_SETGRAPHIC(int2);
        };
    } else {
        IF_SETGRAPHIC(int2, int0);
    };
    return;
}