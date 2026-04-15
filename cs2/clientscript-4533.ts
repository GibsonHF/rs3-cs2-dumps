//
function script4533(): void {
    script11620(comp(1495, 18));
    IF_SETMODELANIM(18020 as seq, comp(1495, 15));
    IF_SETMODELANGLE(100, 120, IF_GETMODELANGLE_X(comp(1495, 15)), 513, IF_GETMODELANGLE_Z(comp(1495, 15)), IF_GETMODELZOOM(comp(1495, 15)), comp(1495, 15));
    IF_SETONTIMER(callback(script5924, 100), comp(1495, 15));
    return;
}