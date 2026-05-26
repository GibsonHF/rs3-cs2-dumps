//
function script8901(int0: number, int1: number, int2: number): void {
    IF_SETOBJECT_ALWAYSNUM(1891 as obj, 0, int1);
    IF_SETTRANS(128, int1);
    if ((varbitplayer_45190 == 1)) {
        IF_SETGRAPHIC(13165 as graphic, int2);
        script13960(int0, 28222, 0, 1);
    } else {
        IF_SETGRAPHIC(13166 as graphic, int2);
        script13960(int0, 28222, 0, 0);
    };
    return;
}