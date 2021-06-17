import React from 'react';
import { GrudgeContext } from './GrudgeContext';

const Grudge = React.memo(({ grudge }) => {
    const { toggleForgiveness } = React.useContext(GrudgeContext);
    const forgive = () => toggleForgiveness(grudge.id);
    

    return (
        <article className="Grudge">
            <h3>{grudge.person}</h3>
            <p>{grudge.reason}</p>
            <div className="Grudge-controls">
                
                    <input type="checkbox" id="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
                <label className="Grudge-forgiven">
          Forgiven
        </label>
            </div>
        </article>
    );
});

export default Grudge;