//
function script5014(): void {
    script5013();
    IF_SETHIDE(false, comp(1259, 171));  // clan_stronghold_main_map:keep_teleport_button_layer
    IF_SETHIDE(false, comp(1259, 172));  // clan_stronghold_main_map:portal_teleport_button_layer
    IF_SETHIDE(false, comp(1259, 173));  // clan_stronghold_main_map:welcome_teleport_button_layer
    IF_SETHIDE(false, comp(1259, 175));  // clan_stronghold_main_map:battlefield_teleport_button_layer
    IF_SETHIDE(false, comp(1259, 174));  // clan_stronghold_main_map:square_teleport_button_layer
    if (((script4949(4) > 0) && (script4959(4) > 0))) {
        IF_SETHIDE(false, comp(1259, 4));  // clan_stronghold_main_map:skill_plot_1_teleport_button_layer
    };
    if (((script4949(5) > 0) && (script4959(5) > 0))) {
        IF_SETHIDE(false, comp(1259, 160));  // clan_stronghold_main_map:skill_plot_2_teleport_button_layer
    };
    if ((((script4949(6) > 0) && (varbitclan_6507 > 2)) && (script4959(6) > 0))) {
        IF_SETHIDE(false, comp(1259, 161));  // clan_stronghold_main_map:skill_plot_3_teleport_button_layer
    };
    if ((((script4949(7) > 0) && (varbitclan_6507 > 2)) && (script4959(7) > 0))) {
        IF_SETHIDE(false, comp(1259, 162));  // clan_stronghold_main_map:skill_plot_4_teleport_button_layer
    };
    if ((((script4949(8) > 0) && (varbitclan_6507 > 4)) && (script4959(8) > 0))) {
        IF_SETHIDE(false, comp(1259, 163));  // clan_stronghold_main_map:skill_plot_5_teleport_button_layer
    };
    if ((((script4949(9) > 0) && (varbitclan_6507 > 4)) && (script4959(9) > 0))) {
        IF_SETHIDE(false, comp(1259, 164));  // clan_stronghold_main_map:skill_plot_6_teleport_button_layer
    };
    if ((((script4949(10) > 0) && (varbitclan_6507 > 4)) && (script4959(10) > 0))) {
        IF_SETHIDE(false, comp(1259, 165));  // clan_stronghold_main_map:skill_plot_7_teleport_button_layer
    };
    if ((((script4949(11) > 0) && (varbitclan_6507 > 4)) && (script4959(11) > 0))) {
        IF_SETHIDE(false, comp(1259, 166));  // clan_stronghold_main_map:skill_plot_8_teleport_button_layer
    };
    if ((((script4949(12) > 0) && (varbitclan_6507 > 6)) && (script4959(12) > 0))) {
        IF_SETHIDE(false, comp(1259, 167));  // clan_stronghold_main_map:skill_plot_9_teleport_button_layer
    };
    if ((((script4949(13) > 0) && (varbitclan_6507 > 6)) && (script4959(13) > 0))) {
        IF_SETHIDE(false, comp(1259, 168));  // clan_stronghold_main_map:skill_plot_10_teleport_button_layer
    };
    if ((((script4949(14) > 0) && (varbitclan_6507 > 6)) && (script4959(14) > 0))) {
        IF_SETHIDE(false, comp(1259, 169));  // clan_stronghold_main_map:skill_plot_11_teleport_button_layer
    };
    if ((((script4949(15) > 0) && (varbitclan_6507 > 6)) && (script4959(15) > 0))) {
        IF_SETHIDE(false, comp(1259, 170));  // clan_stronghold_main_map:skill_plot_12_teleport_button_layer
    };
    return;
}