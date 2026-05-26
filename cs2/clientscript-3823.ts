//
function script3823(int0: number): void {
    if ((int0 < 330)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script3823, int0), 42008615);
        return;
    };
    IF_SETMODELANIM(32986, 42008620);
    IF_SETONTIMER(callback(), 42008615);
    return;
}