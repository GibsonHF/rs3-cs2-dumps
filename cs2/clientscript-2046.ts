//[proc,worldmap_overlay_clear]
function script2046(int0: number): void {
    IF_SETONTIMER(callback(script2045, int0, 93126656, 0, 0, 0), int0);
    CC_DELETEALL(int0);
    CC_DELETEALL(comp(1422, 5));
    CC_DELETEALL(comp(1422, 6));
    CC_DELETEALL(comp(1422, 7));
    CC_DELETEALL(comp(1422, 8));
    CC_DELETEALL(comp(1422, 9));
    CC_DELETEALL(comp(1422, 10));
    CC_DELETEALL(comp(1422, 12));
    CC_DELETEALL(comp(1422, 31));
    if ((PLAYERMEMBER() == false)) {
        CC_DELETEALL(comp(1422, 20));
        CC_DELETEALL(comp(1422, 21));
        CC_DELETEALL(comp(1422, 22));
        CC_DELETEALL(comp(1422, 23));
        CC_DELETEALL(comp(1422, 24));
        CC_DELETEALL(comp(1422, 25));
        CC_DELETEALL(comp(1422, 26));
        CC_DELETEALL(comp(1422, 27));
        CC_DELETEALL(comp(1422, 28));
        CC_DELETEALL(comp(1422, 29));
        CC_DELETEALL(comp(1422, 30));
    };
    return;
}