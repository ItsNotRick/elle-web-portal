import React from 'react'
import { Table } from 'reactstrap';
import Card from './Card';
import '../../stylesheets/style.css';

const CardList = (props) => {
	    return (
        <Table hover className="tableList">
          <thead>
            <tr>
              <th style={{width: '32%'}}>English</th>
              <th style={{width: '32%'}}>Translated</th>
              <th style={{width: '12%'}}>Picture</th>
              <th style={{width: '12%'}}>Audio</th>
							<th style={{width: '12%'}}>ID</th>
            </tr>
          </thead>
          <tbody>
            {props.cards.map((card) => {
              return (
                <Card
                  key={card.cardID}
                  card={card}/>
              )
            })}
          </tbody>
        </Table>
	    )
}

export default CardList
