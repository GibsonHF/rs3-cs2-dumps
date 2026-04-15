//
function script4231(int0: component): void {
    if ((IF_FIND(int0) == 1)) {
        CC_SETONCLICK(callback(script4209, int0, 0));
        CC_SETONHOLD(callback(script4209, int0, 0));
        CC_SETONRELEASE(callback(script4209, int0, 1));
        CC_SETTRANS(255);
    };
    return;
}