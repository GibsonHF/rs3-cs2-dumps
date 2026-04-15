//
function script9398(int0: component, int1: component, int2: component): void {
    if ((IF_GETHIDE(comp(240, 1)) == true)) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    script9399(int0, int1, int2);
    return;
}