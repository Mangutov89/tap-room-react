import React from 'react';
import Tap from './Tap';
import availableBeers from '../modelData/BeerList'

function TapList(){
  return (
    <div>
      {availableBeers.map((beer, index) =>
        <Tap name = {beer.name}
          brewery = {beer.brewery}
          alcoholPercent = {beer.alcoholPercent}
          region = {beer.region}
          key = {index}/>
      )}
    </div>
  );
}

export default TapList;
