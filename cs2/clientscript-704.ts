//
function script704(int0: int, int1: int): void {
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(), comp(1477, 17));
        return;
    };
    if ((MODULO(int1, int0) == 0)) {
        MES_TYPED(99, 0, `Map loaded: ${inttostring(MAP_LOADEDPERCENT(), 10)}%`);
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script704, int0, int1), comp(1477, 17));
    return;
}