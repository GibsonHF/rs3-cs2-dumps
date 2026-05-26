//
function script704(int0: number, int1: number): void {
    if ((int0 == 0)) {
        IF_SETONTIMER(callback(), 96796689);
        return;
    };
    if ((MODULO(int1, int0) == 0)) {
        MES_TYPED(99, 0, `Map loaded: ${inttostring(MAP_LOADEDPERCENT(), 10)}%`);
    };
    var int1 = (int1 + 1);
    IF_SETONTIMER(callback(script704, int0, int1), 96796689);
    return;
}