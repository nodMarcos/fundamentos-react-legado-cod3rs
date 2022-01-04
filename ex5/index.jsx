import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';


ReactDOM.render(
<div>
    <Family lastName='Silva'>
        <Member name='Alberto'/>
        <Member name='Alberto'/>
    </Family>
</div>, document.getElementById('root'));

