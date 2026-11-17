//
function script4752(): void {
    var int0 = 300;
    var int1 = 0;
    var string0 = "We've moved to the Jagex Launcher and Jagex Accounts to give you a more stable and secure way to play. Download the Launcher and follow the prompts to migrate. Your character and progress will carry over safely.";
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    var int2 = script5347(0, 0, 1, 0, 0, 1, 2196, "You now need to play via the Jagex Launcher.");
    script20484(2196, -1, 1, 0);
    var int3 = (int2 + 10);
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    int2 = script5347(0, int3, 0, 0, 0, 1, 2100, string0);
    script20484(2100, -1, 1, 0);
    int3 = ((int3 + int2) + 10);
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    script7852(0, int3, 0, 0, 0, 36, 1, 0, 17062, "Learn more");
    CC_SETONBUTTONCLICK(callback(script15228, 1020));
    int3 = ((int3 + 36) + 10);
    stack(48758875);
    stack(int1);
    int1 = (int1 + 1);
    script7852(0, int3, 0, 0, 0, 36, 1, 0, 17062, "Download Launcher");
    CC_SETONBUTTONCLICK(callback(script15228, 31));
    int3 = (int3 + 36);
    IF_SETENABLED(false, comp(744, 92));  // loginscreen:username_input_group
    IF_SETHIDE(true, comp(744, 92));  // loginscreen:username_input_group
    IF_SETHIDE(true, comp(744, 59));  // loginscreen:desktop_background_lower
    IF_SETSIZE(300, int3, 0, 0, comp(744, 91));  // loginscreen:username_title
    return;
}