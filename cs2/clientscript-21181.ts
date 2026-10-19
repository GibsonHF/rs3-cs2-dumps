//
function script21181(): void {
    if ((IF_FIND(comp(1578, 11)) == 1)) {  // plugin_hub_parent_install:install_button
        unk11302();
        if (BRANCH_EQUALS(1)) {
            IF_SETGRAPHIC(30022 as graphic, comp(1578, 13));  // plugin_hub_parent_install:install_spinner
            stack(0);
            unk12238();
            unk11381();
            CC_INPUT_SETUP();
            unk11175();
        } else {
            IF_SETGRAPHIC(30018 as graphic, comp(1578, 13));  // plugin_hub_parent_install:install_spinner
            stack(1);
            unk12238();
            unk11381();
            CC_INPUT_SETUP();
            unk11175();
        };
    };
    return;
}