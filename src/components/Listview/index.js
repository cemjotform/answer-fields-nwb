import React from 'react';
import PropTypes from 'prop-types';

import View from '../View';
import Text from '../Text';
import Imageline from '../Imageline';

import Table from './Table';
import Header from './Header';
import Row from './Row';
import Data from './Data';

const ListView = ({
  tableProps,
  columns,
  columnProps,
  rows,
  rowProps,
  rowHeaderProps,
  answers,
  answerProps,
  ...props
}) => {
  return (
    <View {...props}>
      <Table {...tableProps}>
        <Row {...rowProps}>
          {
            columns.map(column => <Header {...columnProps}><Text>{column}</Text></Header>)
          }
        </Row>
        {
          rows.map((row, rowIndex) => {
            if (rowIndex === 0) {
              return null;
            }
            return (
              <Row {...rowProps}>
                <Header {...rowHeaderProps}>{row}</Header>
                {
                  columns.map((column, columnIndex) => {
                    if (columnIndex === 0) {
                      return null;
                    }
                    if (answers[row] === column) {
                      return (
                        <Data {...answerProps}>
                          <Imageline value='https://submit.jotformpro.com/images/tick.png' />
                        </Data>
                      );
                    }
                    return (
                      <Data {...answerProps} />
                    );
                  })
                }
              </Row>
            );
          })
        }
      </Table>
    </View>
  );
};

ListView.propTypes = {
  tableProps: PropTypes.shape({}),
  columns: PropTypes.arrayOf(PropTypes.string),
  columnProps: PropTypes.shape({}),
  rows: PropTypes.arrayOf(PropTypes.string),
  rowProps: PropTypes.shape({}),
  rowHeaderProps: PropTypes.shape({}),
  answers: PropTypes.arrayOf(PropTypes.string),
  answerProps: PropTypes.shape({})
};

ListView.defaultProps = {
  tableProps: {
    summary: '',
    cellPadding: '4',
    cellSpacing: '0',
    border: '0',
    style: {
      fontSize: '10px',
      borderCollapse: 'collapse'
    }
  },
  columns: ['', 'Not Satisfied', 'Somewhat Satisfied', 'Satisfied', 'Very Satisfied'],
  columnProps: {
    style: {
      background: '#eee',
      border: '1px solid #ccc',
      textAlign: 'center',
      width: '25%'
    }
  },
  rows: ['', 'Service Quality', 'Cleanliness', 'Responsiveness', 'Friendliness'],
  rowProps: {},
  rowHeaderProps: {
    style: {
      background: '#eee',
      border: '1px solid #ccc',
      textAlign: 'left'
    },
    nowrap: 'nowrap'
  },
  answers: {
    'Service Quality': 'Not Satisfied',
    Cleanliness: 'Not Satisfied',
    Responsiveness: '',
    Friendliness: ''
  },
  answerProps: {
    align: 'center',
    style: {
      background: '#ffffff',
      border: '1px solid #ccc'
    }
  }
};

export default ListView;
