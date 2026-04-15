//
function script3595(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 0;
    CC_DELETEALL(comp(1253, 3));
    stack(4662);
    stack(82116613);
    IF_SETGRAPHIC();
    script7917(82116611, int0++, -98, 44, 1, 0, 324, 226, 0, 0, 4664, 0, 0, 0, 0);
    CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
    cc_setparam(5837, 1);
    cc_setparam(5938, 0);
    cc_setparam(5939, 128);
    cc_setparam(5940, SCALE(1, 4, 1000));
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -60, 1, 1, 0, 255, 1, 0);
    CC_SETSCROLLSIZE((2 * IF_GETWIDTH(82116611)), 0);
    CC_SETSCROLLPOS((CC_GETSCROLLWIDTH() / 4), 0);
    CC_SETONTIMER(callback(script3596, int1, 6));
    script7919(int1, int2++, 0, 0, 0, 1, (2 * IF_GETWIDTH(82116611)), 0, 0, 1, 4665, 1, 0, 1, 32);
    int1 = int0++;
    int2 = 0;
    script15938(82116611, int1, int2++, 0, -60, 1, 1, 0, 255, 1, 0);
    CC_SETSCROLLSIZE((2 * IF_GETWIDTH(82116611)), 0);
    CC_SETSCROLLPOS(CC_GETSCROLLWIDTH(), 0);
    CC_SETONTIMER(callback(script3596, int1, 2));
    script7919(int1, int2++, 0, 0, 0, 1, (2 * IF_GETWIDTH(82116611)), 0, 0, 1, 4665, 0, 0, 1, 0);
    script2994(82116611, int0++, 0, -15, 1, 1, 760, 354, 0, 0, 4663);
    CC_SENDTOFRONT();
    IF_SETOBJECT_NONUM(55737, 1, 118226965);
    IF_SETTEXT(OC_NAME(55737), 118226966);
    IF_SETOBJECT_NONUM(55911, 1, 118226970);
    IF_SETTEXT(OC_NAME(55911), 118226971);
    return;
}