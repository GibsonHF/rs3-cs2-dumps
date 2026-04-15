//[clientscript,cc_graphic_swapper]
function script688(int0: component, int1: int, int2: graphic): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETGRAPHIC(int2);
    };
    return;
}