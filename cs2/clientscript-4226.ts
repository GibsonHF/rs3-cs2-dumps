//
function script4226(int0: number, int1: number, int2: number): void {
    if ((((CC_FIND(comp(1216, 6), int0) == 1) && (CC_GETGRAPHIC() == -1 as graphic)) && (CLIENTCLOCK() > int2))) {  // levelup:unlocks_layer
        CC_SETGRAPHIC(int1);
    };
    script3370(int0, int2);
    return;
}