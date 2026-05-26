//[clientscript,graphic_swapper2]
function script4134(int0: number, int1: number, int2: number, int3: number): void {
    stack(int1);
    stack(int0);
    IF_SETGRAPHIC();
    stack(int3);
    stack(int2);
    IF_SETGRAPHIC();
    return;
}