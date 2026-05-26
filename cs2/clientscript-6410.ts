//
function script6410(): void {
    if ((varbitplayer_9072 == 0)) {
        script6414(85721635, 0);
        script6414(85721647, 0);
        script6414(85721659, 0);
        script6414(85721671, 0);
        IF_SETTEXT("Complete one task", 85721645);
        IF_SETTEXT("Complete one task", 85721648);
        return;
    };
    if ((script10608(varplayer_185) == 1)) {
        script6414(85721671, 0);
    } else {
        IF_SETCOLOUR(16512486, 85721672);
    };
    if ((varbitplayer_9071 < 100)) {
        script6414(85721647, 0);
        script6414(85721671, 0);
    };
    if ((varplayer_183 > 0)) {
        IF_SETTEXT("Block task (100pts)", 85721648);
        IF_SETTEXT("Prefer task (100pts)", 85721672);
    } else {
        IF_SETTEXT("Not on task", 85721648);
        IF_SETTEXT("Not on task", 85721672);
        script6414(85721647, 0);
        script6414(85721671, 0);
    };
    if ((varbitplayer_9071 < 30)) {
        if ((varbitplayer_24968 == 0)) {
            script6414(85721635, 0);
        };
        script6414(85721659, 0);
    };
    if ((varplayer_183 > 0)) {
        IF_SETTEXT("Cancel task (30pts)", 85721645);
        IF_SETTEXT("Extend task (30pts)", 85721660);
    } else if (((varbitplayer_525 != 0) || (varbitplayer_24968 == 1))) {
        if ((varbitplayer_24968 == 1)) {
            IF_SETTEXT("Cancel challenge (free)", 85721645);
        } else {
            IF_SETTEXT("Cancel challenge (30pts)", 85721645);
        };
        script6414(85721659, 0);
    } else {
        IF_SETTEXT("Not on task", 85721645);
        IF_SETTEXT("Not on task", 85721660);
        script6414(85721635, 0);
        script6414(85721659, 0);
    };
    if ((varbitplayer_25047 == 1)) {
        script6414(85721659, 0);
    };
    if (((((((((varbitplayer_42535 > 0) && (varbitplayer_24954 > 0)) && (varbitplayer_24953 > 0)) && (varbitplayer_24952 > 0)) && (varbitplayer_24951 > 0)) && (varbitplayer_24950 > 0)) && (varbitplayer_24949 > 0)) && (varbitplayer_24948 > 0))) {
        script6414(85721671, 0);
    };
    if (((((((((varbitplayer_42839 > 0) && (varbitplayer_22707 > 0)) && (varbitplayer_9082 > 0)) && (varbitplayer_9081 > 0)) && (varbitplayer_9077 > 0)) && (varbitplayer_9076 > 0)) && (varbitplayer_9073 > 0)) && (varbitplayer_9075 > 0))) {
        script6414(85721647, 0);
    };
    return;
}