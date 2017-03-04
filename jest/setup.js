jest.mock('Linking', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});

jest.mock('NetInfo', () => {
  return {
    isConnected: {
      fetch: () => {
        return new Promise((accept, resolve) => {
          accept(true);
        });
      },
    },
  };
});

// jest.mock('UIManager', () => {
//   return {
//     createView: jest.fn(),
//     setChildren: jest.fn(),
//     manageChildren: jest.fn(),
//     updateView: jest.fn(),
//     removeSubviewsFromContainerWithID: jest.fn(),
//     replaceExistingNonRootView: jest.fn(),
//   };
// });
