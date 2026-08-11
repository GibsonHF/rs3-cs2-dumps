//
function script1605(): void {
    IF_SETTEXT("This override can be accessed from the Wardrobe tab of the Customisations interface.<br><br>Under the Wardrobe's 'Leg Items' category you will be able to select this cosmetic override, making anything you wear on your legs look like this item.<br><br>If you have claimed all the items, the armour set can also be selected from the 'Full Outfits' category.", comp(68, 71));  // owen1_reward_shop:info_box_text
    IF_SETHIDE(false, comp(68, 40));  // owen1_reward_shop:info_box_container
    return;
}