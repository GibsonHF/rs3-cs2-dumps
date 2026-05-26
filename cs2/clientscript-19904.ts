//
function script19904(): void {
    IF_SETNPCMODEL(29660 as npc, comp(1082, 155));
    IF_SETNPCMODEL(28983 as npc, comp(1082, 161));
    IF_SETNPCMODEL(31116 as npc, comp(1082, 167));
    IF_SETMODELANGLE(0, 120, 0, -266, 0, 500, comp(1082, 155));
    IF_SETMODELANGLE(0, 120, 0, 0, 0, 500, comp(1082, 161));
    IF_SETMODELANGLE(0, 120, 0, 266, 0, 500, comp(1082, 167));
    IF_SETMODELANIM(17970 as seq, comp(1082, 155));
    IF_SETMODELANIM(17970 as seq, comp(1082, 161));
    IF_SETMODELANIM(36132 as seq, comp(1082, 167));
    IF_SETTEXT("Solstice", comp(1082, 154));
    IF_SETTEXT("Soul", comp(1082, 160));
    IF_SETTEXT("Phoenix", comp(1082, 166));
    IF_SETTEXT("Select a Showdown to fight for different cosmetics.", comp(1082, 169));
    IF_SETTEXT("You can change Showdowns at any time.", comp(1082, 170));
    return;
}