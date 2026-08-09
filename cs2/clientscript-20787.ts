//
function script20787(int0: number): void {
    if ((varplayer_12920 != -1 as coordgrid)) {
        if ((script6431() == 1)) {
            if ((script20783(varplayer_12920) == 1)) {
                script20779(varplayer_12920);
            } else if ((varbitplayer_61207 == 1)) {
                script20779(varplayer_12920);
            } else {
                varplayer_12919 = int0;
            };
        } else if ((varbitplayer_61207 == 1)) {
            script20779(varplayer_12920);
        } else {
            varplayer_12919 = int0;
        };
    } else if ((varbitplayer_61207 == 1)) {
        script20779(varplayer_12920);
    } else {
        varplayer_12919 = int0;
    };
    unk11179();
    unk11180();
    while (BRANCH_EQUALS(1)) {
        stack(127);
        unk11183();
        stack(0);
        stack(100);
        stack(100);
        stack(127);
        unk11184();
    };
    return;
}