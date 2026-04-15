//
function script11279(int0: component): void {
    if ((strcmp(varclient_4763, "") == 0)) {
        IF_SETTEXT("Click on a skill then click confirm to select it.", int0);
    } else {
        IF_SETTEXT(varclient_4763, int0);
    };
    return;
}