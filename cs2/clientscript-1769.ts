//[clientscript,clanwars_orb]
function script1769(int0: component): void {
    IF_SETMODEL(struct_getparam(varclient_269, 581), int0);
    IF_SETMODELANGLE(0, 160, struct_getparam(varclient_269, 584), struct_getparam(varclient_269, 585), struct_getparam(varclient_269, 586), struct_getparam(varclient_269, 583), int0);
    IF_SETMODELANIM(struct_getparam(varclient_269, 582), int0);
    IF_SETPOSITION(0, struct_getparam(varclient_269, 587), 1, 0, int0);
    return;
}