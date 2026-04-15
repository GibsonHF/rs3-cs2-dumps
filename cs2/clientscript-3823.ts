//
function script3823(int0: int): void {
    if ((int0 < 330)) {
        var int0 = (int0 + 1);
        IF_SETONTIMER(callback(script3823, int0), comp(641, 39));
        return;
    };
    IF_SETMODELANIM(32986 as seq, comp(641, 44));
    IF_SETONTIMER(callback(), comp(641, 39));
    return;
}