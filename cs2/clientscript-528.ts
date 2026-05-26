//[proc,assist_set_icon]
function script528(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((int0 == 1)) {
        IF_SETGRAPHIC(int1, int3);
        IF_SETHIDE(false, int4);
    } else {
        IF_SETGRAPHIC(int2, int3);
        IF_SETHIDE(true, int4);
    };
    return;
}