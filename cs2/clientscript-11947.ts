//
function script11947(): void {
    script3536("Scrolls remaining in your backpack", 43384911, -1);
    script3536("Scrolls remaining in your familiar", 43384912, -1);
    script3536("Scrolls remaining in your backpack and familiar", 43384954, -1);
    if ((IF_FIND(comp(662, 76)) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script8799, script5554(varplayer_1831), 43384908, -1));
    };
    script3536(script5554(varplayer_1831), 43384955, -1);
    script3536("Time remaining until your familiar desummons", 43384887, -1);
    script3536("Time remaining until your familiar desummons", 43384842, -1);
    script3536("Familiar life points", 43384898, -1);
    script3536("Familiar spell points", 43384902, -1);
    if ((varbitplayer_29379 == 1)) {
        script3536(`${inttostring(varbitplayer_19034, 10)}/${inttostring(varbitplayer_27403, 10)}`, 43384873, -1);
        script3536(`${inttostring(varplayer_1787, 10)}/60`, 43384874, -1);
    } else {
        script3536("Familiar life points", 43384873, -1);
        script3536("Familiar spell points", 43384874, -1);
    };
    script3536("Pet hunger", 43384920, -1);
    script3536("Pet growth", 43384921, -1);
    return;
}