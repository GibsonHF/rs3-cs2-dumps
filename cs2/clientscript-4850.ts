//
function script4850(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    IF_SETHIDE(true, int5);
    IF_SETSCROLLPOS(0, 0, int0);
    IF_SETSCROLLSIZE(0, 0, int0);
    script31(int1, int0, 5666 as graphic, 5663 as graphic, 5664 as graphic, 5665 as graphic, 5686 as graphic, 5685 as graphic);
    CC_CREATE(int2, 4, 0);
    CC_SETSIZE(10, 10, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETTEXT("Please select a hotspot to customise from the map on the right.");
    CC_SETCOLOUR(15065531);
    CC_SETTEXTFONT(67 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    return;
}