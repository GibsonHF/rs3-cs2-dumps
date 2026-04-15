//
function script10043(int0: component, int1: component, int2: component, int3: struct): void {
    var string0 = "Pet Banking Service";
    var string1 = "Select an item to send to your bank:";
    if ((varbitplayer_27743 == 1)) {
        string0 = "Pet High Level Alchemy";
        string1 = "Select an item to cast high level alchemy on:";
    };
    script9554(int0, int1, int2, string0, int3);
    IF_SETTEXT(string1, comp(1384, 18));
    return;
}