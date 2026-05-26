//
function script15263(): void {
    IF_SETONTIMER(callback(), 48759120);
    if ((LOGIN_INPROGRESS() == 1)) {
        LOGIN_CANCEL();
    };
    LOGIN_RESETREPLY();
    script2954(0);
    script15251(1);
    return;
}