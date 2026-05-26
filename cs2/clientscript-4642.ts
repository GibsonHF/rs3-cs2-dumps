//
function script4642(): void {
    var string0 = "";
    switch (varplayer_1552) {
        case 1: {
            string0 = "Abridged: 750 Dungeoneering XP. 75 Dungeoneering tokens.<br>Unabridged: 3,750 XP in a choice of Attack, Ranged or Magic.";
            break;
        }
        case 2: {
            string0 = "Abridged: 2,410 Dungeoneering XP. 241 Dungeoneering tokens.<br>Unabridged: 25,415 XP in either Agility or Thieving.";
            break;
        }
        case 4: {
            string0 = "Abridged: 37,080 Dungeoneering XP. 3,708 Dungeoneering tokens.<br>Unabridged: 75,765 Strength XP.";
            break;
        }
        case 3: {
            string0 = "Abridged: 3,750 Dungeoneering XP. 375 Dungeoneering tokens.<br>Unabridged: 21,670 Dungeoneering XP. 2,167 Dungeoneering tokens. 11,660 Thieving XP or 37,080 Attack XP.";
            break;
        }
        case 6: {
            string0 = "Abridged: 53,440 Dungeoneering XP. 5,344 Dungeoneering tokens.<br>Unabridged: 105,010 Strength XP.";
            break;
        }
        default: {
            return;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        string0 = strconcat(string0, `<br>Replay: Up to ${TOSTRING_LOCALISED(enum_getvalue(0, 0, 5756 as cs2enum, varplayer_1552), 1)} Dungeoneering tokens.`);
    };
    SOUND_VORBIS_VOLUME(6185 as vorbis, 1, 0, 150);
    IF_SETHIDE(true, comp(153, 3));
    IF_SETTEXT(string0, comp(153, 4));
    return;
}