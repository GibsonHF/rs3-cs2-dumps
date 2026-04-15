//
function script18071(int0: int, int1: component, int2: int): void {
    if (((varclient_7298 != comp(-1, 65535)) && (CC_FIND(varclient_7298, varclient_7299) == 1))) {
        script7872(true, 1, true, false);
        script10643(script17989(24));
    };
    if ((CC_FIND(int1, int2) == 1)) {
        varplayer_11356 = int0;
        varclient_7298 = int1;
        varclient_7299 = int2;
        script7872(true, 1, true, true);
        script10643(script17989(24));
    };
    script18074(int0);
    return;
}