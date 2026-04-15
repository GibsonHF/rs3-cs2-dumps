//
function script5100(int0: unknown_int, int1: unknown_int, int2: unknown_int, int3: unknown_int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int, int9: unknown_int, int10: unknown_int, int11: unknown_int, int12: component, int13: component, int14: component, int15: component, int16: component, int17: unknown_int, int18: unknown_int, int19: unknown_int, int20: unknown_int, string0: string): void {
    IF_SETHIDE(true, int13);
    IF_SETHIDE(false, int12);
    IF_SETHIDE(true, int15);
    IF_SETOP(1, "Details", int14);
    IF_SETTEXT(string0, int16);
    switch (int7) {
        case -2: {
            stack(6194);
            stack(int10);
            IF_SETGRAPHIC();
            break;
        }
        case -1: {
            stack(6195);
            stack(int10);
            IF_SETGRAPHIC();
            break;
        }
        case 0: {
            stack(6196);
            stack(int10);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(6197);
            stack(int10);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(6198);
            stack(int10);
            IF_SETGRAPHIC();
            break;
        }
    };
    stack(int1);
    stack(int17);
    IF_SETGRAPHIC();
    stack(int2);
    stack(int18);
    IF_SETGRAPHIC();
    IF_SETCOLOUR(HSVTORGB(int3), int17);
    IF_SETCOLOUR(HSVTORGB(int4), int18);
    IF_SETCOLOUR(HSVTORGB(int5), int19);
    IF_SETCOLOUR(HSVTORGB(int6), int20);
    IF_SETONOP(callback(script5111, int0, int8), int14);
    IF_SETHIDE(1, int13);
    return;
}