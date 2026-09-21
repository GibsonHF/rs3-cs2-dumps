//
function script13886(int0: number, int1: number): void {
    if ((script13749() == 1)) {
        CC_SETONRELEASE(callback(script5264, int0, int1));
        stack(1);
        CC_SETHELD();
    } else {
        CC_SETONCLICK(callback(script5264, int0, int1));
    };
    return;
}