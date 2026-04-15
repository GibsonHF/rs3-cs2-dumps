//
function script8581(int0: component, int1: component, int2: component): void {
    if ((varbitplayer_17699 < 4)) {
        CC_DELETEALL(int0);
        CC_DELETEALL(int1);
        IF_SETSIZE(500, 50, 0, 0, int2);
    } else {
        IF_SETSIZE(500, 70, 0, 0, int2);
        script10416(int0, int1, "Skip completion cutscene", "Toggle to start viewing the statue sculpting cutscene.", "Toggle to stop viewing the statue sculpting cutscene.", varbitplayer_36886);
    };
    return;
}