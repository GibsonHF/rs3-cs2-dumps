//
function script17320(): void {
    var int0 = 75497482;
    var int1 = 24;
    var string0 = "";
    if ((script6431() == false)) {
        string0 = `Current progress: ${inttostring((varbitplayer_52885 * 25), 10)}/${inttostring((24 * 25), 10)}<br>Gain points with each arrow shot at the target, complete this progress bar for your next <col=89CFF0>Target Points reward</col>.`;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
        int0 = 75497500;
        string0 = `You have a chance of hitting the target in different locations for:<br>+100 points.<br>+75 points.<br>+50 points.<br>+25 points.<br>Reach ${inttostring((24 * 25), 10)} points to earn the <col=89CFF0>Target Points reward</col>.`;
        IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
        int0 = 75497506;
        string0 = "Filling this bar will guarantee a bullseye on your next arrow shot.";
        IF_SETONMOUSEREPEAT(callback(script3876, string0, int0, -1), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
    };
    return;
}