//
function script19797(int0: unknown_int, int1: graphic, int2: component, int3: component): void {
    if ((IF_GETGRAPHIC(int2) != int1)) {
        stack(int0);
        stack(int2);
        IF_SETGRAPHIC();
    };
    IF_SETONMOUSEOVER(callback(script44, int2, int1), int3);
    IF_SETONMOUSELEAVE(callback(script44, int2, int0), int3);
    return;
}