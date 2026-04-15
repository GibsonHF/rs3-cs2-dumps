//
function script19444(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    IF_SETHIDE(true, int0);
    IF_SETHIDE(true, int1);
    IF_SETHIDE(true, int2);
    IF_SETMODEL(-1 as model, int0);
    IF_SETMODEL(-1 as model, int1);
    IF_SETMODEL(-1 as model, int2);
    IF_SETMODELANIM(-1 as seq, int0);
    IF_SETMODELANIM(-1 as seq, int1);
    IF_SETMODELANIM(-1 as seq, int2);
    IF_SETHIDE(true, int3);
    IF_SETHIDE(true, int4);
    IF_SETHIDE(true, int5);
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