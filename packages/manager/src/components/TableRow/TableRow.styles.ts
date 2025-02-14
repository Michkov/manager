import { omittedProps } from '@linode/ui';
import { styled } from '@mui/material/styles';
import { default as _TableRow } from '@mui/material/TableRow';

import type { TableRowProps } from './TableRow';

export const StyledTableRow = styled(_TableRow, {
  label: 'StyledTableRow',
  shouldForwardProp: omittedProps(['forceIndex']),
})<TableRowProps>(({ theme, ...props }) => ({
  [theme.breakpoints.up('md')]: {
    boxShadow: `inset 3px 0 0 transparent`,
  },
  transition: theme.transitions.create(['box-shadow']),
  ...(props.forceIndex && {
    '& td': {
      transition: theme.transitions.create(['color']),
    },
    '&:before': {
      borderLeft: `1px solid transparent`,
      paddingLeft: 4,
    },
    '&:focus': {
      backgroundColor: theme.bg.lightBlue1,
    },
    '&:hover': {
      '& td': {
        color: theme.palette.primary.light,
      },
      cursor: 'pointer',
    },
    transition: theme.transitions.create(['border-color']),
  }),
  ...(props.selected && {
    '& td': {
      '&:first-of-type': {
        borderLeft: `1px solid ${theme.borderColors.borderTable}`,
      },
      borderBottomColor: theme.borderColors.borderTable,
      borderTop: `1px solid ${theme.borderColors.borderTable}`,
      position: 'relative',
      [theme.breakpoints.down('lg')]: {
        '&:last-child': {
          borderRight: `1px solid ${theme.borderColors.borderTable}`,
        },
      },
    },

    '&.Mui-selected': {
      '&:hover': {
        backgroundColor: theme.bg.lightBlue1,
      },
      backgroundColor: theme.bg.lightBlue1,
      boxShadow: `inset 3px 0 0 ${theme.bg.lightBlue1}`,
    },
    transform: 'scale(1)',
  }),
  ...(props.highlight && {
    backgroundColor: theme.bg.lightBlue1,
  }),
  '&.disabled-row': {
    '& td:not(.hasTooltip *), & td:has(.hasTooltip):not(.MuiRadio-root)': {
      color:
        theme.palette.mode === 'dark' ? theme.color.grey6 : theme.color.grey1,
    },
  },
}));

export const StyledTableDataCell = styled('td', {
  label: 'StyledTableDataCell',
})(({ theme }) => ({
  '&:after': {
    border: 'solid',
    borderColor: 'rgba(136, 183, 213, 0)',
    borderLeftColor: theme.bg.lightBlue1,
    borderWidth: '19px',
    content: "''",
    height: 0,
    left: '100%',
    pointerEvents: 'none',
    position: 'absolute',
    top: 'calc(50% - 1px)',
    transform: 'translateY(-50%)',
    width: 0,
  },
  '&:before': {
    border: 'solid',
    borderColor: 'rgba(194, 225, 245, 0)',
    borderLeftColor: theme.palette.primary.light,
    borderWidth: '20px',
    content: "''",
    height: 0,
    left: '100%',
    pointerEvents: 'none',
    position: 'absolute',
    top: 'calc(50% - 1px)',
    transform: 'translateY(-50%)',
    width: 0,
  },
  padding: 0,
}));
