//
function script6127(int0: number): void {
    var string0 = "";
    if ((varbitplayer_27012 == 65)) {
        if ((script6431() == 1)) {
            string0 = "- Place probes in the mind of your victim to invade their consciousness and steal their memories.<br>- Tap to move the scanning circle, to attempt to find the ideal positions for a probe. The faster it flashes, the better the placement of the probe.<br>- You may also make use of audio hints to help find the memory positions.<br>- Once you are happy with the location outlined by the circle tap on the circle to add one of your three probes.<br>- You will exit the mind of your victim when you have found a memory or used all three probes.";
        } else {
            string0 = "- Place probes in the mind of your victim to invade their consciousness and steal their memories.<br>- Use the flashing hint circle to find the position of memories. When it flashes faster you are near a memory.<br>- You may also make use of audio hints to help find the memory positions.<br>- Click the screen to add one of your three probes in place.<br>- You will exit the mind of your victim when you have found a memory or used all three probes.";
        };
    } else if ((script6431() == 1)) {
        string0 = "- Place probes in the mind of your victim to invade their consciousness and steal their memories.<br>- Place each in a perfect position to obtain a clear memory.<br>- Tap to move the scanning circle, to attempt to find the ideal positions for a probe. The faster it flashes, the better the placement of the probe.<br>- You may also make use of audio hints to help find the ideal positions.<br>- You have three probes to place.<br>- Once you are happy with the location outlined by the circle tap on the circle to add one of your three probes.<br>- You will exit the mind of your victim when you have placed all three probes.";
    } else {
        string0 = "- Place probes in the mind of your victim to invade their consciousness and steal their memories.<br>- Place each in a perfect position to obtain a clear memory.<br>- Use the flashing hint circle to find the ideal positions. A faster flash is better.<br>- You may also make use of audio hints to help find the ideal positions.<br>- You have three probes to place.<br>- Click the screen to add a probe in place.<br>- You will exit the mind of your victim when you have placed all three probes.";
    };
    var int1 = 10;
    var int2 = 16;
    var int3 = (IF_GETWIDTH(comp(1270, 1)) - (int1 * 2));
    var int4 = PARAHEIGHT(string0, int3, 67 as fontmetrics);
    IF_SETTEXTALIGN(0, 0, int2, comp(1270, 48));
    var int5 = (int2 * int4);
    IF_SETPOSITION(int1, int1, 0, 0, comp(1270, 48));
    IF_SETSIZE(int3, int5, 0, 0, comp(1270, 48));
    IF_SETTEXT(string0, comp(1270, 48));
    var int6 = ((int5 + int1) + int1);
    if ((int6 < IF_GETHEIGHT(comp(1270, 1)))) {
        int6 = IF_GETHEIGHT(comp(1270, 1));
    };
    IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1270, 1)), int6, comp(1270, 1));
    script31(83230720, 83230721, 5666, 5663, 5664, 5665, 5686, 5685);
    if ((int0 == 1)) {
        IF_SETHIDE(false, comp(1270, 47));
    } else {
        IF_SETHIDE(true, comp(1270, 47));
    };
    return;
}