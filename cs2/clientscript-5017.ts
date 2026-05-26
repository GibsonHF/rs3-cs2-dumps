//
function script5017(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    stack(int2);
    stack(int0);
    IF_SETGRAPHIC();
    stack(int3);
    stack(int1);
    IF_SETGRAPHIC();
    if ((int6 >= 5)) {
        IF_SETCOLOUR(HSVTORGB(int4), int0);
        IF_SETCOLOUR(HSVTORGB(int5), int1);
    } else {
        IF_SETCOLOUR(HSVTORGB(6716), int0);
        IF_SETCOLOUR(HSVTORGB(6716), int1);
    };
    return;
}