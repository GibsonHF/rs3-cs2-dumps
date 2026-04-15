//[clientscript,lore_magic_entertargetmode]
function script657(int0: component): void {
    if ((int0 != comp(-1, 65535))) {
        IF_SETOUTLINE(2, int0);
        if ((AND(IF_GETTARGETMASK(int0), 32) != 0)) {
            script8311(2);
        };
    };
    return;
}