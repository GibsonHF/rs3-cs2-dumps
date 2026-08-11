//
function script19241(): void {
    var int0 = script10495(2);
    var int1 = script10495(21);
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">Completed:</col> <col=", int1))}>${TOSTRING_LOCALISED(varbitplayer_56793, 1)}${inttostring(PUSH_CONSTANT_INT[16]("</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">Entry tokens (double loot):</col> <col=", int1))}>${TOSTRING_LOCALISED(varbitplayer_56114, 1)}${inttostring(PUSH_CONSTANT_INT[16]("</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">Entry tokens (triple loot):</col> <col=", int1))}>${TOSTRING_LOCALISED(varbitplayer_56113, 1)}</col>`, comp(1289, 58));  // halloween24:personal_summary_maze_text
    return;
}