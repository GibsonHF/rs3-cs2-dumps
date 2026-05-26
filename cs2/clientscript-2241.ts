//
function script2241(): void {
    IF_SETTEXT(`+ ${inttostring(varplayer_2967, 10)} ( ${inttostring(varplayer_2961, 10)} )<br>+ ${inttostring(varplayer_2966, 10)} ( ${inttostring(varplayer_2960, 10)} )<br>+ ${inttostring(varplayer_2968, 10)} ( ${inttostring(varplayer_2962, 10)} )<br>`, 60882952);
    IF_SETTEXT(`+ ${inttostring(varplayer_2969, 10)} ( ${inttostring(varplayer_2963, 10)} )<br>+ ${inttostring(varplayer_2971, 10)} ( ${inttostring(varplayer_2964, 10)} )<br>+ ${inttostring(varplayer_2970, 10)} ( ${inttostring(varplayer_2965, 10)} )<br>`, 60882954);
    if ((varbitplayer_14974 == 1)) {
        IF_SETTEXT("WORKING", 60882959);
        IF_SETCOLOUR(65280, 60882959);
    } else {
        SOUND_SYNTH(35284, 10, 0);
        IF_SETTEXT("NEEDS REPAIR", 60882959);
        IF_SETCOLOUR(16711680, 60882959);
    };
    if ((varbitplayer_14976 == 1)) {
        IF_SETTEXT("WORKING", 60882958);
        IF_SETCOLOUR(65280, 60882958);
    } else {
        SOUND_SYNTH(35284, 10, 1);
        IF_SETTEXT("NEEDS REPAIR", 60882958);
        IF_SETCOLOUR(16711680, 60882958);
    };
    if ((varbitplayer_14975 == 1)) {
        IF_SETTEXT("WORKING", 60882960);
        IF_SETCOLOUR(65280, 60882960);
    } else {
        SOUND_SYNTH(35284, 10, 2);
        IF_SETTEXT("NEEDS REPAIR", 60882960);
        IF_SETCOLOUR(16711680, 60882960);
    };
    IF_SETTEXT(inttostring((varclient_1135 / 5), 10), 60882948);
    switch (varplayer_2972) {
        case 5: {
            IF_SETTEXT("Your workers uncover a hidden stash and you receive", 60882949);
            IF_SETTEXT("3 extra resources.", 60882950);
            SOUND_SYNTH(34614, 1, 0);
            break;
        }
        case 6: {
            IF_SETTEXT("An accident at work has taken place. As a result you have", 60882949);
            IF_SETTEXT("lost 3 resources.", 60882950);
            SOUND_SYNTH(35284, 10, 0);
            break;
        }
        case 7: {
            IF_SETTEXT("The paint machine is out of glaze and requires a repair to work at full efficiency.", 60882949);
            IF_SETTEXT("Painter needs repair.", 60882950);
            break;
        }
        case 8: {
            IF_SETTEXT("The conveyor team needs re-training in order to work at full efficiency.", 60882949);
            IF_SETTEXT("Conveyor needs repair.", 60882950);
            break;
        }
        case 9: {
            IF_SETTEXT("The oven is coated in soot. It requires a repair to work at full efficiency.", 60882949);
            IF_SETTEXT("Oven needs repair.", 60882950);
            break;
        }
        default: {
            IF_SETTEXT("", 60882949);
            IF_SETTEXT("Nothing unusual happened.", 60882950);
            break;
        }
    };
    return;
}