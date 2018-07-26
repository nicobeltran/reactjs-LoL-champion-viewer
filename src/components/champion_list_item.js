import React from 'react';

const ChampionListItem = ({champInfo, onChampionClick}) => {
    return (
        <div className="text-center col-2">
            <div onClick={() => onChampionClick(champInfo)} >
            <img className="champion-square" src={`http://ddragon.leagueoflegends.com/cdn/8.14.1/img/champion/${champInfo.image.full}`}
            alt={champInfo.name + " picture"} />
            <p>{champInfo.name}</p>
            </div>
        </div>
    )
}

export default ChampionListItem;