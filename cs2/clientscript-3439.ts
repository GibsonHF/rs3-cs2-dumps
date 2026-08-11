//
function script3439(int0: number, int1: number): void {
    if ((int1 == 0)) {
        if ((int0 > 150)) {
            var int0 = (int0 - 1);
        } else {
            var int1 = 1;
        };
    } else if ((int0 < 255)) {
        int0 = (int0 + 1);
    } else {
        IF_SETONTIMER(callback(), comp(1625, 0));  // tuska_effects:tuska_face_bl
        int1 = 1;
    };
    IF_SETTRANS(int0, comp(1625, 0));  // tuska_effects:tuska_face_bl
    IF_SETTRANS(int0, comp(1625, 1));  // tuska_effects:tuska_face_br
    IF_SETTRANS(int0, comp(1625, 3));  // tuska_effects:tuska_face_tl
    IF_SETTRANS(int0, comp(1625, 2));  // tuska_effects:tuska_face_tr
    IF_SETONTIMER(callback(script3439, int0, int1), comp(1625, 0));  // tuska_effects:tuska_face_bl
    return;
}