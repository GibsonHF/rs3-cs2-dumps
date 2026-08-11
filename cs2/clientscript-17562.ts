//
function script17562(int0: number, int1: number): void {
    CHATPHRASE_GETDYNAMICCOMMANDCOUNT(0, 217);
    CC_CREATE(comp(1197, 1), 27, 0);  // cutscene2d:cutscene_layer
    CC_SETSIZE(0, 0, 1, 1);
    if ((int1 == 1)) {
        IF_SETONOP(callback(script17564), comp(1197, 2));  // cutscene2d:skip_button_layer
        IF_SETHIDE(false, comp(1197, 2));  // cutscene2d:skip_button_layer
    } else {
        IF_CLEAROPS(comp(1197, 2));  // cutscene2d:skip_button_layer
        IF_SETHIDE(true, comp(1197, 2));  // cutscene2d:skip_button_layer
    };
    var int2 = 10;
    var int3 = 10;
    var int4 = 0;
    var int5 = 0;
    if ((script6431() == 1)) {
        IF_SETGRAPHIC(11997 as graphic, comp(1197, 3));  // cutscene2d:skip_button_icon
        [int2, int3, int4, int5] = script2956();
    } else {
        IF_SETGRAPHIC(10261 as graphic, comp(1197, 3));  // cutscene2d:skip_button_icon
    };
    IF_SETSIZE(42, 42, 0, 0, comp(1197, 3));  // cutscene2d:skip_button_icon
    IF_SETPOSITION(int2, int3, 0, 0, comp(1197, 2));  // cutscene2d:skip_button_layer
    script8841(100, 1);
    return;
}