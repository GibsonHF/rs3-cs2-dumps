//
function script3508(): void {
    if (((script13749() == 0) && (INV_TOTAL(93 as inv, 5733 as obj) == 0))) {
        return;
    };
    if ((varbitplayer_20806 == 1)) {
        IF_SETHIDE(true, comp(578, 4));  // mobile_founders_pack:layer_day_2
        IF_SETHIDE(true, comp(578, 5));  // mobile_founders_pack:layer_day_3
        IF_SETPOSITION(0, 0, 1, 1, comp(578, 2));  // mobile_founders_pack:layer_day_1
    };
    if ((varplayer_11702 > 0)) {
        IF_SETTEXT(script3507(varplayer_11702), comp(578, 10));  // mobile_founders_pack:date_day_1
        IF_SETTEXT(script3507((varplayer_11702 + 7)), comp(578, 17));  // mobile_founders_pack:date_day_2
        IF_SETTEXT(script3507((varplayer_11702 + 14)), comp(578, 24));  // mobile_founders_pack:date_day_3
    } else {
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 10));  // mobile_founders_pack:date_day_1
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 17));  // mobile_founders_pack:date_day_2
        IF_SETTEXT("Unavailable - Please log out and in.", comp(578, 24));  // mobile_founders_pack:date_day_3
    };
    IF_SETTEXT("Radiant Dawn Armour<br>Immobile Rest<br>Steel Panther Pet", comp(578, 11));  // mobile_founders_pack:rewards_day_1
    IF_SETTEXT("4x Large Protean Pack", comp(578, 18));  // mobile_founders_pack:rewards_day_2
    IF_SETTEXT("Huge Lamp Chest", comp(578, 25));  // mobile_founders_pack:rewards_day_3
    script3535();
    return;
}