//
function script9226(int0: number, int1: number, int2: number): void {
    if ((CC_FIND(int1, int2) == 1)) {
        varclient_3822 = CC_GETINVOBJECT();
        varclient_3823 = int0;
    };
    script13826(int0, int1, int2, script8404(33882313));
    if ((script6431() == 1)) {
        if (((int0 == 93 as inv) && (IF_GETHIDE(18087954) == 1))) {
            IF_SETHIDE(0, 18087954);
            script16539();
        } else {
            script16540();
        };
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    return;
}