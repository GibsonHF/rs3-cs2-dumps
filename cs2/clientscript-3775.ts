//
function script3775(int0: unknown_int, int1: obj, int2: component): void {
    if ((int1 != -1 as obj)) {
        IF_SETSIZE(36, 32, 0, 0, int2);
        IF_SETOBJECT_NONUM(int1, 1, int2);
    } else {
        stack(int0);
        stack(int2);
        IF_SETGRAPHIC();
    };
    return;
}