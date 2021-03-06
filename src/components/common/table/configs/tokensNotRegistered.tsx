const headerCells = [
  {
    id: 'id',
    isNumeric: true,
    disablePadding: false,
    label: 'id',
  },
  {
    id: 'name',
    isNumeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    isNumeric: false,
    disablePadding: true,
    label: 'E-mail',
  },
  {
    id: 'notificationToken',
    isNumeric: false,
    disablePadding: true,
    label: 'Token',
  },
];

const tokensNotRegistered = {
  fields: ['id', 'name', 'email', 'notificationToken'],
  selectedVerifier: 'notificationToken',
  initiallyOrderedBy: 'name',
  headerCells,
};

export default tokensNotRegistered;
