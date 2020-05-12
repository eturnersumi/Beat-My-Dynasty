let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/team", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const teamSeed = [
  {
    team: "1995-96 Chicago Bulls",
    statistics: [
      {
        points: 105,
        assists: 25,
        steals: 9,
        fgPercentage: 48,
        threePtPercentage: 40,
        ftPercentage: 75,
        blocks: 4,
        turnovers: 14, 
        rebounds: 45,
        offenseRating: 115,
        defenseRating: 102,
        opponentPoints: 93,
        opponentTurnoversPG: 17
      }
    ],
    players: [
      {
        PG: "Ron Harper",
        SG: "Michael Jordan",
        SF: "Scottie Pippen",
        PF: "Dennis Rodman",
        C: "Luc Longley"
      }
    ]
  },
  {
    team: "2017-18 Golden State Warriors",
    statistics: [
      {
        points: 114,
        assists: 29,
        steals: 8,
        fgPercentage: 50,
        threePtPercentage: 39,
        ftPercentage: 82,
        blocks: 8,
        turnovers: 16,
        rebounds: 44,
        offenseRating: 114,
        defenseRating: 108,
        opponentPoints: 108,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Stephen Curry",
        SG: "Klay Thompson",
        SF: "Kevin Durant",
        PF: "Draymond Green",
        C: "Zaza Pachulia"
      }
    ]
  },
  {
    team: "2018-19 Toronto Raptors",
    statistics: [
      {
        points: 114,
        assists: 25,
        steals: 8,
        fgPercentage: 47,
        threePtPercentage: 37,
        ftPercentage: 80,
        blocks: 5,
        turnovers: 14,
        rebounds: 45,
        offenseRating: 113,
        defenseRating: 107,
        opponentPoints: 108,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Kyle Lowry",
        SG: "Danny Green",
        SF: "Kawhi Leonard",
        PF: "Pascal Siakam",
        C: "Marc Gasol"
      }
    ]
  },
  {
    team: "2013-14 San Antonio Spurs",
    statistics: [
      {
        points: 105,
        assists: 25,
        steals: 7,
        fgPercentage: 49,
        threePtPercentage: 40,
        ftPercentage: 79,
        blocks: 5,
        turnovers: 14,
        rebounds: 43,
        offenseRating: 111,
        defenseRating: 102,
        opponentPoints: 98,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Tony Parker",
        SG: "Danny Green",
        SF: "Kawhi Leonard",
        PF: "Tiago Splitter",
        C: "Tim Duncan"
      }
    ]
  },
  {
    team: "1989-90 Detroit Pistons",
    statistics: [
      {
        points: 104,
        assists: 24,
        steals: 6,
        fgPercentage: 48,
        threePtPercentage: 32,
        ftPercentage: 76,
        blocks: 5,
        turnovers: 15,
        rebounds: 44,
        offenseRating: 110,
        defenseRating: 104,
        opponentPoints: 98,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Isiah Thomas",
        SG: "Joe Dumars",
        SF: "Dennis Rodman",
        PF: "James Edwards",
        C: "Bill Laimbeer"
      }
    ]
  },
  {
    team: "1991-92 Chicago Bulls",
    statistics: [
      {
        points: 110,
        assists: 28,
        steals: 8,
        fgPercentage: 51,
        threePtPercentage: 30,
        ftPercentage: 74,
        blocks: 6,
        turnovers: 13,
        rebounds: 44,
        offenseRating: 116,
        defenseRating: 105,
        opponentPoints: 100,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Bill Cartwright",
        SG: "Horace Grant",
        SF: "Michael Jordan",
        PF: "John Paxson",
        C: "Scottie Pippen"
      }
    ]
  },
  {
    team: "2011-12 Miami Heat",
    statistics: [
      {
        points: 99,
        assists: 20,
        steals: 9,
        fgPercentage: 47,
        threePtPercentage: 36,
        ftPercentage: 78,
        blocks: 5,
        turnovers: 15,
        rebounds: 42,
        offenseRating: 107,
        defenseRating: 100,
        opponentPoints: 93,
        opponentTurnoversPG: 17 
      }
    ],
    players: [
      {
        PG: "Mario Chalmers",
        SG: "Dwyane Wade",
        SF: "LeBron James",
        PF: "Udonis Haslem",
        C: "Chris Bosh"
      }
    ]
  },
  {
    team: "2015-16 Cleveland Cavaliers",
    statistics: [
      {
        points: 104,
        assists: 23,
        steals: 7,
        fgPercentage: 46,
        threePtPercentage: 36,
        ftPercentage: 75,
        blocks: 4,
        turnovers: 14,
        rebounds: 45,
        offenseRating: 111,
        defenseRating: 105,
        opponentPoints: 98,
        opponentTurnoversPG: 13
      }
    ],
    players: [
      {
        PG: "Kyrie Irving",
        SG: "J.R. Smith",
        SF: "LeBron James",
        PF: "Kevin Love",
        C: "Tristan Thompson"
      }
    ]
  },
  {
    team: "2014-15 Golden State Warriors",
    statistics: [
      {
        points: 110,
        assists: 27,
        steals: 9,
        fgPercentage: 48,
        threePtPercentage: 40,
        ftPercentage: 77,
        blocks: 6,
        turnovers: 15,
        rebounds: 45,
        offenseRating: 112,
        defenseRating: 101,
        opponentPoints: 100,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Stephen Curry",
        SG: "Klay Thompson",
        SF: "Harrison Barnes",
        PF: "Draymond Green",
        C: "Andrew Bogut"
      }
    ]
  },
  {
    team: "2008-09 Los Angeles Lakers",
    statistics: [
      {
        points: 107,
        assists: 23,
        steals: 9,
        fgPercentage: 47,
        threePtPercentage: 36,
        ftPercentage: 77,
        blocks: 5,
        turnovers: 14,
        rebounds: 44,
        offenseRating: 113,
        defenseRating: 105,
        opponentPoints: 99,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Derek Fisher",
        SG: "Kobe Bryant",
        SF: "Trevor Ariza",
        PF: "Andrew Bynum",
        C: "Pau Gasol"
      }
    ]
  },
  {
    team: "2001-02 Los Angeles Lakers",
    statistics: [
      {
        points: 101,
        assists: 23,
        steals: 8,
        fgPercentage: 46,
        threePtPercentage: 35,
        ftPercentage: 70,
        blocks: 6,
        turnovers: 13,
        rebounds: 44,
        offenseRating: 109,
        defenseRating: 102,
        opponentPoints: 94,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Derek Fisher",
        SG: "Kobe Bryant",
        SF: "Rick Fox",
        PF: "Robert Horry",
        C: "Shaquille O'Neal"
      }
    ]
  },
  {
    team: "2007-08 Boston Celtics",
    statistics: [
      {
        points: 101,
        assists: 23,
        steals: 9,
        fgPercentage: 48,
        threePtPercentage: 38,
        ftPercentage: 77,
        blocks: 5,
        turnovers: 15,
        rebounds: 42,
        offenseRating: 110,
        defenseRating: 99,
        opponentPoints: 90,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Rajon Rondo",
        SG: "Ray Allen",
        SF: "Paul Pierce",
        PF: "Kevin Garnett",
        C: "Kendrick Perkins"
      }
    ]
  },
  {
    team: "1998-99 San Antonio Spurs",
    statistics: [
      {
        points: 93,
        assists: 22,
        steals: 8,
        fgPercentage: 46,
        threePtPercentage: 33,
        ftPercentage: 70,
        blocks: 7,
        turnovers: 15,
        rebounds: 44,
        offenseRating: 104,
        defenseRating: 95,
        opponentPoints: 85,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Avery Johnson",
        SG: "Mario Elie",
        SF: "Sean Elliott",
        PF: "Tim Duncan",
        C: "David Robinson"
      }
      
    ]
  },
  {
    team: "2000-01 Los Angeles Lakers",
    statistics: [
      {
        points: 101,
        assists: 23,
        steals: 7,
        fgPercentage: 47,
        threePtPercentage: 34,
        ftPercentage: 68,
        blocks: 6,
        turnovers: 14,
        rebounds: 45,
        offenseRating: 108,
        defenseRating: 105,
        opponentPoints: 97,
        opponentTurnoversPG: 13
      }
    ],
    players: [
      {
        PG: "Derek Fisher",
        SG: "Kobe Bryant",
        SF: "Rick Fox",
        PF: "Horace Grant",
        C: "Shaquile O'Neal"
      }
    ]
  },
  {
    team: "2016-17 Golden State Warriors",
    statistics: [
      {
        points: 116,
        assists: 30,
        steals: 10,
        fgPercentage: 50,
        threePtPercentage: 39,
        ftPercentage: 79,
        blocks: 7,
        turnovers: 15,
        rebounds: 44,
        offenseRating: 116,
        defenseRating: 104,
        opponentPoints: 104,
        opponentTurnoversPG: 16 
      }
    ],
    players: [
      {
        PG: "Stephen Curry",
        SG: "Klay Thompson",
        SF: "Kevin Durant",
        PF: "Draymond Green",
        C: "Zaza Pachulia"
      }
    ]
  },
  {
    team: "1996-97 Chicago Bulls",
    statistics: [
      {
        points: 103,
        assists: 26,
        steals: 9,
        fgPercentage: 47,
        threePtPercentage: 37,
        ftPercentage: 75,
        blocks: 4,
        turnovers: 14,
        rebounds: 45,
        offenseRating: 114,
        defenseRating: 102,
        opponentPoints: 92,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Ron Harper",
        SG: "Michael Jordan",
        SF: "Scottie Pippen",
        PF: "Dennis Rodman",
        C: "Luc Longley"
      }
    ]
  },
  {
    team: "1999-00 Los Angeles Lakers",
    statistics: [
      {
        points: 101,
        assists: 23,
        steals: 8,
        fgPercentage: 46,
        threePtPercentage: 33,
        ftPercentage: 70,
        blocks: 7,
        turnovers: 14,
        rebounds: 47,
        offenseRating: 107,
        defenseRating: 98,
        opponentPoints: 92,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Ron Harper",
        SG: "Kobe Bryant",
        SF: "Glen Rice",
        PF: "A.C. Green",
        C: "Shaquile O'Neal"
      }
    ]
  },
  {
    team: "2006-07 Dallas Mavericks",
    statistics: [
      {
        points: 100,
        assists: 20,
        steals: 7,
        fgPercentage: 47,
        threePtPercentage: 38,
        ftPercentage: 81,
        blocks: 5,
        turnovers: 14,
        rebounds: 42,
        offenseRating: 111,
        defenseRating: 103,
        opponentPoints: 93,
        opponentTurnoversPG:  15
      }
    ],
    players: [
      {
        PG: "Devin Harris",
        SG: "Jason Terry",
        SF: "Josh Howard",
        PF: "Dirk Nowitzki",
        C: "DeSagana Diop"
      }
    ]
  },
  {
    team: "2015-16 San Antonio Spurs",
    statistics: [
      {
        points: 104,
        assists: 25,
        steals: 8,
        fgPercentage: 48,
        threePtPercentage: 38,
        ftPercentage: 80,
        blocks: 6,
        turnovers: 13,
        rebounds: 44,
        offenseRating: 110,
        defenseRating: 99,
        opponentPoints: 93,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Tony Parker",
        SG: "Danny Green",
        SF: "Kawhi Leonard",
        PF: "LaMarcus Aldridge",
        C: "Tim Duncan"
      }
    ]
  },
  {
    team: "2008-09 Cleveland Cavaliers",
    statistics: [
      {
        points: 100,
        assists: 20,
        steals: 7,
        fgPercentage: 47,
        threePtPercentage: 39,
        ftPercentage: 76,
        blocks: 5,
        turnovers: 13,
        rebounds: 42,
        offenseRating: 112,
        defenseRating: 102,
        opponentPoints: 91,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Mo Williams",
        SG: "Delonte West",
        SF: "LeBron James",
        PF: "Anderson Varejao",
        C: "Zydrunas Ilgauskas"
      }
    ]
  },
  {
    team: "2012-13 Miami Heat",
    statistics: [
      {
        points: 103,
        assists: 23,
        steals: 9,
        fgPercentage: 50,
        threePtPercentage: 40,
        ftPercentage: 75,
        blocks: 5,
        turnovers: 14,
        rebounds: 39,
        offenseRating: 112,
        defenseRating: 104,
        opponentPoints: 95,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Mario Chalmers",
        SG: "Dwyane Wade",
        SF: "LeBron James",
        PF: "Udonis Haslem",
        C: "Chris Bosh"
      }
    ]
  },
  {
    team: "2017-18 Houston Rockets",
    statistics: [
      {
        points: 112,
        assists: 22,
        steals: 9,
        fgPercentage: 46,
        threePtPercentage: 36,
        ftPercentage: 78,
        blocks: 5,
        turnovers: 14,
        rebounds: 44,
        offenseRating: 115,
        defenseRating: 106,
        opponentPoints: 104,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Chris Paul",
        SG: "James Harden",
        SF: "Trevor Ariza",
        PF: "P.J. Tucker",
        C: "Clint Capela"
      }
    ]
  },
  {
    team: "1995-96 Seattle Supersonics",
    statistics: [
      {
        points: 105,
        assists: 24,
        steals: 11,
        fgPercentage: 48,
        threePtPercentage: 36,
        ftPercentage: 76,
        blocks: 5,
        turnovers: 18,
        rebounds: 42,
        offenseRating: 110,
        defenseRating: 102,
        opponentPoints: 97,
        opponentTurnoversPG: 19 
      }
    ],
    players: [
      {
        PG: "Gary Payton",
        SG: "Hersey Hawkins",
        SF: "Detlef Schrempf",
        PF: "Shawn Kemp",
        C: "Ervin Johnson"
      }
    ]
  },
  {
    team: "2011-12 Chicago Bulls",
    statistics: [
      {
        points: 96,
        assists: 23,
        steals: 7,
        fgPercentage: 45,
        threePtPercentage: 38,
        ftPercentage: 72,
        blocks: 6,
        turnovers: 14,
        rebounds: 47,
        offenseRating: 107,
        defenseRating: 98,
        opponentPoints: 88,
        opponentTurnoversPG: 13
      }
    ],
    players: [
      {
        PG: "Derrick Rose",
        SG: "Ronnie Brewer",
        SF: "Luol Deng",
        PF: "Carlos Boozer",
        C: "Joakim Noah"
      }
    ]
  },
  {
    team: "1996-97 Utah Jazz",
    statistics: [
      {
        points: 103,
        assists: 27,
        steals: 9,
        fgPercentage: 50,
        threePtPercentage: 37,
        ftPercentage: 77,
        blocks: 5,
        turnovers: 15,
        rebounds: 40,
        offenseRating: 114,
        defenseRating: 104,
        opponentPoints: 94,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "John Stockton",
        SG: "Jeff Hornacek",
        SF: "Byron Russell",
        PF: "Karl Malone",
        C: "Greg Ostertag"
      }
    ]
  },
  {
    team: "2005-06 Detroit Pistons",
    statistics: [
      {
        points: 97,
        assists: 24,
        steals: 7,
        fgPercentage: 46,
        threePtPercentage: 38,
        ftPercentage: 73,
        blocks: 6,
        turnovers: 11,
        rebounds: 41,
        offenseRating: 111,
        defenseRating: 103,
        opponentPoints: 90,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Chauncey Billups",
        SG: "Richard Hamilton",
        SF: "Tayshaun Prince",
        PF: "Rasheed Wallace",
        C: "Ben Wallace"
      }
    ]
  },
  {
    team: "1990-91 Portland Trail Blazers",
    statistics: [
      {
        points: 115,
        assists: 28,
        steals: 9,
        fgPercentage: 49,
        threePtPercentage: 38,
        ftPercentage: 75,
        blocks: 5,
        turnovers: 16,
        rebounds: 46,
        offenseRating: 113,
        defenseRating: 104,
        opponentPoints: 106,
        opponentTurnoversPG: 17
      }
    ],
    players: [
      {
        PG: "Terry Porter",
        SG: "Clyde Drexler",
        SF: "Jerome Kersey",
        PF: "Buck Williams",
        C: "Kevin Duckworth"
      }
    ]
  },
  {
    team: "1993-94 Seattle Supersonics",
    statistics: [
      {
        points: 106,
        assists: 26,
        steals: 13,
        fgPercentage: 48,
        threePtPercentage: 34,
        ftPercentage: 75,
        blocks: 5,
        turnovers: 15,
        rebounds: 41,
        offenseRating: 111,
        defenseRating: 102,
        opponentPoints: 97,
        opponentTurnoversPG: 20
      }
    ],
    players: [
      {
        PG: "Gary Payton",
        SG: "Kendall Gill",
        SF: "Detlef Schrempf",
        PF: "Shawn Kemp",
        C: "Michael Cage"
      }
    ]
  },
  {
    team: "2005-06 San Antonio Spurs",
    statistics: [
      {
        points: 96,
        assists: 21,
        steals: 7,
        fgPercentage: 47,
        threePtPercentage: 39,
        ftPercentage: 70,
        blocks: 6,
        turnovers: 14,
        rebounds: 42,
        offenseRating: 107,
        defenseRating: 100,
        opponentPoints: 89,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Tony Parker",
        SG: "Manu Ginobili",
        SF: "Bruce Bowen",
        PF: "Robert Horry",
        C: "Tim Duncan"
      }
    ]
  },
  {
    team: "2011-12 San Antonio Spurs",
    statistics: [
      {
        points: 104,
        assists: 23,
        steals: 7,
        fgPercentage: 48,
        threePtPercentage: 39,
        ftPercentage: 75,
        blocks: 4,
        turnovers: 14,
        rebounds: 43,
        offenseRating: 111,
        defenseRating: 103,
        opponentPoints: 97,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Tony Parker",
        SG: "Danny Green",
        SF: "Kawhi Leonard",
        PF: "Boris Diaw",
        C: "Tim Duncan"
      }
    ]
  },
  {
    team: "1992-93 Phoenix Suns",
    statistics: [
      {
        points: 113,
        assists: 26,
        steals: 9,
        fgPercentage: 49,
        threePtPercentage: 36,
        ftPercentage: 75,
        blocks: 6,
        turnovers: 17,
        rebounds: 45,
        offenseRating: 113,
        defenseRating: 107,
        opponentPoints: 106.7,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Kevin Johnson",
        SG: "Dan Majerle",
        SF: "Richard Dumas",
        PF: "Charles Barkley",
        C: "Mark West"
      }
    ]
  },
  {
    team: "1994-95 San Antonio Spurs",
    statistics: [
      {
        points: 107,
        assists: 23,
        steals: 8,
        fgPercentage: 48,
        threePtPercentage: 38,
        ftPercentage: 74,
        blocks: 6,
        turnovers: 15,
        rebounds: 45,
        offenseRating: 112,
        defenseRating: 105,
        opponentPoints: 101,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Avery Johnson",
        SG: "Vinny Del Negro",
        SF: "Sean Elliott",
        PF: "Dennis Rodman",
        C: "David Robinson"
      }
    ]
  },
  {
    team: "1997-98 Chicago Bulls",
    statistics: [
      {
        points: 97,
        assists: 24,
        steals: 9,
        fgPercentage: 45,
        threePtPercentage: 32,
        ftPercentage: 74,
        blocks: 4,
        turnovers: 14,
        rebounds: 45,
        offenseRating: 108,
        defenseRating: 100,
        opponentPoints: 90,
        opponentTurnoversPG: 16
      }
    ],
    players: [
      {
        PG: "Ron Harper",
        SG: "Michael Jordan",
        SF: "Scottie Pippen",
        PF: "Toni Kukoc",
        C: "Luc Longley"
      }
    ]
  },
  {
    team: "1997-98 Utah Jazz",
    statistics: [
      {
        points: 101,
        assists: 25,
        steals: 8,
        fgPercentage: 49,
        threePtPercentage: 37,
        ftPercentage: 77,
        blocks: 5,
        turnovers: 15,
        rebounds: 41,
        offenseRating: 113,
        defenseRating: 105,
        opponentPoints: 94,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "John Stockton",
        SG: "Jeff Hornacek",
        SF: "Byron Russell",
        PF: "Karl Malone",
        C: "Greg Foster"
      }
    ]
  },
  {
    team: "2004-05 Phoenix Suns",
    statistics: [
      {
        points: 110,
        assists: 24,
        steals: 7,
        fgPercentage: 48,
        threePtPercentage: 39,
        ftPercentage: 75,
        blocks: 6,
        turnovers: 14,
        rebounds: 44,
        offenseRating: 115,
        defenseRating: 107,
        opponentPoints: 103,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Steve Nash",
        SG: "Quentin Richardson",
        SF: "Joe Johnson",
        PF: "Shawn Marion",
        C: "Amar'e Stoudemire"
      }
    ]
  },
  {
    team: "2008-09 Boston Celtics",
    statistics: [
      {
        points: 101,
        assists: 23,
        steals: 8,
        fgPercentage: 49,
        threePtPercentage: 40,
        ftPercentage: 77,
        blocks: 5,
        turnovers: 16,
        rebounds: 42,
        offenseRating: 111,
        defenseRating: 102,
        opponentPoints: 93,
        opponentTurnoversPG: 15
      }
    ],
    players: [
      {
        PG: "Rajon Rondo",
        SG: "Ray Allen",
        SF: "Paul Pierce",
        PF: "Kevin Garnett",
        C: "Kendrick Perkins"
      }
    ]
  },
  {
    team: "2010-11 Chicago Bulls",
    statistics: [
      {
        points: 99,
        assists: 22,
        steals: 7,
        fgPercentage: 46,
        threePtPercentage: 36,
        ftPercentage: 74,
        blocks: 6,
        turnovers: 14,
        rebounds: 44,
        offenseRating: 108,
        defenseRating: 100,
        opponentPoints: 91,
        opponentTurnoversPG: 14
      }
    ],
    players: [
      {
        PG: "Derrick Rose",
        SG: "Keith Bogans",
        SF: "Luol Deng",
        PF: "Carlos Boozer",
        C: "Joakim Noah"
      }
    ]
  }
];

db.Team.deleteMany({})
  .then(() => db.Team.collection.insertMany(teamSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
