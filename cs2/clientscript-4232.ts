//
function script4232(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETONMOUSEOVER(callback(script4209, int0, 0));
        CC_SETONMOUSELEAVE(callback(script4209, int0, 1));
        CC_SETTRANS(255);
    };
    return;
}