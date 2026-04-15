//
function script15595(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, string0: string): void {
    script3038(string0, int1);
    IF_SETHIDE(false, int0);
    script13991(int0, comp(-1, 65535), 2830 as struct, true);
    IF_SETSCROLLSIZE(0, 0, int4);
    IF_SETSCROLLPOS(0, 0, int4);
    IF_SETHIDE(true, int3);
    IF_SETTEXT("Name", int5);
    if ((int2 != comp(-1, 65535))) {
        IF_SETHIDE(true, int2);
    };
    return;
}