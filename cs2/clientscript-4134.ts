//[clientscript,graphic_swapper2]
function script4134(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    stack(int1);
    stack(int0);
    IF_SETGRAPHIC();
    stack(int3);
    stack(int2);
    IF_SETGRAPHIC();
    return;
}