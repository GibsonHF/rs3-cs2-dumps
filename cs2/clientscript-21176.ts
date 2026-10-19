//
function script21176(): void {
    var string0 = "";
    if ((IF_FIND(comp(1578, 11)) == 1)) {  // plugin_hub_parent_install:install_button
        string0 = CC_GETTEXT();
        if ((STRING_LENGTH(string0) != 5)) {
            unk11175();
            script426(`Please enter a valid code. A code will contain ${inttostring(5, 10)} characters.`, 103415819, -1, 1);
            return;
        };
        stack(26);
        stack(varbitplayer_62195);
        stack(-1);
        stack(-1);
        script21261();
        stack(1);
        stack(string0);
        unk12154();
        stack(6);
        script21167();
    };
    return;
}