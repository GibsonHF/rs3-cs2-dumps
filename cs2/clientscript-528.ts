//[proc,assist_set_icon]
function script528(int0: number, int1: number, int2: number, int3: number, int4: number): void {
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