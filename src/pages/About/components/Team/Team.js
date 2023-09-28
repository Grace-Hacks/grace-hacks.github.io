import React from 'react';
import './Team.scss';
import Priya from "../../../../assets/Team/Priya.png";
import Sabrina from "../../../../assets/Team/Sabrina.jpeg";
import Thanh from "../../../../assets/Team/Thanh.jpeg";
import Alison from "../../../../assets/Team/Alison.jpeg";
import Amber from "../../../../assets/Team/Amber.jpeg";
import Ariam from "../../../../assets/Team/Ariam.jpeg";
import Audrey from "../../../../assets/Team/Audrey.jpeg";
import Charitha from "../../../../assets/Team/Charitha.jpeg";

import Dishita from "../../../../assets/Team/Dishita.jpg";
import Kalea from "../../../../assets/Team/Kalea.jpeg";
import Nitya from "../../../..//assets/Team/Nitya.jpeg";

import Pragna from "../../../../assets/Team/Pragna.jpeg";
import Rebecca from "../../../../assets/Team/Rebecca.png";
import Shreya from "../../../../assets/Team/Shreya.jpeg";
import Sneha from "../../../../assets/Team/Sneha.png";
import Wing from "../../../../assets/Team/Wing.jpeg";

import TBD from "../../../../assets/Team/TBD.png";

const teams = [
  {
    'teamName': 'Executive',
    'members': [
      {
        'name': 'Sabrina Fogel',
        'title': 'Executive Lead',
        'picture': Sabrina,
      },
      {
        'name': 'Kalea Cesaire',
        'title': 'Executive Intern',
        'picture': Kalea,
      },

    ]
  },
  {
    'teamName': 'Logistics',
    'members': [
      {
        'name': 'Nitya Jain',
        'title': 'Logistics Team Lead',
        'picture': Nitya,
      },
      {
        'name': 'Hersh Kalsi',
        'title': 'Logistics Team Member',
        'picture': TBD,
      },
      {
        'name': 'Amber Yuan',
        'title': 'Logistics Team Member',
        'picture': Amber,
      },

    ]
  },
  {
    'teamName': 'Tech',
    'members': [
      {
        'name': 'Audrey Ostrom',
        'title': 'Tech Team Lead',
        'picture': Audrey,
      },
      {
        'name': 'Dishita Jhawar',
        'title': 'Tech Team Member',
        'picture': Dishita,
      },
      {
        'name': 'Rebecca Zhao',
        'title': 'Tech Team Member',
        'picture': Rebecca,
      },
      {
        'name': 'Thanh To',
        'title': 'Tech Team Member',
        'picture': Thanh,
      },

    ]
  },
  {
    'teamName': 'Public Relations',
    'members': [
      {
        'name': 'Ariam Asmelash',
        'title': 'PR Team Member / Representative',
        'picture': Ariam,
      },
      {
        'name': 'Wing Koon',
        'title': 'PR Team Member',
        'picture': Wing,
      },
      {
        'name': 'Joyce Cha',
        'title': 'PR Team Member',
        'picture': TBD,
      },
    ]
  },
  {
    'teamName': 'Sponsorship',
    'members': [
      {
        'name': 'Charitha Gangi',
        'title': 'Sponsorship Team Lead',
        'picture': Charitha,
      },
      {
        'name': 'Carmen Padilla',
        'title': 'Sponsorship Team Member',
        'picture': TBD,
      },
      {
        'name': 'Alison Sun',
        'title': 'Sponsorship Team Member',
        'picture': Alison,
      },
      {
        'name': 'Pragna Chennuri',
        'title': 'Sponsorship Team Member',
        'picture': Pragna,
      },
    ]
  },
  {
    'teamName': 'Design',
    'members': [
      {
        'name': 'Priya Charagondla',
        'title': 'Sponsorship Team Lead',
        'picture': Priya,
      },
      {
        'name': 'Shreya Hiremath',
        'title': 'Design Team Member',
        'picture': Shreya,
      },
      {
        'name': 'Sneha Yalavarti',
        'title': 'Design Team Member',
        'picture': Sneha,
      },
    ]
  }
]

function Team() {
  return (
    <div className="team-container" id="team">
    <div className='title'>our team</div>
    <div className="teams-columns">
      {teams.map((team) =>
        <div className="team-section">
          <div className='team-title'>{team.teamName}</div>
          {team.members.map((member) =>
            <div class='wrapper'>
              <img className="pfp" src={member.picture}/>
              <div className="team-member-name">{member.name}</div>
              <div className="role-description">{member.title}</div>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default Team;