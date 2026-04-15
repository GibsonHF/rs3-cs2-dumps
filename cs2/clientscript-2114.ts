//[clientscript,evilbob_load]
function script2114(int0: component, int1: component): void {
    IF_SETHIDE(false, int0);
    IF_SETHIDE(true, int1);
    varclient_679 = false;
    IF_SETONVARCTRANSMIT(callback(script2115, int0, int1, 679, 1), int0);
    return;
}