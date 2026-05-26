//
function script827(int0: number): void {
    var int1 = 0;
    if (((CLIENTCLOCK() >= (int0 + 32)) && (CLIENTCLOCK() < (int0 + 140)))) {
        IF_SETTEXT("Varrock Herald", 30474242);
        IF_SETTEXT("Covering all of Misthalin and beyond.", 30474243);
        IF_SETTEXT("1 gp", 30474244);
        IF_SETTEXT("Oo'glog Ogresses Open Health Spa!", 30474245);
    } else {
        IF_SETTEXT(" ", 30474242);
        IF_SETTEXT(" ", 30474243);
        IF_SETTEXT(" ", 30474244);
        IF_SETTEXT(" ", 30474245);
    };
    return;
}