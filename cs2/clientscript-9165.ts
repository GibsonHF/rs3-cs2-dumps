//
function script9165(): void {
    var int0 = 0;
    if ((IF_GETHIDE(97583107) == 1)) {
        return;
    };
    if ((IF_FIND(97517571) == 1)) {
        int0 = cc_getparam(3433);
        if ((--int0 == 0)) {
            script8880();
        } else {
            CC_SETPARAM_INT(3433, int0);
        };
    };
    return;
}