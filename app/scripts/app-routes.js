
export const NAVIGATION = [
  {
    path: '/',
    page: 'home',
  }
];

export const ROUTES = NAVIGATION.reduce((res, value) => {
  if (!res[value.page]) {
    res[value.page] = value.path;
  }
  return res;
}, {});


