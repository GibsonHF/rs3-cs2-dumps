//
function script5191(int0: number, int1: number): void {
    IF_SETSCROLLPOS((IF_GETSCROLLX(comp(1122, 60)) + int1), 0, comp(1122, 60));  // hcape_interface:scroller
    if ((int1 < 0)) {
        if ((IF_GETSCROLLX(comp(1122, 60)) <= int0)) {  // hcape_interface:scroller
            IF_SETSCROLLPOS(int0, 0, comp(1122, 60));  // hcape_interface:scroller
            IF_SETONTIMER(callback(), comp(1122, 60));  // hcape_interface:scroller
            IF_SETHIDE(true, comp(1122, 61));  // hcape_interface:customisation_blocker
        } else if (((int1 > 0) && (IF_GETSCROLLX(comp(1122, 60)) >= int0))) {  // hcape_interface:scroller
            IF_SETSCROLLPOS(int0, 0, comp(1122, 60));  // hcape_interface:scroller
            IF_SETONTIMER(callback(), comp(1122, 60));  // hcape_interface:scroller
            IF_SETHIDE(true, comp(1122, 61));  // hcape_interface:customisation_blocker
        };
    } else if (((int1 > 0) && (IF_GETSCROLLX(comp(1122, 60)) >= int0))) {  // hcape_interface:scroller
        IF_SETSCROLLPOS(int0, 0, comp(1122, 60));  // hcape_interface:scroller
        IF_SETONTIMER(callback(), comp(1122, 60));  // hcape_interface:scroller
        IF_SETHIDE(true, comp(1122, 61));  // hcape_interface:customisation_blocker
    };
    return;
}