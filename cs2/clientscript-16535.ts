//
function script16535(int0: int): void {
    if ((int0 <= 0)) {
        IF_SETONTIMER(callback(), comp(970, 15));
        IF_SETMODELANIM(-1, 63569935);
        script16536();
    } else {
        IF_SETONTIMER(callback(script16535, --int0), comp(970, 15));
    };
    return;
}