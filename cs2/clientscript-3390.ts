//[proc,graphics_options_button_highlight]
function script3390(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 != -1)) {
        stack(int1);
        stack(int0);
        IF_SETGRAPHIC();
    };
    if ((int2 != -1)) {
        stack(int3);
        stack(int2);
        IF_SETGRAPHIC();
    };
    if ((int4 != -1)) {
        stack(int5);
        stack(int4);
        IF_SETGRAPHIC();
    };
    return;
}