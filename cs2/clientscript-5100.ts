//
function script5100(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number, int12: number, int13: number, int14: number, int15: number, int16: number, int17: number, int18: number, int19: number, int20: number, string0: string): void {
    IF_SETHIDE(1, int13);
    IF_SETHIDE(0, int12);
    IF_SETHIDE(1, int15);
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