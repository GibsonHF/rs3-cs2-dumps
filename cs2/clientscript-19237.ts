//
function script19237(): void {
    var int0 = script10495(2);
    var int1 = script10495(0);
    var int2 = script10495(21);
    var int3 = MAX(0, (script19656() - script15113()));
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=F99222>Days Remaining:</col> <col=", int2))}>${inttostring(int3, 10)}</col>`;
    IF_SETTEXT(string0, comp(1289, 5));  // halloween24:info_rewards_event_time_graphic
    IF_SETTEXT(string0, comp(1289, 36));  // halloween24:progress_overview_event_time_graphic
    IF_SETTEXT(string0, comp(1289, 73));
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Harvest Hollow</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Head to the Horseman's camp in <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Harvest Hollow</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">to tackle a variety of activities:</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Train your <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Archaeology, Farming, Firemaking, Prayer, Summoning</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">and</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Thieving</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">skills in the graveyard.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Become an honorary member of <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">The Horsemen</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">and join one of their five teams in the quest,</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">'Field of Screams'</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Bring some <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">bonfire night</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">and</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">harvest festival</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">vibes to</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Harvest Hollow</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">in the quest,</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">'Guys and Dolls'</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Find your way to the centre of the <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Maize Maze</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">to fight spooky bosses and earn rewards.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Visit</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Reynold's Harvest Boon</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">shop to spend your</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Spooky tokens</col> <col=", int0))}>on new and returning rewards!</col>`, comp(1289, 31));  // halloween24:com_31
    IF_SETTEXT(`${inttostring(PUSH_CONSTANT_INT[16]("<col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">New Miniquest</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Speak to <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Death</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">to begin and get your very own</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or Treat bowl</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><br><col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or Treating</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Once per day you can get a <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or treat bag</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">from your</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or treat bowl</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Take that bag to a friend's house and use it on their <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or treat bowl</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">to fill it with goodies!</col><br><br><col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Horseclan Confections</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- Once per day you can gain <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Horseclan confections</col> <col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">from skilling and</col> <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Trick or treating</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- These can be used to vote in the <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Horseclan Competition</col><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">.</col><br><col=", int0))}${inttostring(PUSH_CONSTANT_INT[16](">- New rewards available weekly from the <col=", int1))}${inttostring(PUSH_CONSTANT_INT[16](">Horseclan Ceremony</col> <col=", int0))}>on Sundays.</col>`, comp(1289, 79));
    script20863();
    script19247();
    var int4 = 34367;
    var int5 = varbitplayer_56136;
    if (((int5 == 0) || (script18522(515) == 0))) {
        int5 = (RANDOM(5) + 1);
    };
    switch (int5) {
        case 1: {
            int4 = 34367;
            break;
        }
        case 2: {
            int4 = 34371;
            break;
        }
        case 3: {
            int4 = 34368;
            break;
        }
        case 4: {
            int4 = 34370;
            break;
        }
        case 5: {
            int4 = 34369;
            break;
        }
    };
    IF_SETGRAPHIC(int4, comp(1289, 34));  // halloween24:progress_overview_title
    script19239();
    script19241();
    script19243();
    script19245();
    return;
}