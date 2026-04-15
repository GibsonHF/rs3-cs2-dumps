//
function script4226(int0: int, int1: graphic, int2: int): void {
    if ((((CC_FIND(comp(1216, 6), int0) == 1) && (CC_GETGRAPHIC() == -1 as graphic)) && (CLIENTCLOCK() > int2))) {
        CC_SETGRAPHIC(int1);
    };
    script3370(int0, int2);
    return;
}