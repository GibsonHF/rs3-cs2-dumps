//
function script20046(): void {
    IF_SETMODELANIM(22646 as seq, comp(1342, 24));
    IF_SETMODELANIM(22646 as seq, comp(1342, 25));
    IF_SETONTIMER(callback(script20045, CLIENTCLOCK(), 1, 87949336, 250), comp(1342, 24));
    IF_SETONTIMER(callback(script20045, CLIENTCLOCK(), 2, 87949337, 250), comp(1342, 25));
    return;
}