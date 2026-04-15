//
function script5905(): void {
    var string0 = "";
    if ((varbitplayer_25931 >= 100)) {
        string0 = "You have achieved maximum velocity! You will automatically traverse the next obstacle.";
    } else {
        string0 = "Traverse course obstacles to increase velocity. When you have maximum velocity, you will automatically traverse the next obstacle.";
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 101580805);
    var int0 = 0;
    if (((IF_FIND(101580812) == 1) && (IF_FIND[1](CC_GETPARENTLAYER()) == 1))) {
        int0 = script669(varbitplayer_25931, 100, CC_GETWIDTH[1]());
        CC_SETSIZE(int0, CC_GETHEIGHT(), 0, 0);
    };
    return;
}