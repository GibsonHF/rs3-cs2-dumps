//
function script7904(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETMODELANIM(20949 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
    IF_SETONTIMER(callback(), comp(1420, 14));  // acc_create:animation_cancel_listener
    return;
}