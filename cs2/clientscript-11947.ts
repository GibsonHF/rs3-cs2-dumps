//
function script11947(): void {
    script3536("Scrolls remaining in your backpack", comp(662, 79), -1);
    script3536("Scrolls remaining in your familiar", comp(662, 80), -1);
    script3536("Scrolls remaining in your backpack and familiar", comp(662, 122), -1);
    if ((IF_FIND(comp(662, 76)) == 1)) {
        CC_SETONMOUSEREPEAT(callback(script8799, script5554(varplayer_1831), 43384908, -1));
    };
    script3536(script5554(varplayer_1831), comp(662, 123), -1);
    script3536("Time remaining until your familiar desummons", comp(662, 55), -1);
    script3536("Time remaining until your familiar desummons", comp(662, 10), -1);
    script3536("Familiar life points", comp(662, 66), -1);
    script3536("Familiar spell points", comp(662, 70), -1);
    if ((varbitplayer_29379 == 1)) {
        script3536(`${inttostring(varbitplayer_19034, 10)}/${inttostring(varbitplayer_27403, 10)}`, comp(662, 41), -1);
        script3536(`${inttostring(varplayer_1787, 10)}/60`, comp(662, 42), -1);
    } else {
        script3536("Familiar life points", comp(662, 41), -1);
        script3536("Familiar spell points", comp(662, 42), -1);
    };
    script3536("Pet hunger", comp(662, 88), -1);
    script3536("Pet growth", comp(662, 89), -1);
    return;
}