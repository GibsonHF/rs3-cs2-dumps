//
function script7938(int0: number): void {
    if ((CLIENTCLOCK() < int0)) {
        return;
    };
    IF_SETONTIMER(callback(script7904, (CLIENTCLOCK() + 45)), comp(1420, 14));  // acc_create:animation_cancel_listener
    IF_SETMODELANIM(20950 as seq, comp(1420, 46));  // acc_create:avatar_paperdoll
    script8010(25, 93061315, -1);
    IF_SETONTIMER(callback(), comp(1420, 8));  // acc_create:fade_listener
    return;
}