//
function script7904(int0: int): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETMODELANIM(20949 as seq, comp(1420, 46));
    IF_SETONTIMER(callback(), comp(1420, 14));
    return;
}