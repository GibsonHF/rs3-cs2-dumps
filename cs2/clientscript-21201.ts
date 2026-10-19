//
function script21201(): void {
    CC_DELETEALL(comp(1589, 18));
    CC_DELETEALL(comp(1589, 19));
    IF_SETTEXT("", comp(1589, 17));
    IF_SETSCROLLSIZE(0, 0, comp(1589, 18));
    IF_SETTEXT("Installation complete", comp(1589, 17));
    var string0 = "The plugin has been installed and enabled. Use the 'manage' tab to change the settings of your new plugins, or close this window and install another plugin.";
    stack(int0);
    unk12105();
    if (BRANCH_EQUALS(0)) {
        string0 = "Use the 'manage' tab to enable and change the settings of your new plugins, or close this window and install another plugin.";
    };
    script2995(104136722, 0, 0, 0, 0, 0, 0, 40, 1, 0, 13569, string0);
    return;
}