//
function script11081(): void {
    IF_SETHIDE(false, comp(753, 118));
    IF_SETTEXT("Learn", comp(753, 50));
    IF_SETHIDE(false, comp(753, 32));
    IF_SETHIDE(false, comp(753, 2));
    IF_SETHIDE(true, comp(753, 36));
    IF_SETSIZE(519, 0, 0, 1, comp(753, 7));
    IF_SETSIZE(10, 125, 1, 0, comp(753, 27));
    IF_SETSIZE(16, 0, 1, 1, comp(753, 28));
    IF_SETSIZE(0, 0, 1, 1, comp(753, 29));
    IF_SETHIDE(true, comp(753, 20));
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 15));
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 17));
    IF_SETSIZE(16384, 25, 2, 0, comp(753, 19));
    CC_DELETEALL(comp(753, 27));
    CC_DELETEALL(comp(753, 38));
    script11074();
    IF_SETSCROLLSIZE(0, 0, comp(753, 27));
    IF_SETSCROLLPOS(0, 0, comp(753, 27));
    IF_SETNPCMODEL(struct_getparam(varclient_4485, 1347), comp(753, 40));
    IF_SETMODELANIM(BAS_GETANIM_READY(varclient_4484), comp(753, 40));
    return;
}