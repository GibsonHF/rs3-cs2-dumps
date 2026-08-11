//
function script5190(int0: number, int1: number): void {
    var int2 = 25;
    var int3 = (IF_GETWIDTH(comp(1122, 41)) * int0);  // hcape_interface:customisation_layer
    if ((int1 == 0)) {
        IF_SETSCROLLPOS(int3, 0, comp(1122, 60));  // hcape_interface:scroller
        IF_SETHIDE(true, comp(1122, 61));  // hcape_interface:customisation_blocker
        return;
    };
    IF_SETHIDE(false, comp(1122, 61));  // hcape_interface:customisation_blocker
    if ((int3 < IF_GETSCROLLX(comp(1122, 60)))) {  // hcape_interface:scroller
        int2 = (0 - int2);
    };
    IF_SETONTIMER(callback(script5191, int3, int2), comp(1122, 60));  // hcape_interface:scroller
    return;
}