//
function script11260(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    if ((IF_GETWIDTH(int0) > 30)) {
        IF_SETONTIMER(callback(script11262, int0, int3), int0);
        script9554(int1, int2, int3, " ", int4);
        IF_SETHIDE(true, comp(1610, 124));  // jmod_tool:close_button_layer
    } else {
        IF_SETONTIMER(callback(script11261, int0, int3), int0);
        script9554(int1, int2, int3, "JMod Toolbox", int4);
        IF_SETHIDE(false, int3);
        IF_SETHIDE(false, comp(1610, 124));  // jmod_tool:close_button_layer
    };
    return;
}