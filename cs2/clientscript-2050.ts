//[proc,worldmap_hidegraphic]
function script2050(int0: component, int1: int): void {
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETHIDE(true);
    } else {
        CC_CREATE(int0, 5, int1);
        CC_SETHIDE(true);
    };
    return;
}