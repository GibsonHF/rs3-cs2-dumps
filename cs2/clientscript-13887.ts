//
function script13887(): void {
    if ((script13749() == 1)) {
        CC_SETONRELEASE(callback());
        stack(0);
        CC_SETHELD();
    } else {
        CC_SETONCLICK(callback());
    };
    return;
}