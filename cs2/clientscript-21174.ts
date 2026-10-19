//
function script21174(): void {
    var string0 = "";
    if ((IF_FIND(comp(1578, 11)) == 1)) {  // plugin_hub_parent_install:install_button
        string0 = CC_GETTEXT();
        if ((((STRING_LENGTH(string0) <= 5) || (STRING_INDEXOF_STRING(string0, "@", 0) == -1)) || (STRING_INDEXOF_STRING(string0, ".", 0) == -1))) {
            unk11175();
            script426("Please enter a valid email address first.", 103415819, -1, 1);
            return;
        };
        stack(0);
        stack(string0);
        unk12154();
        stack(3);
        script21167();
    };
    return;
}