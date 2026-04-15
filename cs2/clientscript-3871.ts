//
function script3871(int0: component, int1: component, int2: int, int3: unknown_int): void {
    if ((script3925(int3) < int2)) {
        if ((IF_GETGRAPHIC(int1) != 2260 as graphic)) {
            stack(2291);
            stack(int1);
            IF_SETGRAPHIC();
        };
        IF_SETONTIMER(callback(), int0);
        return;
    };
    if ((IF_GETWIDTH(script3926(int3)) >= IF_GETX(int0))) {
        if ((IF_GETGRAPHIC(int1) != 2260 as graphic)) {
            stack(2290);
            stack(int1);
            IF_SETGRAPHIC();
        };
        IF_SETONTIMER(callback(), int0);
    };
    return;
}