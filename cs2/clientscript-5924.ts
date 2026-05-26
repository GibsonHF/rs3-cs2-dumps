//
function script5924(int0: number): void {
    IF_SETMODELANGLE(int0, IF_GETMODELYOF(97976335), IF_GETMODELANGLE_X(97976335), IF_GETMODELANGLE_Y(97976335), IF_GETMODELANGLE_Z(97976335), IF_GETMODELZOOM(97976335), 97976335);
    if ((--int0 <= -200)) {
        var int0 = 200;
    };
    IF_SETONTIMER(callback(script5924, int0), 97976335);
    return;
}