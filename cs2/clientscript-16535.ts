//
function script16535(int0: number): void {
    if ((int0 <= 0)) {
        IF_SETONTIMER(callback(), 63569935);
        IF_SETMODELANIM(-1, 63569935);
        script16536();
    } else {
        IF_SETONTIMER(callback(script16535, --int0), 63569935);
    };
    return;
}