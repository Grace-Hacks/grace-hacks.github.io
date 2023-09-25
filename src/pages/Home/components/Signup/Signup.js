import React from 'react';
import './Signup.scss';
import Deer1 from '../../../../assets/Deer1.svg';
import Deer2 from '../../../../assets/Deer2.svg';
import Squiggle from '../../../../assets/Squiggle.svg';
import Tree from '../../../../assets/Tree.svg';
/**
 * Unused Assets
  import Calendar from '../../assets/Calendar.svg'
  import Location from '../../assets/Location.svg'
  import LotusMobile from '../../assets/Lotus-Mobile.svg'
  import Arrow from '../../assets/Header-Arrow.svg'
  import Button from '@material-ui/core/Button';
  import Water from '../../assets/water.png'
  import Bg from '../../assets/up_lotus.png'
 */


function Signup() {

  return (
    <div className="signup-container">
        <div className="sign-up">
          <div className='sign-up-title'>sign up</div>
          <div className='buttons'>
            <button>MENTOR</button>
            <button>PARTICIPANT</button>
          </div>
        </div>
    </div>
  );
}

export default Signup;