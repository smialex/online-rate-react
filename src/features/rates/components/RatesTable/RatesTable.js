import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import './RatesTable.scss';

export const RatesTable = ({ data }) => {

  const hasData = data && data.length > 0;

  return (
    <table className='rates-table'>
      <thead>
        <tr>
          <th>Время</th>
          <th>USD</th>
          <th>EUR</th>
        </tr>
      </thead>
      <tbody>
        {hasData && data.map(({ time, usd, eur }) => (
          <tr key={time}>
            <td>{format(time, 'HH:mm:ss')}</td>
            <td>{Number(usd).toFixed(3)}</td>
            <td>{Number(eur).toFixed(3)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

RatesTable.propTypes = {
  data: PropTypes.array,
};