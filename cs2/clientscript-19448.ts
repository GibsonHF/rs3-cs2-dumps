//
function script19448(int0: graphic, int1: int, int2: int, int3: component, int4: component, int5: component): void {
    IF_SETHIDE(false, int3);
    stack(int0);
    stack(int3);
    IF_SETGRAPHIC();
    IF_SETSIZE(int1, int2, 0, 0, int3);
    IF_SETPOSITION(0, 0, 1, 1, int3);
    IF_SETHIDE(1, int4);
    stack(-1);
    stack(int4);
    IF_SETGRAPHIC();
    IF_SETHIDE(1, int5);
    stack(-1);
    stack(int5);
    IF_SETGRAPHIC();
    return;
}