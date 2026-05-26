//
function script19271(int0: number, int1: number, int2: number, int3: number): void {
    if ((IF_GETGRAPHIC(int2) != int1)) {
        IF_SETGRAPHIC(int0, int2);
    };
    IF_SETONMOUSEOVER(callback(script44, int2, int1), int3);
    IF_SETONMOUSELEAVE(callback(script44, int2, int0), int3);
    return;
}