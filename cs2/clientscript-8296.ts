//
function script8296(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    IF_SETHIDE(false, comp(1875, 63));  // repmodal:mobile_information_box
    if ((int4 == -1 as graphic)) {
        IF_SETSIZE(36, 32, 0, 0, comp(1875, 72));  // repmodal:mobile_info_object
        IF_SETOBJECT(int3, -1, comp(1875, 72));  // repmodal:mobile_info_object
    } else {
        IF_SETSIZE(32, 32, 0, 0, comp(1875, 72));  // repmodal:mobile_info_object
        IF_SETGRAPHIC(int4, comp(1875, 72));  // repmodal:mobile_info_object
    };
    IF_SETTEXT(OC_NAME(int3), comp(1875, 68));  // repmodal:mobile_info_name
    var string0 = "<col=E12323>";
    var string1 = "";
    if ((int2 == 0)) {
        string1 = "Unlocked";
        string0 = "<col=FFFF00>";
    } else if ((int2 == 1)) {
        string1 = "Unlocked";
        string0 = "<col=00C800>";
    } else {
        string1 = "Locked";
    };
    IF_SETTEXT(`Unlocked at : ${inttostring(int1, 10)}`, comp(1875, 69));  // repmodal:mobile_info_unlock1
    IF_SETTEXT(`Current state : ${string0}${string1}`, comp(1875, 70));  // repmodal:mobile_info_unlock2
    IF_SETTEXT(script14456(int3), comp(1875, 71));  // repmodal:mobile_info_text
    return;
}