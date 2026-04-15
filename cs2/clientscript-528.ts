//[proc,assist_set_icon]
function script528(int0: int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int): void {
    if ((int0 == 1)) {
        stack(int1);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETHIDE(0, int4);
    } else {
        stack(int2);
        stack(int3);
        IF_SETGRAPHIC();
        IF_SETHIDE(1, int4);
    };
    return;
}