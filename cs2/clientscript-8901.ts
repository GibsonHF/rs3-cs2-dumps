//
function script8901(int0: unknown_int, int1: component, int2: unknown_int): void {
    IF_SETOBJECT_ALWAYSNUM(1891 as obj, 0, int1);
    IF_SETTRANS(128, int1);
    if ((varbitplayer_45190 == 1)) {
        stack(13165);
        stack(int2);
        IF_SETGRAPHIC();
        script13960(int0, 28222, 0, 1);
    } else {
        stack(13166);
        stack(int2);
        IF_SETGRAPHIC();
        script13960(int0, 28222, 0, 0);
    };
    return;
}