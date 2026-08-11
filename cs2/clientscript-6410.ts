//
function script6410(): void {
    var int0 = varbitplayer_9071;
    script20962();
    if (BRANCH_EQUALS(1)) {
        int0 = 2147483647;
    };
    if ((varbitplayer_9072 == 0)) {
        script6414(85721635, 0);
        script6414(85721647, 0);
        script6414(85721659, 0);
        script6414(85721671, 0);
        IF_SETTEXT("Complete one task", comp(1308, 557));  // ss_rework:cancel_current_title
        IF_SETTEXT("Complete one task", comp(1308, 560));  // ss_rework:never_again_title
        return;
    };
    if ((script10608(varplayer_185) == 1)) {
        script6414(85721671, 0);
    } else {
        IF_SETCOLOUR(16512486, comp(1308, 584));  // ss_rework:prefer_task_title
    };
    if ((int0 < 100)) {
        script6414(85721647, 0);
        script6414(85721671, 0);
    };
    if ((varplayer_183 > 0)) {
        IF_SETTEXT("Block task (100pts)", comp(1308, 560));  // ss_rework:never_again_title
        IF_SETTEXT("Prefer task (100pts)", comp(1308, 584));  // ss_rework:prefer_task_title
    } else {
        IF_SETTEXT("Not on task", comp(1308, 560));  // ss_rework:never_again_title
        IF_SETTEXT("Not on task", comp(1308, 584));  // ss_rework:prefer_task_title
        script6414(85721647, 0);
        script6414(85721671, 0);
    };
    if ((int0 < 30)) {
        if ((varbitplayer_24968 == 0)) {
            script6414(85721635, 0);
        };
        script6414(85721659, 0);
    };
    if ((varplayer_183 > 0)) {
        IF_SETTEXT("Cancel task (30pts)", comp(1308, 557));  // ss_rework:cancel_current_title
        IF_SETTEXT("Extend task (30pts)", comp(1308, 572));  // ss_rework:extend_current_title
    } else if (((varbitplayer_525 != 0) || (varbitplayer_24968 == 1))) {
        if ((varbitplayer_24968 == 1)) {
            IF_SETTEXT("Cancel challenge (free)", comp(1308, 557));  // ss_rework:cancel_current_title
        } else {
            IF_SETTEXT("Cancel challenge (30pts)", comp(1308, 557));  // ss_rework:cancel_current_title
        };
        script6414(85721659, 0);
    } else {
        IF_SETTEXT("Not on task", comp(1308, 557));  // ss_rework:cancel_current_title
        IF_SETTEXT("Not on task", comp(1308, 572));  // ss_rework:extend_current_title
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