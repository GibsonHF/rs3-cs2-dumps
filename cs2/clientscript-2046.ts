//[proc,worldmap_overlay_clear]
function script2046(int0: component): void {
    IF_SETONTIMER(callback(script2045, int0, 93126656, 0, 0, 0), int0);
    CC_DELETEALL(int0);
    CC_DELETEALL(93192197);
    CC_DELETEALL(93192198);
    CC_DELETEALL(93192199);
    CC_DELETEALL(93192200);
    CC_DELETEALL(93192201);
    CC_DELETEALL(93192202);
    CC_DELETEALL(93192204);
    CC_DELETEALL(93192223);
    if ((PLAYERMEMBER() == 0)) {
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