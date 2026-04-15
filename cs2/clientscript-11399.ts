//
function script11399(): void {
    CC_DELETEALL(comp(1621, 16));
    IF_SETTEXT("", comp(1621, 4));
    IF_SETTEXT("Select an item from the list to view the contents of the set.<br><br>With an item selected you can deposit the items if they are in your inventory.<br><br>If you have items stored selecting them will allow you to withdraw them.", comp(1621, 15));
    script13971(comp(1621, 37), comp(1621, 38), 28553 as struct, "Deposit", true);
    return;
}