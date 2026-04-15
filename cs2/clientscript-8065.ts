//
function script8065(int0: int, int1: int): [component, int] {
    if ((script8292(int0, int1) == 1)) {
        return [comp(-1, 65535), -1];
    };
    if ((script8292(int0, -1) == 1)) {
        return [struct_getparam(21301, 3509), ((4 * int1) - 1)];
    };
    return script8069(int0);
}