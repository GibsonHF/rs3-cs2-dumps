//
function script13117(int0: component): void {
    if ((WORLDLIST_FETCH() == 0)) {
        return;
    };
    IF_SETONTIMER(callback(), int0);
    script3116();
    return;
}