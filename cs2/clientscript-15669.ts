//
function script15669(int0: component, int1: int, int2: int): void {
    if ((MAP_LOADEDPERCENT() < 100)) {
        return;
    };
    varclient_6890 = SETBIT(varclient_6890, int1);
    if ((++int1 < int2)) {
        MAP_PRELOAD(enum_getvalue(0, 22, 8809 as cs2enum, int1));
        IF_SETONTIMER(callback(script15669, int0, int1, int2), int0);
        return;
    };
    if ((varclient_2771 != -1 as coordgrid)) {
        MAP_PRELOAD(varclient_2771);
    };
    varclient_6889 = 0;
    IF_SETONTIMER(callback(), int0);
    return;
}