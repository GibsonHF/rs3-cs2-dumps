//
function script15760(int0: number): number {
    var string0 = "Confirm";
    stack(21096);
    stack(CLIENTCLOCK());
    stack(int0);
    stack(int1);
    stack(string0);
    IF_SETONTIMER("iiis", int0);
    IF_SETHIDE(false, int1);
    IF_SETTEXT("5...", int0);
    IF_SETENABLED(false, int0);
    return;
}