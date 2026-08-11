//
function script13410(int0: number): void {
    IF_SETGRAPHIC(18717 as graphic, comp(1419, 29));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_icon
    SOUND_VORBIS_VOLUME(36972 as vorbis, 1, 0, 100);
    switch (int0) {
        case 0: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETONMOUSELEAVE(callback(), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995643, 18101), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995643, 18100), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995646, 18101), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995646, 18100), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            break;
        }
        case 1: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETONMOUSELEAVE(callback(), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995612, 18101), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995612, 18100), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995646, 18101), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995646, 18100), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            break;
        }
        case 2: {
            IF_SETONMOUSEREPEAT(callback(), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETONMOUSELEAVE(callback(), comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETGRAPHIC(18102 as graphic, comp(1419, 62));  // toplevel_v2_parent_suboverlay_high_scores:activity_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995612, 18101), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995612, 18100), comp(1419, 28));  // toplevel_v2_parent_suboverlay_high_scores:seasonal_bg
            IF_SETGRAPHIC(18100 as graphic, comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETONMOUSEREPEAT(callback(script44, 92995643, 18101), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            IF_SETONMOUSELEAVE(callback(script44, 92995643, 18100), comp(1419, 59));  // toplevel_v2_parent_suboverlay_high_scores:skill_bg
            break;
        }
    };
    return;
}