import React from 'react';
import './Team.scss';
import Andrew from "../../../../assets/Team/andrew.png";
import Anusha from "../../../../assets/Team/anusha.png";
import Ariam from "../../../../assets/Team/ariam.png";
import Jonathan from "../../../../assets/Team/jonathan.png";
import Lakshmi from "../../../../assets/Team/lakshmi.png";
import Maritza from "../../../..//assets/Team/maritza.png";
import Merilyn from "../../../..//assets/Team/merilyn.png";
import Ojal from "../../../../assets/Team/ojal.png";
import Priya from "../../../..//assets/Team/priya.png";
import Rina from "../../../../assets/Team/rina.png";
import Sabrina from "../../../..//assets/Team/sabrina.png";
import Shirin from "../../../../assets/Team/shirin.png";
import Tanisha from "../../../..//assets/Team/tanisha.png";
import Thanh from "../../../..//assets/Team/thanh.png";
// import TBDe from "../../assets/Team/tbd.png";
import Wing from "../../../../assets/Team/wing.png";
import Lotus from "../../../../assets/lotus1.png";

let execTeam = {'Sabrina Fogel':['Executive Lead', Lotus], 'Kalea Cesaire':['Executive Intern', Lotus]};
let logTeam = {'Nitya Jain':['Logistics Team Lead', Lotus], 'Hersh Kalsi':['Logistics Team Member', Lotus], 'Amber Yuan':['Logistics Team Member', Lotus]};
// let techTeam = {'Sabrina Fogel':['Executive Lead', Lotus], 'Kalea Cesaire':['Executive Intern', Lotus]};
// let prTeam = {'Sabrina Fogel':['Executive Lead', Lotus], 'Kalea Cesaire':['Executive Intern', Lotus]};
// let sponsorTeam = {'Sabrina Fogel':['Executive Lead', Lotus], 'Kalea Cesaire':['Executive Intern', Lotus]};
// let designTeam = {'Sabrina Fogel':['Executive Lead', Lotus], 'Kalea Cesaire':['Executive Intern', Lotus]}

const teams = [
  {
    'teamName': 'Executive',
    'members': [
      {
        'name': 'Sabrina Fogel',
        'title': 'Executive Lead',
        'picture': Lotus,
      },
      {
        'name': 'Kalea Cesaire',
        'title': 'Executive Intern',
        'picture': Lotus,
      },

    ]
  },
  {
    'teamName': 'Logistics',
    'members': [
      {
        'name': 'Nitya Jain',
        'title': 'Logistics Team Lead',
        'picture': Lotus,
      },
      {
        'name': 'Hersh Kalsi',
        'title': 'Logistics Team Member',
        'picture': Lotus,
      },
      {
        'name': 'Amber Yuan',
        'title': 'Logistics Team Member',
        'picture': Lotus,
      },

    ]
  }
]

let members = {'Maritza Padilla':['Co-Exec Lead', 'Tech Lead'], 'Rina Munakata':['Co-Exec Lead'], 'Jonathan He':['Co-Exec Lead', 'Design Lead'], 'Lakshmi Damodaran':['Co-Exec Lead'], 
'Merilyn Kuo':['Logistics Lead'], 'Anusha Pai':['Logistics'], 'Hersh Kalsi':['Logistics'], 
'Andrew Sanchez':['Tech'], 'Thanh To':['Tech'], 'Ojal Mapuskar':['Tech'], 'Shirin Rokni':['Public Relations Lead'], 'Ariam Amelash':['Public Relations'],
'Wing Koon':['Public Relations'], 'Tanisha Katoch':['Sponsorship Lead'], 'Justin Keovongsa':['Sponsorship'], 'Priya Charagondla': ['Design'], 'Sabrina Yone': ['Design']};

let assets = [Maritza, Rina, Jonathan, Lakshmi, Merilyn, Anusha, Lotus, Andrew,
Thanh, Ojal, Shirin, Ariam, Wing, Tanisha, Lotus, Priya, Sabrina]

function Team() {
  return (
    <div className="team-container" id="team">
      {teams.map((team) =>
        <div>
          <div>{team.teamName}</div>
          {team.members.map((member) =>
            <div>
              <img className="pfp" src={member.picture}/>
              <div>{member.name}</div>
              <div>{member.title}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Team;