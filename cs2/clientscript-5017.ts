//
function script5017(int0: component, int1: component, int2: unknown_int, int3: unknown_int, int4: int, int5: int, int6: unknown_int): void {
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