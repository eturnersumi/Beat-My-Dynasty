const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema({
  team: {
    type: String
  },
  statistics: [
    {
      points: {
        type: Number
      },
      assists: {
        type: Number
      },
      steals: {
        type: Number
      },
      fgPercentage: {
        type: Number
      },
      threePtPercentage: {
        type: Number
      },
      ftPercentage: {
        type: Number
      },
      blocks: {
        type: Number
      },
      turnovers: {
        type: Number
      },
      rebounds: {
        type: Number
      },
      offenseRating: {
        type: Number
      },
      defenseRating: {
        type: Number,
      },
      opponentPoints: {
        type: Number
      },
      opponentTurnoversPG: {
        type: Number
      }
    },
  ],
  players: [
  {
    PG: {
      type: String
    },
    SG: {
      type: String
    },
    SF: {
      type: String
    },
    PF: {
      type: String
    },
    C: {
      type: String
    }
  }
]
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;