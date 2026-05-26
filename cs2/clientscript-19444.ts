//
function script19444(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    IF_SETHIDE(1, int0);
    IF_SETHIDE(1, int1);
    IF_SETHIDE(1, int2);
    IF_SETMODEL(-1, int0);
    IF_SETMODEL(-1, int1);
    IF_SETMODEL(-1, int2);
    IF_SETMODELANIM(-1, int0);
    IF_SETMODELANIM(-1, int1);
    IF_SETMODELANIM(-1, int2);
    IF_SETHIDE(1, int3);
    IF_SETHIDE(1, int4);
    IF_SETHIDE(1, int5);
    stack(-1);
    stack(int3);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int4);
    IF_SETGRAPHIC();
    stack(-1);
    stack(int5);
    IF_SETGRAPHIC();
    return;
}