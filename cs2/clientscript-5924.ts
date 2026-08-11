//
function script5924(int0: number): void {
    IF_SETMODELANGLE(int0, IF_GETMODELYOF(97976335), IF_GETMODELANGLE_X(comp(1495, 15)), IF_GETMODELANGLE_Y(comp(1495, 15)), IF_GETMODELANGLE_Z(comp(1495, 15)), IF_GETMODELZOOM(comp(1495, 15)), comp(1495, 15));  // marketplace_preview:ragdoll_model
    var int0 = (int0 - 2);
    if ((int0 <= -200)) {
        int0 = 200;
    };
    IF_SETONTIMER(callback(script5924, int0), comp(1495, 15));  // marketplace_preview:ragdoll_model
    return;
}