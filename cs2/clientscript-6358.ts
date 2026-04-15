//
function script6358(): unknown_int {
    if ((IF_HASSUB(comp(1477, 728)) == 1)) {
        if (((IF_HASSUBOVERLAY(comp(1477, 728), 656 as overlayinterface) == 1) && (CC_FIND(comp(656, 27), 0) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 1890 as overlayinterface) == 1) && (CC_FIND(comp(1890, 21), 0) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 1405 as overlayinterface) == 1) && (CC_FIND(comp(1405, 20), 0) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 593 as overlayinterface) == 1) && (CC_FIND(comp(593, 13), 0) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 583 as overlayinterface) == 1) && (CC_FIND(comp(583, 42), 0) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 594 as overlayinterface) == 1) && (((IF_FIND(comp(594, 69)) == 1) || (IF_FIND(comp(594, 27)) == 1)) || (IF_FIND(comp(594, 79)) == 1)))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 1098 as overlayinterface) == 1) && (IF_FIND(comp(1098, 61)) == 1))) {
            CC_TRIGGEROP(1);
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 694 as overlayinterface) == 1)) {
            if ((IF_GETHIDE(comp(694, 6)) == false)) {
                script14923();
            } else if ((IF_FIND(comp(694, 43)) == 1)) {
                CC_TRIGGEROP(1);
            };
        } else if ((IF_HASSUBOVERLAY(comp(1477, 728), 477 as overlayinterface) == 1)) {
            if ((IF_GETHIDE(comp(477, 4)) == false)) {
                script14959();
            } else if ((IF_FIND(comp(477, 11)) == 1)) {
                CC_TRIGGEROP(1);
            };
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 1899 as overlayinterface) == 1) && (IF_FIND(comp(1899, 37)) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 25 as overlayinterface) == 1) && (IF_FIND(comp(25, 18)) == 1))) {
            CC_TRIGGEROP(1);
        } else if (((IF_HASSUBOVERLAY(comp(1477, 728), 1257 as overlayinterface) == 1) && (IF_FIND(comp(1257, 5)) == 1))) {
            CC_TRIGGEROP(1);
        };
        return 1;
    };
    return 0;
}