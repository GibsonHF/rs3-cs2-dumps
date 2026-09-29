//
function script7904(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETMODELANIM(20949 as seq, comp(1420, 46));  // acc_create:large_3
    IF_SETONTIMER(callback(), comp(1420, 14));  // acc_create:animation_cancel_listener
    return;
}