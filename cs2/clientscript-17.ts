//[clientscript,magic_entertargetmode]
function script17(int0: component): void {
    IF_SETOUTLINE(2, int0);
    if ((AND(IF_GETTARGETMASK(int0), 32) != 0)) {
        script8311(2);
    };
    return;
}