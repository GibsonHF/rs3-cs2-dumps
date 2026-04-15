//
function script9226(int0: inv, int1: component, int2: int): void {
    if ((CC_FIND(int1, int2) == 1)) {
        varclient_3822 = CC_GETINVOBJECT();
        varclient_3823 = int0;
    };
    script13826(int0, int1, int2, script8404(comp(517, 201)));
    if ((script6431() == true)) {
        if (((int0 == 93 as inv) && (IF_GETHIDE(comp(276, 18)) == true))) {
            IF_SETHIDE(false, comp(276, 18));
            script16539();
        } else {
            script16540();
        };
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    return;
}