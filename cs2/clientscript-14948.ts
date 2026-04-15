//
function script14948(int0: component, int1: component): void {
    IF_SETMODELANIM(29024 as seq, int0);
    IF_SETMODEL(128339 as model, int1);
    IF_SETMODELANIM(29026 as seq, int1);
    var int2 = SEQLENGTH(29024 as seq);
    var int3 = SEQLENGTH(29026 as seq);
    IF_SETONTIMER(callback(script17365, 0, int0, int1, int2, (int2 - int3)), int0);
    return;
}